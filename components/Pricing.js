import cn from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Logo from '@/components/icons/Logo';
import Button from '@/components/ui/Button';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import { useUser } from '@/utils/useUser';

function Check() {
  return (
    <svg id="check" viewBox="0 0 20 16" className="h-4 m-auto">
      <path
        fill="none"
        fill-rule="evenodd"
        stroke="#37b679"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        d="M468 1447L475 1455 484 1443"
        transform="translate(-466 -1441)"
      ></path>
    </svg>
  );
}

function Cross() {
  return (
    <svg id="cross" viewBox="0 0 16 16" className="h-4 m-auto">
      <g
        fill="none"
        fill-rule="evenodd"
        stroke="#da3c3c"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      >
        <path d="M0 12L12 0" transform="translate(2 2)"></path>
        <path
          d="M0 12L12 0"
          transform="translate(2 2) matrix(-1 0 0 1 12 0)"
        ></path>
      </g>
    </svg>
  );
}

export default function Pricing({ products }) {
  const router = useRouter();
  const [billingInterval, setBillingInterval] = useState('month');
  const [priceIdLoading, setPriceIdLoading] = useState();
  const { session, userLoaded, subscription } = useUser();

  const handleCheckout = async (price) => {
    setPriceIdLoading(price.id);
    if (!session) {
      return router.push('/signin');
    }
    if (subscription) {
      return routxxser.push('/account');
    }

    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price },
        token: session.access_token
      });

      const stripe = await getStripe();
      stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert(error.message);
    } finally {
      setPriceIdLoading(false);
    }
  };

  if (!products.length)
    return (
      <section className="bg-primary" id="pricing">
        <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center"></div>
          <p className="text-6xl font-extrabold text-white sm:text-center sm:text-6xl">
            No subscription pricing plans found. Create them in your{' '}
            <a
              className="underline text-pink"
              href="https://dashboard.stripe.com/products"
              rel="noopener noreferrer"
              target="_blank"
            >
              Stripe Dashboard
            </a>
            .
          </p>
        </div>
      </section>
    );

  return (
    <section className="bg-primary" id="pricing">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-base text-4xl font-extrabold sm:text-center sm:text-6xl">
            Pricing tailored to you.
          </h1>
          <div className="relative self-center mt-6 bg-primary-2 rounded-lg p-0.5 flex sm:mt-8 ">
            <button
              onClick={() => setBillingInterval('month')}
              type="button"
              className={`${
                billingInterval === 'month'
                  ? 'relative w-1/2 bg-accents-1 border-accents-0 shadow-sm text-white'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-gray-700'
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingInterval('year')}
              type="button"
              className={`${
                billingInterval === 'year'
                  ? 'relative w-1/2 bg-accents-1 border-accents-0 shadow-sm text-white'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-gray-700'
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8`}
            >
              Yearly billing
              <p
                className={`${
                  billingInterval === 'year' ? 'bg-blue text-gray-800' : 'hidden'
                } absolute -top-6 -right-16  px-2 py-1 rounded`}
              >
                Two months discount
              </p>
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {products.map((product) => {
            const price = product.prices.find(
              (price) => price.interval === billingInterval
            );
            const priceString = new Intl.NumberFormat('es-ES', {
              style: 'currency',
              currency: price.currency,
              minimumFractionDigits: 2
            }).format(price.unit_amount / 100);
            return (
              <div
                key={product.id}
                className={cn(
                  'rounded-lg shadow-sm divide-y divide-accents-2 bg-primary-2 ',
                  {
                    '': subscription
                      ? product.name === subscription?.prices?.products.name
                      : product.name === 'Freelancer'
                  }
                )}
              >
                <div className="p-6">
                  <div>
                    <h2 className="text-base text-2xl font-semibold leading-6">
                      {product.name}
                    </h2>
                    <p className="mt-4 text-base">{product.description}</p>
                    <p className="mt-8">
                      <span className="text-base text-4xl font-bold">
                        {priceString}
                      </span>
                      <span className="text-base font-medium text-accents-8">
                        /{billingInterval}
                      </span>
                    </p>
                  </div>
                  <Button
                    variant="slim"
                    type="button"
                    disabled={session && !userLoaded}
                    loading={priceIdLoading === price.id}
                    onClick={() => handleCheckout(price.id)}
                    className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white rounded-md hover:bg-gray-900"
                  >
                    {product.name === subscription?.prices?.products.name
                      ? 'Manage'
                      : 'Subscribe'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-4">
        <div className="relative p-4 overflow-x-auto border shadow-lg rounded-2xl">
          <h1 className="mb-4 font-extrabold text-gray-500 uppercase lg:hidden">
            Scroll to check all features →
          </h1>
          <div className="relative table max-w-full overflow-x-auto">
            <div className="table-header-group">
              <div className="table-cell text-lg font-semibold text-gray-800">
                Breakdown of features
              </div>
              {products.map((product) => {
                const price = product.prices.find(
                  (price) => price.interval === billingInterval
                );
                const priceString = new Intl.NumberFormat('es-ES', {
                  style: 'currency',
                  currency: price.currency,
                  minimumFractionDigits: 2
                }).format(price.unit_amount / 100);

                return (
                  <div
                    key={product.id}
                    className={cn('table-cell text-center', {
                      '': subscription
                        ? product.name === subscription?.prices?.products.name
                        : product.name === 'Freelancer'
                    })}
                  >
                    <span className="text-xl font-bold capitalize ">
                      {product.name}
                    </span>
                    <span className="text-lg text-gray-500">
                      {' '}
                      <span>⤳</span> {priceString}/{billingInterval}
                    </span>
                  </div>
                );
              })}
            </div>
            <br />
            <div className="table-column-group">
              <div className="table-column">Free</div>
              <div className="table-column">Basic</div>
              <div className="table-column">Advanced</div>
              <div className="table-column">Pro</div>
            </div>
            <div className="table-row-group font-medium text-gray-700 ">
              {/*Dashboard*/}
              <div className="table-row h-12 ">
                <div className="table-cell">Stats Dashboard</div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
              </div>
              {/*Embeds*/}
              <div className="table-row h-12">
                <div className="table-cell">Stats Embeds</div>
                <div className="table-cell text-center">1️</div>
                <div className="table-cell text-center">5</div>
                <div className="table-cell text-center">15</div>
                <div className="table-cell text-center">∞</div>
              </div>
              {/*Autopublish Content*/}
              <div className="table-row h-12">
                <div className="table-cell">Autopublish Content</div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
              </div>
              {/*Links*/}
              <div className="table-row h-12">
                <div className="table-cell">Links</div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
              </div>
              {/*Growth Assistant*/}
              <div className="table-row h-12">
                <div className="table-cell">Growth Assistant</div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
              </div>
              {/*WP*/}
              <div className="table-row h-12">
                <div className="table-cell">WP Posts & Stories</div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
              </div>
              {/*Potential Ambassador Identifier*/}
              <div className="table-row h-12">
                <div className="table-cell">
                  Potential Ambassador Identifier
                </div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
              </div>
              {/*Giveaways*/}
              <div className="table-row h-12">
                <div className="table-cell">Giveaways</div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Cross />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
              </div>
              {/*Documentation*/}
              <div className="table-row h-12">
                <div className="table-cell">Documentation</div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
              </div>
              {/*Support*/}
              <div className="table-row h-12">
                <div className="table-cell">Support</div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
                <div className="table-cell">
                  <Check />
                </div>
              </div>
            </div>
            <div className="table-footer-group items-center place-items-center ">
              <div className="table-cell text-lg font-medium tracking-wide ">
                <span className="text-gray-700">Try </span>
                <span className="text-base">
                  <Logo />
                </span>
              </div>
              {products.map((product) => {
                const price = product.prices.find(
                  (price) => price.interval === billingInterval
                );
                return (
                  <div
                    key={product.id}
                    className={cn('table-cell', {
                      '': subscription
                        ? product.name === subscription?.prices?.products.name
                        : product.name === 'Freelancer'
                    })}
                  >
                    <Button
                      variant="slim"
                      type="button"
                      disabled={session && !userLoaded}
                      loading={priceIdLoading === price.id}
                      onClick={() => handleCheckout(price.id)}
                      className="mx-8 text-sm font-semibold text-center text-white rounded-md w-8/10 hover:underline"
                    >
                      Activate {product.name}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
