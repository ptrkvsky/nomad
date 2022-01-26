import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { FunctionComponent } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { ResultatRechercheAppareil } from '../../interfaces/resulatRechercheAppareil';

const columns: GridColDef[] = [
  {
    field: `sCodeNatureProduit`,
    headerName: `Nature Produit`,
    width: 300,
    editable: true,
  },
  {
    field: `sRefProduit`,
    headerName: `Référence`,
    width: 300,
    editable: true,
  },
  {
    field: `sLibelle`,
    headerName: `Libellé`,
    width: 300,
    editable: true,
  },
];

interface TableResultProps {
  isLoadingSearch: boolean;
  appareils?: ResultatRechercheAppareil[];
}

const TableResult: FunctionComponent<TableResultProps> = ({
  appareils = [],
  isLoadingSearch,
}) => {
  const rows = appareils?.map((appareil) => ({
    ...appareil,
    id: appareil.iPKModele,
  }));

  return (
    <Box sx={{ marginTop: 4, height: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        loading={isLoadingSearch}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
};

export default TableResult;
