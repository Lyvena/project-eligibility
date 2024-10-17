import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

export const EligibilityResults: React.FC = () => {
  // This is placeholder data. In a real application, this would come from the AI's analysis
  const eligibilityResults = {
    isEligible: true,
    reasons: [
      "Project aligns with PGF goals",
      "Funding amount is within acceptable range",
      "Project description is clear and detailed"
    ],
    suggestions: [
      "Consider providing more information about the team's experience",
      "Include specific milestones and timeline in the proposal"
    ]
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          Eligibility Results
          {eligibilityResults.isEligible ? (
            <CheckCircle className="ml-2 h-6 w-6 text-green-500" />
          ) : (
            <XCircle className="ml-2 h-6 w-6 text-red-500" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Reasons:</h3>
        <ul className="list-disc pl-5 mb-4">
          {eligibilityResults.reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mb-2">Suggestions for Improvement:</h3>
        <ul className="list-disc pl-5">
          {eligibilityResults.suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};