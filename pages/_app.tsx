import './globals.scss' 
import clsx from 'clsx'
import React from "react";
import type { AppProps, } from "next/app";
import Footer from "./components/Footer"; 
import { NextSeo } from "next-seo";
import { BsChevronUp } from "react-icons/bs"; 
import GoogleAnalytics from "./GoogleAnalytics"; 
import { Raleway, Space_Mono, Space_Grotesk, Open_Sans  } from 'next/font/google'
 
const raleway = Raleway({ subsets: ['latin'],   variable: '--raleway',})
const opensans = Open_Sans({ subsets: ['latin'],  variable: '--opensans', })
const spacegrotesk = Space_Grotesk({ subsets: ['latin'],  variable: '--spacegrotesk', })
const spacemono = Space_Mono({weight:['400', '700'], subsets: ['latin'], variable: '--spacemono', })
const blogPostSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://https://effybiz.com//',
  name: 'lorem ipus',
  image: 'https://https://effybiz.com//svg/effybiz-logo.svg',
  url: 'https://https://effybiz.com//',
  telephone: '+1-415- 735-4966',
  review: {
    '@type': 'Review',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.9',
    bestRating: '5',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '98A, Niwaru Rd, near Archana Hospital, Shanti Path,',
    addressLocality: 'Jhotwara,',
    addressRegion: 'Mumbai',
    postalCode: '302012 ,',
    addressCountry: 'IN',
  },
  offers: {
    '@type': 'Offer',
    price: '20-25',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  author: {
    '@type': 'Person',
    name: 'effybiz',
  },
}; 
export const config = {
  unstable_runtimeJS: false,
};

function top() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

 

export default function MyApp({ Component, pageProps }: AppProps, props: any) {

  return ( 
    <> 
     <div className={clsx(
      'font-sans',       
        raleway.variable,
        opensans.variable,
        spacegrotesk.variable,
        spacemono.variable,
      )}>
      <NextSeo
        title="LocalBusiness"
        openGraph={{
          url: 'https://https://effybiz.com//',
          title: 'Mobile App and Web Development Company',
          images: [{ url: 'https://https://effybiz.com/svg/effybiz-logo.svg' }],
        }}
        additionalMetaTags={[
          { property: 'schema:type', content: 'LocalBusiness' },
          { property: 'schema:mainEntityOfPage', content: 'https://https://effybiz.com/' },
          { property: 'schema:telephone', content: '+1-415- 735-4966' },
          // ... add more schema properties here
          { property: 'schema:LocalBusiness', content: JSON.stringify(blogPostSchema) },
        ]}
      />
      {/* <GoogleAnalytics/>  */}
      <Component {...pageProps} />    
      <Footer />    
      <div onClick={(top)} className="fixed bottom-8 right-8 lg:block hidden">
        <div className="p-3 rounded-full relative inline-flex group items-center justify-center cursor-pointer bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] overflow-hidden">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-16 group-hover:h-16 opacity-10"></span>
          <BsChevronUp className="transition-all duration-200 ease-out text-white" size={16} />
        </div>
      </div>
      </div> 
     </>
  );
}
