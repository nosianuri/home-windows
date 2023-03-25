import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Loader from '../../Shared/Loader';

const PrivacyPolicy = () => {

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
                    <div className='bg-[#323a56] text-[#ffffff]'>
                        <div className='max-w-7xl mx-auto sm:py-16 py-5'>
                            <h3 className='text-3xl font-bold !leading-normal'>PRIVACY NOTICE</h3>
                            <h5 className='text-xl font-bold mb-2 !leading-normal'>Last updated 24 March, 2023</h5>
                            <p>This privacy notice for Instal US, LLC ("<span className='font-bold'>Company</span>," "<span className='font-bold'>we</span>," "<span className='font-bold'>us</span>," or "<span className='font-bold'>our</span>"), describes how and why we might collect, store, use, and/or share ("<span className='font-bold'>process</span>") your information when you use our services ("<span className='font-bold'>Services</span>"), such as when you:</p>
                            <ul>
                                <li>Visit our website at <a className='underline text-[#ffae00]' href="/">https://HomesWindows.com</a> or any website of ours that links to this privacy notice</li>
                                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                            </ul>
                            <p className='mb-8'><span className='font-bold'>Questions or concerns?</span> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at adops_us@instal.com.</p>
                            <h5 className='font-bold mb-2 text-3xl !leading-normal'>SUMMARY OF KEY POINTS</h5>
                            <p className='mb-2 font-bold'>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.</p>

                            <p className='mb-2'><span className='font-bold'>What personal information do we process?</span> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Instal US, LLC and the Services, the choices you make, and the products and features you use. Click here to learn more.</p>

                            <p className='mb-2'><span className='font-bold'>Do we process any sensitive personal information?</span> We do not process sensitive personal information.</p>

                            <p className='mb-2'><span className='font-bold'>Do you receive any information from third parties?</span> We do not receive any information from third parties.</p>

                            <p className='mb-2'><span className='font-bold'>How do you process my information?</span>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click here to learn more.</p>

                            <p className='mb-2'><span className='font-bold'>In what situations and with which types of parties do we share personal information?</span>We may share information in specific situations and with specific categories of third parties. Click here to learn more.</p>

                            <p className='mb-2'><span className='font-bold'>How do we keep your information safe?</span>We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click here to learn more.</p>

                            <p className='mb-2'><span className='font-bold'>What are your rights?</span>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click here to learn more.</p>

                            <p className='mb-2'><span className='font-bold'>How do I exercise my rights?</span>The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>

                            <p className='mb-8'>Want to learn more about what Instal US, LLC does with any information we collect? Click here to review the notice in full.</p>

                            <h4 className='text-3xl !leading-normal'>TABLE OF CONTENTS</h4>
                            <ul className='my-3'>
                                <li className='underline text-[#ffae00]'>2. HOW DO WE PROCESS YOUR INFORMATION?</li>
                                <li className='underline text-[#ffae00]'>1. WHAT INFORMATION DO WE COLLECT?</li>
                                <li className='underline text-[#ffae00]'>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
                                <li className='underline text-[#ffae00]'>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                                <li className='underline text-[#ffae00]'>5. HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                                <li className='underline text-[#ffae00]'>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                                <li className='underline text-[#ffae00]'>7. DO WE COLLECT INFORMATION FROM MINORS?</li>
                                <li className='underline text-[#ffae00]'>8. WHAT ARE YOUR PRIVACY RIGHTS?</li>
                                <li className='underline text-[#ffae00]'>9. CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                                <li className='underline text-[#ffae00]'>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
                                <li className='underline text-[#ffae00]'>11. DO WE MAKE UPDATES TO THIS NOTICE?</li>
                                <li className='underline text-[#ffae00]'>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                                <li className='underline text-[#ffae00]'>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
                            </ul>
                            <h4 className='text-3xl font-bold !leading-normal'>1. WHAT INFORMATION DO WE COLLECT?</h4>
                            <p className='font-bold'>Personal information you disclose to us</p>
                            <p className='mb-2'><span className='font-bold'>In Short:</span> We collect personal information that you provide to us.</p>

                            <p className='mb-2'>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
                            <p><span className='font-bold'>Personal Information Provided by You.</span> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                            <ul className='my-8'>
                                <li>names</li>
                                <li>phone numbers</li>
                                <li>email addresses</li>
                                <li>mailing addresses</li>
                                <li>contact preferences</li>
                                <li>contact or authentication data</li>
                            </ul>

                            <p className='mb-2'><span className='font-bold'>Sensitive Information.</span> We do not process sensitive information.</p>
                            <p className='mb-2'>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
                            <p className='text-xl font-bold'>Information automatically collected</p>
                            <p className='mb-2'><span className='italic'>In Short:</span> Some information -- such as your Internet Protocol (IP) address and/or browser and device characteristics -- is collected automatically when you visit our Services.</p>
                            <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
                            <p>Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice: <span className='text-[#ffae00]'>https://homeswindowsinstallation.com/cookie-policy/.</span></p>

                            <p>The information we collect includes:</p>
                            <ul className='my-8'>
                                <li>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
                                <li>Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
                                <li>Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
                            </ul>
                            <h4 className='text-3xl font-bold !leading-normal'>2. HOW DO WE PROCESS YOUR INFORMATION?</h4>
                            <p className='mb-2'><span className='italic font-bold'>In Short:</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>

                            <p className='font-bold'>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
                            <ul>
                                <li><span className='font-bold'>To respond to user inquiries/offer support to users.</span> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                                <li><span className='font-bold'>To send administrative information to you.</span> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
                                <li><span className='font-bold'>To send you marketing and promotional communications.</span> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below.</li>
                                <li><span className='font-bold'>To deliver targeted advertising to you.</span> We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more. For more information see our Cookie Notice: https://homeswindowsinstallation.com/cookie-policy/.</li>
                                <li><span className='font-bold'>To protect our Services.</span> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
                                <li><span className='font-bold'>To comply with our legal obligations.</span> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</li>
                            </ul>

                            <h4 className='text-3xl font-bold !leading-normal'>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h4>
                            <p><span>In Short:</span>
                                We may share information in specific situations described in this section and/or with the following categories of third parties.</p>


                            Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. The categories of third parties we may share personal information with are as follows:

                            Ad Networks

                            Affiliate Marketing Programs

                            Communication & Collaboration Tools

                            Data Analytics Services

                            Data Storage Service Providers

                            Performance Monitoring Tools

                            Retargeting Platforms

                            Sales & Marketing Tools

                            Social Networks

                            We also may need to share your personal information in the following situations:
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PrivacyPolicy