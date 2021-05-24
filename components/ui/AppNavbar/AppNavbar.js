import Head from 'next/head';
import Logo from '@/components/icons/Logo';
import React from 'react';
import Button from '../Button';
import { useRouter } from 'next/router';

export default function AppNavbar(props) {
  const { title } = props;
  const [menu, setMenu] = React.useState(false);
  const router = useRouter();
  return (
    <nav>
      <Head>
        <title>Adivias | {title}</title>
      </Head>
      <div className="sticky flex flex-row justify-between p-4 border-b">
        <div>
          <button
            className="p-3 mx-4 text-base rounded-lg ring-none"
            onClick={() => setMenu(!menu)}
          >
            <svg className="w-6 h-6 m-auto stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <a className="my-auto ">
            <Logo />
          </a>
        </div>
        {/* <div className="w-2/5 p-4 border rounded-full md:w-1/6">
          <select className="w-full">
            <option value="value1" selected>
              Instagram
            </option>
            <option value="value2">Twitter</option>
          </select>
        </div> */}
      </div>
      <div
        className={`${
          menu
            ? 'absolute w-full md:w-1/4 border-b md:border-r md:h-full bg-primary p-4'
            : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-2">
          <Button
            variant="slim"
            className="w-full"
            onClick={() => router.replace('/account')}
          >
            Account
          </Button>
          <li className="text-2xl font-semibold">Dashboard</li>
          <ul className="pl-4 text-lg">
            <li>Dashboard</li>
            <li>Dashboard</li>
          </ul>
        </ul>
      </div>
    </nav>
  );
}
