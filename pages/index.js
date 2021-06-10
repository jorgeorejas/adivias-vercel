import Main from '@/components/Main';
import Pricing from '@/components/Pricing';
import Cookies from '@/components/ui/Cookies';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import Layout from '@/components/Layout';

import { Dialog } from '@headlessui/react';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Logo from '@/components/icons/Logo';

function WIP() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-50 overflow-y-auto "
    >
      <div className="flex h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-blue opacity-30" />
        <div className="z-10 flex flex-col max-w-md gap-4 p-4 m-auto bg-white rounded-lg">
          <Dialog.Title className="m-auto">
            <Logo />
          </Dialog.Title>
          <Dialog.Description className="m-auto text-lg">
            I'm still developing looking forward to bring you the best
            experience possible.
            <p className="text-right">
              <a href="https://twitter.com/orejasjorge">~ Jorge Orejas</a>
            </p>
          </Dialog.Description>

          {/* <div className="grid grid-cols-2 gap-4 ">
            <Button
              variant="slim"
              className="col-span-2"
              onClick={() => setIsOpen(false)}
            >
              Accept{' '}
            </Button>
          </div> */}
        </div>
      </div>
    </Dialog>
  );
}

export default function PricingPage({ products }) {
  return (
    <>
      <Layout>
        {/* <WIP /> */}
        <Main />
        <Pricing products={products} />
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
