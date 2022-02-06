import { LayoutMain } from '@/components';
import TemplateAppareil from '@/features/appareils/components/TemplateAppareil';
import Head from 'next/head';

export default function Messagerie() {
  return (
    <div>
      <Head>
        <title>Liste des appareils - Nomad</title>
        <meta name="description" content="Nomad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutMain title="Liste des appareils">
        <TemplateAppareil />
      </LayoutMain>
    </div>
  );
}
