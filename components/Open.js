import MacOS from '@/components/ui/MacOS';
import Link from 'next/link';
export function Stack() {
  return (
    <MacOS title="The Stack" close="/" min="#" full="#">
      <div className="flex flex-col w-full p-4 font-semibold border rounded shadow justify-evenly lg:flex-row">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">NextJS</h1>
        <Link href="https://nextjs.org">
          <a>
            <img src="./stack/nextjs.svg" className="h-40 m-auto" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col w-full p-4 font-semibold border rounded shadow justify-evenly lg:flex-row">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">Supabase</h1>
        <Link href="https://supabase.io">
          <a>
            <img src="./stack/supabase.svg" className="h-40 m-auto" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col w-full p-4 font-semibold border rounded shadow justify-evenly lg:flex-row">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">Stripe</h1>
        <Link href="https://stripe.com">
          <a>
            <img src="./stack/stripe.svg" className="h-40 m-auto" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col w-full p-4 font-semibold border rounded shadow justify-evenly lg:flex-row">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">
          ChartJS / ApexCharts
        </h1>
        <Link href="https://chartjs.org">
          <a>
            <img src="./stack/chartjs.svg" className="h-40 m-auto" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col w-full p-4 font-semibold border rounded shadow justify-evenly lg:flex-row">
        <h1 className="my-auto text-base text-xl text-center lg:text-3xl">Vercel</h1>
        <Link href="https://vercel.com">
          <a>
            <img src="./stack/vercel.svg" className="h-40 m-auto " />
          </a>
        </Link>
      </div>
    </MacOS>
  );
}

export function Gear() {
  return (
    <MacOS title="My Gear" close="/#">
      <div className="px-2 py-4 transition-shadow border rounded shadow hover:shadow-lg">
        <h1>Sint duis occaecat amet ea.</h1>
      </div>
    </MacOS>
  );
}

export function MRR() {
  return (
    <MacOS title="MRR" close="/#">
      <div className="px-2 py-4 transition-shadow border rounded shadow hover:shadow-lg">
        <h1>Sint duis occaecat amet ea.</h1>
      </div>
    </MacOS>
  );
}
