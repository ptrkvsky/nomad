import React, { FunctionComponent } from 'react';
import { TypeObjetFront } from '@/features/messagerie/interfaces';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
  typesObjets: TypeObjetFront[] | undefined;
}

const SelectTypeObjet: FunctionComponent<Props> = ({ typesObjets }) => {
  const { control, formState } = useFormContext();

  return (
    <FormControl fullWidth error={!!formState.errors.typeObjet}>
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
            error={!!formState.errors.typeObjet}
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
      {!!formState.errors.typeObjet && (
        <FormHelperText>Le type d&apos;objet est obligatoire</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectTypeObjet;
