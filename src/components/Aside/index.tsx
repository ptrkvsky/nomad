import React, { FunctionComponent } from 'react';
import LogoAds from '@/assets/LogoAds';
import LogoNomad from '@/assets/LogoNomad';
import { Content, Wrapper, Footer, WrapperLogo } from './style';

import Nav from '@/components/Nav';

export const Aside: FunctionComponent = () => {
  return (
    <Wrapper className="aside-wrapper">
      <Content className="aside-content">
        <WrapperLogo>
          <LogoNomad />
        </WrapperLogo>
        <Nav />
      </Content>
      <Footer className="aside-footer">
        <LogoAds />
      </Footer>
    </Wrapper>
  );
};

export default Aside;
