// Types seem to break without this import, but it isn't "used"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TypographyVariants } from "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface TypographyVariants {
    displaySmall: React.CSSProperties;
    displayMedium: React.CSSProperties;
    displayLarge: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  export interface TypographyVariantsOptions {
    displaySmall?: React.CSSProperties;
    displayMedium?: React.CSSProperties;
    displayLarge?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    displaySmall: true;
    displayMedium: true;
    displayLarge: true;
    h3: false;
  }
}
