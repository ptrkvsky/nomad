import React, { FunctionComponent } from 'react';
import { useGetTypeObjetsQuery } from '@/features/messagerie/api';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller, useFormContext } from 'react-hook-form';

const SelectTypeObjet: FunctionComponent = () => {
  const { control } = useFormContext();
  const { data: typesObjets } = useGetTypeObjetsQuery();

  return (
    <FormControl fullWidth>
      <InputLabel id="typeObjet-label">Type Objet</InputLabel>
      <Controller
        name="typeObjet"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            labelId="typeObjet"
            id="typesObjet"
            label="Type Objet"
          >
            {typesObjets &&
              typesObjets.map((typeObjet) => (
                <MenuItem
                  key={typeObjet.idTypeobjet}
                  value={typeObjet.idTypeobjet}
                >
                  {typeObjet.libelle}
                </MenuItem>
              ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default SelectTypeObjet;
