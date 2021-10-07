import cn from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from '@/components/ui/Button';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import { useUser } from '@/utils/useUser';
import { Switch } from '@headlessui/react';

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
      return router.push('/account');
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
        <div className="gap-4 sm:flex sm:flex-col sm:align-center">
          <h1 className="max-w-4xl text-base text-4xl font-extrabold sm:text-8xl">
            One plan,
            <br /> all the features.
          </h1>
          <Switch.Group>
            <div className="flex flex-col justify-center ">
              <Switch.Label className="hidden py-4 text-2xl text-left sm:text-4xl">
                Billing Interval
              </Switch.Label>
              <div className="flex items-center gap-4">
                <span className="text-xl sm:text-2xl">Monthly</span>
                <Switch
                  checked={billingInterval === 'month'}
                  onChange={() =>
                    billingInterval === 'year'
                      ? setBillingInterval('month')
                      : setBillingInterval('year')
                  }
                  className={`${
                    billingInterval === 'month' ? 'bg-gray-900' : 'bg-gray-900'
                  } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-0 `}
                >
                  <span
                    className={`${
                      billingInterval === 'month'
                        ? 'translate-x-1'
                        : 'translate-x-6'
                    } inline-block w-4 h-4 transform bg-blue rounded-full transition-transform`}
                  />
                </Switch>
                <span
                  className="relative"
                  className="flex items-center content-center justify-center gap-2 text-xl sm:text-2xl "
                >
                  Yearly
                  <span className="flex">
                    <img src="./arrow.svg" className="transform rotate-180" />
                    <p className="text-sm md:text-2xl md:whitespace-nowrap font-hand">
                      Save 2 months
                    </p>
                  </span>
                </span>
              </div>
            </div>
          </Switch.Group>
        </div>
        <div className="grid gap-6 py-6 sm:grid-cols-4">
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
                className={cn('rounded-lg shadow-xl', {
                  '': subscription
                    ? product.name === subscription?.prices?.products.name
                    : product.name === 'Freelancer'
                })}
              >
                <div className="">
                  <div className="p-6 rounded-lg bg-secondary-2">
                    <h2 className="my-4 text-base text-2xl font-semibold leading-6 tracking-wider">
                      {product.name}
                    </h2>
                    <p className="">
                      <span className="text-base text-3xl font-bold">
                        {priceString}
                      </span>
                      <span className="text-base font-medium text-accents-8">
                        /{billingInterval}
                      </span>
                    </p>
                    <p className="pt-4 text-sm font-semibold">
                      {product.description
                        ? product.price.description
                        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
                    </p>
                  </div>
                  <div className="flex flex-col p-6 ">
                    <Button
                      variant="slim"
                      type="button"
                      disabled={session && !userLoaded}
                      loading={priceIdLoading === price.id}
                      onClick={() => handleCheckout(price.id)}
                      className="block w-full py-2 text-sm font-semibold text-center text-white rounded-md hover:bg-gray-900"
                    >
                      {product.name === subscription?.prices?.products.name
                        ? 'Manage'
                        : 'Subscribe'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
