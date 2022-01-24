import React, { FunctionComponent } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller, useFormContext } from 'react-hook-form';
import { useGetTypesProduitsQuery } from '../../api';

const SelecttypeProduit: FunctionComponent = () => {
  const { control, formState } = useFormContext();
  const { data: typesProduits } = useGetTypesProduitsQuery(`M`);

  return (
    <FormControl fullWidth error={!!formState.errors.typeObjet}>
      <InputLabel id="typeObjet-label">Type produit</InputLabel>
      <Controller
        name="typeProduit"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            labelId="typeProduit"
            id="typesObjet"
            label="Type produit"
            error={!!formState.errors.typeProduit}
          >
            {typesProduits &&
              typesProduits.map((typeProduit) => (
                <MenuItem
                  key={typeProduit.idTypeProduit}
                  value={typeProduit.idTypeProduit}
                >
                  {typeProduit.sLibelle}
                </MenuItem>
              ))}
          </Select>
        )}
      />
      {!!formState.errors.typeProduit && (
        <FormHelperText>Le type produit est obligatoire</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelecttypeProduit;
