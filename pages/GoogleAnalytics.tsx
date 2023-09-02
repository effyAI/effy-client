import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
const GA_TRACKING_ID = 'G-Y2X1QT1B8X';

// @ts-ignore
const addPageView = (url) => {
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    // @ts-ignore
    const handleRouteChange = (url) => {
      addPageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Y2X1QT1B8X`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y2X1QT1B8X', {
        page_path: window.location.pathname,
      });
    `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;