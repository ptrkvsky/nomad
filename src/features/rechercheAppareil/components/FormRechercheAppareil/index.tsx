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
import TableResult from '../TableAppareils';
import RadioDispo from './RadioDispo';
import SelectTypeLocalisation from './SelectTypeLocalisation';

interface FormRechercheAppareil {
  famille: string;
  modele: string;
  numSerie: string;
  sousFamille: string;
  typeProduit: string;
  disponible: string;
  typeLocalisation: string;
}

const FormMessagerie: FunctionComponent = () => {
  const schema = yup.object().shape({
    typeProduit: yup.string().required(),
    famille: yup.string().required(),
  });

  const methods = useForm<FormRechercheAppareil>({
    mode: `onChange`,
    reValidateMode: `onChange`,
    resolver: yupResolver(schema),
  });

  const [
    getAppareils,
    { isLoading: isLoadingGetAppareils, isError, data, error },
  ] = useGetAppareilsMutation();

  const onSubmit: SubmitHandler<FormRechercheAppareil> = (formValues) => {
    const dataForBackend: RechercheAppareil = {
      modeleID: formValues.modele,
      familleID: formValues.famille,
      sousFamilleID: formValues.sousFamille,
      typeProduitID: formValues.typeProduit,
      ref_sn: formValues.numSerie,
      estDisponible: formValues.disponible,
      typeLocalisationID: formValues.typeLocalisation,
    };
    getAppareils(dataForBackend);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {isError && (
            <Alert sx={{ mb: 4 }} severity="error">
              {console.error(error)}
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

          <Box sx={{ mt: 2 }}>
            <SelectTypeLocalisation />
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
