import React from "react";
import styled from "styled-components";
import Item from "./Item";

export default function List() {
  return (
    <ListBlock>
      <Item text="이력서 피드백 예정" done={true} />
      <Item text="ToDo_List 만들기" done={true} />
      <Item text="면접 준비_리액트 질문" done={false} />
      <Item text="면접 준비_자바스크립트 질문" done={false} />
      <Item text="면접 준비_CS 질문" done={false} />
    </ListBlock>
  );
}

const ListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
