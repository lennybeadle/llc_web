import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  .MuiAutocomplete-popper .MuiAutocomplete-paper {
    background: ${theme.colors.onyxGray};
    color: ${theme.colors.white};
    .MuiCheckbox-root {
      color: #8f8f8f;
      padding: 0;
      $checked {
        color: #8f8f8f;
      }
    }
  }
  .MuiBox-root {
    ul {
      padding-right: 6px;
    }
  }
  .MuiSkeleton-root {
    background-color: ${theme.colors.skeleton} !important;
  }
  .MuiSkeleton-rectangular {
    border-radius: 8px;
  }
  .MuiSkeleton-rounded {
    border-radius: 36px;
  }
  .MuiAutocomplete-option[data-focus="true"],
  .MuiAutocomplete-option[aria-selected="true"] {
    background-color: ${theme.colors.jetGray} !important;
    border-radius: 8px;
    margin: 0 5px;
    padding: 15px 10px !important;
  }
  .intercom-1agdf8p.ej0ja420 {
    z-index: 0 !important;
  }
`;

export default GlobalStyles;
