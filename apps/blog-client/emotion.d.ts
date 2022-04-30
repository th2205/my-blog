import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      gray: string;
      white: string;
      backgroundColor: string;
    };
  }
}
