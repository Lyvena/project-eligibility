import React from 'react';
import { ProjectSubmissionForm } from '../components/ProjectSubmissionForm';
import { EligibilityResults } from '../components/EligibilityResults';
import { useToast } from '../hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const handleSubmission = (projectData: any) => {
    toast({
      title: "Project Submitted",
      description: "Your project has been submitted for eligibility check.",
    });
  };

  return (
    <div className="flex-1 bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Check Your Project Eligibility</h1>
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
            <ProjectSubmissionForm onSubmit={handleSubmission} />
            <EligibilityResults />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;