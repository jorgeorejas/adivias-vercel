import Pricing from '@/components/Pricing';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import Link from 'next/link';

export default function Features() {
  return (
    <div>
      <section className="h-screen">
        <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-between w-full p-4 min-h-7/10 rounded-xl bg-blue">
            <div className="flex flex-col items-start">
              <p className="font-bold text-gray-600 uppercase">
                Fast and easy to use social media analytics
              </p>
              <h1 class=" text-7xl font-extrabold ">
                All-in-one <br /> social media <br /> analytics <br />& toolbox
              </h1>
            </div>
            <div className="flex flex-col items-end flex-grow justify-evenly">
              <li className="w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                Stats
              </li>
              <li className="w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                Content publishing
              </li>
              <li className="w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                Links page
              </li>
              <li className="w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                Growth Assistant
              </li>
              <li className="w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                WP Posts & Stories
              </li>
              <li className="w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                Potential Ambassador Identifier
              </li>
              <li className="w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                <Link href="/features/#giveaways">
                  <a>Giveaways</a>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </section>
    </div>
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
