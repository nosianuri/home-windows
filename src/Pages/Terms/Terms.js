import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Loader from '../../Shared/Loader';

const Terms = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // simulate a delay of 3 seconds to show the loader
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Terms | Windows Installation</title>
            </Helmet>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <div className=''>
                        <div className='max-w-7xl mx-auto sm:py-16 py-5'>
                            <h3 className='text-3xl font-bold !leading-normal'>Terms of Use</h3>
                            <h5 className='text-xl font-bold mb-2 !leading-normal'>Last update 23/03/2023</h5>
                            <h5 className='text-xl mb-2 '>For our privacy policy please click <a className='text-orange-500 underline hover:no-underline' href="https://mrhomeservice.net/privacy-policy">here</a>.</h5>
                            <p className='mb-8'>Please review these terms and conditions of use (the "Terms and Conditions") carefully before using "MrHomeService.net and other web properties linking to these terms of use using the "MrHomes" brand (the "Site"), (the “Brand”). The Site and Brand are owned and operated by Instal US, LLC and, by using the site or brand, you accept and agree to these Terms and Conditions. If you do not agree to these Terms and Conditions, you may not access or otherwise use the Site. You may only use the Site if you are domiciled in the United States and you are 18 years old or older.</p>

                            <p className='mb-2'>1. <span className='font-bold'>Services Available on the Site Or Brand:</span> The Site and Brand provides content and referrals related to home improvement and repair products, services, and professionals. The service provided by the Site is for general educational, informational, and research purposes only and is not an endorsement, recommendation, or guarantee of any service, product, or professional. No advice or information, whether oral or written, obtained by you from MrHomeService.net or through or from the service shall create any warranty of any kind.</p>

                            <p className='mb-2'>MrHomeService.net is not involved in any transactions between individuals visiting the Site or Brand ("Users") and the businesses or individuals who receive referrals as a result of information provided by Users on the Site ("Contractor(s)"). In using MrHomeService.net's contractor matching service, you acknowledge that MrHomeService.net is not acting as your general contractor, agent, or advisor. Therefore, it is your sole responsibility to select a Contractor and to negotiate the terms for any work performed. You may want to consult with appropriate expert advisors to assist in your home improvements, including a lawyer regarding contracts, permits, and other necessary job documentation and an insurance professional regarding the Contractor's and your own insurance coverage requirements.</p>

                            <p className='mb-8'>MrHomeService.net does not recommend or endorse any specific Contractor or service provider. MrHomeService.net has no control over the quality or legality of any services provided by the Contractors to the Users or the quality or suitability of a given Contractor for a given User. MrHomeService.net receives a fee from Contractors listed in the service.</p>

                            <p className='mb-8'>2. <span className='font-bold'>Information Provided by the Site:</span> The materials provided by the Site are for convenience and information only. MrHomeService.net may post advertisements of third parties on this Site or in email communications. The acceptance by MrHomeService.net of advertising is not intended as and does not in any manner constitute a recommendation, endorsement, or approval by MrHomeService.net. MrHomeService.net shall not be liable for any loss or damage of any sort incurred as a result of any dealings with any advertiser or as the result of the presence of such advertisers on the Site.</p>

                            <p className='mb-8'>3. <span className='font-bold'>User Submissions:</span> In the course of your use of the Site or Brand, you may be asked to provide, or you may provide on your own inclination, information or materials to us (such information and/or materials referred to hereinafter as "User Submissions"). User Submissions include, for example, information you submit to us via your application to receive information from Contractors ("Application Data"). User Submissions also include information and materials you submit to us via other on-line forms on the Site, by e-mail, or in any other manner via the Site. By providing User Submissions through the Site or Brand, you grant permission for us to provide this information to Contractors. We will use your User Submissions to enable the Contractors to make contact with you. Our information collection and use policies are set forth in the Site's Privacy Policy which is incorporated herein by reference for all purposes. Please read our Privacy Policy before submitting any User Submissions. You acknowledge and agree that you are solely responsible for the accuracy, security, and content of the User Submissions. We are not be responsible for maintaining any User Submissions that you provide to us, and we may delete or destroy any such User Submissions at any time and for any or no reason. We reserve the right to refuse to post or to remove any User Submissions, in whole or in part, that, in our sole discretion, are unlawful, unacceptable, undesirable, inappropriate or in violation of these Terms and Conditions.</p>

                            <p className='mb-8'>4. <span className='font-bold'>Information Collected by the Site Or Brand:</span> To provide you better service, the Site or Brand may use "cookies." A cookie is a small file that contains information given to your Internet browser by a website, which can later be retrieved. A cookie is a way for a website to recognize whether or not you have visited the site before. We may use cookies for administrative purposes, such as customizing the information you see when visiting the Site and storing a password for use at the website. Our use of cookies makes your use of the Site easier and faster. We may collect and maintain statistics, including internet protocol (IP) addresses, about users of the Site or Brand. We may also use IP addresses to more clearly determine how Site visitors travel to, through, and around the Site or Brand.</p>

                            <p className='mb-2'>5. <span className='font-bold'>Proprietary Rights:</span> Your use of the Site or Brand does not grant to you ownership of any content, code, data or materials you may access on the Site or Brand. Any commercial use or exploitation of the Site or Brand is strictly prohibited. You are hereby granted a limited royalty-free personal license to view the content on the Site on your personal computer or other internet-compatible device and make a single copy or print of the content on the Site or Brand for your personal, non-commercial use only. You may not otherwise copy, reproduce, distribute or otherwise exploit any content, code, layout, functions, appearance, data or other materials on the Site or Brand. If you make any other use of the Site or Brand, except as otherwise provided above, you may violate copyright and other laws of the United States, other countries, as well as applicable state laws, and you may be subject to liability for such unauthorized use. We do not grant any license or authorization to any user of our trade names, trademarks, service marks or other marks or logos without our separate express written agreement. All rights not expressly granted herein are reserved.</p>

                            <p className='mb-8'>Third-party marks referenced on the Site or Brand are the property of their respective owners and are being used on the Site or Brand to refer to the third-party mark owners and their relevant products and services. Such usage does not imply endorsement of the Site by any such third-party mark owners.</p>

                            <p className='mb-2'>6. <span className='font-bold'>User Conduct:</span> You warrant and agree that, while using the Site or Brand, you shall not upload, post or transmit to or distribute or otherwise publish through the Site or Brand any materials that: (a) are protected by copyright, or other proprietary or intellectual property right, without first obtaining permission from the proprietary or intellectual property rights holder; (b) are untruthful, unlawful, threatening, harassing, profane, tortious, defamatory, vulgar, obscene, libelous, deceptive, fraudulent, contain explicit or graphic descriptions or accounts of sexual acts (including but not limited to sexual language of a violent or threatening nature directed at another individual or group of individuals), invasive of another's privacy or hateful, (c) restrict or inhibit any other user from using and enjoying the Site or Brand, (d) constitute or encourage conduct that would constitute a criminal offense or give rise to civil liability, or (e) contain a virus or other harmful component, advertising of any kind, or false or misleading indications of origin or statements of fact.</p>

                            <p className='mb-8'>You also warrant and agree that you shall not: (a) impersonate any person or entity or misrepresent your affiliation with any other person or entity; (b) upload, post, publish, transmit, copy, reproduce, frame, distribute or in any way exploit any information or other material obtained through the Site or Brand for commercial purposes; (c) modify, translate into any language or computer language, or create derivative works from, any part of this Site or Brand; (d) reverse engineer any part of the Site or Brand; (e) sell, offer for sale, transfer, or license any portion of the Site or Brand in any form to any third parties; (f) engage in spamming, flooding, harvesting of e-mail addresses or other personal information, spidering, "screen scraping," "database scraping," or any other prohibited or inappropriate activity via the Site or Brand; (g) attempt to gain unauthorized access to other computer systems through the Site Or Brand, or (h) use or access the Site or Brand in any way that, in our sole discretion, adversely affects the performance or function of the Site or Brand or any other computer systems or networks used by us or the Site or Brand, or infringes on our copyright or any copyright of our Providers.</p>

                            <p className='mb-8'>7. <span className='font-bold'>Children:</span> The Site or Brand should not be used by children under the age of 18. The Site or Brand is directed at adults and by using the system you are affirming that you are 18 years of age or older.</p>

                            <p className='mb-8'>8. <span className='font-bold'>Updates:</span> We reserve the right to add materials and features to, and to discontinue offering any of the materials and features that are currently a part of, the Site or Brand. From time to time, we may revise the Site or Brand and the Terms and Conditions. Continued access to and use of the Site or Brand constitutes acceptance of such subsequent modifications the Terms and Conditions.</p>

                            <p className='mb-8'>9. <span className='font-bold'>WARNING AND DISCLAIMER OF WARRANTIES:</span> Certain home improvement projects are inherently dangerous, and even the most benign tool, product, chemical or other material can cause serious injury or death if not used properly. ALWAYS READ AND FOLLOW INSTRUCTION MANUALS AND SAFETY WARNINGS, AND SEEK THE ADVICE OF A QUALIFIED PROFESSIONAL. Be particularly careful when dealing with electricity. Moreover, always use common sense. You are using the Site or Brand and the content thereon at your own risk (see below). THE SITE OR BRAND, INCLUDING, WITHOUT LIMITATION, ALL SERVICES, CONTENT, INFORMATION, FUNCTIONS AND MATERIALS, IS PROVIDED "AS IS," "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTY FOR INFORMATION, DATA, DATA PROCESSING SERVICES, OR UNINTERRUPTED ACCESS, ANY WARRANTIES CONCERNING THE AVAILABILITY, ACCURACY, USEFULNESS, OR CONTENT OF INFORMATION, AND ANY WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, AND WE HEREBY DISCLAIM ANY AND ALL SUCH WARRANTIES, EXPRESS AND IMPLIED. WE DO NOT WARRANT THAT THE SITE OR THE SERVICES, CONTENT, FUNCTIONS OR MATERIALS CONTAINED THEREIN WILL BE TIMELY, SECURE, UNINTERRUPTED OR ERROR FREE, OR THAT DEFECTS WILL BE CORRECTED. WE MAKE NO WARRANTY THAT THE SITE WILL MEET USERS' REQUIREMENTS. NO ADVICE, RESULTS OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM US OR THROUGH THE SITE SHALL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN. IF YOU ARE DISSATISFIED WITH THE SITE, YOUR SOLE REMEDY IS TO DISCONTINUE USING THE SITE. YOU SHOULD NOT RELY ON THE SITE OR BRAND TO MAINTAIN ANY USER SUBMISSION; YOU SHOULD RETAIN ALL SUCH DATA AND INFORMATION IN YOUR OWN RECORDS FOR USE IN THE EVENT THAT THE SITE OR BRAND FAILS OR IS UNAVAILABLE, OR THE DATA OR INFORMATION IS LOST.</p>

                            <p className='mb-2'>10. <span className='font-bold'>LIMITATION OF LIABILITY; INDEMNITY:</span> IN NO EVENT SHALL THE SITE OR BRAND PROPRIETOR OR ANY OF ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AFFILIATES, OR CONTENT OR SERVICE PROVIDERS (COLLECTIVELY, THE "PROTECTED ENTITIES") BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES ARISING FROM, OR DIRECTLY OR INDIRECTLY RELATED TO, THE USE OF, OR THE INABILITY TO USE, THE SITE OR THE CONTENT, MATERIALS AND FUNCTIONS RELATED THERETO, OR ANY APPLICATIONS, INCLUDING, WITHOUT LIMITATION, LOSS OF REVENUE, OR ANTICIPATED PROFITS OR LOST BUSINESS OR LOST SALES, EVEN IF SUCH PROTECTED ENTITY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR CERTAIN DAMAGES SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO CERTAIN USERS. IN NO EVENT SHALL THE PROTECTED ENTITIES BE LIABLE FOR OR IN CONNECTION WITH ANY CONTENT POSTED, TRANSMITTED, EXCHANGED OR RECEIVED BY OR ON BEHALF OF ANY USER OR OTHER PERSON ON OR THROUGH THE SITE.</p>

                            <p className='mb-8'>YOU AGREE TO INDEMNIFY, DEFEND AND HOLD THE SITE OR BRAND PROPRIETOR HARMLESS FROM AND AGAINST ANY AND ALL THIRD PARTY CLAIMS, LIABILITIES, DAMAGES, LOSSES OR EXPENSES ARISING OUT OF, BASED ON OR IN CONNECTION WITH YOUR ACCESS AND/OR USE OF THE SITE OR BRAND OR, IF APPLICABLE, THIRD-PARTY USE OF YOUR PASSWORD FOR THE SITE OR BRAND.</p>

                            <p className='mb-8'>11. <span className='font-bold'>Applicable Laws:</span> We control and operate this Site or Brand from our offices in the United States of America. We endeavor to operate the Site or Brand system in conformance with the laws of Georgia and the United States of America. We do not represent that the Site or Brand is appropriate or available for use in any specific location. Access to the Site or Brand from locations where its use or contents are illegal is prohibited. Persons who choose to access this Site or Brand from other locations do so on their own initiative, and are responsible for compliance with local laws, if and to the extent local laws are applicable.</p>

                            <p className='mb-8'>12. <span className='font-bold'>Term and Termination:</span> These Terms and Conditions shall remain in full force and effect during such periods of time during which we are providing you with access to the Site. Upon expiration or termination of the Terms and Conditions, you agree that your access to and use of the Site or Brand will be automatically terminated. Upon termination, both parties are relieved of any further obligations contained in the Terms and Conditions except for those that by their nature survive or may require performance after termination, specifically, but not limited to, indemnity and limitation of liability.</p>

                            <p className='mb-8'>13. <span className='font-bold'>Miscellaneous:</span> The Terms and Conditions and the relationship between you and us shall be governed by the laws of the State of Georgia without regard to its conflict of law provisions. The Terms and Conditions will not be governed by the United Nations Convention on Contracts for the International Sale of Goods, the application of which is expressly excluded. You agree that any cause of action that may arise under the Terms and Conditions shall be commenced and be heard in the appropriate court in the State of Georgia. You agree to submit to the personal and exclusive jurisdiction of the courts located within the State of Georgia and you waive the right to claim that jurisdiction is inappropriate or inconvenient. Our failure to exercise or enforce any right or provision of the Terms and Conditions shall not constitute a waiver of such right or provision. If any provision of the Terms and Conditions is found by a court of competent jurisdiction to be invalid, the parties agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of the Terms and Conditions remain in full force and effect. You agree that regardless of any statute or law to the contrary, any claim or cause of action by you arising out of or related to use of the Site or Brand or the Terms and Conditions must be filed by you within one (1) year after such claim or cause of action arose or be forever barred. If we are required to bring any action or suit to enforce your obligations hereunder or to pursue any remedies we may have for your violation of the Terms and Conditions, we shall be entitled to recover from you, in addition to any other rights and remedies we may have, all reasonable expenses and attorneys' fees for such suit and/or enforcement. You may not assign the Terms and Conditions or delegate any right hereunder without our prior written consent.</p>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Terms