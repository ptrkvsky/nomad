import FormRechercheAppareil from '@/features/rechercheAppareil/components/FormRechercheAppareil';
import TableResult from '@/features/rechercheAppareil/components/FormRechercheAppareil/TableResult';
import { Typography, Container, Box } from '@mui/material';
import Head from 'next/head';

export default function Messagerie() {
  return (
    <div>
      <Head>
        <title>Recherche Appareil - Nomad</title>
        <meta name="description" content="Nomad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ mt: 4 }} component="div" gutterBottom>
            Rechercher un appareil
          </Typography>
          <Box sx={{ marginTop: 4 }}>
            <FormRechercheAppareil />
          </Box>
        </Container>
      </div>
    </div>
  );
}
