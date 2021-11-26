import { FunctionComponent } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  isOpen: boolean;

  handleClose: () => void;
}

const DialogDestinataires: FunctionComponent<Props> = ({
  isOpen,
  handleClose,
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Selectionnez des destinataires</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Pour rechercher un destinataire veuillez saisir un type de
          destinataire et son nom.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="qui"
          label="Nom ou prénom"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Annuler
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Valider
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogDestinataires;
