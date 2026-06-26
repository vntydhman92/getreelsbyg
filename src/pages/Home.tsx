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
        <link rel="canonical" href="https://getreelsbyg.netlify.app/" />
      </Helmet>
      
      <Hero />
      <Portfolio />
      <TestimonialsAndStats />
      <FAQ />
    </>
  );
}
