import styled from "styled-components";

export const MessagesContainer = styled.div`
  height: calc(100vh - 62px);
  padding-top: 12px;
  width: 100%;
  overflow: scroll;
`;

export const Message = styled.div`
  display: flex;

  padding: 0 15px;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MessageHeader = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 3px;
  background-color: var(--body-bg);
  letter-spacing: -2px;
  margin-right: 12px;
`;

export const MessageContent = styled.div`
  width: 70%;
  padding: 6px 30px 7px 0;
  font-size: 1.4rem;
  color: #000;
`;
