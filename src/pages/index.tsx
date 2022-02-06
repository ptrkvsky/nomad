import { LayoutMain } from '@/components';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Nomad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutMain title="Accueil">TODO</LayoutMain>
    </div>
  );
}
