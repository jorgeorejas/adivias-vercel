import Logo from '@/components/icons/Logo';
import React from 'react';
import Link from 'next/link';

export default function Cookies() {
  const [cookiesAccept, setCookiesAccept] = React.useState(false);

  return (
    <div
      className={`${
        cookiesAccept ? 'hidden' : ''
      } sticky bottom-0 flex flex-col lg:bottom-4 left-4 lg:right-4 z-10 bg-primary mx-auto lg:mx-0 lg:mb-4 lg:max-w-sm lg:flex-col p-4 rounded lg:shadow`}
    >
      <div className="w-full text-base text-xl lg:content-center lg:w-auto lg:self-center">
        In <Logo /> we need cookies to offer our service.
        <p>
          To find out more,
          <br className="lg:hidden" /> read our{' '}
          <Link href="">
            <a className="border-b-2 border-black hover:italic hover:underline">
              cookie policy.
            </a>
          </Link>
        </p>
        <button
          className="items-center w-full p-3 mt-4 ml-auto font-bold text-white bg-gray-800 rounded outline-none hover:bg-blue-600 hover:underline"
          onClick={() => setCookiesAccept(!cookiesAccept)}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
