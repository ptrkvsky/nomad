import React, { FunctionComponent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import ButtonSearch from '@/features/messagerie/components/FormMessagerie/ButtonSearch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';

const names = [
  `Oliver Hansen`,
  `Van Henry`,
  `April Tucker`,
  `Ralph Hubbard`,
  `Omar Alexander`,
  `Carlos Abbott`,
  `Miriam Wagner`,
  `Bradley Wilkerson`,
  `Virginia Andrews`,
  `Kelly Snyder`,
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectTypeObjet: FunctionComponent = () => {
  const { control } = useFormContext();

  return (
    <>
      <FormControl fullWidth sx={{ marginTop: 4 }}>
        <InputLabel id="typeObjet-label">Destinataires</InputLabel>
        <Controller
          name="destinataires"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              {...field}
              multiple
              labelId="destinataires"
              id="destinataires"
              label="Destinataires"
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
      <Box sx={{ marginTop: 1 }}>
        <ButtonSearch />
      </Box>
    </>
  );
};

export default SelectTypeObjet;
