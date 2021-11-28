import { FunctionComponent } from 'react';
import * as yup from 'yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Message } from '@/features/messagerie/interfaces';
import {
  useGetTypesObjetsQuery,
  usePostMessageMutation,
} from '@/features/messagerie/api';
import SelectTypeObjet from './SelectTypeObjet';
import SelectDestinataires from './SelectDestinataires';
import InputObjet from './InputObjet';
import TextareaCorps from './TextareaCorps';

interface FormMessagerieProps {
  message?: any;
}

interface Destinataire {
  idTypeTiers: string;
  idTiers: number;
  nom: string;
  prenom: string;
  codeAnnuaire: string;
}

interface FormMessagerieValues {
  typeObjet: string;
  objet: string;
  destinataires: Destinataire[];
  corps: string;
}

const FormMessagerie: FunctionComponent<FormMessagerieProps> = () => {
  const schema = yup.object().shape({
    typeObjet: yup.string().required(),
    objet: yup.string().required(),
    destinataires: yup.array().required(),
    corps: yup.string().required(),
  });

  const methods = useForm<FormMessagerieProps>({
    mode: `onChange`,
    reValidateMode: `onChange`,
    resolver: yupResolver(schema),
  });

  const { data: typesObjets } = useGetTypesObjetsQuery();
  const [postMessage, { isLoading: isLoadingPostMessage, isSuccess, isError }] =
    usePostMessageMutation();

  const onSubmit: SubmitHandler<FormMessagerieValues> = (formValues) => {
    const message: Message = {
      typeObjet: {
        typeObjetID: formValues.typeObjet,
      },
      sObjet: formValues.objet,
      sMessage: formValues.corps,
      tDestinatairePrincipal: formValues.destinataires.map((destinataire) => ({
        tiersID: destinataire.idTiers,
      })),
    };
    postMessage(message);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {isSuccess && (
          <Alert sx={{ mb: 4 }} severity="success">
            <AlertTitle>Victoire</AlertTitle>
            Votre message a ete enregistre avec succes —{` `}
            <strong>et panache</strong>
          </Alert>
        )}

        {isError && (
          <Alert sx={{ mb: 4 }} severity="error">
            <AlertTitle>Terrible nouvelle</AlertTitle>
            Une erreur est survenue pendant l&apos;envoie de votre message
          </Alert>
        )}

        <SelectTypeObjet typesObjets={typesObjets} />
        <InputObjet />
        <SelectDestinataires />
        <TextareaCorps typesObjets={typesObjets} />
        <Button
          disabled={isLoadingPostMessage}
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
