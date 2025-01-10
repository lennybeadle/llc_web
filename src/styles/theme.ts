import { createTheme } from '@mui/material';

const theme = {
  font: {
    family:
      "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    body: {
      size: '14px',
      weight: '400',
      lineHeight: '20px',
    },
    fieldHint: {
      size: '12px',
      weight: '400',
      lineHeight: 1.66,
    },
    roboto12Medium: {
      size: '12px',
      weight: 'normal',
      lineHeight: '14px',
    },
    roboto12Regular: {
      size: '12px',
      weight: '500',
      lineHeight: '14px',
    },
    fieldTitle: {
      size: '12px',
      weight: '500',
      lineHeight: 'normal',
    },
    inputs: {
      size: '14px',
      weight: '400',
      lineHeight: 'normal',
    },
    roboto14Regular: {
      size: '14px',
      weight: '400',
      lineHeight: 'normal',
    },
    roboto14Medium: {
      size: '14px',
      weight: '500',
      lineHeight: 'normal',
    },
    roboto14Bold: {
      size: '14px',
      weight: '600',
      lineHeight: '20px',
    },
    roboto16Medium: {
      size: '16px',
      weight: '500',
      lineHeight: '19px',
    },
    roboto18Medium: {
      size: '18px',
      weight: '500',
      lineHeight: 'normal',
    },
    roboto24Medium: {
      size: '24px',
      weight: '500',
      lineHeight: 'normal',
    },
    roboto32Medium: {
      size: '32px',
      weight: '500',
      lineHeight: 'normal',
    },
  },
  colors: {
    black: 'rgba(0,0,0,1)',
    activeBlue: 'rgba(55,135,255,1)',
    grayWhite: 'rgba(255,255,255,0.3)',
    darkGreen: 'rgba(21,115,53,1)',
    darkTurquoise: 'rgba(11,201,205,1)',
    fieryRed: 'rgba(255,94,142,1)',
    greyWeb: 'rgba(123,123,123,1)',
    greyLabel: 'rgba(149,149,153,1)',
    grayHover: 'rgba(37,37,37,1)',
    jetGray: 'rgba(50,51,57,1)',
    onyxGray: 'rgba(63,64,72,1)',
    rickBlack: 'rgba(4,5,11,1)',
    rickBlackTransparent: 'rgba(4,5,11,.9)',
    raisinGray: 'rgba(42,43,52,1)',
    richGray: 'rgba(18,20,29,1)',
    sivoPurple: 'rgba(156,119,184,1)',
    successfulGreen: 'rgba(41,204,151,1)',
    successfulGreenWhite: 'rgba(41,204,151,0.5)',
    transparentWhite: 'rgba(255,255,255,0.5)',
    turquoise: 'rgba(11,201,205,1)',
    turquoiseHover: 'rgba(0,148,151,1)',
    white: 'rgba(255,255,255,1)',
    skeleton: 'rgba(74,74,81,1)',
    carefulYellow: 'rgba(255,199,78,1)',
    error: 'rgba(237,76,92,1)',
    info: 'rgba(134,188,255,1)',
    tooltip: 'rgba(91,91,92,0.95)',
  },
  breakpoints: {
    mobileFoldMax: `(max-width: 280px)`,
    mobileSmMax: `(max-width: 320px)`,
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 375px)`,
    mobileL: `(min-width: 425px)`,
    mobileLgMax: `(max-width: 425px)`,
    mobileMax: `(max-width: 540px)`,
    tablet: `(min-width: 769px)`,
    tabletMax: `(max-width: 769px)`,
    laptopMax: `(max-width: 1024px)`,
    laptop: `(min-width: 1025px)`,
    laptopL: `(min-width: 1440px)`,
    desktop: `(min-width: 2560px)`,
    desktopL: `(min-width: 2560px)`,
  },
};

export const llcTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#86bcff' },
    error: {
      main: theme.colors.error,
      light: theme.colors.error,
      dark: theme.colors.error,
    },
    warning: {
      main: theme.colors.carefulYellow,
      light: theme.colors.carefulYellow,
      dark: theme.colors.carefulYellow,
    },
    success: {
      main: theme.colors.successfulGreen,
      light: theme.colors.successfulGreen,
      dark: theme.colors.successfulGreen,
    },
    info: {
      main: theme.colors.info,
      light: theme.colors.info,
      dark: theme.colors.info,
    },
  },
  components: {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          '& .MuiBreadcrumbs-ol': {
            '& li button': {
              fontSize: theme.font.roboto24Medium.size,
              fontWeight: theme.font.roboto24Medium.weight,
              lineHeight: theme.font.roboto24Medium.lineHeight,
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          fontFamily: theme.font.family,
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          '&::-webkit-scrollbar': {
            WebkitAppearance: 'none',
            width: '8px',
            height: '4px',
          },
          '&::-webkit-scrollbar-button': {
            display: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            height: '100px',
            background: theme.colors.onyxGray,
            borderRadius: '30px',
          },
          '& .notistack-MuiContent-success': {
            backgroundColor: '#29CC97',
          },
        },
        body: {
          fontFamily: theme.font.family,
          background: theme.colors.greyWeb,
          fontSize: '1rem',
          lineHeight: '2',
          color: 'rgb(204, 204, 204)',
        },
        '.fi': {
          width: '1.5625rem !important',
          height: '1.5625rem',
          borderRadius: '50%',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          padding: '15px !important',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'initial',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.extraBanners && {
            top: `calc(24px + ${ownerState.extraBanners * 30}px) !important`,
          }),
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          color: theme.colors.black,
          width: 750,
          borderRadius: 4,
          alignItems: 'center',
          padding: '8px 16px',
          fontWeight: 600,
        },
        icon: {
          padding: 0,
          paddingBottom: 1,
          fontSize: 14,
          color: '#000',
        },
        message: {
          padding: 0,
          fontSize: 12,
          lineHeight: '14px',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        maxWidth: 'md',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#12141D',
          overflow: 'auto',
          boxSizing: 'border-box',
        },
        paper: {
          backgroundColor: theme.colors.raisinGray,
          color: '#fff',
          backgroundImage: 'none',
        },
        paperFullWidth: {
          borderRadius: 10,
          padding: '32px',
        },
        paperFullScreen: {
          borderRadius: 0,
          padding: 0,
        },
      },
    },
    MuiDialogTitle: {
      defaultProps: {
        variant: 'header1',
      },
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 0,
          paddingRight: '4px',
          marginTop: '2rem !important',
          overflowX: 'hidden',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 0,
          paddingTop: '2rem',
          justifyContent: 'flex-start',
        },
      },
    },
    MuiGrid: {
      defaultProps: {
        spacing: 3.5,
      },
      styleOverrides: {
        'grid-xs-true': {
          padding: 0,
        },
        'grid-xs-12': {
          padding: 0,
        },
        'spacing-xs-1': {
          '& .MuiGrid-item': {
            padding: '4px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            background: theme.colors.darkTurquoise,
          },
        },
        contained: {
          color: 'white',
          backgroundColor: theme.colors.darkTurquoise,
          borderRadius: '8px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
      styleOverrides: {
        root: {
          color: theme.colors.white,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
      },
      styleOverrides: {
        select: {
          height: '1.5rem',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        marginDense: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    MuiFormControlLabel: {
      defaultProps: {
        slotProps: {
          typography: {
            variant: 'body1',
          },
        },
      },
      styleOverrides: {
        label: {
          '&.Mui-disabled': {
            color: theme.colors.white,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.colors.greyWeb,
          },
        },
        thumb: {
          color: `${theme.colors.successfulGreen} !important`,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: 'none',
          padding: '0px',
          marginBottom: '4px',
          '&:before': {
            background: 'none',
          },
          '&.Mui-expanded': {
            margin: '16px 0',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: theme.colors.onyxGray,
          borderRadius: '6px',
          fontWeight: '500',
          '&.Mui-expanded': {
            borderRadius: '6px 6px 0 0',
            minHeight: '48px',
            maxHeight: '48px',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          background: 'rgba(63, 64, 72, .6)',
          padding: '8px 20px 0px 0px',
          borderRadius: '0 0 6px 6px',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          cursor: 'pointer',
          color: theme.colors.darkTurquoise,
          letterSpacing: '0.2px',
          fontWeight: 500,
          transition: 'color 0.3s ease',
          ':hover': {
            color: theme.colors.black,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: '20px',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          marginTop: '1rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: '1.5rem',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          header1: 'p',
          header2: 'p',
          header3: 'p',
          header4: 'p',
          h1: 'p',
          h2: 'p',
          h3: 'p',
          h4: 'p',
          h5: 'p',
          h6: 'p',
          body1: 'p',
          body2: 'p',
          body3: 'p',
          subtitle1: 'p',
          subtitle2: 'p',
          subtitle3: 'p',
          subtitle4: 'p',
          caption: 'span',
        },
      },
      styleOverrides: {
        root: {
          color: theme.colors.black,
        },
        gutterBottom: {
          marginBottom: '0.5rem',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          maxWidth: 322,
          padding: '0.75rem',
          borderRadius: '6px',
          fontSize: '0.75rem',
          lineHeight: '1rem',
          fontWeight: 400,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          '& ul > li[data-value=""]': {
            display: 'none',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: theme.colors.turquoise,
          height: 8,
          paddingLeft: 8,
          '& .MuiSlider-thumb': {
            height: 18,
            width: 18,
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
              boxShadow: 'inherit',
            },
            '&::before': {
              display: 'none',
            },
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#4C4747',
            opacity: 1,
          },
          '& .MuiSlider-valueLabel': {
            width: 43,
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 10,
            backgroundColor: '#4C4747',
            borderRadius: 16,
            '&::before': { display: 'none' },
          },
          '& .MuiSlider-mark': {
            display: 'none',
          },
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    header1: {
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
      letterSpacing: '0.01875rem',
      fontWeight: '500',
    },
    header2: {
      fontSize: '1rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.01875rem',
      fontWeight: '500',
    },
    header3: {
      fontSize: '0.875rem',
      lineHeight: '1rem',
      letterSpacing: '0.01875rem',
      fontWeight: '500',
    },
    header4: {
      fontSize: '0.75rem',
      lineHeight: '0.875rem',
      letterSpacing: '0.01875rem',
      fontWeight: '500',
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.01875rem',
      fontWeight: '400',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.01875rem',
      fontWeight: '400',
    },
    body3: {
      fontSize: '0.875rem',
      lineHeight: '1rem',
      letterSpacing: '0.01875rem',
      fontWeight: '400',
    },
    subtitle1: {
      fontSize: '0.75rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.01875rem',
      fontWeight: '400',
    },
    subtitle2: {
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.01875rem',
      fontWeight: '400',
    },
    subtitle3: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.01875rem',
      fontWeight: '400',
    },
    subtitle4: {
      fontSize: '0.75rem',
      lineHeight: '0.875rem',
      letterSpacing: '0.01875rem',
      fontWeight: '400',
    },
    caption: {
      fontSize: '0.625rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.03333em',
      fontWeight: '400',
    },
  },
});

export { theme };
