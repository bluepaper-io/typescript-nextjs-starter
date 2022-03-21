export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const pageview = (url: string): void => {
  window?.dataLayer?.push({
    event: `pageview`,
    page: url,
  });
};

export const fireCustomEvent = (eventName: string, url: string): void => {
  window?.dataLayer?.push({
    event: eventName,
    page: url,
  });
};
