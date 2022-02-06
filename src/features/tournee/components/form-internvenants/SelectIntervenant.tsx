import { Autocomplete, TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useGetIntervenantsMutation } from '../../api';
import { SearchParamsIntervenant } from '../../types/SearchParamsIntervenant';
import { IFormIntervenant } from './Form';

const SelectIntervenant = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IFormIntervenant>();

  const [getIntervenants, { data: intervenants, isLoading: isLoadingSearch }] =
    useGetIntervenantsMutation();

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const searchParamsIntervenant: SearchParamsIntervenant = {
      qui: e.target.value,
      typetiers: `["INT"]`,
    };
    getIntervenants(searchParamsIntervenant);
  };

  const options = intervenants?.map((intervenant) => ({
    label: intervenant.nom,
    idIntervenant: intervenant.idTiers,
  }));

  return (
    <Controller
      name="intervenant"
      control={control}
      render={({ field: { onChange } }) => (
        <Autocomplete
          onChange={(_event, item) => {
            onChange(item);
          }}
          disablePortal
          loading={isLoadingSearch}
          id="intervenant"
          options={options || []}
          sx={{ width: 300 }}
          isOptionEqualToValue={(option, value) =>
            option.idIntervenant === value.idIntervenant
          }
          renderInput={(params) => (
            <TextField
              {...params}
              error={!!errors.intervenant}
              helperText={errors.intervenant && `Champ obligatoire`}
              onChange={handleChange}
              required
              label="Intervenant"
            />
          )}
        />
      )}
    />
  );
};

export default SelectIntervenant;
