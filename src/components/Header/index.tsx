import { Typography, AppBar, Toolbar, Link } from '@mui/material';
import React, { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <AppBar
      position="static"
      color="secondary"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: `wrap` }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <Link
            href="/"
            sx={{ my: 1, mx: 1.5, textDecoration: `none`, color: `#FFF` }}
          >
            NOMAD
          </Link>
        </Typography>
        <nav>
          <Link
            href="/messagerie"
            sx={{ my: 1, mx: 1.5, textDecoration: `none`, color: `#FFF` }}
          >
            Ajouter un message
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
