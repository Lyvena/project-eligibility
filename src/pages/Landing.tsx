import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Rocket, Sparkles, Info, ClipboardCheck } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-5xl font-bold text-center mb-6">
          AI PGF Project Eligibility Checker
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8 max-w-2xl">
          Quickly evaluate your project's eligibility for Program Guild Funding using our advanced AI-powered system.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="gap-2">
            <Link to="/project">
              <ClipboardCheck className="w-5 h-5" />
              Check Your Project
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/contact">
              <Info className="w-5 h-5" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Rocket className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
          <p className="text-gray-600">
            Our advanced AI system analyzes your project details to determine PGF eligibility with high accuracy.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Sparkles className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
          <p className="text-gray-600">
            Get personalized recommendations to improve your project's chances of success.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Info className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Detailed Insights</h3>
          <p className="text-gray-600">
            Receive comprehensive feedback and insights about your project's strengths and areas for improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;