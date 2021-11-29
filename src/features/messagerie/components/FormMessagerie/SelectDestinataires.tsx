import React, { FunctionComponent, useEffect, useState } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { useSearchTiersMutation } from '@/services/tiers';
import { useLazyGetDestinatairesQuery } from '@/features/messagerie/api';
import ButtonSearch from '@/features/messagerie/components/FormMessagerie/ButtonSearch';

const SelectTypeObjet: FunctionComponent = () => {
  const [selectValue, setSelectValue] = useState<any>([]); // Element selectionne dans le select
  const [inputValue, setInputValue] = useState(``); // Valeur de la recherche
  const [options, setOptions] = useState<any>([]);
  const { control, setValue, formState, trigger } = useFormContext();

  const idTypeObjet = useWatch({ name: `typeObjet` });

  const [getDestinataires, { data: destinataires, isLoading }] =
    useLazyGetDestinatairesQuery();

  // Hook recherche de destinataires
  const [
    searchTiers,
    { data: searchDestinataires, isLoading: isLoadingSearch },
  ] = useSearchTiersMutation();

  // Recuperation des destinataires au changement de type objet
  useEffect(() => {
    if (idTypeObjet) {
      getDestinataires(idTypeObjet);

      setSelectValue(destinataires ? destinataires : []);
      setValue(`destinataires`, destinataires ? destinataires : []);
      trigger(`destinataires`);
    }
  }, [getDestinataires, idTypeObjet, destinataires, setValue]);

  // Recherche de tiers en fonction de la recherche
  useEffect(() => {
    let active = true;

    if (active && inputValue) {
      searchTiers({ qui: inputValue, typeTiers: `INT` });
    }

    return () => {
      active = false;
    };
  }, [searchTiers, inputValue]);

  // Quand il y a des resultats de recherche, mise a jour des options
  useEffect(() => {
    let active = true;

    if (active) {
      if (searchDestinataires) {
        setOptions(searchDestinataires);
      }
    }

    return () => {
      active = false;
    };
  }, [searchDestinataires]);

  // Quand il y a une mise a jour du champ de recherche, mise a jour du du state reacthookform
  useEffect(() => {
    let active = true;

    if (active) {
      if (searchDestinataires) {
        setValue(`destinataires`, selectValue);
      }
    }

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectValue]);

  return (
    <>
      {
        <FormControl
          error={!!formState.errors.destinataires}
          fullWidth
          sx={{ marginTop: 4 }}
        >
          <Controller
            name="destinataires"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                multiple
                value={selectValue}
                options={options}
                includeInputInList
                getOptionLabel={(destinataire) => destinataire.nom}
                loading={isLoading || isLoadingSearch}
                loadingText="Chargement..."
                noOptionsText="Aucun destinataires"
                onChange={(event: any, newValue: any) => {
                  setSelectValue(newValue);
                }}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Destinataires"
                    variant="outlined"
                    error={!!formState.errors.destinataires}
                  />
                )}
              />
            )}
          />
          {!!formState.errors.destinataires && (
            <FormHelperText>Veuillez chosir un destinataire</FormHelperText>
          )}
        </FormControl>
      }

      <Box sx={{ marginTop: 1 }}>
        <ButtonSearch
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
      </Box>
    </>
  );
};

export default SelectTypeObjet;
