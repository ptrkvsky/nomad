import { FunctionComponent } from 'react';
import * as yup from 'yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import SendIcon from '@mui/icons-material/Send';

import SelectIntervenant from '../SelectIntervenant';
import DatePickerIntervenant from '../DatePickerIntervenant';

import { FormStyle } from './style';
import { ButtonPrimary } from '@/styles/atoms/Buttons';
import { setTourneeInfos } from '@/features/tournee/slices/tourneeSlice';
import { useAppDispatch } from '@/app/hooks';

export interface IFormIntervenant {
  intervenant: {
    idIntervenant: string;
    label: string;
  };
  dateTournee: any;
}

const schema = yup.object().shape({
  intervenant: yup
    .object({
      label: yup.string().required(),
      idIntervenant: yup.string().required(),
    })
    .required(),
  dateTournee: yup.string().required(),
});

const FormIntervenant: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const methods = useForm<IFormIntervenant>({
    mode: `onChange`,
    reValidateMode: `onChange`,
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormIntervenant> = (formValues) => {
    dispatch(
      setTourneeInfos({
        dateTournee: formValues.dateTournee,
        idIntervenant: formValues.intervenant.idIntervenant,
      }),
    );
  };

  return (
    <FormProvider {...methods}>
      <FormStyle onSubmit={methods.handleSubmit(onSubmit)}>
        <span className="highlight">Je recherche la tournée de</span>
        <SelectIntervenant />
        <span className="highlight">le</span>
        <DatePickerIntervenant />
        <ButtonPrimary type="submit">
          <SendIcon />
          Rechercher
        </ButtonPrimary>
      </FormStyle>
    </FormProvider>
  );
};

export default FormIntervenant;
