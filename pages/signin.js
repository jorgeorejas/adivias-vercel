import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import LoadingDots from '@/components/ui/LoadingDots';
import Logo from '@/components/icons/Logo';
import { useUser } from '@/utils/useUser';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });
  const [AccessToken, setAccessToken] = useState('');
  const router = useRouter();
  const { user, signIn } = useUser();

  const handleOAuthSignIn = async (provider) => {
    setLoading(true);
    const { error, session, user } = await signIn({ provider: provider });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    }

    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user]);

  if (!user)
    return (
      <>
        <Layout>
          <div className="no-layout">
            <div className="flex flex-col self-center max-w-lg p-3 m-auto w-80">
              <div className="flex justify-center pb-12 ">
                <Logo className="text-6xl" />
              </div>
              <Button
                variant="slim"
                type="submit"
                disabled={loading}
                onClick={() => handleOAuthSignIn('twitter')}
                className="whitespace-nowrap"
              >
                <span className="ml-2">Continue with Twitter</span>
              </Button>
            </div>
          </div>
        </Layout>
      </>
    );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

export default SignIn;
