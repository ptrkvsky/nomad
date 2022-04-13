import { LayoutMain } from '@/components';
import TemplateConfigurationAppareil from '@/features/appareils/components/TemplateConfigurationAppareil';
import Head from 'next/head';

export default function AppareilConfiguration() {
  return (
    <div>
      <Head>
        <title>Feuille de route - Nomad</title>
        <meta name="description" content="Nomad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutMain title={`Appareil configuration`}>
        <TemplateConfigurationAppareil />
      </LayoutMain>
    </div>
  );
}
