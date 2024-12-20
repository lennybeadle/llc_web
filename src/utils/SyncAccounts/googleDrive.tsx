import { gapi } from 'gapi-script';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export type GoogleDriveFile = {
  id: string;
  name: string;
};
export const loadGoogleApi = () => {
  gapi.load('client:auth2', initializeClient);
};

export const initializeClient = async () => {
  await gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: [
      'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
    ],
    scope:
      'https://www.googleapis.com/auth/drive.readonly ' +
      'https://www.googleapis.com/auth/userinfo.email ' +
      'https://www.googleapis.com/auth/userinfo.profile',
  });
};

export const googleDriveSync = async (): Promise<any[]> => {
  try {
    if (gapi.auth2 === undefined) {
      loadGoogleApi();
    }
    const authInstance = gapi.auth2.getAuthInstance();
    if (!authInstance) {
      throw new Error('GAPI Auth instance is not initialized.');
    }
    const isSignedIn = authInstance.isSignedIn.get();
    if (!isSignedIn) {
      console.log('User is not signed in. Attempting sign-in...');
      await authInstance.signIn();
    } else {
      console.log('User is already signed in.');
    }
    const response = await gapi.client.drive.files.list({
      pageSize: 10,
      fields: 'files(id, name)',
    });
    const files = response.result.files ?? [];
    if (files && files.length > 0) {
      console.log('Drive Files:', files);
      localStorage.setItem('googleDriveFiles', JSON.stringify(files));
    }
    return files;
  } catch (error) {
    console.error('Error fetching Google Drive files:', error);
    return [];
  }
};
