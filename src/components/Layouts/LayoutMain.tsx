import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import { Aside, Header } from '@/components';
import { Main } from '@/styles/organisms/Main';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 288px auto;
  grid-template-rows: 80px auto;

  grid-template-areas:
    'aside header'
    'aside main ';
`;

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

export const LayoutMain: FunctionComponent<Props> = ({
  children,
  title,
}: Props) => {
  return (
    <Grid>
      <Header title={title} />
      <Aside />
      <Main className="container">{children}</Main>
    </Grid>
  );
};

export default LayoutMain;
