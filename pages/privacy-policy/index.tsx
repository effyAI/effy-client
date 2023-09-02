import { useEffect } from "react";
import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});

export default function Privacy() {
  return (
    <>
      <div className="overflow-hidden">
        <Head>
          <title> Disclaimer - effybiz.com </title>
          <link rel="canonical" href="https://www.effybiz.com/disclaimer" />
          <meta
            name="description"
            content=" Our disclaimer page outlines the terms and conditions for using effybiz. Please read this page carefully before using our website or services."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content=" Disclaimer - effybiz.com " />
          <meta
            property="og:description"
            content=" Our disclaimer page outlines the terms and conditions for using effybiz. Please read this page carefully before using our website or services."
          />
          <meta
            property="og:url"
            content="https://www.effybiz.com/disclaimer"
          />
          <meta property="og:site_name" content="effybiz" />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/people/effybiz-Private-Limited/100083835361397/"
          />
          <meta
            property="article:modified_time"
            content="2022-09-10T07:43:51+00:00"
          />
          <meta
            property="og:image"
            content="https://www.effybiz.com/images/illuslator/Aboutus.svg?size=1024"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@effybiztech" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="8 minutes" />
        </Head>
        {/* hero section */}

        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" border-b bg-white">
            <Header />
          </div>
        </div>

        {/* Term and conditions */}
        <div className="bg-white  py-10">
          <section className="2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto">
            {/* text-section */}
            <div className="ca-wrapper">
              <h2 className="text-3xl font-semibold text-[#606060] pb-6">
                {" "}
                EffySales Privacy Policy{" "}
              </h2>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>
                      EffySales is committed to protecting your privacy. This
                      Privacy Policy (“Policy”) applies to those who visit the
                      Websites owned and operated by EffySales, as well as users
                      of our Service(s). This Privacy Policy describes how
                      EffySales collects, uses, shares and secures the personal
                      information you provide. It also describes your choices
                      regarding use, access and correction of your personal
                      information. The use of information collected through our
                      Service(s) shall be limited to the purpose of providing
                      the service for which the Customer has engaged EffySales.
                      The capitalized terms used in this Policy but not defined
                      herein shall have the same meaning as defined in our Terms
                      of Service at&nbsp;
                      <a
                        href="mailto:at https://www.EffySales.com/terms"
                        target="_blank"
                      >
                        at https://www.EffySales.com/terms
                      </a>
                      (“Terms”).
                    </b>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>
                      If you have questions or complaints regarding our privacy
                      policy or practices, please contact us at&nbsp;{" "}
                      <a href="mailto:support@effySales.com." target="_blank">
                        {" "}
                        support@effySales.com.
                      </a>
                    </b>
                  </p>
                  <b> </b>
                  <p
                    style={{
                      fontSize: "18px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>
                      {" "}
                      How Do We Collect, Use and Share Your Personal Information
                      and Other Information?
                    </b>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>
                      We may collect the following personal information from you
                      within the Websites:
                    </b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    • Contact Information, such as name, email address, mailing
                    address, or phone number
                    <br />• Information about your business, such as company
                    name, company size, business type
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>
                      {" "}
                      We may collect the following personal information from you
                      when you use our Service(s):
                    </b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    • Contact Information, such as name, email address, mailing
                    address, IP address, geographic
                    <br /> location, or phone number;
                    <br />
                    • Billing Information, such as credit card number and
                    billing address;
                    <br />
                    • Unique Identifiers, such as username, account number or
                    password;
                    <br />
                    • Name and e-mail address when you provide feedback from the
                    Service(s)
                    <br />• Name and e-mail address when you provide feedback
                    from the Service(s)
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>
                      We may use the personal information collected from within
                      the Websites or when you use the Service(s) to:
                    </b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    • Provide you with the Service(s).
                    <br />
                    • Send you communication from the Service(s).
                    <br />
                    • Assess the needs of your business to determine or suggest
                    suitable products
                    <br />
                    • Send you requested product or service information
                    <br />
                    • Respond to customer service requests
                    <br />
                    • Administer your account
                    <br />
                    • Send you promotional and marketing communications
                    <br />
                    • Respond to your questions and concerns
                    <br />
                    • Facilitate your transactions with other users when you use
                    our Service(s).
                    <br />
                    When you provide us with personal information about your
                    contacts we will only use this
                    <br /> information for the specific reason for which it is
                    provided.
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    Except as outlined in this Policy, your information will
                    never be sold to or shared with other companies or
                    organizations for commercial purposes or otherwise. We may
                    transfer personal information to our Group Companies and
                    sub-contractors that help us provide our Service(s).
                    Transfers to subsequent third parties are covered by the
                    service agreements with our sub-contractors. Such
                    sub-contractors may include third-party payment processors
                    who process your credit card and other payment information
                    for EffySales but are otherwise not permitted to store,
                    retain or use such information.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Correction or Removal of Personal Information</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    If you believe that one of your contacts has provided us
                    with your personal information and you would like to request
                    that it be removed from our database, please contact us at{" "}
                    <a href="support@effySales.com" target="_blank">
                      support@effySales.com
                    </a>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    EffySales collects information on behalf of our customers,
                    and has no direct relationship with the individuals with
                    whom our customers may interact using the Service(s). If you
                    are a customer of one of our customers (“End-Customer”) and
                    would no longer like to be contacted by that customer,
                    please contact the customer that you interact with directly.
                    An individual who seeks access, or who seeks to correct,
                    amend, or delete inaccurate data should direct his query to
                    the EffySales’s customer (the data controller). If requested
                    to remove data, we will respond within a reasonable
                    timeframe.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Other Information</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    Other information such as End-Customer device models, IP
                    address, usage patterns are also captured by the Service(s).
                    This information is not used by EffySales except in allowing
                    you to view and use this information for targeting future
                    communication with the End-Customers. Content and messages
                    in voice, text or other format created by you or your
                    End-Customers to send or share with other users or
                    End-Customers shall be hosted on EffySales’s servers.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Retention of Personal Information </b>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    We retain Personal Data we process for as long as an Account
                    is active or as needed to provide the Service(s). If you
                    wish to terminate your Account or request that we no longer
                    use Your Data, please contact us at support@effySales.com.
                    We will retain Your Data as necessary to comply with our
                    legal obligations, maintain accurate financial and other
                    records, resolve disputes, and enforce our agreements. We
                    delete all Your Data on the expiry of 14 days after the
                    termination of your Account, except as otherwise prohibited
                    by applicable law.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Processing Personal Information</b>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    We are the data processors and not the data controllers of
                    the information on our platform for purposes of the EU
                    Directive on Data Protection (Directive) and the Swiss
                    Federal Act on Data Protection. Our EEA or Switzerland based
                    customers, who control their customer data and send it to
                    EffySales for processing, are the “controllers” of that data
                    and are responsible for compliance with the Directive. In
                    particular, EffySales’s customers are responsible for
                    complying with the Directive and relevant data protection
                    legislation in the relevant EEA member state before sending
                    personal information to EffySales for processing. We work
                    with our customers to help them provide notice to their
                    customers concerning the purpose for which personal
                    information is collected.
                    <br />
                    <br />
                    We store and process data, including personal information,
                    in the United States and the European Economic Area (“EEA”)
                    and possibly in other countries through third parties that
                    we use to operate and manage the Service(s). When you access
                    or use our Websites or the Service(s), or otherwise provide
                    information to us, you are consenting, on behalf of you and
                    your authorized agents or End-Customers, (and representing
                    that you have the authority to provide such consent) to the
                    processing and transfer of information in and to the United
                    States and other countries which may have different privacy
                    laws from your or their country of residence. We will take
                    all steps reasonably necessary to ensure that your data is
                    treated securely and in accordance with this Policy. We may
                    enter agreements with our customers located in the EEA to
                    provide them access to our Service(s), which includes the
                    processing of information relating the End-Customers.
                    <br />
                    <br />
                    We do not own, control or direct the use of the information
                    stored or processed on our platform, and in fact we are
                    largely unaware of what information is being stored on our
                    platform and only access such information as reasonably
                    necessary to provide the Service(s) (including to respond to
                    support requests), as otherwise authorized by our customers
                    or as required by law.
                    <br />
                    <br />
                  {`  It shall be our customers’ responsibility to inform the
                    End-Customers about and obtain necessary consent for any
                    personal information that is collected through our
                    customer’s use of the Service(s). As the processors of
                    personal information on behalf of our customers, we follow
                    their instructions with respect to the information they
                    control to the extent consistent with the functionality of
                    our Service(s). In doing so, we implement technical,
                    physical and administrative measures against unauthorized
                    processing of such information and against loss, destruction
                    of, or damage to, personal information as more fully
                    described under the section below entitled,`}
                    <br /> {`“Protection of Information".`}
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Mobile Applications</b>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    When you download, install and use our Mobile Applications,
                    we automatically collect information on the type of device
                    you use, operating system version, and the device identifier
                    (or “UDID”).
                    <br />
                    <br />
                    We send you push notifications from time-to-time in order to
                    update you about any events or promotions that we may be
                    running. If you no longer wish to receive these types of
                    communications, you may turn them off at the device level.
                    To ensure you receive proper notifications, we will need to
                    collect certain information about your device such as
                    operating system and user identification information.
                    <br />
                    <br />
                    We use mobile analytics software to allow us to better
                    understand the functionality of our Mobile Application on
                    your mobile or handheld device. This Mobile Application may
                    record information such as how often you use the Mobile
                    Application, the events that occur within the Mobile
                    Application, aggregated usage, performance data, and where
                    the Mobile Application was downloaded from. We do not link
                    the information we store within the analytics software to
                    any personally identifiable information you submit within
                    the Mobile Application.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Analytics</b>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    EffySales uses third party software for analytics. All
                    metrics information collected from your usage of the
                    Service(s) shall be transmitted to analytics provider. This
                    information is then used to evaluate how users use
                    EffySales, and to compile statistical reports on activity
                    for us. We further use the same statistical analytics tool
                    to track or to collect your Personally Identifiable
                    Information (PII). We will use this information in order to
                    maintain, enhance, or add to the functionality of the
                    Service(s) and to personalize the experience for you.
                    Anonymized and aggregated information and analysis may be
                    made public where desired by EffySales. Third party
                    analytics software will not share your PII or associate your
                    PII with any other data held by them.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Use of Cookies</b>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    When you use our Websites or Service(s), we may store some
                    information on your computer. This information will be in
                    the form of a “cookie” or similar file. Cookies are small
                    pieces of information stored on your hard drive, not on the
                    EffySales website. We do not use cookies to spy on you or
                    otherwise invade your privacy. They cannot invade your hard
                    drive and steal information. We use cookies to help you
                    navigate the Websites and Service(s) as easily as possible,
                    and to remember information about your current session.
                    These are the Session Cookies and they are removed from your
                    system when you close the web browser or turn off the
                    computer. You must enable cookies on your web browser to use
                    the Service(s).
                    <br />
                    <br />
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Essential Cookies:</b> These cookies are essential for
                    the basic functionalities offered by the Service(s). These
                    class of cookies helps in keeping a user logged in to the
                    Service(s) and remember relevant information when they
                    return to the Service(s). These cookies are essential for
                    the basic functionalities offered by the Service(s). These
                    class of cookies helps in keeping a user logged in to the
                    Service(s) and remember relevant information when they
                    return to the Service(s). Insight Cookies: These are used
                    for tracking the user activities within the Service(s),
                    which in turn helps us in improving your user experience.
                    <br />
                    <br />
                    <b>Marketing Cookies: </b> These are used for providing you
                    with customized and interest-based ads based on your
                    browsing behavior and other similar activities on our
                    Websites. You can set your browser to either reject all
                    cookies, to allow only “trusted” websites to set them, or to
                    accept only those cookies from those websites you are
                    currently on.
                    <br />
                   {` For more information on controlling cookie settings in your
                    browser, please refer to the following links: More
                    information on "Incognito" mode and cookie setting in Google
                    Chrome `}
                    <br />
                  {`  More information on "InPrivate" and cookie setting in
                    Internet Explorer `}
                    <br />
                  {`  More information on "Private Browsing" and cookie setting in
                    FireFox `}
                    <br />
                   {` More information on "Private Browsing" and cookies setting
                    in Safari`}
                    <br />
                    <br />
                   {` Please note that if you wish to turn off the cookies in your
                    web browser, you might not be able to take advantage of many
                    features of our Service(s). To learn how to delete or
                    disable cookies in general, visit`}
                    <a
                      href="mailto:http://www.allaboutcookies.org/manage-cookies/."
                      target="_blank"
                    >
                      http://www.allaboutcookies.org/manage-cookies/.
                    </a>
                    <br />
                    EffySales customers have the responsibility to inform the
                    individuals with whom they interact with via the help of the
                    Service(s) about the cookies used by EffySales and by
                    themselves and should obtain individuals’ consent, if
                    necessary.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Clear Gifs and Log Files</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    We and our third party advertising partners use technologies
                    such as web beacons in analyzing trends, administering the
                    website, tracking users’ movements around the site, and
                    gathering demographic information about our user base as a
                    whole. We may receive reports based on the use of these
                    technologies by these companies on an individual and
                    aggregated basis.
                    <br />
                    <br />
                    As is true of most websites, we gather certain information
                    automatically and store it in log files. This information
                    may include internet protocol (IP) addresses, browser type,
                    internet service provider (ISP), referring/exit pages,
                    operating system, date/time stamp, and/or clickstream data.
                    We link this automatically collected data to other
                    information we collect about you.
                    <br />
                    <br />
                    Do Not Track. Do Not Track (“DNT”) is an optional browser
                    setting that allows you to express your preferences
                    regarding tracking by advertisers and other third parties.
                    We do not use technology that recognizes DNT signals from
                    your web browser.
                    <br />
                    <br />
                    We partner with a third party to either display advertising
                    on our Websites or to manage our advertising on other sites.
                    Our third party partner may use technologies such as cookies
                    to gather information about your activities on this Website
                    and other sites in order to provide you advertising based
                    upon your browsing activities and interests. If you wish to
                    not have this information used for the purpose of serving
                    you interest-based ads, you may opt-out by clicking here (or
                    if located in the European Union, click here). Please note
                    this does not opt you out of being served ads. You will
                    continue to receive generic ads.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Social Media Features</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    Our Websites includes social media features, such as the
                    Facebook “Like” button, the “Share This” button or
                    interactive mini-programs. Where we have your consent, these
                    features may collect your IP address, which page you are
                    visiting on our Websites, and may set a cookie to enable the
                    feature to function properly. Social media features and
                    widgets are either hosted by a third party or hosted
                    directly on our Websites. Your interactions with these
                    features are governed by the privacy policy of the company
                    providing them.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Links to Third Party Sites</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    Our Websites contain links to other websites that are not
                    owned or controlled by EffySales. Please be aware that we
                    are not responsible for the privacy practices of such other
                    websites or third parties. We encourage you to be aware when
                    you leave our Websites and to read the privacy policies of
                    each and every website that collects personal information.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Public Forums</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    Our Websites offer publicly accessible blogs or community
                    forums. You should be aware that any information you provide
                    in these areas may be read, collected, and used by others
                    who access them. To request removal of your personal
                    information from our blog or community forum, contact us at
                    support@effySales.com. In some cases, we may not be able to
                    remove your personal information, in which case we will let
                    you know that we are unable to do so and why.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Single Sign-On</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    You can log in to our Websites using sign-in services such
                    as Google, Facebook Connect. These services will
                    authenticate your identity and provide you the option to
                    share certain personal information with us such as your name
                    and email address. Services like Google, Facebook Connect
                    give you the option to post information about your
                    activities on our Websites to your profile page and to share
                    information with others within your network.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Communications from the Websites</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    We may use your email address to send our newsletters and/or
                    marketing communications. If you no longer wish to receive
                    these communications, you can opt out by following the
                    instructions contained in the emails you receive or by
                    contacting us at{" "}
                    <a href="mailto:support@effySales.com." target="_blank">
                      support@effySales.com.
                    </a>{" "}
                    <br />
                    We will send you announcements related to the Service(s) on
                    occasions when it is necessary to do so. For instance, if
                    our Service(s) is temporarily suspended for maintenance, we
                    might send you an email. Generally, you may not opt-out of
                    communications which are not promotional in nature. If you
                    do not wish to receive them, you may deactivate your
                    Account.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Advertising</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    We partner with third-party advertising networks to either
                    display advertising on our Websites or to manage our
                    advertising on other websites. Our ad network partner may
                    use cookies and Web beacons to collect information about
                    your activities on our Website and other websites to provide
                    you targeted advertising based upon your interests (this
                    will only be the case if we have your consent in certain
                    locations).
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Protection of Information</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    The Websites and Service(s) have industry standard security
                    measures in place to protect against the loss, misuse, and
                    alteration of the information under our control. When you
                    provide us with sensitive information (such as credit card
                    information or login credentials), we will encrypt that
                    information via Secure Socket Layer (SSL).
                    <br />
                    <br />
                    While there is no such thing as “perfect security” on the
                    Internet, we take all reasonable steps to ensure the safety
                    of your personal information. Although we will do our best
                    to protect your personal data, we cannot guarantee the
                    security of your data transmitted to our Websites or via the
                    Service(s) and any transmission is at your own risk. Once we
                    receive your personal information, we will use strict
                    procedures and security features to try to prevent
                    unauthorised access.
                    <br />
                    <br />
                    Additionally, you retain all rights of ownership to your
                    personal data we collect. Except as set forth herein under
                    sections elaborating on use of your personal information
                    above and legal disclosure below we will not sell or share
                    your personal data with any third parties or use your
                    personal data to compete with you. Your privacy and the
                    privacy of your customers are of utmost importance to us. If
                    you have questions about our security you can contact us at{" "}
                    <a href="mailto:support@effySales.com." target="_blank">
                      support@effySales.com.
                    </a>
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Corrections and Updates</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    Upon request EffySales will provide you with information
                    about whether we hold, or process on behalf of a third
                    party, any of your personal information. To request this
                    information please contact us at{" "}
                    <a href="mailto:support@effySales.com." target="_blank">
                      support@effySales.com.
                    </a>
                    <br />
                    <br/>
                    We allow users of the Service(s) or Website to access,
                    update or modify their information by clicking on the My
                    Account link in the EffySales navigation menu or by
                    contacting us at{" "}
                    <a href="mailto:support@effySales.com." target="_blank">
                      support@effySales.com.
                    </a>
                   {` We seek to respond to requests for access or modification as
                    soon as possible and within reasonable timeframe.`}
                  </p>
                  <p>
                    <b>{`Children's Personal Information`}</b>
                  </p>
                  <p>
                   {` EffySales does not knowingly collect any personal
                    information from children under the age of 13. If you are
                    under the age of 13, please do not submit any personal
                    information through our Websites or Service(s). We encourage
                    parents and legal guardians to monitor their children’s
                    Internet usage and to help enforce this Policy by
                    instructing their children never to provide personal
                    information through our Service(s) or Websites without their
                    permission. If you have reason to believe that a child under
                    the age of 13 has provided personal information to us
                    through our Websites or Service(s), please contact us and we
                    will endeavor to delete that information and terminate the
                    child's account from our databases.`}
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Amendments</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    Amendments to this Policy will be posted to this URL and
                    will be effective when posted. If we make any material
                    changes we will notify you by email (sent to the e-mail
                    address specified in your account) or by means of a notice
                    on this Website prior to the change becoming effective.
                    Provided we will not be notifying you if we amend the Policy
                    to make addition, deletions or modifications to the list of
                    cookies from time to time to keep the list of cookies
                    current and accurate. You should frequently visit this
                    Policy to check for amendments. Your continued use of this
                    Websites or the Service(s) following the posting of any
                    amendment, modification, or change to this Policy shall
                    constitute your acceptance of the amendments to this Policy.
                    You can choose to discontinue use of the Websites or
                    Service(s), if you do not accept the terms of this Policy,
                    or any modified version of this Policy.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Legal Disclosure</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    We reserve the right to disclose your personal data as
                    required by applicable law and when we believe that
                    disclosure is necessary to protect our rights and/or to
                    comply with a judicial proceeding, court order, or other
                    legal process served on us. Your personal data will also be
                    shared between our Group Companies for the activities
                    permitted under this Policy.
                    <br />
                    <br />
                    In the event effySales goes through a business transition,
                    such as a merger or acquisition by another company, or sale
                    of all or a portion of its assets, your user account and
                    personal data will likely be among the assets transferred.
                    You will be notified via{" "}
                    <a href="mailto:support@effySales.com." target="_blank">
                      support@effySales.com.
                    </a>
                    and via a prominent notice on our Websites of any such
                    change in ownership or control. We may also disclose your
                    personal information to any other third party with your
                    prior consent.
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    <b>Contacting EffySales</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "justify",
                      lineHeight: 2,
                      marginBottom: "5px",
                      color: "#606060",
                    }}
                  >
                    If you have any questions about this privacy policy or your
                    dealings with the EffySales, you can contact us at{" "}
                    <a href="mailto:support@effySales.com." target="_blank">
                      support@effySales.com.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
