import React from "react";
import styled from "styled-components";

export default function List() {
  return <ListBlock>TodoList</ListBlock>;
}

const ListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
