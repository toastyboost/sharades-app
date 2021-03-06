import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GenericStyles = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --main-font: "Roboto", sans-serif;
    --title-font: "Roboto", sans-serif;
    --primary: #2B50EF;
    --secondary: #fff;
    --warning: #FE2B29;
    --highlight: #F9F6DF;
    --text-color: #848B97;
    --text-color--secondary: #C4C9D5;
    --title-color: #404346;
    --link-active: #03a9f4;
    --link-hover: #2196f3;
    --border-color: #E3E4EC;
    --body-bg: #F5F6FA;
    --block-bg: #fff;
    --red: #CD4040;
    --green: #64CA95;
    --blue: #157efb;
    --box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  }

  body,
  html {
    font-family: var(--main-font);
    color: var(--text-color);
    background-color: var(--body-bg);
    font-size: 62.5%;
    line-height: 1.4;
    font-weight: 400;
    min-width: 320px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  section {
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--main-font);
    line-height: 1.1;
    color: var(--text-color);
  }

  p {
    font-family: var(--text-font);
  }

  button {
    border: 0;
  }

  input {
    border: 0;
  }

  a {
    border: 0;
    transition: 0.2s;
    text-decoration: none;
    color: var(--black);
  }

  a:visited,
  a:focus,
  a:active,
  a:hover {
    outline: 0 none;
  }

  img {
    border: 0;
  }

  menu,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  section,
  header,
  footer {
    font-size: 1.6rem;
  }
 
  
`;
