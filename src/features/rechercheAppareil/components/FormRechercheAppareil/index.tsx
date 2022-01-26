import { FunctionComponent } from 'react';
import * as yup from 'yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Message } from '@/features/messagerie/interfaces';
import { useGetTypesObjetsQuery } from '@/features/messagerie/api';
import SelectTypeProduits from './SelectTypeProduits';
import SelectFamilleProduits from './SelectFamilleProduits';
import { Box } from '@mui/material';
import SelectModeles from './SelectModeles';
import InputNumSerie from './InputNumSerie';
import { useGetAppareilsMutation } from '../../api';
import { RechercheAppareil } from '../../interfaces/rechercheAppareil';
import TableResult from './TableResult';
import RadioDispo from './RadioDispo';

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
  famille: string;
  modele: string;
  numSerie: string;
  sousFamille: string;
  typeProduit: string;
  disponible: string;
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
  const [
    getAppareils,
    { isLoading: isLoadingGetAppareils, isSuccess, isError, data, error },
  ] = useGetAppareilsMutation();

  const onSubmit: SubmitHandler<FormRechercheAppareil> = (formValues) => {
    console.log(`watch`, formValues);
    const dataForBackend: RechercheAppareil = {
      modeleID: formValues.modele,
      familleID: formValues.famille,
      sousFamilleID: formValues.sousFamille,
      typeProduitID: formValues.typeProduit,
      ref_sn: formValues.numSerie,
      estDisponible: formValues.disponible,
    };
    getAppareils(dataForBackend);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* {isSuccess && (
            <Alert sx={{ mb: 4 }} severity="success">
              <AlertTitle>Victoire</AlertTitle>
              Votre recherche a ete enregistre avec succes —{` `}
              <strong>et panache</strong>
            </Alert>
          )} */}

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
          <Box sx={{ mt: 2 }}>
            <InputNumSerie />
          </Box>
          <Box sx={{ mt: 2 }}>
            <RadioDispo />
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
      <Box sx={{ marginTop: 4 }}>
        <TableResult isLoadingSearch={isLoadingGetAppareils} appareils={data} />
      </Box>
    </>
  );
};

export default FormMessagerie;
