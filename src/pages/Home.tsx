import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import TestimonialsAndStats from '../components/TestimonialsAndStats';
import FAQ from '../components/FAQ';
import { BUSINESS_INFO } from '../data';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{BUSINESS_INFO.name} | Expert Video Editing & Graphic Design</title>
        <meta name="description" content="Professional video editing and graphic design services. Specializing in Instagram Reels, promotional videos, and brand identity." />
        <meta name="keywords" content="Video Editor, Graphic Designer, Instagram Reels, Portfolio, Gautam Dhiman, GetReelsByG, Video Production" />
        <link rel="canonical" href="https://getreelsbyg.vercel.app/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "${BUSINESS_INFO.name}",
              "image": "https://getreelsbyg.vercel.app/logo.png",
              "@id": "https://getreelsbyg.vercel.app/",
              "url": "https://getreelsbyg.vercel.app/",
              "telephone": "${BUSINESS_INFO.phone}",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "${BUSINESS_INFO.location}"
              },
              "sameAs": [
                "https://instagram.com/${BUSINESS_INFO.instagram.replace('@', '')}"
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Hero />
      <Portfolio />
      <TestimonialsAndStats />
      <FAQ />
    </>
  );
}
