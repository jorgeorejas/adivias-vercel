import Phone from './ui/iOS';

import Link from 'next/link';

import MacOS from './ui/MacOS';
import Button from './ui/Button';

export default function Main() {
  return (
    <section className="min-h-screen py-8 bg-primary">
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
              <a className="px-4 py-2 font-medium text-center rounded-lg bg-blue">
                Live demo
              </a>
            </Link>
            <Link href="/features">
              <Button className="col-span-2" variant="slim">
                Take me to the features
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center m-auto lg:p-8 lg:max-w-6xl">
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
