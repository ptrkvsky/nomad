import { LayoutMain } from '@/components';
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
      <LayoutMain title="Nouveau message">
        <FormMessagerie />
      </LayoutMain>
    </div>
  );
}
