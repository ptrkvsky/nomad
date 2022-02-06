import React, { FunctionComponent } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller, useFormContext } from 'react-hook-form';

const SelectTypeTiers: FunctionComponent = () => {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth sx={{ marginTop: 4 }}>
      <InputLabel id="typeTiers-label">Type de tiers</InputLabel>
      <Controller
        name="typeTiers"
        control={control}
        defaultValue={`INT`}
        render={({ field }) => (
          <Select
            {...field}
            labelId="typeTiers"
            id="typeTiers"
            label="Types de tiers"
          >
            <MenuItem value="INT">Personnel interne</MenuItem>
            <MenuItem value="GRD">Groupe de diffusion</MenuItem>
            <MenuItem value="ETS">Etablissements</MenuItem>
          </Select>
        )}
      />
    </FormControl>
  );
};

export default SelectTypeTiers;
