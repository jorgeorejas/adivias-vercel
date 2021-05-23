import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import LoadingDots from '@/components/ui/LoadingDots';
import Button from '@/components/ui/Button';
import { useUser } from '@/utils/useUser';
import { postData } from '@/utils/helpers';

function Card({ title, description, footer, children }) {
  return (
    <div className="w-full max-w-3xl m-auto my-8 border rounded-md border-accents-1 p">
      <div className="px-5 py-4">
        <h3 className="mb-1 text-2xl font-medium">{title}</h3>
        <p className="text-base">{description}</p>
        {children}
      </div>
      <div className="p-4 border-t border-base bg-primary-2 rounded-b-md">
        {footer}
      </div>
    </div>
  );
}
export default function Account() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userLoaded, user, session, userDetails, subscription } = useUser();

  useEffect(() => {
    if (!user) router.replace('/signin');
  }, [user]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    const { url, error } = await postData({
      url: '/api/create-portal-link',
      token: session.access_token
    });
    if (error) return alert(error.message);
    window.location.assign(url);
    setLoading(false);
  };

  const subscriptionName = subscription && subscription.prices.products.name;
  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription.prices.currency,
      minimumFractionDigits: 0
    }).format(subscription.prices.unit_amount / 100);

  return (
    <Layout>
      <section className="mb-32 bg-primary">
        <div className="max-w-6xl px-4 pt-8 pb-8 mx-auto sm:pt-24 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-4xl font-extrabold text-primary sm:text-center sm:text-6xl">
              Account
            </h1>
            <p className="max-w-2xl m-auto mt-5 text-base text-xl sm:text-center sm:text-2xl">
              We partnered with Stripe for a simplified billing.
            </p>
          </div>
        </div>
        <div className="p-4">
          <Card
            title="Your Plan"
            description={
              subscriptionName &&
              `You are currently on the ${subscriptionName} plan.`
            }
            footer={
              <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <p className="pb-4 sm:pb-0">Manage your subscription.</p>
                <Button
                  variant="slim"
                  loading={loading}
                  disabled={loading || !subscription}
                  onClick={redirectToCustomerPortal}
                >
                  Open customer portal
                </Button>
              </div>
            }
          >
            <div className="mt-8 mb-4 text-xl font-semibold">
              {!userLoaded ? (
                <div className="h-12 mb-6">
                  <LoadingDots />
                </div>
              ) : subscriptionPrice ? (
                `${subscriptionPrice}/${subscription.prices.interval}`
              ) : (
                <Link href="/">
                  <a>Choose your plan</a>
                </Link>
              )}
            </div>
          </Card>
          <Card
            title="Your Name"
            description="Please enter your full name, or a display name you are comfortable with."
            footer={<p>Please use 64 characters at maximum.</p>}
          >
            <div className="mt-8 mb-4 text-xl font-semibold">
              {userDetails ? (
                `${userDetails?.full_name ?? ''}`
              ) : (
                <div className="h-8 mb-6">
                  <LoadingDots />
                </div>
              )}
            </div>
          </Card>
          <Card
            title="Your Email"
            description="Please enter the email address you want to use to login."
            footer={<p>We will email you to verify the change.</p>}
          >
            <p className="mt-8 mb-4 text-xl font-semibold">
              {user ? user.email : undefined}
            </p>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
