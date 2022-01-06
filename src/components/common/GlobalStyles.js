import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: InterMedium;
    src: url("../fonts/inter/Inter-Medium.ttf"); 
  };

  @font-face {
    font-family: InterBold;
    src: url("../fonts/inter/Inter-Bold.ttf"); 
  };


  html {

    font-size: 62.5%; // 1rem - 10px - 10/16
    margin: 0; 
    padding: 0;

    height: 100%;


    @media only screen and (max-width: 30em) { //480px sphone
      font-size: 33%; // 1rem - 8px - 8/16
    }

    @media only screen and (max-width: 37.5em){ //600px phone
      font-size: 50%; // 1rem - 8px - 8/16
    }

    @media only screen and (max-width: 56.25em){ //900px tablet
      font-size: 50%; // 1rem - 8px - 8/16
    }
    
    @media only screen and (max-width: 75em) { //1200px laptop  
      font-size: 56.25%; // 1rem - 9px - 9/16
    }

    @media only screen and (min-width: 112.5em){ //1800px desktop
      font-size: 75%; // 1rem - 12px - 12/16
    }

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body { 
    
    box-sizing: border-box;
    height: 100%;
    font-size: 1.4rem;
    
    font-family: Inter, sans-serif;
    background-color: #eff4f7;
  }


  @keyframes fadein {
    from {
      background-color: transparent;
    }
    to {
      background-color: #ffffff;
    }
  }
  
  @keyframes fadeout {
    from {
      background-color: #ffffff;
    }
    to {
      background-color: transparent;
    }
  }

  @keyframes slidein {
    from {
      left: 100%;
    }
    to {
      left: 0;
    }
  }
  
  @keyframes slideout {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }

  @keyframes move-text {
    0% {
      opacity: 0;
    }
    
    50% {
      opacity: 0.7;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes slide {
    100% {
      top: -18rem;
    }
  }

  @keyframes typing {
    40%, 60%{
      left: calc(100% + 3rem);
    }

    100%{
      left: 0;
    }
  }
`
export default GlobalStyles;
