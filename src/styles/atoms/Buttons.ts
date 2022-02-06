import styled from '@emotion/styled';

export const ButtonPrimary = styled.button`
  /* Auto layout */
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 32px;

  background: linear-gradient(45deg, #fb8212 0%, #fbac12 100%);
  box-shadow: 0px 10px 15px rgba(251, 130, 18, 0.31);
  border-radius: 24px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.07em;

  color: #ffffff;

  cursor: pointer;

  border: none;
`;

/* Modifier */

export const ButtonGhost = styled(ButtonPrimary)`
  background: none;

  color: #333854;
  border: 1px solid #333854;
  box-shadow: none;
`;
