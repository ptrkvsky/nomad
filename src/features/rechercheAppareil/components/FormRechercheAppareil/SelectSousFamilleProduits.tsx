import React, { FunctionComponent } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { FamilleAPI } from '../../interfaces/famille';

interface Props {
  famillesProduits: FamilleAPI[];
}

const SelectSousFamilleProduits: FunctionComponent<Props> = ({
  famillesProduits,
}: Props) => {
  const { control, formState } = useFormContext();

  // Récupère les valeurs du select type produit pour fetch la famille et les sous familles
  const idFamille = useWatch({
    control,
    name: `famille`,
  });

  const familleProduit = famillesProduits.find(
    (familleProduit) => familleProduit.sPKFamille === idFamille,
  );

  if (familleProduit && familleProduit?.tSousFamille.length > 0) {
    return (
      <FormControl fullWidth error={!!formState.errors.famille}>
        <InputLabel id="sousFamille-label">Sous Famille</InputLabel>
        <Controller
          name="sousFamille"
          control={control}
          defaultValue=""
          shouldUnregister
          render={({ field }) => (
            <Select
              {...field}
              labelId="famille"
              id="famille"
              label="Sous Famille"
              error={!!formState.errors.sousFamille}
            >
              {familleProduit.tSousFamille.map((sousFamille) => (
                <MenuItem
                  key={sousFamille.sPKSousFamille}
                  value={sousFamille.sPKSousFamille}
                >
                  {sousFamille.sLibelle}
                </MenuItem>
              ))}
              <MenuItem value="">Aucune valeur selectionnee</MenuItem>
            </Select>
          )}
        />
        {!!formState.errors.sousFamille && (
          <FormHelperText>La sous-famille est obligatoire</FormHelperText>
        )}
      </FormControl>
    );
  }
  return <></>;
};

export default SelectSousFamilleProduits;
