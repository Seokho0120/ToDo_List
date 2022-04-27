import React from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./Components/Template";
import Head from "./Components/Head";
import List from "./Components/List";
import CreateList from "./Components/Create";

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
        <List />
        <CreateList />
      </Template>
    </>
  );
}
