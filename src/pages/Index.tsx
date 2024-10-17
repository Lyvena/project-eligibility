import React from 'react';
import { ProjectSubmissionForm } from '../components/ProjectSubmissionForm';
import { EligibilityResults } from '../components/EligibilityResults';
import { useToast } from '../hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const handleSubmission = (projectData: any) => {
    // This is where we would typically send the data to an API
    // For now, we'll just show a toast notification
    toast({
      title: "Project Submitted",
      description: "Your project has been submitted for eligibility check.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">AI PGF Project Eligibility Checker</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
              <ProjectSubmissionForm onSubmit={handleSubmission} />
              <EligibilityResults />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;