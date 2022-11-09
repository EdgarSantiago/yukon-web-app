import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap');

    /* logo font */
      @font-face {
        font-family: spaceage;
        font-style: normal;
        src: url('/SPACEAGE.TTF') format('truetype');
      }
      `}
  />
);

export default Fonts;
