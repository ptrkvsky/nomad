import React, { FunctionComponent } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useGetFamillesProduitQuery } from '../../api';

const SelectFamilleProduits: FunctionComponent = () => {
  const { control, formState } = useFormContext();

  // Récupère les valeurs du select type produit pour fetch la famille et les sous familles
  const idTypeProduit = useWatch({
    control,
    name: `typeProduit`,
  });

  const { data: famillesProduits } = useGetFamillesProduitQuery(idTypeProduit);

  return (
    <FormControl fullWidth error={!!formState.errors.typeObjet}>
      <InputLabel id="typeObjet-label">Famille</InputLabel>
      <Controller
        name="famille"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            labelId="famille"
            id="famille"
            label="Famille"
            error={!!formState.errors.typeObjet}
          >
            {famillesProduits &&
              famillesProduits.map((familleProduit) => (
                <MenuItem
                  key={familleProduit.sPKFamille}
                  value={familleProduit.sPKFamille}
                >
                  {familleProduit.sLibelle}
                </MenuItem>
              ))}
          </Select>
        )}
      />
      {!!formState.errors.typeObjet && (
        <FormHelperText>Le type de famille est obligatoire</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectFamilleProduits;
