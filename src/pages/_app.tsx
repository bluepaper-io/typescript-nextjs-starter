/* eslint-disable import/no-unresolved */
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import GoogleTagManager from '@/components/GoogleTagManager';
import FacebookPixel from '@/components/FacebookPixel';
import 'swiper/css';
import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleTagManager>
      <FacebookPixel>
        <Component {...pageProps} />
      </FacebookPixel>
    </GoogleTagManager>
  );
}
