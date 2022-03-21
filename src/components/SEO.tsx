import Head from 'next/head';
import urljoin from 'url-join';
import { useRouter } from 'next/router';
import isAbsoluteUrl from 'is-absolute-url';

export interface Props {
  title?: string;
  image?: string;
  description?: string;
  shouldIndexPage?: boolean;
}

export type SEOConfig = {
  siteTitle: string;
  siteDescription: string;
  twitterAccount?: string;
};

const config = {
  siteTitle: `Awesome Site Title`,
  siteDescription: `Awesome Site Description`,
} as SEOConfig;

export default function SEO({
  title,
  image,
  description,
  shouldIndexPage,
}: Props) {
  const { asPath } = useRouter();

  const { siteTitle, siteDescription, twitterAccount } = config;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL as string;

  const headTitle = title || siteTitle;
  const auxDescription = description || siteDescription;
  const url = urljoin(siteUrl, asPath || ``);

  const thumb =
    image && isAbsoluteUrl(image)
      ? image
      : urljoin(siteUrl, image || `/og/default.png`);

  return (
    <Head>
      {/* Base */}
      <meta charSet="UTF-8" />
      <title>{headTitle}</title>
      <meta name="description" content={auxDescription} />
      <meta name="image" content={thumb} />
      {!shouldIndexPage && <meta name="robots" content="noindex" />}

      {/* General */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#000" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="google" content="notranslate" />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={headTitle} />
      <meta property="og:description" content={auxDescription} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={headTitle} />
      <meta property="og:image" content={thumb} />
      <meta property="og:image:secure_url" content={thumb} />
      <meta property="og:image:alt" content={auxDescription} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={headTitle} />
      {twitterAccount && (
        <>
          <meta name="twitter:site" content={twitterAccount} />
          <meta name="twitter:creator" content={twitterAccount} />
        </>
      )}
      <meta name="twitter:image" content={thumb} />
      <meta name="twitter:image:src" content={thumb} />
      <meta name="twitter:image:alt" content={auxDescription} />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
    </Head>
  );
}
