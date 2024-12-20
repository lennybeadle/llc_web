export {};

declare module '@mui/material/Snackbar' {
  interface SnackbarProps {
    extraBanners?: number;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    header1: React.CSSProperties;
    header2: React.CSSProperties;
    header3: React.CSSProperties;
    header4: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    subtitle3: React.CSSProperties;
    subtitle4: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    header1?: React.CSSProperties;
    header2?: React.CSSProperties;
    header3?: React.CSSProperties;
    header4?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    body3?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    subtitle4?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    header1: true;
    header2: true;
    header3: true;
    header4: true;
    body1: true;
    body2: true;
    body3: true;
    subtitle1: true;
    subtitle2: true;
    subtitle3: true;
    subtitle4: true;
  }
}
