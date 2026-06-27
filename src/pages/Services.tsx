import { Helmet } from 'react-helmet-async';
import ServicesContent from '../components/Services';
import Pricing from '../components/Pricing';
import { BUSINESS_INFO } from '../data';

export default function Services() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Services & Packages | {BUSINESS_INFO.name}</title>
        <meta name="description" content="Explore our professional services including video editing, graphic design, Instagram Reels, and brand identity creation." />
        <link rel="canonical" href="https://getreelsbyg.vercel.app/services" />
      </Helmet>

      <div className="sr-only">
        <h1>Video Editing & Graphic Design Services</h1>
      </div>

      <ServicesContent />
      <Pricing />
    </div>
  );
}
