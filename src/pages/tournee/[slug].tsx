import { useAppDispatch, useAppSelector } from '@/app/hooks';
import LayoutMain from '@/components/Layouts/LayoutMain';
import TemplateTournee from '@/features/tournee/components/Template/TemplateTournee';
import { setTourneeInfos } from '@/features/tournee/slices/tourneeSlice';
import dayjs from 'dayjs';
import Head from 'next/head';

export default function Tournee() {
  // Action a faire apres login
  const dispatch = useAppDispatch();

  const dateTournee = dayjs().format();

  dispatch(
    setTourneeInfos({
      dateTournee,
      idIntervenant: `462118`,
    }),
  );

  const dateTourneeStore = useAppSelector((state) => state.tournee.dateTournee);

  const formatedDate = dayjs(dateTourneeStore)
    .locale(`fr`)
    .format(`dddd DD MMMM YYYY`);

  const title = (
    <div>
      Feuille de route du <span className="highlight">{formatedDate}</span>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Feuille de route - Nomad</title>
        <meta name="description" content="Nomad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutMain title={title}>
        <TemplateTournee />
      </LayoutMain>
    </div>
  );
}
