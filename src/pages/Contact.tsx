import { Helmet } from 'react-helmet-async';
import ContactContent from '../components/Contact';
import { BUSINESS_INFO } from '../data';

export default function Contact() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Contact {BUSINESS_INFO.name} | Book Our Services</title>
        <meta name="description" content="Get in touch to book video editing and graphic design services, collaborate on content creation, and tell your unique story." />
        <link rel="canonical" href="https://getreelsbyg.netlify.app/contact" />
      </Helmet>
      
      <div className="sr-only">
        <h1>Contact Us</h1>
      </div>

      <ContactContent />
    </div>
  );
}
