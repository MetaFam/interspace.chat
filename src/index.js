import React from "react";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import * as ReactDOMClient from "react-dom/client";

const container = document.getElementById("root");
// Create a root
const root = ReactDOMClient.createRoot(container);

const theme = extendTheme({
  styles: {
    global: {
      html: {
        bg: "linear-gradient(0deg, rgba(41,2,80,1) 0%, rgba(25,0,50,1) 40%)",
        scrollBehavior: "smooth",
      },
      body: {
        bg: "linear-gradient(0deg, rgba(41,2,80,1) 0%, rgba(25,0,50,1) 40%)",
        color: "#ffeded",
        fontFamily: '"Exo 2", sans-serif',
        fontSize: "16px",
        fontWeight: 300,
        m: '0 auto',
        minH: "100vh",
        overflowY: "auto",
      },
      "body *": {
        // outline: "1px solid red",
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
      a: {
        color: "#FF61E6",
        textDecoration: "none",
        transition: "color 0.2s ease",
        _hover: {
          color: "#76EBF2",
          textDecoration: "none",
        },
        "&.chakra-link": {
          color: "#FF61E6",
          _hover: {
            color: "#76EBF2",
            textDecoration: "none",
          },
        },
      },
      h1: {
        color: "#fff",
        fontSize: "4vmax",
        fontWeight: 700,
        "& span": {
          color: "#fff",
          fontSize: "4vmax",
          fontWeight: 700,
        },
      },
      h2: {
        color: "#fff",
        fontSize: "4vmax",
        fontweight: 500,
        textShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
      },
      h3: {
        fontSize: { base: "4vmin", md: "1.5vmax" },
        fontWeight: 500,
        "& + p": {
          fontSize: { base: "2.8vmin", md: "1vmax" },
          lineHeight: { base: "1.2", md: "inherit" },
          fontWeight: 500,
          mt: 0,
          mb: 1,
        },
      },
      h4: {
        fontSize: "1vmax",
        fontWeight: 500,
      },
      p: {
        fontSize: { base: "2.6vmin", md: ".9vmax" },
        textShadow: "0 0 5px rgba(0, 0, 0, 0.6)",
      },
      section: {
        display: 'flex',
        alignItems: "center",
        height: '100vh',
        minH: "100%",
        width: "100%",
        position: "relative",
        paddingLeft: { base: 4, md: "10%" },
        paddingRight: { base: 4, md: "10%" },
        zIndex: 2000,
      },
      ".__content__body": {
        "& > p:first-of-type": {
          fontSize: { base: "2.6vmin", md: "1vmax" },
          fontWeight: 500,
        },
        "&--no-firstof": {
          p: {
            fontSize: { base: "2.6vmin", md: "0.9vmax" },
            fontWeight: 500,
            "& + p": {
              fontWeight: 300,
            },
          },
        },
      },
      // Gradients
      ".gradient": {
        display: "inline-block",
        background: "linear-gradient(90deg, #FF61E6 -29.22%, #7C56FF 107.53%)",
        backgroundClip: "text",
        // WebkitTextFillColor: "transparent",
        // textFillColor: "transparent",
        // filter: "drop-shadow(0 0 5px rgba(0,0,0,0.6))",
      },
      ".gradient2": {
        display: "inline-block",
        background:
          "linear-gradient(90.24deg, #79F8FB 0.3%, #9032E6 55.76%, #E839B7 106.78%)",
        backgroundPosition: "center",
        backgroundSize: "100%",
        backgroundClip: "text",
        textFillColor: "transparent",
        WebkitTextFillColor: "transparent",
        filter: "drop-shadow(0 0 5px rgba(0,0,0,0.6))",
      },
      ".gradient-cone": {
        display: "inline-block",
        background:
          "conic-gradient(from 92.2deg at 60.45% 74.83%, #8EBBFF 0deg, #DE3FFF 88.12deg, #79F8FB 105deg, #7C56FF 165deg, #FF61E6 251.25deg, #927CFF 286.87deg, #76EBF2 326.25deg, #8EBBFF 360deg)",
        backgroundPosition: "-254%",
        backgroundSize: "100%",
        backgroundClip: "text",
        textFillColor: "transparent",
        WebkitTextFillColor: "transparent",
        transition: "background 0.3s ease",
        filter: "drop-shadow(0 0 5px rgba(0,0,0,0.6))",
      },
      ".highlight": {},
      ".fest-dates": {
        d: "inline-flex",
        width: "100%",
        color: "#FF61E6",
        fontSize: { base: "2.2vmin", md: "0.7vmax" },
        fontWeight: 700,
        justifyContent: "right",
        pr: 0.5,
        transform: {
          base: "translateY(7px)",
          lg: "translateY(9px)",
          "2xl": "translateY(15px)",
        },
        zIndex: 2001,
      },
    },
  },
});

root.render(
  <>
    <CSSReset />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
