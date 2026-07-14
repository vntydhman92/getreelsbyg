import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';
import weddingBlogImg from '../assets/images/blog_wedding_highlight_1783271661459.jpg';
import socialMediaImg from '../assets/images/blog_social_media_1783271677958.jpg';
import colorGradingImg from '../assets/images/blog_color_grading_1783271703190.jpg';

const BLOG_POSTS = [
  {
    title: 'How to Capture the Perfect Wedding Highlight',
    category: 'Cinematography',
    description: 'A brief overview of managing lighting, audio, and storytelling to deliver an unforgettable cinematic wedding feature.',
    image: weddingBlogImg,
  },
  {
    title: 'The Future of Instagram Reels and Short-Form Content',
    category: 'Social Media',
    description: 'Discover the latest trends in short-form video creation and how to keep your audience engaged in 2024.',
    image: socialMediaImg,
  },
  {
    title: 'Color Grading Secrets for Cinematic Videos',
    category: 'Post-Production',
    description: 'Learn how to use color grading to establish a mood, guide the viewer’s eye, and make your footage look like a Hollywood movie.',
    image: colorGradingImg,
  }
];

export default function Blog() {
  return (
    <div className="pt-20 min-h-[80vh] flex flex-col pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Helmet>
        <title>Blog & Insights | {BUSINESS_INFO.name}</title>
        <meta name="description" content="Read the latest tips, updates, and behind-the-scenes stories from GetReelsByG on video editing, graphic design, and content creation." />
        <link rel="canonical" href="https://getreelsbyg.vercel.app/blog" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Blog & Insights | ${BUSINESS_INFO.name}",
              "description": "Read the latest tips, updates, and behind-the-scenes stories from GetReelsByG on video editing, graphic design, and content creation.",
              "url": "https://getreelsbyg.vercel.app/blog",
              "publisher": {
                "@type": "Organization",
                "name": "${BUSINESS_INFO.name}"
              }
            }
          `}
        </script>
      </Helmet>
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#ffffff] uppercase mb-4">
          Latest Stories
        </h1>
        <p className="text-neutral-400 max-w-2xl text-lg">
          Insights, tips, and behind-the-scenes magic from my creative journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post, i) => (
          <motion.article 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-lg overflow-hidden group flex flex-col"
          >
            <div className="aspect-[16/9] bg-neutral-900 overflow-hidden relative">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-[10px] text-[#f43f5e] font-bold uppercase tracking-widest mb-3">
                {post.category}
              </div>
              <h2 className="text-lg font-bold text-[#ffffff] mb-3">
                {post.title}
              </h2>
              <p className="text-sm text-neutral-400 mb-6 flex-1">
                {post.description}
              </p>
              <div className="mt-auto text-[10px] uppercase font-bold tracking-widest text-neutral-500 hover:text-white transition-colors cursor-pointer w-max">
                Read Article &rarr;
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
