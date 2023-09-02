 
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';  
 
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
 
export default function about(props:any) {
 
  return (
    <div className='overflow-hidden'>
      <Head>
        <title> About Us | App and Web Development Company - effybiz.com</title>
        <link rel="canonical" href="https://www.effybiz.com/about-us" />
        <meta
          name="description"
          content="effybiz is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content=" About Us | App and Web Development Company - effybiz.com" />
        <meta property="og:description" content="effybiz is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs." />
        <meta property="og:url" content="https://www.effybiz.com/about-us" />
        <meta property="og:site_name" content="effybiz" />
        <meta property="article:publisher" content="https://www.facebook.com/people/effybiz-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
        <meta property="og:image" content="https://www.effybiz.com/images/illuslator/Aboutus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@effybiztech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="8 minutes" />
      </Head>
       
        <h1>Aboutus</h1>
     
     
    </div >
  )
}
 