import styled from '@emotion/styled';

export const Wrapper = styled.aside`
  grid-area: aside;
  position: fixed;
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: hsla(185 93% 32% / 1);
`;

export const Footer = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: #243031;
`;

export const Content = styled.aside`
  padding: 16px;
`;

export const WrapperLogo = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
`;
