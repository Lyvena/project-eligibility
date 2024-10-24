import React from 'react';
import { ProjectSubmissionForm } from '../components/ProjectSubmissionForm';
import { EligibilityResults } from '../components/EligibilityResults';
import { useToast } from '../hooks/use-toast';
import { Logo } from '../components/Logo';
import { AuthDialog } from '../components/AuthDialog';

const Index = () => {
  const { toast } = useToast();

  const handleSubmission = (projectData: any) => {
    toast({
      title: "Project Submitted",
      description: "Your project has been submitted for eligibility check.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Logo />
            <AuthDialog />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">AI PGF Project Eligibility Checker</h1>
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