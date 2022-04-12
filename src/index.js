import React from "react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
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
          color: '#76EBF2',
          textDecoration: 'none'
        },
        '&.chakra-link': {
          color: '#FF61E6',
          _hover: {
            color: '#76EBF2',
            textDecoration: 'none'
          },
        }
      },
      'h1': {
        color: '#fff',
        fontSize: '4vmax',
        fontWeight: 700,
        '& span': {
          color: '#fff',
          fontSize: '4vmax',
          fontWeight: 700,
        },
        '& + .fest-dates': {
          textAlign: 'right'
        }
      },
      h2: {
        color: '#fff',
        fontSize: '4vmax',
        fontweight: 500,
        textShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
      },
      h3: {
        fontSize: '1.5vmax',
        fontWeight: 500,
        lineHeight: {base: '1.5rem', md: 'inherit'}

      },
      h4: {
        fontSize: '1vmax',
        fontWeight: 500,
      },
      p: {
        fontSize: {base: '2.2vmin', md: '.9vmax'},
        textShadow: '0 0 5px rgba(0, 0, 0, 0.6)',
      },
      '.__content__body': {
        'p:first-of-type': {
          fontSize: '1vmax',
          fontWeight: 500
        },
        '&--no-firstof': {
          'p': {
            fontSize: '0.9vmax',
            fontWeight: 500,
            '& + p': {
              fontWeight: 300
            }
          }
        }
      },
      ".fest-dates": {
        d: "block",
        width: "100%",
        color: "#FF61E6",
        fontSize: { base: "2vmin", md: "0.7vmax" },
        fontWeight: 700,
        textAlign: "left",
        transform: { base: 'translateY(4px)', md: 'translateY(15px)' },
        zIndex: 2001,
      }
    },
  },
});

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
