import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';

export default function PricingPage({ products, features }) {
  return (
    <>
      <Features />
      <Pricing products={products} />
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
