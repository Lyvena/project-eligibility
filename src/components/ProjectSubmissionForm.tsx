import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

interface ProjectSubmissionFormProps {
  onSubmit: (data: any) => void;
}

export const ProjectSubmissionForm: React.FC<ProjectSubmissionFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Project Name</label>
        <Input
          id="projectName"
          {...register("projectName", { required: "Project name is required" })}
          className="mt-1"
        />
        {errors.projectName && <p className="mt-1 text-sm text-red-600">{errors.projectName.message as string}</p>}
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Project Description</label>
        <Textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          className="mt-1"
          rows={4}
        />
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message as string}</p>}
      </div>
      <div>
        <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-700">Funding Amount (USD)</label>
        <Input
          id="fundingAmount"
          type="number"
          {...register("fundingAmount", { required: "Funding amount is required" })}
          className="mt-1"
        />
        {errors.fundingAmount && <p className="mt-1 text-sm text-red-600">{errors.fundingAmount.message as string}</p>}
      </div>
      <Button type="submit">Submit Project</Button>
    </form>
  );
};