import { Helmet } from 'react-helmet-async';
import PortfolioContent from '../components/Portfolio';
import InstagramReels from '../components/InstagramReels';
import { BUSINESS_INFO } from '../data';

export default function Portfolio() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Portfolio & Work | {BUSINESS_INFO.name}</title>
        <meta name="description" content="Explore our portfolio of video editing, graphic design, and content creation projects." />
        <link rel="canonical" href="https://getreelsbyg.vercel.app/portfolio" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Portfolio & Work | ${BUSINESS_INFO.name}",
              "description": "Explore our portfolio of video editing, graphic design, and content creation projects.",
              "url": "https://getreelsbyg.vercel.app/portfolio"
            }
          `}
        </script>
      </Helmet>
      
      <div className="sr-only">
        <h1>Our Work and Portfolio</h1>
      </div>
      
      <PortfolioContent />
      <InstagramReels />
    </div>
  );
}
