import Phone from './ui/iOS';
// Make a request
import Link from 'next/link';
import Button from '@/components/ui/Button';
import MacOS from './ui/MacOS';
import { TerminalIcon } from '@heroicons/react/outline';

export default function Features({ features }) {
  return (
    <section className="min-h-screen py-8 bg-primary" id="features">
      <div className="h-screen overflow-hidden">
        <div className="flex flex-col max-w-6xl gap-6 px-4 py-8 mx-auto sm:px-6d lg:px-8">
          <h1 className="max-w-2xl m-auto text-base text-4xl font-semibold text-left lg:text-center lg:text-7xl">
            Social media analytics made easy.
          </h1>
          <hr className="w-2/3 m-auto lg:w-1/3" />
          <p className="hidden max-w-xl m-auto text-left text-gray-500 lg:block text-md lg:text-xl">
            Adivi.as is a simple all-in-one social media toolbox.
            <br />
            Features such as analytics, post schedule, links page...
          </p>
          <hr className="invisible hidden lg:block" />
          <div className="grid grid-cols-2 m-auto gap-y-2 gap-x-4">
            <a className="px-4 py-2 font-medium text-center rounded-lg bg-blue">
              Try it for free
            </a>
            <Link href="/live">
              <a className="px-4 py-2 font-medium text-center bg-gray-800 rounded-lg text-blue">
                Live demo
              </a>
            </Link>
            <p className="col-span-2 text-sm text-center text-gray-500">
              No credit card required.
            </p>
          </div>
        </div>
        <div className="max-w-6xl m-auto">
          <MacOS className="hidden lg:block">
            <img src="/Adivias.jpeg" className="blur-lg" />
          </MacOS>
          <Phone className="block lg:hidden">
            <iframe src="/app" className="w-full h-full mt-6" />
          </Phone>
        </div>
      </div>
      <div className="max-w-6xl p-5 m-auto ">
        <h1 className="m-auto text-4xl italic text-center ">
          Work in progress...
        </h1>
        <p className="text-2xl text-center">
          🚧{' '}
          <span className="transform">
            Caution, You are accesing a construiction zone.
          </span>{' '}
          🚧
        </p>
      </div>
    </section>
  );
}
