import Features from '@/components/theFeatures';
import Pricing from '@/components/Pricing';
import Cookies from '@/components/ui/Cookies';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
export default function PricingPage({ products, thefeatures }) {
  return (
    <>
      <Features features={thefeatures} />
      <Pricing products={products} />
      <Cookies />
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
