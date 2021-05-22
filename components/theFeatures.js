import Phone from './ui/iOS';
// Make a request
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Example from './Example';

export default function Features({ features }) {
  return (
    <section className="bg-primary" id="features">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6d lg:px-8">
        <div className="flex flex-col space-y-4 lg:flex lg:flex-row lg:justify-around ">
          <div className="flex flex-col items-center h-auto m-auto space-y-4">
            <h1 className="text-base text-6xl font-extrabold lg:text-8xl">
              All-in-one <br /> social media <br /> analytics <br />& toolbox
            </h1>
            <Link href="/">
              <Button className="w-8/12 m-auto">Take me to the features</Button>
            </Link>
          </div>
          <div className="h-48 overflow-hidden lg:h-auto ">
            <Phone>
              <Example />
            </Phone>
          </div>
        </div>
      </div>
    </section>
  );
}
