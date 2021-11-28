import React, { FunctionComponent } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { TypeObjetFront } from '@/features/messagerie/interfaces';

interface Props {
  typesObjets: TypeObjetFront[] | undefined;
}

const TextareaCorps: FunctionComponent<Props> = ({ typesObjets }) => {
  const { control, setValue, formState } = useFormContext();
  // Ecoute les changements du select type objet
  const idTypeObjet = useWatch({ name: `typeObjet` });

  // On recupere le type objet en fonction de l id
  const typeObjet = typesObjets?.find(
    (typeObjet) => typeObjet.idTypeobjet === idTypeObjet,
  );

  // Mise a jour du textarea
  if (typeObjet?.texteParDefaut) {
    setValue(`corps`, typeObjet.texteParDefaut);
  }

  return (
    <FormControl
      fullWidth
      sx={{ marginTop: 4 }}
      error={!!formState.errors.corps}
    >
      <Controller
        name="corps"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            error={!!formState.errors.corps}
            multiline
            rows={10}
            placeholder="Votre message"
            id="objet"
            label="Message"
            variant="outlined"
            aria-label="message"
            helperText={
              !!formState.errors.corps && `Veuillez saisir un message.`
            }
          />
        )}
      />
    </FormControl>
  );
};

export default TextareaCorps;
