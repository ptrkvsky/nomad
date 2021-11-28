import React, { FunctionComponent } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

const InputQui: FunctionComponent = () => {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth sx={{ marginTop: 4 }}>
      <Controller
        name="qui"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField id="qui" label="Qui" variant="outlined" {...field} />
        )}
      />
    </FormControl>
  );
};

export default InputQui;
