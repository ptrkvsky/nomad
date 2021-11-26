import { FunctionComponent, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import DialogDestinataires from './DialogDestinataires';

const ButtonSearch: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen} aria-label="delete" size="large">
        <PersonSearchIcon fontSize="large" />
      </IconButton>
      <DialogDestinataires handleClose={handleClose} isOpen={isOpen} />
    </>
  );
};

export default ButtonSearch;
