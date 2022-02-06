import { useEffect } from 'react';
import { useLazyGetTourneeQuery } from '@/features/tournee/api';
import { useAppSelector } from '@/app/hooks';
import { SearchParamsTournee } from '@/features/tournee/types/SearchParamsTournee';
import FiltreTournee from '../FiltreTournee';
import TourneeItem from '../TourneeItem';
import { Alert, AlertTitle, Skeleton } from '@mui/material';
import dayjs from 'dayjs';

const TemplateTournee = () => {
  // const { data: tournee } = useGetTourneeQuery(searchParamsTournee);
  const tourneeInfos = useAppSelector((state) => state.tournee);

  const [getTournee, { isLoading, data: tournee, isError, error, isFetching }] =
    useLazyGetTourneeQuery();

  useEffect(() => {
    if (tourneeInfos.dateTournee) {
      const dateTournee = dayjs(tourneeInfos.dateTournee).format(`YYYYMMDD`);
      const searchParamsTournee: SearchParamsTournee = {
        dateTournee,
        idIntervenant: tourneeInfos.idIntervenant,
      };

      getTournee(searchParamsTournee);
    }
  }, [getTournee, tourneeInfos.dateTournee, tourneeInfos.idIntervenant]);

  if (isError) {
    return (
      <Alert severity="error">
        <AlertTitle>Une erreur est survenue</AlertTitle>
        Le chargement de la tournée n&apos;a pu etre effectué veuillez{` `}
        <strong> contacter un administrateur.</strong>
      </Alert>
    );
  }

  console.log(tournee, isLoading, isFetching);

  return (
    <>
      <FiltreTournee />

      {isFetching ? (
        <div>
          <Skeleton sx={{ mt: 4 }} variant="rectangular" height={337} />
          <Skeleton sx={{ mt: 4 }} variant="rectangular" height={337} />
          <Skeleton sx={{ mt: 4 }} variant="rectangular" height={337} />
        </div>
      ) : (
        tournee?.visiteEnCours.map((tourneeItem) => (
          <TourneeItem key={tourneeItem.ID} rdvOuVisite={tourneeItem} />
        ))
      )}
    </>
  );
};

export default TemplateTournee;
