import { FC, useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IFormIntervenant } from './Form';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

const DatePickerIntervenant: FC = () => {
  const {
    setValue,
    register,
    getValues,

    formState: { errors },
  } = useFormContext<IFormIntervenant>();

  const value = getValues(`dateTournee`);

  useEffect(() => {
    register(`dateTournee`);
  }, [register]);

  useEffect(() => {
    const date = dayjs();
    setValue(`dateTournee`, date.format(), {
      shouldValidate: true,
      shouldDirty: true,
    });
  }, [setValue]);

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DesktopDatePicker
        label="Date de la tournée"
        value={value}
        onChange={(date) => {
          if (date) {
            setValue(`dateTournee`, date.format(), {
              shouldValidate: true,
              shouldDirty: true,
            });
          }
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePickerIntervenant;
