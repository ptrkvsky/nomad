import { FunctionComponent } from 'react';
import { Box } from '@mui/system';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { TiersFront } from '@/interfaces';
import { Controller, useFormContext } from 'react-hook-form';

const columns: GridColDef[] = [
  { field: `idTiers`, headerName: `ID`, width: 90 },
  {
    field: `sCodeTiers`,
    headerName: `Code Tiers`,
    width: 150,
    editable: true,
  },
  {
    field: `sTypeTiers`,
    headerName: `Type Tiers`,
    width: 150,
    editable: true,
  },
  {
    field: `nom`,
    headerName: `Nom`,
    width: 150,
    editable: true,
  },
  {
    field: `prenom`,
    headerName: `Prenom`,
    width: 150,
    editable: true,
  },
  {
    field: `sTypeTiers`,
    headerName: `Type Tiers`,
    width: 150,
    editable: true,
  },
];

interface TableResultProps {
  isLoadingSearch: boolean;
  destinataires: TiersFront[];
}

const TableResult: FunctionComponent<TableResultProps> = ({
  destinataires,
  isLoadingSearch,
}) => {
  const { control, setValue } = useFormContext();

  const rows = destinataires.map((destinataire) => ({
    ...destinataire,
    id: destinataire.idTiers,
  }));

  const handleSelection = (newSelection: GridSelectionModel) => {
    const formValues = newSelection.map((tiers) =>
      destinataires.find((destinataire) => destinataire.idTiers === tiers),
    );
    setValue(`tiers`, formValues);
  };

  return (
    <Box sx={{ marginTop: 4, height: 500 }}>
      <Controller
        name="tiers"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <DataGrid
            {...field}
            rows={rows}
            columns={columns}
            pageSize={5}
            loading={isLoadingSearch}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={handleSelection}
            onRowClick={(param) => console.log(param)}
          />
        )}
      />
    </Box>
  );
};

export default TableResult;
