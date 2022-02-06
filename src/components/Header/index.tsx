import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import MessageIcon from '@mui/icons-material/Message';

import { Icon } from '@/styles/atoms/Icon';
import Link from 'next/link';
import { Wrapper } from './style';

interface Props {
  title: React.ReactNode;
}

export const Header: FunctionComponent<Props> = ({ title }: Props) => {
  return (
    <Wrapper>
      <div className="container">
        <h1>{title}</h1>
        <Link href="/messagerie">
          <a>
            <Icon className="button">
              <MessageIcon style={{ fill: `#FFF` }} />
            </Icon>
          </a>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Header;
