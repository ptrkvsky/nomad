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
import SelectTypeProduits from './SelectTypeProduits';
import SelectFamilleProduits from './SelectFamilleProduits';
import { Box } from '@mui/material';
import SelectModeles from './SelectModeles';

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

interface FormRechercheAppareil {
  typeObjet: string;
  objet: string;
  destinataires: Destinataire[];
  corps: string;
}

const FormMessagerie: FunctionComponent<FormMessagerieProps> = () => {
  const schema = yup.object().shape({
    typeProduit: yup.string().required(),
    famille: yup.string().required(),
  });

  const methods = useForm<FormMessagerieProps>({
    mode: `onChange`,
    reValidateMode: `onChange`,
    resolver: yupResolver(schema),
  });

  const { data: typesObjets } = useGetTypesObjetsQuery();
  const [postMessage, { isLoading: isLoadingPostMessage, isSuccess, isError }] =
    usePostMessageMutation();

  const onSubmit: SubmitHandler<FormRechercheAppareil> = (formValues) => {
    console.log(formValues);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {isSuccess && (
          <Alert sx={{ mb: 4 }} severity="success">
            <AlertTitle>Victoire</AlertTitle>
            Votre recherche a ete enregistre avec succes —{` `}
            <strong>et panache</strong>
          </Alert>
        )}

        {isError && (
          <Alert sx={{ mb: 4 }} severity="error">
            <AlertTitle>Terrible nouvelle</AlertTitle>
            Une erreur est survenue pendant l&apos;envoie de votre message
          </Alert>
        )}

        <SelectTypeProduits />
        <Box sx={{ mt: 2 }}>
          <SelectFamilleProduits />
        </Box>
        <Box sx={{ mt: 2 }}>
          <SelectModeles />
        </Box>

        <Button
          // disabled={isLoadingPostMessage}
          variant="contained"
          sx={{ marginTop: 4 }}
          endIcon={<SendIcon />}
          type="submit"
        >
          Rechercher
        </Button>
      </form>
    </FormProvider>
  );
};

export default FormMessagerie;
