import { ResultatRechercheAppareil } from '@/features/rechercheAppareil/interfaces/resulatRechercheAppareil';
import { Grid, CardContent, Card, Typography } from '@mui/material';

interface Props {
  appareil: ResultatRechercheAppareil;
}

const CardAppareil = ({ appareil }: Props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Numero de serie : <b>{appareil.numeroSerie}</b>
          </Typography>
          <Typography sx={{ mt: 1.5 }} variant="h5" component="div">
            {appareil.libelleModele}
          </Typography>
          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            Localisation : <b>{appareil.libelleLocalisation}</b>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardAppareil;
