
"use client"
import { Medal, Mic, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect } from 'react';

const SocialPost = ({ platform, url }: { platform: string; url: string }) => {
  if (platform === 'twitter') {
    return (
      <div className="bg-zinc-900 rounded-xl p-0 border border-zinc-800 hover:border-blue-300 transition-all overflow-hidden twitter-embed">
        <blockquote className="twitter-tweet" data-theme="dark">
   
          <a href={url}></a>
        </blockquote>
      </div>
    );
  } else {

    return (
      <div className="bg-zinc-900 rounded-xl p-0 border border-zinc-800 hover:border-blue-300 transition-all overflow-hidden">
        <iframe
          src={url}
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="500" 
          style={{ border: 'none', overflow: 'hidden' }}
          allowFullScreen
        />
      </div>
    );
  }
};

export default function Community() {
  
  useEffect(() => {

    if (typeof window !== 'undefined' && (window as any).twttr) {
      (window as any).twttr.widgets.load();
    }
   
  }, []);

 


  const socialPosts = [
    {
      platform: "twitter",
      url: "https://twitter.com/hackthisfall/status/1868235705962619368",
      engagement: "2.1K views"
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7249349463972982784",
      engagement: "850 reactions"
    },
    {
      platform: "twitter",
      url: "https://twitter.com/cosmoai_/status/1842129102729273567",
      engagement: "1.2K views"
    },
    {
        platform: "twitter",
        url: "https://twitter.com/priyanshubutola/status/1780971754816700471",
        engagement: "1.2K views"
      },
      {
        platform: "twitter",
        url: "https://twitter.com/HackMountains/status/1834589434127261845",
        engagement: "1.2K views"
      },
      {
        platform: "twitter",
        url: "https://twitter.com/ethmumbai/status/1771077335808151668",
        engagement: "1.2K views"
      },
      {
        platform: "twitter",
        url: "https://twitter.com/LearnWeb3IO/status/1790045264960479380",
        engagement: "1.2K views"
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7244402943242752001",
        engagement: "850 reactions"
      },
      
  ];

  return (
    <main className="text-white max-w-6xl mx-auto px-4 py-8 
    h-screen">
     
      <Script 
        src="https://platform.twitter.com/widgets.js" 
        strategy="lazyOnload" 
      />
      
      
      <div className="mb-16">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-900 bg-clip-text text-transparent">
         Recent Community Coversations ...
        </h1>
       


<div className="mb-16">
  

 
  <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
    {socialPosts.map((post, index) => (
      <div key={index} className="break-inside-avoid">
        <SocialPost platform={post.platform} url={post.url} />
      </div>
    ))}
  </div>
</div>
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-lg transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
