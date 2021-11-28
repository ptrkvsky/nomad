import React, { FunctionComponent } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

const InputObjet: FunctionComponent = () => {
  const { control, formState } = useFormContext();

  return (
    <FormControl
      fullWidth
      sx={{ marginTop: 4 }}
      error={!!formState.errors.objet}
    >
      <Controller
        name="objet"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            error={!!formState.errors.objet}
            helperText={!!formState.errors.objet && `L'objet est obligatoire.`}
            id="objet"
            placeholder="Objet du message"
            label="Objet"
            variant="outlined"
            {...field}
          />
        )}
      />
    </FormControl>
  );
};

export default InputObjet;
