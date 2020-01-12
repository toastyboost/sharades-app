import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: calc(100vh - 128px);
  padding-top: 18px;
  padding-bottom: 18px;
  width: 100%;
  overflow-y: auto;
`;

export const Message = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
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

export const NoMessagesContainer = styled.div`
  position: absolute;
  font-size: 1.6rem;
  margin: auto;
  height: calc(100vh - 128px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 0 36px;
  text-align: center;

  span {
    width: 100%;
    text-align: center;
    font-size: 3.6rem;
  }
`;
