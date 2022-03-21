import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as fbq from '@/lib/fpixel';

export type FacebookPixelProps = {
  children: JSX.Element;
};

const handleRouteChange = () => {
  fbq.pageview();
};

const FacebookPixel = ({ children }: FacebookPixelProps) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on(`routeChangeComplete`, handleRouteChange);
    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, [router.events]);

  return children;
};

export default FacebookPixel;
