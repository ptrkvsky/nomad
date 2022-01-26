import React, { FunctionComponent } from 'react';

import {
  Box,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useGetFamillesProduitQuery } from '../../api';
import SelectSousFamilleProduits from './SelectSousFamilleProduits';

const SelectFamilleProduits: FunctionComponent = () => {
  const { control, formState } = useFormContext();

  // Récupère les valeurs du select type produit pour fetch la famille et les sous familles
  const idTypeProduit = useWatch({
    control,
    name: `typeProduit`,
  });

  const { data: famillesProduits } = useGetFamillesProduitQuery(idTypeProduit);

  return (
    <>
      {famillesProduits && famillesProduits.length > 0 && (
        <FormControl fullWidth error={!!formState.errors.famille}>
          <InputLabel id="famille-label">Famille</InputLabel>
          <Controller
            name="famille"
            control={control}
            defaultValue=""
            shouldUnregister
            render={({ field }) => (
              <Select
                {...field}
                labelId="famille"
                id="famille"
                label="Famille"
                error={!!formState.errors.typeObjet}
              >
                <MenuItem value="">Aucune valeur selectionnee</MenuItem>
                {famillesProduits.map((familleProduit) => (
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
      )}

      {famillesProduits && famillesProduits?.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <SelectSousFamilleProduits famillesProduits={famillesProduits} />
        </Box>
      )}
    </>
  );
};

export default SelectFamilleProduits;
