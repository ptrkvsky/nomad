import { GridColDef } from '@mui/x-data-grid';

const columnsAppareils: GridColDef[] = [
  {
    field: `numeroSerie`,
    headerName: `Numéro de série`,
    width: 200,
    editable: true,
  },
  {
    field: `libelleModele`,
    headerName: `Modèle`,
    width: 300,
    editable: true,
  },
  {
    field: `libelleLocalisation`,
    headerName: `Localisation`,
    width: 300,
    editable: true,
  },
  {
    field: `libelleTypeProduit`,
    headerName: `Type de produit`,
    width: 150,
    editable: true,
  },
  {
    field: `materielDisponible`,
    headerName: `Disponible`,
    width: 100,
    editable: true,
  },
];

export default columnsAppareils;
