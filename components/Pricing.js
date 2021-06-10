import cn from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from '@/components/ui/Button';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import { useUser } from '@/utils/useUser';
import { Disclosure, Switch } from '@headlessui/react';
import {
  XIcon,
  CheckIcon,
  ChevronDoubleDownIcon
} from '@heroicons/react/outline';

const included = {
  Free: {
    StatsDashboard: true,
    Accounts: '1',
    Embeds: '1',
    AutoPublish: false,
    LinksPage: false,
    WPConnection: false,
    Growth: false,
    Ambassador: false,
    Giveaways: false
  },
  Basic: {
    StatsDashboard: true,
    Accounts: '3',
    Embeds: '5',
    AutoPublish: true,
    LinksPage: true,
    WPConnection: false,
    Growth: false,
    Ambassador: false,
    Giveaways: false
  },
  Advanced: {
    StatsDashboard: true,
    Accounts: '5',
    Embeds: '15',
    AutoPublish: true,
    LinksPage: true,
    WPConnection: true,
    Growth: true,
    Ambassador: false,
    Giveaways: false
  },
  Pro: {
    StatsDashboard: true,
    Accounts: '10',
    Embeds: '∞',
    AutoPublish: true,
    LinksPage: true,
    WPConnection: true,
    Growth: true,
    Ambassador: true,
    Giveaways: true
  }
};

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
        <div className="gap-4 sm:flex sm:flex-col sm:align-center">
          <h1 className="max-w-4xl text-base text-4xl font-extrabold sm:text-8xl">
            Flexible pricing tailored to you.
          </h1>
          <Switch.Group>
            <div className="flex flex-col justify-center ">
              <Switch.Label className="py-4 text-2xl text-left sm:text-4xl">
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
                <span className="relative" className="text-xl sm:text-2xl">
                  Yearly{' '}
                  <span
                    className={`${
                      billingInterval === 'year'
                        ? 'bg-blue text-gray-800 '
                        : 'hidden'
                    }  px-2 py-1 rounded absolute w-auto text-lg sm:text-xl whitespace-nowrap ml-2 my-auto transform animate-bounce `}
                  >
                    Two months off
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
                    <div className="relative">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex items-center justify-between w-full focus:ring-0 focus:outline-none">
                              <h3 className="text-lg font-semibold">
                                Features included?
                              </h3>
                              <ChevronDoubleDownIcon
                                className={`${
                                  open ? 'transform rotate-180' : ''
                                } h-5`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="absolute flex flex-col w-full gap-1 p-4 mt-4 list-none border rounded-lg shadow bg-primary">
                              <li
                                className={`${
                                  included[product.name].StatsDashboard
                                    ? ''
                                    : 'hidden'
                                }`}
                              >
                                Dashboard
                              </li>
                              <li
                                className={`${
                                  included[product.name].Embeds ? '' : 'hidden'
                                }`}
                              >
                                {included[product.name].Embeds}{' '}
                                {included[product.name].Embeds > 1
                                  ? 'Embeds'
                                  : 'Embed'}
                              </li>
                              <li
                                className={`${
                                  included[product.name].Accounts
                                    ? ''
                                    : 'hidden'
                                }`}
                              >
                                {included[product.name].Accounts}{' '}
                                {included[product.name].Accounts > 1
                                  ? 'Accounts'
                                  : 'Account'}
                              </li>
                              <li
                                className={`${
                                  included[product.name].AutoPublish
                                    ? ''
                                    : 'hidden'
                                }`}
                              >
                                {included[product.name].AutoPublish
                                  ? 'Autopublish'
                                  : ''}
                              </li>
                              <li
                                className={`${
                                  included[product.name].LinksPage
                                    ? ''
                                    : 'hidden'
                                }`}
                              >
                                {included[product.name].LinksPage
                                  ? 'Links page'
                                  : ''}
                              </li>
                              <li
                                className={`${
                                  included[product.name].WPConnection
                                    ? ''
                                    : 'hidden'
                                }`}
                              >
                                {included[product.name].WPConnection
                                  ? 'WP Connection'
                                  : ''}
                              </li>
                              <li
                                className={`${
                                  included[product.name].Growth ? '' : 'hidden'
                                }`}
                              >
                                {included[product.name].Growth
                                  ? 'Growth Assistant'
                                  : ''}
                              </li>
                              <li
                                className={`${
                                  included[product.name].Ambassador
                                    ? ''
                                    : 'hidden'
                                }`}
                              >
                                {included[product.name].Ambassador
                                  ? 'Ambassador Identifier'
                                  : ''}
                              </li>
                              <li
                                className={`${
                                  included[product.name].Giveaways
                                    ? ''
                                    : 'hidden'
                                }`}
                              >
                                {included[product.name].Giveaways
                                  ? 'Giveaways'
                                  : ''}
                              </li>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
