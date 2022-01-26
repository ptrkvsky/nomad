import React, { FunctionComponent } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

const InputNumSerie: FunctionComponent = () => {
  const { control, formState } = useFormContext();

  return (
    <FormControl fullWidth error={!!formState.errors.numSerie}>
      <Controller
        name="numSerie"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <TextField
              {...field}
              id="outlined-helperText"
              label="Numero de serie"
            />
          </>
        )}
      />
      {!!formState.errors.typeProduit && (
        <FormHelperText>Le type produit est obligatoire</FormHelperText>
      )}
    </FormControl>
  );
};

export default InputNumSerie;
