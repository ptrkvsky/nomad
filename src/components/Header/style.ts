import styled from '@emotion/styled';

export const Wrapper = styled.header`
  grid-area: header;
  box-shadow: 0px 4px 4px hsl(185deg 93% 32% / 5%);
  display: flex;
  align-items: center;
  h1 {
    color: #293761;
    font-weight: 300;
    font-size: 24px;
    margin: 0;
    padding: 0;

    .highlight {
      font-weight: 900;
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
