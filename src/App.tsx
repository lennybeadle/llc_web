// import { ApolloProvider } from '@apollo/client';
import '@fontsource/roboto/latin-400.css';
import '@fontsource/roboto/latin-500.css';
import { CssBaseline } from '@mui/material';
import { H } from 'highlight.run';
import { ErrorBoundary } from '@highlight-run/react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { ThemeProvider } from '@mui/material/styles';
import { LicenseInfo } from '@mui/x-license-pro';
import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useIdleTimer } from 'react-idle-timer';
import { BrowserRouter } from 'react-router-dom';
import { IntercomProvider } from 'react-use-intercom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import {
  intercomAppId,
  muiDataGridLicenseKey,
  highlightConfiguration,
} from './config';
import routes, { excludeRoutesToAuth, renderRoutes } from './routes';
import GlobalStyles from './styles/global';
import { llcTheme, theme } from './styles/theme';
// import client, { impersonationKey } from './utils/ApiClient';
import isPropValid from '@emotion/is-prop-valid';
import { SnackbarProvider } from 'notistack';
import { StyleSheetManager } from 'styled-components';
// import { ModalInformLogout } from './components/organisms/ModalInformLogout';

const INTERCOM_APP_ID = intercomAppId;
const helmetContext = {};
LicenseInfo.setLicenseKey(muiDataGridLicenseKey);
H.init('kgr474d6', highlightConfiguration);

function App() {
  const [openWarningModal, setOpenWarningModal] = useState<boolean>(false);
  const onIdle = () => {
    const { pathname } = window.location;
    if (excludeRoutesToAuth.some((r) => pathname.startsWith(r))) return;
    setOpenWarningModal(true);
  };
  useIdleTimer({ timeout: 1000 * 60 * 60, onIdle, debounce: 500 });
  const { search } = window.location;

  useEffect(() => {
    const params = new URLSearchParams(search);
    const user_id = params.get('impersonation');
    if (user_id === '') return sessionStorage.removeItem('impersonationKey');
    if (!user_id) return;
    const impersonation = JSON.stringify({ user_id });
    sessionStorage.setItem('impersonationKey', impersonation);
  }, [search]);

  return (
    <ErrorBoundary>
      {/* <ApolloProvider client={client}> */}
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <StyledThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={llcTheme}>
              <CssBaseline>
                <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
                  <HelmetProvider context={helmetContext}>
                    <IntercomProvider appId={INTERCOM_APP_ID}>
                      <GlobalStyles />
                      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
                      <div id="modal" />
                      {/* <ModalInformLogout
                        open={openWarningModal}
                        onClose={() => setOpenWarningModal(false)}
                      /> */}
                    </IntercomProvider>
                  </HelmetProvider>
                </SnackbarProvider>
              </CssBaseline>
            </ThemeProvider>
          </StyledEngineProvider>
        </StyledThemeProvider>
      </StyleSheetManager>
      {/* </ApolloProvider> */}
    </ErrorBoundary>
  );
}

export default App;

function shouldForwardProp(propName: string, target: any) {
  if (typeof target === 'string') {
    return isPropValid(propName);
  }
  return true;
}
