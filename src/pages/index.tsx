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
            Messages
          </Typography>
          <p>
            La liste des messages n&apos;est pas encore disponible,
            <br /> en attendant vous pouvez ajouter un message via le menu
          </p>
        </Container>
      </div>
    </div>
  );
}
