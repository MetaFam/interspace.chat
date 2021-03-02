import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Global, css, jsx } from '@emotion/react'
import { ThemeProvider } from './contexts/ThemeContext'

ReactDOM.render(
  <ThemeProvider>
    <Global
      styles={css`
        * {
          margin: 0px;
          padding: 0px;
          font-family: 'Fira Code', monospace;
          font-weight: 300;
          font-size: 14px;
        }
        body {
          margin: 0px;
          padding: 0px;
          color: whitesmoke;
          background-color: black;
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
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
