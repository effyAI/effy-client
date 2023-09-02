import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react'
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
export default function Contact(props:any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>  Contact us | App and Web Development Team | Get in Touch - effybiz</title>
        <link rel="canonical" href="https://www.effybiz.com/contact-us" />
        <meta
          name="description"
          content="Contact effybiz to discuss your project requirements. Our experienced developers can help you bring your app or web project to life. Get in touch with us today to get started."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="  Contact us | App and Web Development Team | Get in Touch - effybiz" />
        <meta property="og:description" content="Contact effybiz to discuss your project requirements. Our experienced developers can help you bring your app or web project to life. Get in touch with us today to get started." />
        <meta property="og:url" content="https://www.effybiz.com/contact-us" />
        <meta property="og:site_name" content="effybiz" />
        <meta property="article:publisher" content="https://www.facebook.com/people/effybiz-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-01T13:05:06+00:00" />
        <meta property="og:image" content="https://www.effybiz.com/images/illuslator/Contactus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@effybiztech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="7 minutes" />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }} >
          <div className=" bg-white border-b   ">
            <Header />
          </div>
        </div>
        <section>
          <div className='mx-auto 2xl:w-9/12 xl:w-5/6  w-11/12 space-y-10 py-14 flex-row flex'>
         

         <div className='w-full space-y-4'>
         <h1 className=' text-[#22222] text-3xl md:text-4xl font-bold'>Get In Touch</h1>
            <p className='text-[#222]   text-lg tracking-wide'>Interested in learning further about our capabilities, or just want to get in touch? Fill out the form below to connect with a effybiz team members today!</p>
         </div>
         <div className='w-full'>
         <section className="bg-white  shadow-xl border rounded-xl ">
        <div className="p-8 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          <form action="#" className=" grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900  ">First Name</label>
              <input type="email" id="email" className="focus:outline-none focus:ring-1 ring-purple-400   border   text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Enter first name" required />
            </div>

            <div className=''>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900  ">Last Name</label> 
              <input type="email" id="email" className="focus:outline-none focus:ring-1 ring-purple-400   border   text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Enter last name" required />
            </div>

            <div className='col-span-2 '>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900  ">Country</label> 
            <select className="form-control border w-full p-2 focus:outline-none" id="country" name="country" >
        <option value=" Select Your Country "> Select Your Country </option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Botswana">Botswana</option><option value="Brazil">Brazil</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Greece">Greece</option><option value="Grenada">Grenada</option><option value="Guatemala">Guatemala</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Honduras">Honduras</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Ivory Coast">Ivory Coast</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea, North">Korea, North</option><option value="Korea, South">Korea, South</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Nagorno-Karabakh">Nagorno-Karabakh</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Qatar">Qatar</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor">Timor</option><option value="Togo">Togo</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City">Vatican City</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
      </select>
            </div>

            

            <div className='col-span-2 '>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900  ">Country</label> 
            <select id="subject" name="subjects" className="form-control border w-full p-2 focus:outline-none" placeholder="Select Subject"  >
        <option value=""> </option>
        <option value={1}>Sales Enquiry</option>
        <option value={2}>Business Associate Enquiry</option>
        <option value={3}>General Enquiry</option>
        <option value={4}>Suggestions</option>
        <option value={5}>Demo Request</option>
        <option value={6}>Others</option>
      </select>
            </div>

            <div className='col-span-2 '>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900  ">Business Email id *</label> 
              <input type="email" id="email" className="focus:outline-none focus:ring-1 ring-purple-400   border   text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Enter Business Email id" required />
            </div>
            <div className='col-span-2 '>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900  ">Company / Organization Name *</label> 
              <input type="email" id="email" className="focus:outline-none focus:ring-1 ring-purple-400   border   text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Enter Company/Organization Name" required />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." defaultValue={""} />
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
        </div>
      </section>


         </div>
          </div>
        </section>
    
        <div className="bg-white md:py-4 pt-0 ">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6  w-11/12 space-y-10 py-7 lg:py-10">
            <div className="text-center space-y-8 ">
              <h2 className="text-3xl font-bold capitalize text-black">Find us on google map</h2>

              <div className=" pt-4 w-full">
                <iframe title='googlemap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d747.6231852009806!2d75.73434582052502!3d26.95691455946126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3134aeb1007%3A0x6b2253a37cf5c82e!2seffybiz%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1652939859741!5m2!1sen!2sin" className="w-full md:h-[31.25rem] h-[15rem]"></iframe>
              </div>
            </div>
          </section>
        </div>
        <BlogSection initialData={initialData} />
      </div>
    </>
  )
}
 
