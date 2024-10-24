import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="flex items-center gap-2 text-xl">
        <Mail className="h-6 w-6" />
        <a 
          href="mailto:info@lyvena.xyz"
          className="text-primary hover:underline"
        >
          info@lyvena.xyz
        </a>
      </div>
    </div>
  );
};

export default Contact;