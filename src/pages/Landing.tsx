import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-center mb-6">
        AI PGF Project Eligibility Checker
      </h1>
      <p className="text-xl text-center text-gray-600 mb-8 max-w-2xl">
        Quickly evaluate your project\'s eligibility for Program Guild Funding using our advanced AI-powered system.
      </p>
      <div className="space-x-4">
        <Button asChild size="lg">
          <Link to="/project">Check Your Project</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Landing;