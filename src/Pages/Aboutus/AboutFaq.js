import React, { useState } from 'react';

const AboutFaq = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqData = [
      {
        id: 1,
        question: 'What types of services does Mr. Home Service offer?',
        answer:
          'Mr. Home Service offers a wide range of home improvement services, including roofing, siding, windows, doors, and more. Our team of skilled professionals can handle everything from small repairs to major renovations.',
      },
      {
        id: 2,
        question: 'How do I schedule a consultation with Mr. Home Service?',
        answer: 'You can schedule a consultation with Mr. Home Service by contacting our customer service team by phone or email. We will work with you to find a convenient time for a consultation and provide you with a detailed quote for your project.',
      },
      {
        id: 3,
        question: 'Is Mr. Home Service licensed and insured?',
        answer:
          'Yes, Mr. Home Service is fully licensed and insured to provide home improvement services in our service areas. We take safety and quality very seriously, and we maintain all necessary certifications to ensure that our work is up to industry standards.',
      },
      {
        id: 4,
        question: 'How long does a typical home improvement project take with Mr. Home Service?',
        answer:
          'The duration of a home improvement project will depend on the specific details of the project, including its size, scope, and complexity. We will provide you with an estimated timeline for your project during the consultation process, and we will work closely with you to ensure that we meet all of your deadlines.',
      },
      {
        id: 5,
        question: 'Does Mr. Home Service offer a warranty on its products and services?',
        answer:
          'Yes, we stand behind the quality of our work and our products, and we offer a comprehensive warranty on all of our services. We want our customers to be completely satisfied with their experience working with us, and we will do everything we can to ensure that their investment in their home is protected.',
      },
      {
        id: 6,
        question: 'How long has Mr. Home Service been in business?',
        answer:
          'Mr. Home Service has been providing quality home improvement services for 35 years. Our experienced team has worked on thousands of projects, and we have built a reputation for excellence in our industry.',
      },
      {
        id: 7,
        question: 'What areas does Mr. Home Service serve?',
        answer:
          'We are proud to serve customers throughout the [insert service area] area. We work closely with homeowners to understand their needs and provide tailored solutions that meet their unique requirements.',
      },
      {
        id: 8,
        question: 'How does Mr. Home Service ensure quality in its work?',
        answer:
          'We believe that quality is the key to success in the home improvement industry. We use only the best materials and equipment in our work, and we employ skilled professionals who are dedicated to delivering exceptional results. We also offer comprehensive warranties on all of our services to ensure that our customers are completely satisfied with their experience.',
      },
      {
        id: 9,
        question: 'Can I see examples of Mr. Home Services past work?',
        answer:
          'Yes, we would be happy to provide you with examples of our past work. We maintain a portfolio of our completed projects, which you can review to get a sense of our quality and style. We also have customer testimonials available on our website and other platforms that can give you a sense of what its like to work with us.',
      },
      {
        id: 10,
        question: 'How does Mr. Home Service handle unforeseen issues during a project?',
        answer:
          'We understand that unexpected issues can arise during any home improvement project. Our team is trained to handle these situations quickly and effectively, and we will work with you to find a solution that meets your needs and budget. We will keep you informed throughout the process and ensure that you are completely satisfied with the final outcome.',
      },
    ];
  
    const toggleOpen = (index) => {
      setOpenIndex(openIndex === index ? -1 : index);
    };
  return (
    <div className='my-10'>
    <h2 className='text-center text-[45px] font-extrabold'>FAQS</h2>
         <div className="max-w-2xl mx-auto mt-5">
      {faqData.map((faq, index) => (
        <div key={index} className="border-b mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(index)}
          >
            <h2 className="text-lg font-medium ">{faq.question}</h2>
            <span
              className={`${
                openIndex === index ? 'transform rotate-180 text-[#f6b234]' : ''
              } transition-transform duration-200 text-[#f6b234]`}
            >
              &#9650;
            </span>
          </div>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
    </div>
  )
}

export default AboutFaq