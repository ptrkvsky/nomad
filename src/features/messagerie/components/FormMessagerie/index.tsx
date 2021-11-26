import { FunctionComponent } from 'react';
import * as yup from 'yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { FormMessagerieValues } from '@/features/messagerie/interfaces';
import SelectTypeObjet from './SelectTypeObjet';
import SelectDestinataires from './SelectDestinataires';
import InputObjet from './InputObjet';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface FormMessagerieProps {
  message?: any;
}

const FormMessagerie: FunctionComponent<FormMessagerieProps> = () => {
  const schema = yup.object().shape({
    typeObjet: yup.string(),
  });

  const methods = useForm<FormMessagerieProps>({
    mode: `onChange`,
    reValidateMode: `onChange`,
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormMessagerieValues> = (data) => {
    console.log(data);
  };

  console.log(methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SelectTypeObjet /> <br />
        <InputObjet />
        <SelectDestinataires />
        <Button
          variant="contained"
          sx={{ marginTop: 4 }}
          endIcon={<SendIcon />}
          type="submit"
        >
          Envoyer le message
        </Button>
      </form>
    </FormProvider>
  );
};

export default FormMessagerie;
