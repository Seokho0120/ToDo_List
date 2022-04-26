import React from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./Components/Template";

const GlobalStyle = createGlobalStyle`
body {
  background: #ebebeb;
}
`;

export default function ToDoList() {
  return (
    <>
      <GlobalStyle />
      <Template>ToDo_List</Template>
    </>
  );
}
