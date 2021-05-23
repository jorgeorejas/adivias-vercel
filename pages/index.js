import Features from '@/components/theFeatures';
import Pricing from '@/components/Pricing';
import Cookies from '@/components/ui/Cookies';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import Layout from '@/components/Layout';

export default function PricingPage({ products, thefeatures }) {
  return (
    <>
      <Layout>
        <Features features={thefeatures} />
        <Pricing products={products} />
        {/*<Cookies />*/}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const products = await getActiveProductsWithPrices();

  return {
    props: {
      products
    },
    revalidate: 60
  };
}
