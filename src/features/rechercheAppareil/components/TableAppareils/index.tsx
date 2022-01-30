import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridSelectionModel } from '@mui/x-data-grid';
import { useAppDispatch } from '@/app/hooks';
import { ResultatRechercheAppareil } from '@/features/rechercheAppareil/interfaces';
import columnsAppareils from './columns';
import { setAppareils } from '@/features/rechercheAppareil/slices/rechercheAppareilSlice';

interface TableResultProps {
  isLoadingSearch: boolean;
  appareils?: ResultatRechercheAppareil[];
}

const TableResult: FunctionComponent<TableResultProps> = ({
  appareils = [],
  isLoadingSearch,
}) => {
  const dispatch = useAppDispatch();

  // Ajout d'un ID pour MUI et formattage de la donnee
  const rowsAppareils = appareils?.map((appareil) => ({
    ...appareil,
    id: appareil.appareilID,
    materielDisponible: appareil.materielDisponible ? `✅` : `❌`,
  }));

  const handleOnSelectionModelChange = (selectionModel: GridSelectionModel) => {
    // Je parcours tous les elements de mon tableau de resultat
    const appareilsSelectiones = appareils
      .map((appareil) => {
        // je parcours tous mes elements selections
        const appareilFound = selectionModel
          .map((appareilSelected) => {
            // Si j'ai une correspondance je retourne mon appareil
            if (appareilSelected === appareil.appareilID) {
              return appareil;
            }
          })
          .filter((appareilsSelectione) => appareilsSelectione !== undefined);

        if (appareilFound.length) {
          return appareilFound[0];
        }
      })
      .filter((appareilsSelectione) => appareilsSelectione !== undefined);

    // AJout dans le store des appareils selectionnes
    dispatch(setAppareils(appareilsSelectiones as ResultatRechercheAppareil[]));
  };

  return (
    <Box sx={{ marginTop: 4, height: 500 }}>
      <DataGrid
        rows={rowsAppareils}
        columns={columnsAppareils}
        pageSize={5}
        loading={isLoadingSearch}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={handleOnSelectionModelChange}
      />
    </Box>
  );
};

export default TableResult;
