import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import Head from 'next/head';
export default function Custom404() {
  return (
    <div className="flex flex-col content-center justify-center w-screen h-screen p-4 space-y-8">
      <Head>
        <title>Adivi.as | 404</title>
      </Head>
      <div className="mx-auto">
        <Link href="/">
          <a className="ring-0 hover:underline">
            <Logo className="text-4xl" />
          </a>
        </Link>
      </div>
      <div className="flex flex-row items-center content-center justify-center w-1/5 mx-auto">
        <h1 className="inline-block py-2 pr-6 mr-5 text-2xl font-medium align-middle border-r border-black">
          404
        </h1>
        <h2 className="inline-block text-sm font-normal text-left ">
          This page could not be found
        </h2>
      </div>
    </div>
  );
}
