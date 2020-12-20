import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: rgba(20, 20, 20);
    --surface-color: rgba(50, 50, 50);
    --overlay-color: rgba(80, 80, 80);
    --primary-color: #BB86FC;
    --secondary-color: #03DAC5;
    --text-high-emphasis: rgba(255, 255, 255, 0.87);
    --text-medium-emphasis: rgba(255, 255, 255, 0.60);
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      background-color: var(--background-color);
      color: var(--text-medium-emphasis);
  }

  /* hide scrollbar */
  *::-webkit-scrollbar {
    display: none;  /* chrome, safari and opera */
  }

  * {
    -ms-overflow-style: none;  /* ie and edge */
    scrollbar-width: none;  /* firefox */
  }
`;

export default GlobalStyle;