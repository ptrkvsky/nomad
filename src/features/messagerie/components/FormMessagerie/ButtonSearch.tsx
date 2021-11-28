import React, { FunctionComponent, useState } from 'react';
import Button from '@mui/material/Button';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import DialogDestinataires from './DialogDestinataires';

interface Props {
  selectValue: any;
  setSelectValue: React.Dispatch<any>;
}

const ButtonSearch: FunctionComponent<Props> = ({
  selectValue,
  setSelectValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOk = (itemsSelected: any) => {
    setIsOpen(false);
    setSelectValue([...selectValue, ...itemsSelected]);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        aria-label="delete"
        size="small"
        variant="outlined"
        startIcon={<PersonSearchIcon fontSize="small" />}
      >
        Recherche avancee
      </Button>
      <DialogDestinataires
        handleClose={handleClose}
        handleOk={handleOk}
        isOpen={isOpen}
      />
    </>
  );
};

export default ButtonSearch;
