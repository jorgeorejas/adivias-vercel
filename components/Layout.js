import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';

import Logo from '@/components/icons/Logo';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

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

export default function Layout({ children, meta: pageMeta }) {
  const router = useRouter();
  const meta = {
    title: 'Adivi.as',
    description:
      'All-in-one social media analytics & toolbox. Brought to you by Jorge Orejas.',
    cardImage: '/cardImage.png',
    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.svg" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://adivias.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@orejasjorge" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <Navbar />
      <main id="skip">{children}</main>
      <Footer />
    </>
  );
}
