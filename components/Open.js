import MacOS from '@/components/ui/MacOS';
import PlaceholderChart from './ui/PhChart';

export function Stack() {
  return (
    <MacOS title="The Stack" close="/" min="#" full="#">
      <div className="flex flex-col w-full gap-4 p-4 font-semibold border rounded-lg shadow lg:w-2/5 justify-evenly">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">
          NextJS
        </h1>
        <a href="https://nextjs.org">
          <img src="./stack/nextjs.svg" className="h-40 m-auto" />
        </a>
      </div>
      <div className="flex flex-col w-full gap-4 p-4 font-semibold border rounded-lg shadow lg:w-2/5 justify-evenly">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">
          Supabase
        </h1>
        <a href="https://supabase.io">
          <img src="./stack/supabase.svg" className="h-40 m-auto" />
        </a>
      </div>
      <div className="flex flex-col w-full gap-4 p-4 font-semibold border rounded-lg shadow lg:w-2/5 justify-evenly">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">
          Stripe
        </h1>
        <a href="https://stripe.com">
          <img src="./stack/stripe.svg" className="h-40 m-auto" />
        </a>
      </div>
      <div className="flex flex-col w-full gap-4 p-4 font-semibold border rounded-lg shadow lg:w-2/5 justify-evenly">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">
          ChartJS / ApexCharts
        </h1>
        <a href="https://chartjs.org">
          <img src="./stack/chartjs.svg" className="h-40 m-auto" />
        </a>
      </div>
      <div className="flex flex-col w-full gap-4 p-4 font-semibold border rounded-lg shadow lg:w-2/5 justify-evenly">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">
          Vercel
        </h1>
        <a href="https://vercel.com">
          <img src="./stack/vercel.svg" className="h-40 m-auto " />
        </a>
      </div>
    </MacOS>
  );
}

export function Gear() {
  return (
    <MacOS title="My Gear" close="/#">
      <div className="flex flex-col w-full gap-4 p-4 font-semibold border rounded-lg shadow lg:w-2/5 justify-evenly">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">
          MacBook Pro M1
        </h1>
        <div className="h-40 overflow-hidden ">
          <img src="/stack/MBPro.jpeg" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 p-4 font-semibold border rounded-lg shadow lg:w-2/5 justify-evenly">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">
          iPhone X 64Gb
        </h1>
        <div className="h-40 overflow-hidden">
          <img src="/stack/iPhoneX.png" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 p-4 font-semibold border rounded-lg shadow lg:w-2/5 justify-evenly">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">
          Logitech MX Master 2s
        </h1>
        {/*        
        <div className="h-40 overflow-hidden">
          <img src="/cardImage.png" />
        </div>
        */}
      </div>
      <div className="flex flex-col w-full gap-4 p-4 font-semibold border rounded-lg shadow lg:w-2/5 justify-evenly">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">
          BenQ GL2580HM 24,5”
        </h1>
        {/*        
        <div className="h-40 overflow-hidden">
          <img src="/cardImage.png" />
        </div>
        */}
      </div>
    </MacOS>
  );
}

export function MRR() {
  return (
    <MacOS title="MRR" close="/#">
      <div className="flex flex-col w-full h-auto gap-4 p-4 font-semibold border rounded-lg shadow justify-evenlys">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">
          Monthly Recurrent Revenue
        </h1>
        <div className="flex flex-col justify-around lg:flex-row">
          <div className="flex flex-row h-10 text-2xl align-middle justify-evenly">
            Current:
            <span className="text-2xl font-normal align-middle text-green">
              200$
            </span>
          </div>
          <div className="flex flex-row h-10 text-2xl align-middle justify-evenly">
            Max:
            <span className="text-2xl font-normal align-middle text-green">
              205$
            </span>
          </div>
          <div className="flex flex-row h-10 text-2xl align-middle justify-evenly">
            Costs:
            <span className="text-2xl font-normal align-middle text-red">
              20$
            </span>
          </div>
          <div className="flex flex-row h-10 text-2xl align-middle justify-evenly">
            Benefit:
            <span className="text-2xl font-normal align-middle text-green">
              180$
            </span>
          </div>
        </div>
        <div className="hidden md:block">
          <PlaceholderChart />
        </div>
      </div>
    </MacOS>
  );
}
