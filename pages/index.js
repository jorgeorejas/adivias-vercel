import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Cookies from '@/components/ui/Cookies';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import Layout from '@/components/Layout';
import Logo from '@/components/icons/Logo';
import Button from '@/components/ui/Button';

export default function PricingPage({ products, thefeatures }) {
  return (
    <>
      <Layout>
        <Features features={thefeatures} />
        {/* <Pricing products={products} /> */}
        {/* <Cookies /> */}
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
