import { Card } from '@/styles/molecules/Card';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useLazyGetConfigurationQuery } from '../api';

const TemplateConfigurationAppareil = () => {
  const router = useRouter();
  const { idVisite } = router.query;

  const [getConfiguration, { data: configurationAppareil, isLoading }] =
    useLazyGetConfigurationQuery();

  useEffect(() => {
    if (idVisite && !Array.isArray(idVisite)) {
      getConfiguration(idVisite);
    }
  }, [getConfiguration, idVisite]);

  console.log(configurationAppareil);

  return (
    <>
      <div>
        {configurationAppareil?.tabconfigProduitSpec.map((configProduit) => (
          <Card key={configProduit.produit.sLibelle}>
            {configProduit.produit.sLibelle}
          </Card>
        ))}
      </div>
    </>
  );
};

export default TemplateConfigurationAppareil;
