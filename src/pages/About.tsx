import { Helmet } from 'react-helmet-async';
import AboutContent from '../components/About';
import Skills from '../components/Skills';
import { BUSINESS_INFO } from '../data';

export default function About() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>About {BUSINESS_INFO.founder} | {BUSINESS_INFO.name}</title>
        <meta name="description" content={`Learn more about ${BUSINESS_INFO.founder}, the creative force behind ${BUSINESS_INFO.name}. Expertise in video editing, graphic design, and Instagram Reels.`} />
        <link rel="canonical" href="https://getreelsbyg.vercel.app/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Person",
                "name": "${BUSINESS_INFO.founder}",
                "jobTitle": "Video Editor & Graphic Designer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "${BUSINESS_INFO.name}"
                }
              }
            }
          `}
        </script>
      </Helmet>
      
      <div className="sr-only">
        <h1>About {BUSINESS_INFO.founder}</h1>
      </div>
      
      <AboutContent />
      <Skills />
    </div>
  );
}
