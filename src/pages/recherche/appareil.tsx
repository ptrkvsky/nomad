import { LayoutMain } from '@/components';
import FormRechercheAppareil from '@/features/rechercheAppareil/components/FormRechercheAppareil';
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
      <LayoutMain title="Rechercher un appareil">
        <FormRechercheAppareil />
      </LayoutMain>
    </div>
  );
}
