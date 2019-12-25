import styled from "styled-components";

export const MessagesContainer = styled.div`
  height: calc(100vh - 62px);
  overflow: scroll;
`;

export const Message = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MessageHeader = styled.div`
  width: 100%;
  display: flex;
`;

export const MessageName = styled.div`
  font-size: 1.2rem;
  line-height: 1em;
  font-weight: 700;
  margin-right: 6px;
`;

export const MessageDate = styled.div`
  font-size: 1rem;
`;

export const MessageContent = styled.div`
  width: 100%;
  padding: 6px 30px 7px 0;
  font-size: 1.4rem;
  color: #000;
`;
