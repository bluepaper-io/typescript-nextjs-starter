import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as gtm from '@/lib/gtm';

export type GoogleTagManagerProps = {
  children: JSX.Element;
};

const GoogleTagManager = ({ children }: GoogleTagManagerProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = (url: string): void => {
      // Chamada padrão do GTM para visualização de página
      gtm.pageview(url);
    };

    router.events.on(`routeChangeComplete`, handleRouteChangeComplete);

    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChangeComplete);
    };
  }, [router.events]);

  return children;
};

export default GoogleTagManager;
