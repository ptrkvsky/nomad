import React, { FunctionComponent } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

const InputObjet: FunctionComponent = () => {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth sx={{ marginTop: 4 }}>
      <Controller
        name="objet"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField id="objet" label="Objet" variant="outlined" {...field} />
        )}
      />
    </FormControl>
  );
};

export default InputObjet;
