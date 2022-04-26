import React from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./Components/Template";
import Head from "./Components/Head";

const GlobalStyle = createGlobalStyle`
body {
  background: #ebebeb;
}
`;

export default function ToDoList() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Head />
      </Template>
    </>
  );
}
