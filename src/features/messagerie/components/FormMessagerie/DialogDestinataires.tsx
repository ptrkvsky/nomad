import { FunctionComponent, useEffect } from 'react';
import * as yup from 'yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSearchTiersMutation } from '@/services/tiers';
import TableResult from '@/features/messagerie/components/FormDestinataires/TableResult';
import InputQui from '@/features/messagerie/components/FormDestinataires/InputQui';
import SelectTypeTiers from '@/features/messagerie/components/FormDestinataires/SelectTypeTiers';
import { TiersFront } from '@/interfaces';

interface FormDestinatairesValues {
  typeTiers: string;
  qui: string;
  tiers: TiersFront[];
}
interface Props {
  isOpen: boolean;
  handleOk: (value: any) => void;
  handleClose: () => void;
}

const DialogDestinataires: FunctionComponent<Props> = ({
  isOpen,
  handleClose,
  handleOk,
}) => {
  const schema = yup.object().shape({
    typeObjet: yup.string(),
  });

  const methods = useForm<FormDestinatairesValues>({
    mode: `onChange`,
    reValidateMode: `onChange`,
    resolver: yupResolver(schema),
  });

  const [
    searchTiers,
    { data: searchDestinataires, isLoading: isLoadingSearch },
  ] = useSearchTiersMutation();

  const onSubmit: SubmitHandler<FormDestinatairesValues> = (data) => {
    console.log(data);
  };

  const formValues = methods.watch();

  // Recherche des destinataires lorsque un champ du formulaire est modifie
  useEffect(() => {
    if (formValues.qui && formValues.typeTiers) {
      searchTiers({ typeTiers: formValues.typeTiers, qui: formValues.qui });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues.qui, formValues.typeTiers]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Dialog fullWidth maxWidth="lg" open={isOpen} onClose={handleClose}>
          <DialogTitle>Selectionnez des destinataires</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Pour rechercher un destinataire veuillez saisir un type de
              destinataire et son nom.
            </DialogContentText>
            <SelectTypeTiers />
            <InputQui />
            {searchDestinataires && (
              <TableResult
                isLoadingSearch={isLoadingSearch}
                destinataires={searchDestinataires}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Annuler
            </Button>
            <Button
              variant="contained"
              disabled={!formValues.tiers}
              onClick={() => handleOk(formValues.tiers)}
            >
              Valider
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </FormProvider>
  );
};

export default DialogDestinataires;
