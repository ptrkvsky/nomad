import { FunctionComponent } from 'react';
import * as yup from 'yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormMessagerieValues } from '@/features/messagerie/interfaces';

interface FormMessagerieProps {
  message?: any;
}

const FormMessagerie: FunctionComponent<FormMessagerieProps> = () => {
  const schema = yup.object().shape({
    dateTournee: yup.string(),
  });

  const methods = useForm({
    mode: `onSubmit`,
    reValidateMode: `onChange`,

    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormMessagerieValues> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>Form Messagerie</form>
    </FormProvider>
  );
};

export default FormMessagerie;
