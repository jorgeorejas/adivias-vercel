import Logo from '@/components/icons/Logo';
import Input from '@/components/ui/Input';
import { useUser } from '@/utils/useUser';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';
const data = {
  labels: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31'
  ],
  datasets: [
    {
      label: 'Increment of followers',
      data: [
        '12',
        '2',
        '31',
        '14',
        '52',
        '16',
        '37',
        '48',
        '39',
        '18',
        '97',
        '22',
        '53',
        '47',
        '35',
        '46',
        '47',
        '52',
        '16',
        '37',
        '48',
        '39',
        '18',
        '117',
        '46',
        '47',
        '52',
        '36',
        '23',
        '187',
        '124'
      ],
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgb(191, 219, 254,0.1)',
      borderColor: 'rgb(191, 219, 254)'
    }
  ]
};

const options = {
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

export default function SaaS() {
  const [menu, setMenu] = React.useState(false);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace('/signin');
  }, [user]);

  return (
    <>
      <Head>
        <title>Adivi.as | Dashboard</title>
      </Head>
      <div className="min-h-screen bg-primary">
        <div className="flex flex-col ">
          <div className="sticky top-0 flex flex-row w-screen border-b bg-gray-50">
            <div className="w-1/6 px-10 py-4 text-center ">
              <Logo />
            </div>
            <div className="flex flex-row w-full h-full mx-4 my-auto">
              <button
                className="p-3 mx-4 text-base rounded-lg focus:ring-none"
                onClick={() => setMenu(!menu)}
              >
                <svg
                  className="w-6 h-6 m-auto stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <Input
                placeholder="Search"
                className="hidden rounded-full md:block"
              />
            </div>
          </div>
          <div className="flex flex-row h-full ">
            <div
              className={`${
                menu
                  ? 'w-2/12 h-full absolute border-r  bg-primary'
                  : ' hidden '
              } '`}
            >
              <div className="block w-full md:hidden">
                <Input placeholder="Search" />
              </div>
              <ul className="p-10 ">
                <li className="py-2 text-xl font-semibold ">Dashboard</li>
                <ul className="py-2 pl-4 space-y-4 font-medium list-disc list-inside">
                  <li className="">
                    <Link href="#followers">Followers</Link>
                  </li>
                  <li className="">Likes</li>
                </ul>
              </ul>
              <hr />
              <ul className="p-10 ">
                <ul className="py-2 space-y-4 font-medium list-disc list-inside">
                  <li>jadfkkfd</li>
                  <li>jadfkkfd</li>
                  <li>jadfkkfd</li>
                  <li>jadfkkfd</li>
                  <li>jadfkkfd</li>
                  <li>jadfkkfd</li>
                </ul>
              </ul>
            </div>
            <div className="w-full h-screen px-10 py-3 bg-secondary-2">
              <h1 className="text-4xl font-medium ">Dashboard</h1>
              <div className="grid grid-rows-1 my-2">
                <div id="pills">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-row w-full p-4 border rounded-lg h-52 bg-primary">
                      <div className="flex flex-col w-1/2 p-4">
                        <p className="text-xl font-semibold">Total followers</p>
                        <p className="my-auto text-5xl ">8,948,914</p>
                        <p className="text-lg font-bold">
                          8.56% Up from yesterday{' '}
                        </p>
                      </div>
                      <div className="flex flex-col w-1/2 p-4">
                        <img
                          className="h-40 m-auto"
                          src="./stack/chartjs.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row w-full p-4 border rounded-lg h-52 bg-primary">
                      <div className="flex flex-col w-1/2 p-4">
                        <p className="text-xl font-semibold">Total likes</p>
                        <p className="my-auto text-5xl ">42,832,902</p>
                        <p className="text-lg font-bold">3.95% MoM</p>
                      </div>
                      <div className="flex flex-col w-1/2 p-4">
                        <img
                          className="h-40 m-auto"
                          src="./stack/chartjs.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-4 my-2 border rounded-lg bg-primary">
                <h2 className="text-2xl font-medium ">Account details</h2>
                <Line
                  data={data}
                  options={options}
                  height="1rem"
                  width="4rem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
