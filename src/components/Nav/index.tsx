import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DeleteIcon from '@mui/icons-material/Delete';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Wrapper = styled.nav`
  display: block;
  margin-top: 16px;
  ul {
    list-style-type: none;
    margin: 16px 0 0 0;
    padding: 0 0 8px 0;

    border-bottom: 1px solid hsla(185, 35%, 61%, 1);

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      margin-bottom: 16px;

      font-size: 16px;
      color: #f1fdfe;
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.2s ease-out;

      &:hover,
      &.active {
        color: #fff;
        background-color: #27757c;
      }
    }
  }
`;

export const Nav: FunctionComponent = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href="/tournee/en-cours">
            <a className={router.pathname == `/tournee/[slug]` ? `active` : ``}>
              <DirectionsCarIcon /> Feuille de route
            </a>
          </Link>
        </li>
        <li>
          <Link href="/appareils">
            <a className={router.pathname == `/appareils` ? `active` : ``}>
              <LocalHospitalIcon />
              Appareils
            </a>
          </Link>
        </li>
        <li>
          <Link href="/consommables">
            <a className={router.pathname == `/consommables` ? `active` : ``}>
              <DeleteIcon />
              Consommables
            </a>
          </Link>
        </li>
        <li>
          <Link href="/questionnaires">
            <a className={router.pathname == `/questionnaires` ? `active` : ``}>
              <QuestionMarkIcon />
              Questionnaires
            </a>
          </Link>
        </li>
        <li>
          <Link href="/evenements">
            <a>
              <EventAvailableIcon />
              Evenements
            </a>
          </Link>
        </li>
        <li>
          <Link href="/bloc-notes">
            <a className={router.pathname == `/bloc-notes` ? `active` : ``}>
              <TextSnippetIcon /> Bloc-notes
            </a>
          </Link>
        </li>
      </ul>
      <ul>
        <li className={router.pathname == `/fiche` ? `active` : ``}>
          <Link href="/">
            <a className={router.pathname == `/fiche` ? `active` : ``}>
              <PersonSearchIcon /> Fiche Patient
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <FactCheckIcon />
              Checklist
            </a>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Nav;
