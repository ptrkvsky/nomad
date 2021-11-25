import { useGetTypeObjetsQuery } from '@/features/messagerie/api';
import FormMessagerie from '@/features/messagerie/components/FormMessagerie';
import { Typography, Container } from '@mui/material';
import Head from 'next/head';

export default function Messagerie() {
  const { data } = useGetTypeObjetsQuery();
  console.log(data);
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
            Messages
          </Typography>
          <FormMessagerie />
        </Container>
      </div>
    </div>
  );
}
