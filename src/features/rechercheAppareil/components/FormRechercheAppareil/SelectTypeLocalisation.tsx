import React, { FunctionComponent } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller, useFormContext } from 'react-hook-form';
import { useGetTypesLocalisationsQuery } from '../../api';

const SelectTypeLocalisation: FunctionComponent = () => {
  const { control, formState } = useFormContext();
  const { data: typesLocalisations } = useGetTypesLocalisationsQuery();

  return (
    <FormControl fullWidth error={!!formState.errors.typeObjet}>
      <InputLabel id="typeLocalisation-label">Type de localisation</InputLabel>
      <Controller
        name="typeLocalisation"
        control={control}
        shouldUnregister
        render={({ field }) => (
          <Select
            {...field}
            labelId="typeLocalisation-label"
            id="typeLocalisation"
            label="Type de localisation"
            error={!!formState.errors.typeLocalisation}
          >
            {typesLocalisations &&
              typesLocalisations.map((typeLocalisation) => (
                <MenuItem
                  key={typeLocalisation.typeLocalisationId}
                  value={typeLocalisation.typeLocalisationId}
                >
                  {typeLocalisation.sLibelle}
                </MenuItem>
              ))}
          </Select>
        )}
      />
      {!!formState.errors.typeLocalisation && (
        <FormHelperText>Le type de localisation est obligatoire</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectTypeLocalisation;
