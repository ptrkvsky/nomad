import { Typography, Container } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nomad</title>
        <meta name="description" content="Nomad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ mt: 4 }} component="div" gutterBottom>
            Nomad
          </Typography>
          <p>
            Consulter le menu pour ajouter un message ou rechercher un appareil
            <br />
          </p>
        </Container>
      </div>
    </div>
  );
}
