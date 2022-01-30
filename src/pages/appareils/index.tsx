import TemplateAppareil from '@/features/appareils/components/TemplateAppareil';
import FormRechercheAppareil from '@/features/rechercheAppareil/components/FormRechercheAppareil';
import TableResult from '@/features/rechercheAppareil/components/TableAppareils';
import { Typography, Container, Box } from '@mui/material';
import Head from 'next/head';

export default function Messagerie() {
  return (
    <div>
      <Head>
        <title>Liste des appareils - Nomad</title>
        <meta name="description" content="Nomad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ mt: 4 }} component="div" gutterBottom>
            Liste des appareils
          </Typography>
          <Box sx={{ marginTop: 4 }}>
            <TemplateAppareil />
          </Box>
        </Container>
      </div>
    </div>
  );
}
