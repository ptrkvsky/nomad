import { Typography, AppBar, Toolbar } from '@mui/material';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <AppBar
      position="static"
      color="secondary"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: `wrap`, justifyContent: `space-between` }}>
        <Link href="/">
          <a>
            <Typography
              variant="h6"
              paragraph={false}
              sx={{ my: 1, mx: 1.5, textDecoration: `none`, color: `#FFF` }}
            >
              Nomad
            </Typography>
          </a>
        </Link>
        <nav style={{ display: `flex`, gap: `8px` }}>
          <Link href="/appareils">Liste des appareils</Link>
          <Link href="/recherche/appareil">Rechercher un appareil</Link>
          <Link href="/messagerie">Ajouter un message</Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
