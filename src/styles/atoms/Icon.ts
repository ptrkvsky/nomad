import styled from '@emotion/styled';

export const Icon = styled.div`
  svg {
    z-index: 10;
    fill: #fff;
  }
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 50%;

  &:before {
    content: '';
    position: absolute;
    display: block;
    z-index: 5;
    width: 80%;
    height: 80%;
    background: hsla(185 93% 32% / 1);
    border-radius: 50%;
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(185 93% 32% / 0.44);
    border-radius: 50%;
  }

  &.button {
    &:before {
      background: linear-gradient(
        hsla(185 93% 32% / 1),
        hsla(185 93% 32% / 0.1)
      );
    }
  }
`;
