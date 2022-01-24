import React, { FunctionComponent, useEffect } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useGetModelesMutation } from '../../api';

const SelectModeles: FunctionComponent = () => {
  const { control, formState } = useFormContext();

  // Récupère les valeurs du select type produit pour fetch la famille et les sous familles
  const idTypeProduit = useWatch({
    control,
    name: `typeProduit`,
  });

  const idFamilleProduit = useWatch({
    control,
    name: `famille`,
  });

  const [postModeles, { isLoading, data: modelesProduits }] =
    useGetModelesMutation();

  useEffect(() => {
    if (idFamilleProduit && idTypeProduit) {
      postModeles({
        idtypeproduit: idTypeProduit,
        idfamille: idFamilleProduit,
      });
    }
  }, [idFamilleProduit, idTypeProduit, postModeles]);

  console.log({ modelesProduits });

  return (
    <FormControl fullWidth error={!!formState.errors.typeObjet}>
      <InputLabel id="model-label">Modele</InputLabel>
      <Controller
        name="modele"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            labelId="modele"
            id="modele"
            label="Modele"
            error={!!formState.errors.typeObjet}
          >
            {modelesProduits &&
              modelesProduits.map((modeleProduit) => (
                <MenuItem
                  key={`${modeleProduit.sCodeNatureProduit}${modeleProduit.IDProduit}`}
                  value={modeleProduit.sLibelle}
                >
                  {modeleProduit.sLibelle}
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

export default SelectModeles;
