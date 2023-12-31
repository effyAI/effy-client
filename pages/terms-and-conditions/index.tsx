import { useEffect } from 'react';
import React from 'react'
import dynamic from 'next/dynamic';
import Head from 'next/head';


const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})

 

export default function Disclaimer() {

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
        <meta property="og:description" content=" Our disclaimer page outlines the terms and conditions for using effybiz. Please read this page carefully before using our website or services." />
        <meta property="og:url" content="https://www.effybiz.com/disclaimer" />
        <meta property="og:site_name" content="effybiz" />
        <meta property="article:publisher" content="https://www.facebook.com/people/effybiz-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
        <meta property="og:image" content="https://www.effybiz.com/images/illuslator/Aboutus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@effybiztech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="8 minutes" />
      </Head> 
        {/* hero section */}

        <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}>
          <div className=" border-b bg-white">
            <Header />
           
          </div>
        </div>

        {/* Term and conditions */}
        <div className="bg-white  py-10">
          <section className="2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto">
            {/* text-section */}
            <div className="ca-wrapper">	
        <h2 className="text-3xl font-semibold text-[#606060] pb-6" > EffySales Terms of Service </h2>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           
            <p style={{fontSize: '17px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b>
                Please read these terms of service and Our Privacy Policy (together, these “Terms”) carefully as they form a contract between You and Us and govern use of and access to the Service(s) and Websites by You, Your Affiliates, Users and End-Customers. In the event of a conflict between these terms of service and Our Privacy Policy, these terms of service shall prevail.<br /><br />
                By accessing or using the Service(s) or Websites, or authorizing or permitting any User or End-Customer to access or use the Service(s) or Websites, You agree to be bound by these Terms. If You are entering into these Terms on behalf of a company, organization or another legal entity (an “Entity”), You are agreeing to these Terms for that Entity and representing to Us that You have the authority to bind such Entity and its Affiliates to these Terms, in which case the terms, “You,” “Your” or related capitalized terms used herein shall refer to such Entity and its Affiliates. If You do not have such authority, or if You do not agree with these Terms, You must not accept these Terms and may not access or use the Service(s) or Websites.<br />
                You, as an individual, must be 18 years or older to access or use the Websites and the Service(s).
              </b>
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              1. YOUR RIGHTS
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b>1.1</b> These Terms are applicable during Your free trial and during Your subscription to the Service(s) through a Service Plan of Your choice.<br />
              <b>1.2 Using Our Service(s):</b> Subject to Your compliance with the Terms and solely during the Subscription Term, You have the limited, non-exclusive, and revocable right to access and use the Service(s) for Your internal business purposes. You shall be responsible for use of the Service(s) through Your Account by any third parties. You may subscribe to one or more of the Service(s). They may be subject to separate and distinct Service Plans.<br />
              <b>1.3 Using our APIs:</b> Our APIs must be used according to the API Policies We implement in this regard.<br />
              <b>1.4 Using our Mobile Applications:</b> Subject to Your compliance with the Terms and solely during the Subscription Term, You have the limited, non-exclusive, non-transferrable, and revocable right to download, install and use the Mobile Applications to access and use the Service(s).
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              2. YOUR RESPONSIBILITIES
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b>2.1 Your Account: </b>  Subject to any limitation on the number of individual Users available under the Service Plan to which You subscribed, access and use of the Service(s) is restricted to the specified number of individual Users permitted under Your subscription to the Service(s). Each User shall be identified using unique login information such as usernames and passwords (“User Login”) and such User Login shall be used only by one individual. You are responsible for the confidentiality of Your Data and User Login. You should, therefore, not share Your User Login with any third parties. In any event, unless You notify Us of any unauthorized use or suspicious activity in Your Account, You are responsible for all activities that occur under Your Account. Group Companies will not be liable for any damage or loss that may result from Your failure to protect Your login information, including Your password. Without limiting the foregoing, You are solely responsible for ensuring that Your use of the Service(s) to store and transmit Your Data is compliant with all applicable laws and regulations. You also maintain all responsibility for determining whether the Service(s) or the information generated thereby is accurate or sufficient for Your purposes.<br />
              <b>2.2 Your use of the Service(s): </b>You agree not to<br />
              <b>a.</b> license, sublicense, sell, resell, rent, lease, transfer, assign, distribute, time share or otherwise commercially exploit or make the Service(s) available to any third party, other than Users and End-Customers in furtherance of Your internal business purposes as expressly permitted by these Terms;<br />
              <b>b.</b> use the Service(s) to Process data on behalf of any third party other than Your Users and End- Customers;<br />
              <b>c.</b>  modify, adapt, or hack the Service(s) or otherwise attempt to gain or gain unauthorized access to the Service(s) or related systems or networks;<br />
              <b>d.</b>   falsely imply any sponsorship or association with Us;<br />
              <b>e.</b> use the Service(s) in any unlawful manner, including but not limited to violation of any person’s privacy rights;<br />
              <b>f.</b>  use the Service(s) to send unsolicited communications junk mail, spam, pyramid schemes or other forms of duplicative or unsolicited messages;<br />
              <b>g.</b>  use the Service(s) to store or transmit any content that infringes upon any person’s intellectual property rights;<br />
              <b>h.</b>  use the Service(s) in any manner that interferes with or disrupts the integrity or performance of the Service(s) and its components;<br />
              <b> i.</b> attempt to decipher, decompile, reverse engineer, disassemble, reproduce, or copy or otherwise access or discover the source code or underlying program of any Software making up the Service(s);<br />
              <b>j.</b>  use the Service(s) to knowingly post, transmit, upload, link to, send or store any content that is unlawful, racist, hateful, abusive, libelous, obscene, or discriminatory;<br />
              <b>k.</b>  use the Service(s) to store or transmit any “protected health information” as that term is defined in 45 C.F.R. 160.103 unless expressly agreed to otherwise in writing by Us;<br />
              <b>l.</b> use the Service(s) to knowingly post, transmit, upload, link to, send or store any viruses, malware, Trojan horses, time bombs, or any other similar harmful software (“Malicious Software”);<br />
              <b>m.</b>  establish a link to Our Websites in such a way as to suggest any form of association, approval or endorsement on Our part where none exists;<br />
              <b>n.</b> use the Service(s) for the purposes of cookie tracking, ad exchanges, ad networks, data brokerages, or sending electronic communications (including e-mail) in violation of applicable law;<br />
              <b> o.</b> try to use, or use the Service(s) in violation of these Terms.<br />
              <b>2.3</b>  You shall be responsible for any loss of data or attempted or actual access or use of the Service(s) through Your Account in violation of these Terms.<br />
              <b>2.4</b>  If We inform You that a specified activity or purpose is prohibited with respect to the Service(s), You will ensure that You immediately cease use of the Service(s) for such prohibited activity or purpose.
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              3. ACCESS TO THE SERVICE(S)
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b>3.1 </b> You are responsible for procuring and maintaining the network connections that connect You to the Service(s). Your access to and use of the Service(s) may require You to use or maintain specific browser software, security certifications and other procedures that supports protocols used by the Service(s). <br />
              <b>3.2</b>You may not be able to access or use the Service(s) (a) during planned downtime for upgrades and maintenance to the Service(s) (of which We will use commercially reasonable efforts to notify You in advance through Our Service(s)) (“Planned Downtime”), or (b) during any unavailability caused by circumstances beyond Our reasonable control, such as, but not limited to, acts of God, acts of government, acts of terror or civil unrest, technical failures beyond Our reasonable control (including, without limitation, inability to access the internet), or acts undertaken by third parties, including without limitation, distributed denial of service attacks.<br />
              <b>3.3</b> We will use commercially reasonable efforts to schedule Planned Downtime for weekends (Pacific Time zone) and other off-peak hours.<br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              4. CHANGES TO THE SERVICE(S) AND WEBSITES
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b>4.1 </b> Our Service(s): We may update the Service(s) from time to time and You may receive notifications of such upgrades, enhancements or updates (“Updates”). Any new or modified features added to or augmenting or otherwise modifying the Service(s) or other updates, modifications or enhancements to the Service(s) are also subject to these Terms and We reserve the right to deploy Updates at any time. <br />
              <b>4.2</b>Third party services and network connections: We are not responsible for notifying You of any upgrades, fixes or enhancements to any such services or for any compromise of data, including Your Data, transmitted across computer networks or telecommunications facilities (including but not limited to the internet) which are not owned, operated or controlled by Us. You agree that We are not responsible for the reliability or performance of any services or connections as described in this sub-section.<br />
              <b>4.3 Websites: </b>We may also change content on Our Websites at any time. However, please note that any of the content on Our Websites may be out of date at any given time, and We are under no obligation to update it. For clarity, this sub-section refers to Our Websites excluding the Service(s). We may discontinue or change any part of Our Websites, that does not affect the Service(s), without notifying You. Our Websites may contain links to websites, content and resources provided by third parties (“Third Party Links”). These Third Party Links are governed by their own terms and privacy policies and You agree that We have no control over these Third Party Links and are not responsible for Your access or use of these Third Party Links<br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              5. INTELLECTUAL PROPERTY RIGHTS
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b>5.1 Ownership of IPR: </b> : Except for the rights granted to You under Section 1, all rights, title and interest in and to all Our patents, inventions, copyrights, trademarks, domain names, trade secrets, know-how and any other intellectual property and/or proprietary rights in or related to the Service(s), including the Websites, and any part of it (collectively, “Intellectual Property Rights”) shall belong to and remain exclusively with Us. We are the owner or the licensee of all Intellectual Property Rights in Our Websites, and the content or material published on it. Those works are protected by copyright laws and treaties around the world. You must not use any part of the content on Our Websites for commercial purposes without obtaining a license to do so from Us or Our licensors. Further, We claim no intellectual property rights over the content You upload or provide to the Service(s).<br />
              <b>5.2 Grant of License to Us: </b>We shall have a royalty-free, worldwide, transferable, sub-licensable, irrevocable and perpetual license to incorporate into the Service(s) or Websites or otherwise use any suggestions, enhancement requests, recommendations or other feedback We receive from You.<br />
              <b>5.3</b> Unless You notify Us otherwise by an e-mail to <a href="support@effySales.com." target="_blank">
                support@effySales.com.</a>, You agree to grant Us a royalty-free, worldwide, transferable license to use Your trademark or logo to identify You as Our customer on Our Websites and/or marketing collateral.<br />
              <b>5.4</b> We may obtain and aggregate technical and other data about Your use of the Service(s) that is non-personally identifiable with respect to You (“Aggregated Anonymous Data”), and We may use the Aggregated Anonymous Data to improve, support and operate the Service(s). For clarity, You are not identified as the source of any Aggregated Anonymous Data and no Personal Data is collected as a part of Aggregate Anonymous Data.<br />
              <b>5.5 Grant of License to You: </b> Our product and service names, and logos used or displayed on the Service(s) or Websites are Our registered or unregistered trademarks (collectively, “Marks”), and You may only use such Marks to identify You as a user of the Service(s) You have subscribed to. <br />
              <b>5.6  Reservation of Rights: </b>All rights not expressly provided to You herein are reserved.<br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              6. INTEGRATED SERVICES
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              Our Service(s) may use, or make available to You, services that are developed, provided and maintained by third parties (“Integrated Services”). These services are integrated into some of the Service(s) and are provided to You as an option that You may enable and use as a part of some of the Service(s). They are governed by these Terms and include phone service and data analytics services that are made available to You based on the Service Plans.<br />
              <b>6.1 Phone Service/Support:</b>If You use the phone service, You understand and agree that (a) the phone service is not intended to support or carry emergency calls to any emergency services such as public safety answering points, (b) We will not be held liable for any claim, damages or loss (and You hereby waive any and all such claims or causes of action), arising from or relating to Your (or Users or End-Customers) inability to use the phone service to make such emergency calls, (c) You are solely responsible for Your operation of the phone service in compliance with all applicable laws in all jurisdictions governing use of the Service(s) by You, <br />
              Your Affiliates, Users and End-Customers, including but not limited to telephone recording and wiretapping laws, and (d) You will defend, hold harmless and indemnify Us from and against any third party claim arising from any of the foregoing. We may disable the phone service provided to You if Your subscription to the Service(s), Account or rights to access and/or use the Service(s) are otherwise suspended, or terminated.<br />
              <b>6.2 Data Analytics services: </b>If You use the data analytics services, You understand and agree that (a) the analysis presented to You is based on the accuracy of Your Data, We shall not be liable to You for Your inability to use or interpret the analysis, (b) if Your access and/or use to the Service(s) or Account is suspended or terminated, You shall not be able to use these services, and (c) using this service may be subject to payment of additional fees and charges as specified on the Websites.<br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              7. OTHER SERVICES
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              Certain third party services such as Apps are made available to You through the App Gallery or other forums where applications are developed for their integration with the Service(s) such as Custom Apps. You have the option to enable these third party services and integrate them into Our Service(s). These third party services are governed by their own terms and privacy policies and You agree that We are not responsible for Your use of these third party services. You may be notified that You are downloading or integrating Apps or applications not developed by Us.
              By downloading and installing such Apps or applications within Your Account, You understand and agree that We do not provide any warranties whatsoever for such Apps or applications and We are not liable for any damage or loss caused or alleged to be caused by or in connection with Your enablement, access or use of any such third party services, or Your reliance on the privacy practices, data security processes or other policies of such third party services. For c larity, We may publish Apps in the App Gallery that are developed and maintained by Us. Such Apps published by Us will be governed by these Terms.
              <br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              8. SUPPORT AND MAINTENANCE FOR OTHER SERVICES
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              You understand that We are not responsible for providing technical support for Other Services. To this extent, You shall address any comments, queries, complaints or feedback about such Other Services to the respective developers or publishers as specified in the App Gallery or other forums.
              <br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              9. BILLING, PLAN MODIFICATIONS AND PAYMENTS
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b>9.1 Subscription Charges</b>Except during Your free trial, all charges associated with Your Account (“Subscription Charges”) are due in full and payable in advance, in accordance with Section 9.2, when You subscribe to the Service(s). Unless specified otherwise in a Form, the Subscription Charges are based on the Service Plans You choose and are payable in full until You terminate Your Account in accordance with Section 10. You will receive a receipt upon each receipt of payment by Us. You may also obtain a payment receipt from within the Service(s).<br />
              <br />
              <b>9.3 Renewal: </b>You may pay the Subscription Charges through Your credit card, or other accepted payment method as specified in a Form. For credit card payments, Your payment is due immediately upon Your receipt of Our invoice. You hereby authorize Us or Our authorized agents, as applicable, to bill Your credit card upon Your subscription to the Service(s) (and any renewal thereof). For payments through other accepted methods, Your payment is due within thirty (30) days of Our invoice date unless otherwise stated in a Form.<br />
              9.4 We may use a third party service provider to manage credit card and other payment processing; provided, that such service provider is not permitted to store, retain or use Your payment account information except to process Your credit card and other payment information for Us. You must notify Us of any change in Your credit card or other payment account information, either by updating Your Account or by e-mailing Us at support@effySales.com.<br />
              <b>9.5 Refunds: </b>Unless otherwise specified in these Terms or a Form or a Service Plan, all Subscription Charges are nonrefundable. No refunds shall be issued for partial use or non-use of the Service(s) by You.<br />
              <b>9.6 Late Payments/Non-payment of Subscription Charges: </b>We will notify You if We do not receive payment towards the Subscription Charges within the due date for Your Account. For payments made through credit cards, We must receive payments due within a maximum of five (5) days from the date of Our notice and for payments through other accepted methods, We must receive payments within a maximum of fifteen (15) days from the date of Our notice. If We do not receive payment within the foregoing time period, in addition to Our right to other remedies available under law, We may (i) charge an interest for late payment @ 1.5% per month and/or; (ii) suspend Your access to and use of the Service(s) until We receive Your payment towards the Subscription Charges as specified herein and/or; (iii) terminate Your Account in accordance with Section 10.2.<br />
              <b>9.7 Upgrades and Downgrades: </b>You may upgrade or downgrade within a Service Plan or between two Service Plans. You understand that downgrading may cause loss of content, features, or capacity of the Service(s) as available to You before downgrading Your Account. We will not be liable for such loss. When You upgrade or downgrade, the new Subscription Charges become immediately applicable. Upon upgrade, the new Subscription Charges for the subsisting month would be charged on pro-rated basis and Your credit card will be charged automatically. Subsequent months will be charged in full according to the new Subscription Charges. Upon downgrade, You will be offered a refund for the payment made for the subsisting month in the form of credits credited to Your Account. These credits will be offset against the new Subscription Charges payable in the subsequent months.<br />
              <b>9.8 Applicable Taxes</b>Unless otherwise stated, the Subscription Charges do not include any taxes, levies, duties or similar governmental assessments, including value-added, sales, use or withholding taxes assessable by any local, state, provincial or foreign jurisdiction (collectively “Taxes”). You are responsible for paying the Taxes that would be levied against You by government authorities. We will invoice You for such Taxes if We believe We have a legal obligation to do so and You agree to pay such Taxes if so invoiced.<br />
              <b>9.9 User Benefits: </b>Apart from the credits provided to You when You downgrade, We may, at Our sole discretion, offer You certain benefits such as discounts on Subscription Charges, extension in Subscription Term for no extra payments from You, with regard to the Service(s). These benefits are specific to Your Account and the Service(s) identified while offering these benefits. They are not transferrable. The benefits may have an expiry date. If they do not have an expiry date, they will expire upon completion of twelve (12) months from their date of offer.<br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              10. SUSPENSION AND TERMINATION
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              10.1 We shall not be liable to You or any other third party for suspension or termination of Your Account or access to and use the Service(s), if such suspension or termination is in accordance with these Terms.     <br />
              <b> 10.2 Suspension and Termination by Us: </b>In addition to suspension for late payment or non-payment of Subscription Charges, We may suspend Your access to and use of Your Account or the Service(s) if You are in violation of the Terms. We will notify You of Your activities that violate these Terms and, at Our sole discretion, provide You with a period of fifteen (15) days (“Cure Period”) to cure or cease such activities. If You do not cure or cease such activities within said Cure Period or if We believe that Your breach of these Terms cannot be cured, Your Account shall be terminated.<br />
              <b> 10.3 Termination by You:</b>If You pay for Your Account through credit card, You may elect to terminate Your Account at any time by clicking on the ‘Account Settings’ link in the ‘Admin’ page when You log in to Our Service(s). If payments for Your Account is made through other accepted payment methods, You may terminate Your Account by writing to support@effySales.com.<br />
              10.4 Effect of Terminating Your Account:
              <br />
              <b>Data Export: </b>We strongly recommend that You export all Your Data before You terminate Your Account. In any event, following the termination of Your Account either by You or Us or if You do not subscribe to a Service Plan on expiry of Your free trial, Your Data will be retained for a period of 14 days (“Data Retention Period”) from such termination or expiry of free trial within which You may contact Us to export Your Data. Beyond this Data Retention Period, We reserve the right to delete all Your Data in the normal course of operation. Your Data cannot be recovered once it is deleted.<br />
              <b>Charges:</b>If You terminate Your Account prior to the end of Your then-effective Subscription Term or We effect such termination, in addition to other amounts You may owe Us, You must immediately pay any then unpaid Subscription Charges associated with the remainder of such Subscription Term, unless waived by Us in writing. This amount will not be payable by You in the event You terminate Your subscription to the Service(s) or terminate Your Account as a result of a material breach of these Terms by Us, provided that You provide advance notice of such breach to Us and afford Us not less than thirty (30) days to reasonably cure such breach.<br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              11. DATA PRIVACY AND SECURITY; CONFIDENTIALITY
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b> 11.1</b>If You choose, or You are provided with, a user identification code, password or any other piece of information as part of Our security procedures, You must treat such information as confidential. You must not disclose it to any third party. We have the right to disable any user identification code or password, whether chosen by You or allocated by Us, at any time, if in Our reasonable opinion, You have failed to comply with any of the provisions of these Terms.<br />
              <b> 11.2</b>11.2 Confidentiality obligations: Each of us will protect the other’s Confidential Information from unauthorized use, access or disclosure in the same manner as each of us protects our own Confidential Information, and in any event, no less than reasonable care. Except as otherwise expressly permitted pursuant to these Terms, each of us may use the other’s Confidential Information solely to exercise our respective rights and perform our respective obligations under these Terms and shall disclose such Confidential Information solely to those of our respective employees, representatives and agents who have a need to know such Confidential Information for such purposes and who are bound to maintain the confidentiality of, and not misuse, such Confidential Information. The provisions of this sub-section shall supersede any non-disclosure agreement by and between You and Us entered prior to these Terms that would purport to address the confidentiality of Your Data and such agreement shall have no further force or effect with respect to Your Data.<br />
              <b>11.3 Security of Your Data: </b>We will maintain commercially reasonable administrative, physical and technical safeguards to protect the security, confidentiality and integrity of Your Data. These safeguards may include encryption of Your Data in transmission (using SSL or similar technologies) as described further in the Security Policy on Our Websites.<br />
              <b>11.4 </b>You agree that We, and the service providers We utilize to assist in providing the Service(s) to You, shall have the right to access Your Account and to use, modify, reproduce, distribute, display and disclose Your Data solely to the extent necessary to provide the Service(s), including, without limitation, in response to Your support requests. Any third party service providers We utilize will only be given access to Your Account and Your Data as is reasonably necessary to provide the Service(s) and will be subject to confidentiality obligations. Group Companies may also access or disclose information about You, Your Account, Users or End-Customers, including Your Data, in order to (a) comply with the law or respond to lawful requests or legal process; (b) protect Group Companies’ or Our customers’ or partners’ rights or property, including enforcement of these Terms or other policies associated with the Service(s); (c) act on a good faith belief that such disclosure is necessary to protect personal safety or avoid violation of applicable law or regulation. Further, at Our sole discretion, any suspected fraudulent, abusive, or illegal activity by You may be referred to law enforcement authorities.<br />
              <b>11.5 </b>To the extent We Process any Personal Data on Your behalf in connection with use of the Service(s) by You, Your Users and/or End-Customers, You and We hereby agree that You shall be deemed to be the data controller and We shall be deemed to be the data processor as those terms are understood under the Directive (and any applicable national legislation implementing the Directive). By utilizing the Service(s), You consent, on behalf of You and Your Users and End-Customers (and represent that You have the authority to consent on behalf of Your Users and End-Customers) to the Processing of Your Data, including, without limitation, any Personal Data, within the Group Companies and to other authorized service providers pursuant to these Terms and Our Privacy Policy.<br />
              <b>11.6 Data collection and privacy:</b>We collect certain information about You as well as Your customers and their respective devices, computers and use of the Service(s). We use, disclose, and protect this information as described in Our Privacy Policy, which is incorporated into these Terms by reference.<br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              12. COMMUNICATIONS FROM US
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              Apart from the communications specified in Our Privacy Policy, We may contact You directly via e-mail to notify You if You are in violation of these Terms; A specific activity or purpose is prohibited with respect to the Service(s), so that You immediately cease use of the Service(s) for such prohibited activity or purpose; or You maintain an exceptionally high number queued posts, an unusually high monthly posts, an unusually high level of profiles or other excessive stress on the Service(s).
              <br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              13. DISCLAIMER OF WARRANTIES
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              THE WEBSITES AND THE SERVICE(S), INCLUDING ALL SERVER AND NETWORK COMPONENTS ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW. WE EXPRESSLY DISCLAIM ANY AND ALL CONDITIONS, REPRESENTATIONS, WARRANTIES OR OTHER TERMS, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. YOU ACKNOWLEDGE THAT WE DO NOT WARRANT THAT THE SERVICE(S) OR WEBSITES WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE AND YOU FURTHER ACKNOWLEDGE THAT WE DO NOT WARRANT THAT THE ACCESS TO THE SERVICE(S), WHICH IS PROVIDED OVER INTERNET AND VARIOUS TELECOMMUNICATIONS NETWORKS, ALL OF WHICH ARE BEYOND OUR CONTROL, WILL BE UNINTERRUPTED, TIMELY, SECURE, ERROR-FREE OR FREE FROM VIRUSES OR OTHER MALICIOUS SOFTWARE. THE CONTENT ON OUR WEBSITES IS PROVIDED FOR GENERAL INFORMATION ONLY. IT IS NOT INTENDED TO AMOUNT TO ADVICE ON WHICH YOU SHOULD RELY. YOU MUST OBTAIN PROFESSIONAL OR SPECIALIST ADVICE BEFORE TAKING, OR REFRAINING FROM, ANY ACTION ON THE BASIS OF THE CONTENT ON OUR WEBSITES. NO INFORMATION OR ADVICE OBTAINED BY YOU FROM US OR THROUGH THE SERVICE(S) OR WEBSITES SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS.
              <br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              14. LIMITATION OF LIABILITY
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL WE, OUR AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS OR LICENSORS BE LIABLE TO ANY PERSON FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, COVER OR CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, LOST REVENUE, LOST SALES, LOST GOODWILL, LOSS OF USE OR LOST CONTENT, IMPACT ON BUSINESS, BUSINESS INTERRUPTION, LOSS OF ANTICIPATED SAVINGS, LOSS OF BUSINESS OPPORTUNITY) HOWEVER CAUSED, UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUT LIMITATION, CONTRACT, TORT, WARRANTY, BREACH OF STATUTORY DUTY,NEGLIGENCE OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED AS TO THE POSSIBILITY OF SUCH DAMAGES OR COULD HAVE FORESEEN SUCH DAMAGES. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR AGGREGATE LIABILITY AND THAT OF OUR AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, SUPPLIERS AND LICENSORS, RELATING TO THE SERVICE(S), WILL BE LIMITED TO AN AMOUNT EQUAL TO THE LOWER OF (A) THREE MONTHS OF THE SUBSCRIPTION CHARGES FOR THE SERVICE(S) TO WHICH THE CLAIM RELATES; OR (B) THE SUBSCRIPTION CHARGES PAID BY YOU, FOR THE SERVICE(S) TO WHICH THE CLAIM RELATES PRIOR TO THE FIRST EVENT OR OCCURRENCE GIVING RISE TO SUCH LIABILITY. THE LIMITATIONS AND EXCLUSIONS ALSO APPLY IF THIS REMEDY DOES NOT FULLY COMPENSATE YOU FOR ANY LOSSES OR FAILS OF ITS ESSENTIAL PURPOSE.
              <br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              15. INDEMNIFICATION
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b>15.1 </b>If use of the Service(s) by You has become, or in Our opinion is likely to become, the subject of any IP Claim (defined below), We may at Our own option and expense (a) procure for You the right to continue using the Service(s) as set forth hereunder; (b) replace or modify the Service(s) to make it non-infringing; or (c) if options (a) or (b) are not commercially and reasonably practicable as determined by Us, terminate Your subscription to the Service(s) and repay You, on a pro-rated basis, any Subscription Charges You have previously paid Us for the corresponding unused portion.<br />
              <b> 15.2 Indemnification by Us</b>: Subject to Your compliance with these Terms, We will indemnify and hold You harmless, from and against any claim brought against You by a third party alleging that the Service(s) You subscribed to infringes or misappropriates such third party’s valid patent, copyright, or trademark (an “IP Claim”). We shall, at Our expense, defend such IP Claim and pay damages finally awarded against You in connection therewith, including the reasonable fees and expenses of the attorneys, provided that (a) You promptly notify Us of the threat or notice of such IP Claim; (b) We have or will have the sole and exclusive control and authority to select defense attorneys, defend and/or settle any such IP Claim; and (c) You fully cooperate with Us in connection therewith. We will have no liability or obligation with respect to any IP Claim if such claim is caused in whole or in part by (i) compliance with designs, data, instructions or specifications provided by You; (ii) modification of the Service(s) by anyone other than Us; or (iii) the combination, operation or use of the Service(s) with other hardware or software where the Service(s) would not by themselves be infringing<br />
              <b>15.3 </b>Sections 15.1 and 15.2 state our sole, exclusive and entire liability to you and constitute your sole remedy with respect to an IP Claim brought by reason of access to or use of the Service(s) by You.<br />
              <b>15.4 Indemnification by You: </b>You will indemnify and hold Group Companies harmless against any claim brought by a third party against Us, and their respective employees, officers, directors and agents arising from or related to use of the Service(s) by You in breach of these Terms or matters which You have expressly agreed to be responsible pursuant to these Terms; provided that We promptly notify You of the threat or notice of such a claim.<br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              16. ASSIGNMENT; ENTIRE AGREEMENT; REVISIONS
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b>16.1 </b>You shall not, directly or indirectly, assign all or any your rights under these Terms or delegate performance of your duties under these Terms without Our prior written consent. We may, without your consent, assign our agreement with You under these Terms to any member of the Group Companies or in connection with any merger or change of Our control or the sale of all or substantially all of our assets provided that any such successor agrees to fulfill its obligations pursuant to these Terms. Subject to the foregoing restrictions, these Terms will be fully binding upon, inure to the benefit of and be enforceable by the parties and their respective successors and assigns.<br />
              <b> 16.2</b>These Terms, together with any Form(s), constitute the entire agreement, and supersede any and all prior agreements between You and Us with regard to the subject matter hereof. These Terms and any Form(s) shall prevail over the terms or conditions in any purchase order or other order documentation You or any Entity You represent provides (all such terms or conditions being null and void), and, except as expressly stated herein, there are no other agreements, representations, warranties, or commitments which may be relied upon by either party with respect to the subject matter hereof. In the event of a conflict between any Form and these Terms, these Terms shall prevail.<br />
              <b>16.3</b>Notwithstanding the foregoing, additional terms may apply to certain features or functionality we offer through the Service(s) (the “Additional Terms”). In those instances, we will notify you of such Additional Terms prior to the activation of these features or functionality and the activation of these features or functionality in Your Account will be considered acceptance of the Additional Terms. All such Additional Terms will be considered incorporated into these Terms when You or any User authorized as an administrator in Your Account activates the feature or functionality. Where there is a conflict between these Terms and the Additional Terms, the Additional Terms will control in respect of those functionalities or features.<br />
              <b> 16.4</b>We may amend these Terms from time to time, in which case the new Terms will supersede prior versions. Please read these Terms of use carefully before you start to use Our Service(s) or Websites, as these will apply to your use of the Service(s) and Our Websites. Please check these Terms from time to time to take notice of any changes we made, as they will be binding on you. We will notify you not less than ten (10) days prior to the effective date of any such amendment and your continued use of the Service(s) following the effective date of any such amendment may be relied upon by us as your consent to any such amendment. Our failure to enforce at any time any provision of these Terms does not constitute a waiver of that provision or of any other provision of the Terms.<br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              17. SEVERABILITY; NO WAIVER
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              If any provision in these Terms is held by a court of competent jurisdiction to be unenforceable, such provision shall be modified by the court and interpreted so as to best accomplish the original provision to the fullest extent permitted by applicable law, and the remaining provisions of these Terms shall remain in effect. Our non-exercise of any right under or provision of these Terms does not constitute a waiver of that right or provision of the Terms
              <br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              18. EXPORT COMPLIANCE AND USE RESTRICTIONS; FEDERAL GOVERNMENT END USE PROVISIONS
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              The Service(s) and other Software or components of the Service(s) which We may provide or make available to You or Users may be subject to U.S. (or other territories) export control and economic sanctions laws. You agree to comply with all such laws and regulations as they relate to access to and use of the Service(s), Software and such other components by You and Users. You shall not access or use the Service(s) if You are located in any jurisdiction in which the provision of the Service(s), Software or other components is prohibited under U.S. or other applicable laws or regulations (a “Prohibited Jurisdiction”) and You shall not provide access to the Service(s) to any government, entity or individual located in any Prohibited Jurisdiction. You represent, warrant and covenant that (i) You are not named on any U.S. government (or other government) list of persons or entities prohibited from receiving U.S. exports, or transacting with any U.S. person, (ii) You are not a national of, or a company registered in, any Prohibited Jurisdiction, (iii) You shall not permit Users to access or use the Service(s) in violation of any U.S. or other applicable export embargoes, prohibitions or restrictions, and (iv) You shall comply with all applicable laws regarding the transmission of technical data exported from the United States and the country in which You and Your Users are located. If You are a U.S. federal government department or agency or contracting on behalf of such department or agency, this Service(s) is a “Commercial Item” as that term is defined at 48 C.F.R. §2.101, consisting of “Commercial Computer Software” and “Commercial Computer Software Documentation”, as those terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202. Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1 through 227.7202-4, as applicable, the Service(s) is licensed to You with only those rights as provided under the terms and conditions of these Terms.
              <br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              19. RELATIONSHIP OF THE PARTIES
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              The parties are independent contractors. These Terms do not create a partnership, franchise, joint venture, agency, and fiduciary or employment relationship among the parties.
              <br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              20. SURVIVAL
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              Sections 2 (Your Responsibilities), 5 (Intellectual Property Rights), 9 (Billing, Plan Modification and Payments), 10 (Suspension and Termination), 11 (Data Privacy and Security; Confidentiality), 13 (Disclaimer of Warranties), 14 (Limitation of Liability), 15 (Indemnification), 20 (Survival), 21 (Notices; Consent to electronic communication) and 22 (Governing Law and Dispute Resolution) shall survive any termination of Our agreement with respect to use of the Service(s) by You. Termination of such agreement shall not limit Your or Our liability for obligations accrued as of or prior to such termination or for any breach of these Terms.
              <br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              21. NOTICES; CONSENT TO ELECTRONIC COMMUNICATIONS
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b>21.1 </b>All notices to be provided by Us to You under these Terms may be delivered in writing (i) by nationally recognized overnight delivery service (“Courier”) or US mail to the contact mailing address provided by You on any while subscribing to the Service(s); or (ii) electronic mail to the e-mail address provided for Your Account.<br />
              <b> 21.2 </b>Our address for a notice to Us in writing to <a href="legal@effySales.com" target="_blank">
                legal@effySales.com</a> by electronic mail. All notices shall be deemed to have been given immediately upon delivery by electronic mail.<br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              22. GOVERNING LAW AND DISPUTE RESOLUTION
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              <b>22.1 </b>These Terms shall be governed by the laws of the State of California without regard to conflict of laws principles. You hereby expressly agree to submit to the exclusive personal jurisdiction of the federal and state courts of the State of California, San Francisco County, for the purpose of resolving any dispute relating to the Terms or Your access to or use of the Service(s).<br />
              <b> 22.2 </b>Any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of these Terms to arbitrate, shall be determined by arbitration in San Francisco, California before three arbitrators. The arbitration shall be administered by JAMS pursuant to its Comprehensive Arbitration Rules and Procedures and in accordance with the Expedited Procedures in those Rules. Judgment on the Award may be entered in any court having jurisdiction. ANY ARBITRATION UNDER THESE TERMS SHALL TAKE PLACE ON AN INDIVIDUAL BASIS. CLASS ACTION AND CLASS ARBITRATIONS ARE NOT PERMITTED. YOU UNDERSTAND THAT BY AGREEING TO THESE TERMS, YOU WAIVE YOUR RIGHT TO PARTICIPATE IN CLASS ACTIONS. This clause shall not preclude parties from seeking provisional remedies in aid of arbitration from a court of appropriate jurisdiction.<br />
            </p>
            <p style={{fontSize: '19px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              23. DEFINITIONS
            </p>
            <p style={{fontSize: '16px', textAlign: 'justify', lineHeight: 2, marginBottom: '5px', color: '#606060'}}>
              When used in these Terms with the initial letters capitalized, in addition to terms defined elsewhere in these Terms, the following terms have the following meanings:
              <br />
              <b> Account:</b>means any accounts or instances created by or on behalf of You for access and use of any of the Service(s).<br />
              <b>  Affiliate: </b>means, with respect to a party, any entity that directly or indirectly controls, is controlled by, or is under common control with such party, whereby “control” (including, with correlative meaning, the terms “controlled by” and “under common control”) means the possession, directly or indirectly, of the power to direct, or cause the direction of the management and policies of such person, whether through the ownership of voting securities, by contract, or otherwise.<br />
              <b>Agent: </b>means an individual authorized to use the Service(s) through Your Account for such Service(s) as an agent and/or administrator as identified through a User Login.
              API: means the application programming interfaces developed, enabled by or licensed to Us that permits a User to access certain functionality provided by the Service(s).
              <br />
              <b>API Policies:</b>means the policies published on the Websites (as specified below) that govern the use of APIs, as updated from time to time<br />
              <b>App Gallery: </b>means an online marketplace for Apps that interoperate with Our Service(s).<br />
              <b>Apps: </b> mean the software applications listed on the App Gallery which are created, developed, licensed or owned by Us or third party developers. The term also includes any updates, upgrades and other changes to such software applications and versions thereof. Confidential Information: means all information disclosed by You to Us or by Us to You which is in tangible form and labeled “confidential” (or with a similar legend) or which a reasonable person would understand to be confidential given the nature of the information and circumstances of disclosure. For purposes of these Terms, Your Data shall be deemed Confidential Information. Notwithstanding the foregoing, Confidential Information shall not include any information which (a) was publicly known and made generally available in the public domain prior to the time of disclosure by the disclosing party; (b) becomes publicly known and made generally available after disclosure by the disclosing party to the receiving party through no action or inaction of the receiving party; (c) is already in the possession of the receiving party at the time of disclosure by the disclosing party as shown by the receiving party’s files and records prior to the time of disclosure; (d) is obtained by the receiving party from a third party without a breach of such third party’s obligations of confidentiality; (e) is independently developed by the receiving party without use of or reference to the disclosing party’s Confidential Information, as shown by documents and other competent evidence in the receiving party’s possession; or (f) is required by law to be disclosed by the receiving party, provided that the receiving party shall give the disclosing party written notice of such requirement prior to disclosing so that the disclosing party may seek a protective order or other appropriate relief.<br />
              <b> Custom Apps</b>means an application developed specifically for a User of the Service(s) and not listed in the App Gallery.<br />
              <b> Directive:</b>means Directive 95/46/EC on the protection of individuals with regard to the Processing of Personal Data and on the free movement of such data.<br />
              <b>Documentation:</b>means any written or electronic documentation, images, video, text or sounds specifying the functionalities of the Service(s) provided or made available by Us to You or Your Users through the Service(s) or otherwise.
              <br />
              <b>End-Customer: </b>means any person or entity other than You or Your Users with whom You interact using the Service(s<br />
              <b> Form:</b>means any service order form referencing these Terms and executed or approved by You and Us with respect to Your subscription to the Service(s), which form may detail, among other things, the number of Users authorized to use the Service(s) under Your subscription to the Service(s) and the Service Plan(s) applicable to Your subscription to the Service(s).<br />
              <b>Mobile Applications: </b>mean the software applications created, developed and owned by Us to enable access and use of the Service(s) through mobile or other handheld devices (such as apps on iOS or Android devices<br />
              <b>Personal Data:</b> means data relating to a living individual who is or can be identified either from the data or from the data in conjunction with other information that is in, or is likely to come into, the possession of the data controller (as defined in the Directive).<br />
              <b>Privacy Policy:</b>means Our privacy policy at <a href="https://effySales.com/privacy" target="_blank">
                https://effySales.com/privacy</a>  as updated from time to time.<br />
              <b> Processing/To Process:</b>means any operation or set of operations which is performed upon Personal Data, whether or not by automatic means, such as collection, recording, organization, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, blocking, erasure or destruction.<br />
              <b> Security Policy: </b>means the security policies for the Service(s) as published on Our Websites.<br />
              <b>Service(s): </b>mean and include EffySales, Software, the API and any Documentation. You may subscribe to one or more of the Service(s). They may be subject to separate and distinct Service Plans.
              <br />
              <b>Service Plan(s):</b> means the pricing plan(s) and the functionality and services associated therewith (as detailed on the Websites) for which You subscribe with respect to any User<br />
              <b>Software:</b>means software provided by Us (either by download or access through the internet) that allows You to use any functionality in connection with the Service(s) and includes a Mobile Application.<br />
              <b>Subscription Term: </b>means the period during which You have agreed to subscribe to the Service(s) with respect to any individual User.<br />
              <b>Us: </b> means EffySales, a Delaware corporation, or any of its successors or assignees. In these Terms, Us may also be referred to as “We”, and “Our”.<br />
              <b> User:</b>means those who are designated users within the Service(s), including an Account administrator, Agents and other designated users.<br />
              <b>Websites: </b>means the websites for various Service(s) and other websites that EffySales operates.<br />
              <b>Your Data:</b>means all electronic data, text, messages or other materials submitted to the Service(s) by You through Your Account in connection with Your use of the Service(s), including, without limitation, Personal Data.<br />
            </p>
          </div>			
        </div>
      </div>
            
          </section>

        </div>


      </div>


    </>
  )
}
