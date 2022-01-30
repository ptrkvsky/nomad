import { useAppSelector } from '@/app/hooks';
import Link from 'next/link';
import { Button, Grid } from '@mui/material';
import CardAppareil from './CardAppareil';

const TemplateAppareil = () => {
  const appareils = useAppSelector(
    (state) => state.rechercheAppareils.appareils,
  );

  return appareils.length > 0 ? (
    <Grid container spacing={4}>
      {appareils.map((appareil) => (
        <CardAppareil key={appareil.appareilID} appareil={appareil} />
      ))}
    </Grid>
  ) : (
    <p>
      Aucun appareil sélectionné <br />
      <br />
      <Link href="/recherche/appareil" passHref>
        <Button variant="contained">Rechercher un appareil</Button>
      </Link>
    </p>
  );
};

export default TemplateAppareil;
