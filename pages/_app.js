import { useEffect } from 'react';
import '@/assets/main.css';
import '@/assets/chrome-bug.css';

import { UserContextProvider } from '@/utils/useUser';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <div className="bg-primary">
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </div>
  );
}
