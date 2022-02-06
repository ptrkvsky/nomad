import { Card } from '@/styles/molecules/Card';
import styled from '@emotion/styled';

export const CardTournee = styled(Card)`
  display: grid;
  grid-template-columns: 33% auto;

  .col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.col-right {
      align-items: end;
    }
  }

  p {
    margin: 0;
  }
`;

export const Time = styled.span`
  margin: 0 0 32px 0;
  padding: 0;

  font-weight: 600;
  font-size: 22px;
  letter-spacing: 0.07em;
  color: #fb8212;
`;

export const Infos = styled.div`
  .info-item {
    display: flex;
    gap: 16px;
    align-items: center;

    margin-bottom: 24px;

    font-size: 18px;
    line-height: 22px;

    &.highlight {
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0.07em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TypesVisites = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-end;

  .type-visite {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    flex-direction: row;
    margin-bottom: 16px;

    &:first-child {
      margin-top: 7px;
    }
  }

  .type-visite__libelle {
    font-weight: 800;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.05em;
    color: #074472;
    text-transform: uppercase;
  }

  .prestations {
    display: flex;
    gap: 8px;
  }

  .prestation {
    /* Oxygene */
    display: inline-block;
    padding: 8px 12px;

    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    letter-spacing: 0.07em;

    color: #333854;
    background-color: #e8ecf5;
    border-color: #d0d9e8;
    border-radius: 8px;
  }
`;

export const Cta = styled.div`
  display: flex;
  gap: 32px;
`;
