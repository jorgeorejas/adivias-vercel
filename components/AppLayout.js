import {
  ChevronDownIcon,
  CodeIcon,
  HomeIcon,
  LinkIcon,
  LogoutIcon,
  PresentationChartLineIcon,
  SearchIcon,
  CheckIcon,
  UserIcon,
  XIcon,
  CogIcon,
  KeyIcon,
  MenuIcon,
  SupportIcon,
  SelectorIcon
} from '@heroicons/react/outline';
import { Listbox, Popover, Transition } from '@headlessui/react';
import Logo from '@/components/icons/Logo';
import { useUser } from '@/utils/useUser';
import Link from 'next/link';
import React from 'react';
import { useState, Fragment } from 'react';
import Head from 'next/head';
const lapses = [
  { id: 1, name: '1 Day', slug: '1d' },
  { id: 2, name: '1 Week', slug: '1w' },
  { id: 3, name: '1 Month', slug: '1m' },
  { id: 4, name: 'Month to Date', slug: 'MtD' },
  { id: 5, name: 'Quarter to Date', slug: 'QtD' },
  { id: 6, name: 'Year to Date', slug: 'YtD' },
  { id: 7, name: 'All', slug: 'All' }
];

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
          <div className="relative w-1/2 h-full mt-0">
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

function LapsesSelector() {
  const [selectedLapse, setSelectedLapse] = useState(lapses[0]);
  return (
    <Listbox value={selectedLapse.id} onChange={setSelectedLapse} className="">
      {({ open }) => (
        <>
          <div className="relative w-1/2 h-full mt-0">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-lg cursor-click focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 text-base truncate ">
                  {selectedLapse.name}
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
                {lapses.map((lapse) => (
                  <Listbox.Option
                    key={lapse.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'text-black bg-blue text-base border '
                          : 'text-base',
                        'cursor-default select-none relative '
                      )
                    }
                    value={lapse}
                  >
                    {({ active, selected }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              ' block w-full px-2 py-1 ml-3'
                            )}
                          >
                            {lapse.name}
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

export default function AppLayout({ children, title }) {
  const { userDetails } = useUser();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>Adivias | {title}</title>
      </Head>
      <div className="flex flex-row w-screen h-auto bg-secondary-2">
        <section
          className={`${
            navbarOpen ? 'absolute z-30 top-16 md:block' : ' md:grid hidden'
          }  w-screen md:h-screen md:w-2/12 grid-rows-12 bg-secondary-2 `}
        >
          <div className="flex-row items-center justify-center hidden w-full row-span-1 p-4 md:flex ">
            <Logo className="text-3xl" />
          </div>
          <div className="row-span-1 " />
          <div className="grid grid-rows-4 row-span-5 ">
            <Link href="/app/">
              <a
                className={`${
                  title == 'Dashboard'
                    ? 'border-blue bg-blueish  md:border-r-4 md:border-b-0 border-b-4'
                    : ''
                } flex flex-row items-center justify-start w-full row-span-1 p-4 font-semibold   text-md gap-x-3  `}
              >
                <HomeIcon className="w-6 text-base" />
                Dashboard
              </a>
            </Link>
            <Link href="/app/stats">
              <a
                className={`${
                  title == 'Stats'
                    ? 'border-blue bg-blueish  md:border-r-4 md:border-b-0 border-b-4'
                    : ''
                } flex flex-row items-center justify-start w-full row-span-1 p-4 font-semibold   text-md gap-x-3  `}
              >
                <PresentationChartLineIcon className="w-6 text-base" />
                Stats
              </a>
            </Link>
            <Link href="/app/accounts">
              <a
                className={`${
                  title == 'Accounts'
                    ? 'border-blue bg-blueish  md:border-r-4 md:border-b-0 border-b-4'
                    : ''
                } flex flex-row items-center justify-start w-full row-span-1 p-4 font-semibold   text-md gap-x-3  `}
              >
                <UserIcon className="w-6 text-base" />
                Connected Accounts
              </a>
            </Link>
            <Link href="/app/links">
              <a
                className={`${
                  title == 'Links'
                    ? 'border-blue bg-blueish  md:border-r-4 md:border-b-0 border-b-4'
                    : ''
                } flex flex-row items-center justify-start w-full row-span-1 p-4 font-semibold   text-md gap-x-3  `}
              >
                <LinkIcon className="w-6 text-base" />
                Links
              </a>
            </Link>
          </div>
          <div className="row-span-3 p-4 " />
          <div className="flex flex-row items-center justify-start w-full row-span-1 p-4 text-md gap-x-3">
            <SupportIcon className="w-6" />
            Support
          </div>
          <div className="flex flex-row items-center justify-start w-full row-span-1 p-4 text-md gap-x-3">
            <LogoutIcon className="w-6" />
            Log Out
          </div>
        </section>
        <section className="flex flex-col content-center w-screen h-auto px-4 md:h-screen md:w-10/12 bg-primary">
          <div className="flex flex-col items-center justify-between w-full ">
            <div className="flex flex-row items-center justify-between w-full h-16 ">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md outline-none hover:bg-blue-600 lg:hidden "
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <MenuIcon className="w-6 h-6" />
              </button>
              <Logo className="md:hidden" />
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="flex flex-row items-center gap-2 focus:border-0 focus:ring-0 focus:outline-none">
                      <img
                        className="w-12 h-12 rounded-xl"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/50/Alex_Turner_of_the_Arctic_Monkeys.jpg"
                      ></img>
                      <p className="hidden font-semibold md:block">
                        {userDetails
                          ? `${userDetails?.full_name ?? ''}`
                          : 'Alex Turner'}
                      </p>
                      <div className="flex items-center w-6 h-6 rounded-md bg-secondary-2">
                        <ChevronDownIcon
                          className={`${
                            open ? 'hidden' : 'w-4 h-4 mx-auto my-auto '
                          }`}
                        />
                        <XIcon
                          className={`${
                            open ? 'w-4 h-4 mx-auto my-auto' : 'hidden'
                          }`}
                        />
                      </div>
                    </Popover.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Popover.Panel className="absolute right-0 z-10 w-screen px-4 m-auto -mr-4 transform md:mt-3 md:-mr-0 sm:px-0 lg:max-w-lg ">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            <a className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 p-2">
                                <KeyIcon className="w-6 h-6" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  APIs
                                </p>
                                <p className="text-sm text-gray-500">
                                  Manage your API keys.
                                </p>
                              </div>
                            </a>
                            <a className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 p-2">
                                <CodeIcon className="w-6 h-6" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  Embeds
                                </p>
                                <p className="text-sm text-gray-500">
                                  Manage your stats embeds.
                                </p>
                              </div>
                            </a>
                            <Link href="/account">
                              <a className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 p-2">
                                  <UserIcon className="w-6 h-6" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">
                                    Account
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    Manage your account info.
                                  </p>
                                </div>
                              </a>
                            </Link>
                            <a className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 p-2">
                                <CogIcon className="w-6 h-6" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  Settings
                                </p>
                                <p className="text-sm text-gray-500">
                                  Manage your dashboard options.
                                </p>
                              </div>
                            </a>
                            <hr className="col-span-2" />
                            <div className="grid grid-cols-2 col-span-2 -m-4 md:grid-cols-4 whitespace-nowrap">
                              <a className="flex items-center p-2 transition duration-150 ease-in-out rounded-lg md:col-start-3 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 p-2">
                                  <SupportIcon className="w-6 h-6" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                  Support
                                </p>
                              </a>
                              <a className="flex items-center p-2 transition duration-150 ease-in-out rounded-lg md:col-start-4 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 p-2">
                                  <LogoutIcon className="w-6 h-6" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                  Log Out
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
            <div className="flex flex-col items-center justify-between w-full h-auto border-b md:gap-4 md:flex-row md:h-1/2 ">
              <div className="md:w-1/2">
                <h1 className="mr-4 text-2xl font-semibold">{title}</h1>
              </div>
              <div className="relative flex w-full gap-4 my-2 md:w-1/2">
                <Selector />
                <LapsesSelector />
              </div>
            </div>
          </div>
          {children}
        </section>
      </div>
    </>
  );
}
