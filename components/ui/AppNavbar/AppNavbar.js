import Head from 'next/head';
import Logo from '@/components/icons/Logo';
import React from 'react';
import Button from '../Button';
import { useRouter } from 'next/router';
import { Instagram } from '@/components/icons/icons';

import { Fragment, useState } from 'react';
import { Listbox, Transition, Menu } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const span = [
  { id: 0, name: '1 Day', slug: '1d' },
  { id: 1, name: '1 Week', slug: '1w' },
  { id: 2, name: '1 Month', slug: '4w' },
  { id: 3, name: 'Month to Day', slug: 'Mtd' },
  { id: 4, name: 'Quarter to Day', slug: 'Qtd' },
  { id: 5, name: 'Year to Day', slug: 'Ytd' },
  { id: 6, name: 'All', slug: 'All' }
];
function TimeSpan() {
  const [selectedSpan, setSelectedSpan] = useState(span[0]);
  return (
    <Listbox value={selectedSpan} onChange={setSelectedSpan} className="">
      {({ open }) => (
        <>
          <div className="relative mt-0">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-lg cursor-click focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue sm:text-sm">
              <span className="flex items-center">
                <span className="hidden ml-3 text-base truncate md:block">
                  {selectedSpan.name}
                </span>
                <span className="block ml-3 text-base truncate md:hidden">
                  {selectedSpan.slug}
                </span>
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                {span.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'text-black bg-blue text-base border '
                          : 'text-base',
                        'cursor-default select-none relative '
                      )
                    }
                    value={item}
                  >
                    {({ selectedSpan, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selectedSpan ? 'font-semibold' : 'font-normal',
                              ' block w-full px-2 py-1 ml-3'
                            )}
                          >
                            {item.name}
                          </span>
                        </div>

                        {selectedSpan ? (
                          <span
                            className={classNames(
                              active ? 'text-black' : 'text-blue',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

const social = [
  { id: 0, name: 'Instagram' },
  { id: 1, name: 'Twitter' },
  { id: 2, name: 'TikTok' },
  { id: 3, name: 'Facebook' },
  { id: 4, name: 'ClubHouse' },
  { id: 5, name: 'Website' }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Selector() {
  const [selected, setSelected] = useState(social[0]);
  return (
    <Listbox value={selected} onChange={setSelected} className="">
      {({ open }) => (
        <>
          <div className="relative h-full mt-0">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-lg cursor-click focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue sm:text-sm">
              <span className="flex items-center">
                <span className="block ml-3 text-base truncate">
                  {selected.name}
                </span>
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                {social.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'text-black bg-blue text-base border '
                          : 'text-base',
                        'cursor-default select-none relative '
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              ' block w-full px-2 py-1 ml-3'
                            )}
                          >
                            {item.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-black' : 'text-blue',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

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
        <div className="flex flex-row items-center justify-center">
          <button
            className="block p-3 mx-4 text-base rounded-lg ring-none md:hidden"
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

        <div className="flex flex-row justify-center gap-2 align-middle">
          <div className="block w-24 m-auto md:w-32">
            <TimeSpan />
          </div>
          <div className="hidden w-48 m-auto md:block">
            <Selector />
          </div>
          <div className="hidden m-auto md:block">
            <Button
              variant="slim"
              className="w-full"
              onClick={() => router.replace('/account')}
            >
              Account
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`${
          menu
            ? 'absolute w-full md:w-1/4 border-b md:border-r md:h-full bg-primary p-4'
            : 'hidden'
        }`}
      >
        <ul className="flex flex-col h-full gap-2 py-2 ">
          <div className="block my-auto md:hidden">
            <Selector />
          </div>
          <li className="text-2xl font-semibold">Toolbox</li>
          <ul className="pl-4 text-lg">
            <li>Dashboard</li>
            <li>Dashboard</li>
          </ul>
        </ul>
        <div className="block my-auto md:hidden">
          <Button
            variant="slim"
            className="w-full"
            onClick={() => router.replace('/account')}
          >
            Account
          </Button>
        </div>
      </div>
    </nav>
  );
}
