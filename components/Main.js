import Phone from './ui/iOS';

import Link from 'next/link';

import MacOS from './ui/MacOS';
import Button from './ui/Button';

export default function Main() {
  return (
    <section className="min-h-screen py-8">
      <div className="h-screen overflow-hidden">
        <div className="grid grid-cols-10 ">
          <div className="flex flex-col max-w-6xl col-span-6 gap-6 px-4 py-24 mx-auto sm:px-6d lg:px-8">
            <h1 className="max-w-2xl text-4xl font-semibold text-left text-gray-800 lg:text-left lg:text-5xl">
              Lorem ipsum sit amet.
              <br />
            </h1>
            <hr className="w-2/3 border-gray-400 lg:w-1/3" />
            <p className="hidden max-w-xl text-left text-gray-500 lg:block text-md lg:text-2xl ">
              Proident amet deserunt aliqua consectetur consequat exercitation
              incididunt adipisicing enim cupidatat.{' '}
            </p>
            <hr className="invisible hidden lg:block" />
            <div className="grid w-1/4 gap-y-2 gap-x-4">
              <Link href="/live">
                <a className="inline-flex items-center justify-center px-10 py-2 text-lg font-bold leading-6 text-center text-gray-800 normal-case transition duration-150 ease-in-out border border-transparent rounded-md shadow-md cursor-pointer whitespace-nowrap transform-none bg-blue">
                  <span className="invisible">Live demo</span>
                </a>
              </Link>
              <Link href="/features">
                <Button variant="slim" className="whitespace-nowrap">
                  <span className="invisible">Let's start!</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-2 rounded-lg ">
            <img src="/undraw/Agreement.svg" className="h-3/5" />
          </div>
        </div>
        <div className="flex flex-col justify-center invisible m-auto lg:p-8 lg:max-w-6xl">
          <MacOS className="hidden lg:block">
            <img src="/Adivias.jpeg" className="blur-lg" />
          </MacOS>
          <Phone className="block m-auto lg:hidden">
            <img src="/Adivias-mobile.png" className="blur-lg" />
          </Phone>
        </div>
      </div>
    </section>
  );
}
