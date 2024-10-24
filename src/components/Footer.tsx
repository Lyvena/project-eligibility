import React from 'react';
import { Link } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white shadow mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span>©</span>
            <a 
              href="https://lyvena.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Lyvena.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};