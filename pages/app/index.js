import Logo from '@/components/icons/Logo';
import Input from '@/components/ui/Input';
import { useUser } from '@/utils/useUser';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import AppNavbar from '@/components/ui/AppNavbar';

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

function Card({ children, className }) {
  const classNameContent = cn(
    className,
    'flex flex-row gap-2 p-2 border shadow rounded-xl'
  );
  return <div className={classNameContent}>{children}</div>;
}

export default function SaaS() {
  const { user } = useUser();
  const router = useRouter();

  var dateObj = new Date();

  const day = new Date().getDate();
  var weekday = dateObj.toLocaleString('default', { weekday: 'short' });

  // useEffect(() => {
  //   if (!user) router.replace('/signin');
  // }, [user]);

  return (
    <>
      <div className="min-h-screen bg-primary">
        <AppNavbar title="Dashboard" />
        <div className="grid grid-cols-1 p-4 overflow-y-auto gap-y-2 md:grid-cols-5 md:gap-4 md:grid-rows-6 ">
          <Card className="flex flex-col md:col-span-2">
            <div className="flex flex-row pb-2 border-b">
              <h4 className="px-4 text-base font-bold">
                hoy
                <span className="font-normal text-accents-2">
                  {' '}
                  {day} {weekday}.
                </span>
              </h4>
            </div>
            <div className="grid grid-cols-3">
              <div className="px-4 py-2 border-r border-gray-200">
                <p className="text-xl font-extrabold ">374</p>
                <p className="text-xs font-semibold text-gray-500 ">
                  Followers
                </p>
              </div>
              <div className="px-4 py-2 border-r border-gray-200">
                <p className="text-xl font-extrabold ">0</p>
                <p className="text-xs font-semibold text-gray-500 ">Likes</p>
              </div>
              <div className="px-4 py-2 border-gray-200">
                <p className="text-xl font-extrabold ">0</p>
                <p className="text-xs font-semibold text-gray-500 ">Comments</p>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col">
            <h2 className="font-semibold text-md">Links page</h2>
            <div className="flex flex-row w-full h-full gap-4">
              <button className="w-1/2 p-4 border rounded-lg">
                <h1>Visit</h1>
              </button>
              <button className="w-1/2 p-4 border rounded-lg">
                <h1>Edit</h1>
              </button>
            </div>
          </Card>
          <Card className="flex flex-col">
            <h2 className="font-semibold text-md">Create from WP</h2>
            <div className="flex flex-row w-full h-full gap-4">
              <button className="w-1/2 p-4 border rounded-lg">Post</button>
              <button className="w-1/2 p-4 border rounded-lg">Story</button>
            </div>
          </Card>
          <Card className="hidden md:px-4 md:flex-col md:flex md:row-span-3">
            <h1 className="font-semibold text-md">Toolbox</h1>
            <div className="w-full h-full p-2 rounded-lg"></div>
          </Card>
          <Card className="flex flex-col px-4 md:col-span-2 md:row-span-2">
            <h1 className="font-semibold text-md">New followers evolution</h1>
            <Line data={data} options={options} />
          </Card>
          <Card className="flex flex-col px-4 md:col-span-2 md:row-span-2">
            <h1 className="font-semibold text-md">Likes evolution</h1>
            <Line data={data} options={options} />
          </Card>
          <Card className="flex flex-col md:col-span-5 md:row-span-3">
            <h1 className="font-semibold text-md">Last posts insights</h1>
            <div className="grid grid-cols-2 row-span-2 gap-2 overflow-y-auto md:grid-rows-2 md:grid-cols-5">
              <Card className="flex flex-col p-2 md:flex-row">
                <img src="/me.jpeg" className="rounded-lg md:w-1/2 " />
                <table className="w-1/2 h-full m-auto">
                  <thead>
                    <tr>
                      <th className="text-left">Likes</th>
                      <td>121</td>
                    </tr>
                    <tr>
                      <th className="text-left">Comments</th>
                      <td>24</td>
                    </tr>
                  </thead>
                </table>
              </Card>
              <Card className="flex flex-col p-2 md:flex-row">
                <img src="/me.jpeg" className="rounded-lg md:w-1/2 " />
                <table className="w-1/2 h-full m-auto">
                  <thead>
                    <tr>
                      <th className="text-left">Likes</th>
                      <td>121</td>
                    </tr>
                    <tr>
                      <th className="text-left">Comments</th>
                      <td>24</td>
                    </tr>
                  </thead>
                </table>
              </Card>
              <Card className="flex flex-col p-2 md:flex-row">
                <img src="/me.jpeg" className="rounded-lg md:w-1/2 " />
                <table className="w-1/2 h-full m-auto">
                  <thead>
                    <tr>
                      <th className="text-left">Likes</th>
                      <td>121</td>
                    </tr>
                    <tr>
                      <th className="text-left">Comments</th>
                      <td>24</td>
                    </tr>
                  </thead>
                </table>
              </Card>
              <Card className="flex flex-col p-2 md:flex-row">
                <img src="/me.jpeg" className="rounded-lg md:w-1/2 " />
                <table className="w-1/2 h-full m-auto">
                  <thead>
                    <tr>
                      <th className="text-left">Likes</th>
                      <td>121</td>
                    </tr>
                    <tr>
                      <th className="text-left">Comments</th>
                      <td>24</td>
                    </tr>
                  </thead>
                </table>
              </Card>
              <Card className="flex flex-col p-2 md:flex-row">
                <img src="/me.jpeg" className="rounded-lg md:w-1/2 " />
                <table className="w-1/2 h-full m-auto">
                  <thead>
                    <tr>
                      <th className="text-left">Likes</th>
                      <td>121</td>
                    </tr>
                    <tr>
                      <th className="text-left">Comments</th>
                      <td>24</td>
                    </tr>
                  </thead>
                </table>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
