import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const Main = styled.main`
  width: 60%;
  min-height: 100vh;
  position: relative;
`;

export const Aside = styled.aside`
  width: 30%;
  min-height: 100vh;
  background-color: var(--block-bg);
  position: relative;
`;

export const RightPanel = styled.div`
  width: 10%;
  min-height: 100vh;
  background-color: var(--primary);
  position: relative;
`;
