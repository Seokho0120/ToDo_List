import React from "react";
import styled from "styled-components";

export default function Head() {
  return (
    <HeadBlock>
      <h1>2022년 4월 26일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 5개 남음</div>
    </HeadBlock>
  );
}

const HeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #62bfed;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;
