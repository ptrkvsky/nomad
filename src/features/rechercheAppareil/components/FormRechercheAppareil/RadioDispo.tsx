import React, { FunctionComponent } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { Controller, useFormContext } from 'react-hook-form';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

const RadioDispo: FunctionComponent = () => {
  const { control, formState } = useFormContext();

  return (
    <FormControl fullWidth error={!!formState.errors.disponibilite}>
      <Controller
        name="disponible"
        control={control}
        render={({ field }) => (
          <RadioGroup aria-label="disponible" {...field}>
            <FormControlLabel
              value="oui"
              control={<Radio />}
              label="Disponible"
            />
            <FormControlLabel
              value="non"
              control={<Radio />}
              label="Indisponible"
            />
            <FormControlLabel value="tous" control={<Radio />} label="Tous" />
          </RadioGroup>
        )}
      />
      {!!formState.errors.disponibilite && (
        <FormHelperText>La disponibilite est obligatoire</FormHelperText>
      )}
    </FormControl>
  );
};

export default RadioDispo;
