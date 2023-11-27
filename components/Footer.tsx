// Footer.tsx

import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white p-4 w-full ">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-2xl mx-auto">
        <div className="flex items-center">
          <span className="font-bold text-lg tracking-wider text-purple-500">Vanshika Rana</span>
        </div>
        <div className="flex items-center">
        <FaEnvelope className="ml-2 md:ml-4" /> &nbsp;
          <span className="inline-block tracking-wider"> ranavanshika172000@gmail.com</span>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
