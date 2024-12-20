import { Dropbox, files } from 'dropbox';
// import { WebClient, ConversationsListResponse } from '@slack/web-api';
// import axios, { AxiosResponse } from 'axios';

const DROPBOX_ACCESS_TOKEN = process.env.REACT_APP_DROPBOX_ACCESS_TOKEN;

export const dropBoxSync = async (): Promise<any[]> => {
  try {
    if (!DROPBOX_ACCESS_TOKEN || typeof DROPBOX_ACCESS_TOKEN !== 'string') {
      throw new Error(
        'Invalid Dropbox access token. Ensure it is defined and a string.'
      );
    }
    const dbx = new Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN });

    const response = await dbx.filesListFolder({
      path: '',
    });
    const data: files.ListFolderResult = response.result;
    const files = data.entries ?? [];
    if (files && files.length > 0) {
      console.log('DropBox Files:', files);
      localStorage.setItem('dropBoxFiles', JSON.stringify(files));
    }
    return files;
  } catch (error) {
    console.error('Error syncing Dropbox:', error);
    return [];
  }
};

// export const whatsappSync = async () => {
//   try {
//     const response: AxiosResponse = await axios.post(
//       `https://graph.facebook.com/v14.0/${PHONE_NUMBER_ID}/messages`,
//       {
//         messaging_product: 'whatsapp',
//         to: 'RECIPIENT_PHONE_NUMBER',
//         type: 'text',
//         text: { body: 'Hello from WhatsApp API!' },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     console.log('Message sent successfully:', response.data);
//   } catch (error) {
//     console.error('Error sending WhatsApp message:', error);
//   }
// };

// export const slackSync = async () => {
//   try {
//     if (!SLACK_BOT_TOKEN || typeof SLACK_BOT_TOKEN !== 'string') {
//       throw new Error(
//         'Invalid Slack access token. Ensure it is defined and a string.'
//       );
//     }
//     const slackClient = new WebClient(SLACK_BOT_TOKEN);

//     const response: ConversationsListResponse =
//       await slackClient.conversations.list();
//     console.log('Slack Channels:', response.channels);
//   } catch (error) {
//     console.error('Error syncing Slack:', error);
//   }
// };
