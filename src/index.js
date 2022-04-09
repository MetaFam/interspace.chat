import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Global, css, jsx } from "@emotion/react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');
// Create a root
const root = ReactDOMClient.createRoot(container);


root.render(
  <ChakraProvider>
    <Global
      styles={css`
      body {
        background-color: black;
        font-size: 16px;
      }
        h1 {
          color: #fff;
          font-size: 7vmin;
          font-weight: 700;
        }
        h1 span {
          color: #fff;
          font-size: 7vmin;
          font-weight: 700;
        }
        h2 {
          color: #fff;
          font-size: 5vmin;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        }
        h3 {
          font-weight: 700;
        }
        a {
          color: #ffd700;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #0c5eb8;
        }
        .hidden {
          opacity: 0;
          filter: url(#blur0);
        }
        .click-zone {
          transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
          & :hover {
            cursor: pointer;
            filter: url(#glow);
            & .hidden {
              opacity: 1;
            }
          }
        }
        .no-click-zone {
          & :hover {
            cursor: pointer;
            & .hidden {
              opacity: 1;
            }
          }
        }
        .click-zone-mobile {
          transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
          & :focus {
            filter: url(#glow);
            & .hidden {
              opacity: 1;
            }
          }
        }
        .click-link {
          transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
          & :hover {
            cursor: pointer;
            fill: #fce96a;
          }
        }
        .title :hover {
          fill: black;
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
