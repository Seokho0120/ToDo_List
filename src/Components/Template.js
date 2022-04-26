import React from "react";
import styled from "styled-components";

export default function Template({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

const TemplateBlock = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
`;
