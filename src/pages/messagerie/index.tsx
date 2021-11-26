import FormMessagerie from '@/features/messagerie/components/FormMessagerie';
import { Typography, Container, Box } from '@mui/material';
import Head from 'next/head';

export default function Messagerie() {
  return (
    <div>
      <Head>
        <title>Messagerie - Nomad</title>
        <meta name="description" content="Nomad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ mt: 4 }} component="div" gutterBottom>
            Nouveau message
          </Typography>
          <Box sx={{ marginTop: 4 }}>
            <FormMessagerie />
          </Box>
        </Container>
      </div>
    </div>
  );
}
