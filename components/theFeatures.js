import MacOS from './ui/MacOS';
import Link from 'next/link';
// Make a request

export default function Features({ features }) {
  return (
    <section className=" bg-primary" id="features">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-col justify-between w-full p-2 lg:hidden rounded-xl bg-blue">
            <h1 class=" text-4xl font-extrabold text-justify ">
              All-in-one <br /> social media <br /> analytics <br />& toolbox
            </h1>
            <div className="flex flex-col flex-grow">
              <li className="flex-grow p-2 text-base font-medium list-none border-b border-black ">
                Stats
              </li>
              <li className="flex-grow p-2 text-base font-medium list-none border-b border-black ">
                Content publishing
              </li>
              <li className="flex-grow p-2 text-base font-medium list-none border-b border-black ">
                Links page
              </li>
              <li className="flex-grow p-2 text-base font-medium list-none border-b border-black ">
                Growth Assistant
              </li>
              <li className="flex-grow p-2 text-base font-medium list-none border-b border-black ">
                WP Posts & Stories
              </li>
              <li className="flex-grow p-2 text-base font-medium list-none border-b border-black ">
                Potential Ambassador Identifier
              </li>
              <li className="flex-grow p-2 text-base font-medium list-none border-b border-black ">
                <Link href="/features/#giveaways">
                  <a>Giveaways</a>
                </Link>
              </li>
            </div>
          </div>
        </div>
        <MacOS title="Features" full="/Features" className="hidden lg:block">
          <div className="flex flex-col justify-between w-full p-4 lg:flex-row rounded-xl bg-blue">
            <h1 class=" text-6xl font-extrabold ">
              All-in-one <br /> social media <br /> analytics <br />& toolbox
            </h1>
            <div className="flex flex-col items-end flex-grow">
              <li className="flex-grow w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                Stats
              </li>
              <li className="flex-grow w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                Content publishing
              </li>
              <li className="flex-grow w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                Links page
              </li>
              <li className="flex-grow w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                Growth Assistant
              </li>
              <li className="flex-grow w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                WP Posts & Stories
              </li>
              <li className="flex-grow w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                Potential Ambassador Identifier
              </li>
              <li className="flex-grow w-2/4 p-2 text-base font-medium list-none border-b border-black ">
                <Link href="/features/#giveaways">
                  <a>Giveaways</a>
                </Link>
              </li>
            </div>
          </div>
        </MacOS>
      </div>
    </section>
  );
}
