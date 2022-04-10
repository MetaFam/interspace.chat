import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Global, css, jsx } from "@emotion/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');
// Create a root
const root = ReactDOMClient.createRoot(container);


const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: '"Exo 2", sans-serif',
        fontSize: '16px',
        fontWeight: 300,
        bg: 'linear-gradient(0deg, rgba(41,2,80,1) 0%, rgba(25,0,50,1) 40%)',
      },
      a: {
        color: '#FF61E6',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        _hover: {
          color: '#0c5eb8'
        },
        '&.chakra-link': {
          color: '#FF61E6',
        }
      },
    },
  },
});

root.render(
  <ChakraProvider theme={theme}>
    <Global
      styles={css`
        h1 {
          color: #fff;
          font-size: 4vmax;
          font-weight: 700;
        }
        h1 span {
          color: #fff;
          font-size: 5vmax;
          font-weight: 700;
        }
        h2 {
          color: #fff;
          font-size: 4vmax;
          font-weight: 500;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        }
        h3 {
          font-size: 1.5vmax;
          font-weight: 500;
        }
        h4 {
          font-weight: 500;
          font-size: 1vmax;
        }
        p {
          font-size: .9vmax;
        }
      `}
    />
    <App />
  </ChakraProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
