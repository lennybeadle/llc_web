import * as env from 'env-var';
import { HighlightOptions } from 'highlight.run';
const environmentTypes = ['development', 'staging', 'production'] as const;
type EnvironmentType = (typeof environmentTypes)[number];

export const environment = env
  .get('REACT_APP_ENVIRONMENT')
  .required()
  .asEnum<EnvironmentType>([...environmentTypes]);

const disableHighlight =
  environment === 'production' || environment === 'staging' ? false : true;

export const intercomAppId = env
  .get('REACT_APP_INTERCOM_APP_ID')
  .default('ma4rj3di')
  .asString();

export const muiDataGridLicenseKey =
  '975aa0276b8db8e7b296dc6aebc77b6fTz03MDYwOSxFPTE3MjA4NzExODEwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=';

export const highlightConfiguration: HighlightOptions = {
  environment: environment,
  disableBackgroundRecording: disableHighlight,
  disableConsoleRecording: disableHighlight,
  disableSessionRecording: disableHighlight,
  tracingOrigins: true,
  privacySetting: 'none',
  networkRecording: {
    enabled: !disableHighlight,
    recordHeadersAndBody: !disableHighlight,
    urlBlocklist: [
      // insert urls you don't want to record here
    ],
  },
};
