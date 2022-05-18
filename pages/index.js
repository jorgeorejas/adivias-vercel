import Features from '@/components/theFeatures';
import Pricing from '@/components/Pricing';
import Cookies from '@/components/ui/Cookies';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import Layout from '@/components/Layout';
import Logo from '@/components/icons/Logo';
import Button from '@/components/ui/Button';

export default function PricingPage({ products, thefeatures }) {
  return (
    <>
    {/*<div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="absolute z-20 flex flex-col gap-4 text-center top-36 h-1/3 justify-evenly">
          <Logo className="text-6xl" />
          <h1 className="px-4 py-2 font-mono text-base text-5xl italic font-semibold bg-opacity-50 bg-blue">
            Coming soon...
          </h1>
          <a href="https://twitter.com/adivi_as" target="_blank">
            <Button variant="slim" className="w-10/12 mx-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="https://www.w3.org/2000/svg"
                className="mx-4"
              >
                <path d="M4.51277 15.2132C5.8263 15.2571 7.13531 15.0373 8.36244 14.5667C9.58958 14.0962 10.7099 13.3844 11.6573 12.4735C12.6047 11.5625 13.3598 10.471 13.8781 9.26321C14.3964 8.05547 14.6674 6.75608 14.6749 5.44184C15.2769 4.69692 15.7239 3.83919 15.9896 2.91906C16 2.84637 16.0079 2.76948 15.985 2.69768C15.9622 2.62587 15.9191 2.56219 15.8609 2.51432C15.8027 2.46645 15.7319 2.43643 15.657 2.42786C15.5821 2.41929 15.5064 2.43255 15.4389 2.46603C15.124 2.61762 14.7694 2.66659 14.4252 2.60603C14.081 2.54547 13.7644 2.37845 13.5202 2.12848C13.2083 1.78699 12.8311 1.51158 12.4109 1.31855C11.9907 1.12552 11.536 1.0188 11.0737 1.00472C10.6115 0.990633 10.1511 1.06947 9.71995 1.23656C9.28875 1.40366 8.89548 1.6556 8.56343 1.97746C8.10879 2.41776 7.77579 2.96818 7.59679 3.57523C7.41779 4.18228 7.39887 4.82532 7.54188 5.44184C4.56607 5.6195 2.52298 4.2071 0.888503 2.2706C0.839401 2.215 0.775169 2.17489 0.70365 2.15519C0.632132 2.13548 0.556424 2.13703 0.48577 2.15964C0.415116 2.18225 0.352574 2.22494 0.305783 2.2825C0.258991 2.34007 0.229975 2.41001 0.222277 2.4838C-0.0890997 4.21103 0.135516 5.99219 0.865957 7.58804C1.5964 9.18389 2.79768 10.518 4.30847 11.4112C3.29548 12.573 1.87293 13.2986 0.337756 13.4366C0.25551 13.4502 0.179587 13.4892 0.120612 13.5481C0.0616375 13.6071 0.022563 13.683 0.00885718 13.7652C-0.00484864 13.8474 0.00750032 13.9319 0.0441757 14.0068C0.0808511 14.0816 0.140017 14.1432 0.213394 14.1827C1.54897 14.8502 3.01974 15.2027 4.51277 15.2132Z"></path>
              </svg>
              Follow on Twitter
            </Button>
          </a>
        </div>
        <img
          src="./cardImage.png"
          className="w-2/3 transform border shadow-2xl mt-96 rounded-2xl opacity-40 -rotate-12"
        />
      </div>*/}
      <Layout>
        <Features features={thefeatures} />
        <Pricing products={products} />
        <Cookies />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const products = await getActiveProductsWithPrices();

  return {
    props: {
      products
    },
    revalidate: 60
  };
}
