import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = React.useState('');

  const handleSaveApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd want to store this securely
    localStorage.setItem('openai_api_key', apiKey);
    toast({
      title: "API Key Saved",
      description: "Your OpenAI API key has been saved successfully.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex items-center gap-2 mb-8">
        <SettingsIcon className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">OpenAI API Configuration</h2>
        <form onSubmit={handleSaveApiKey} className="space-y-4">
          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
              OpenAI API Key
            </label>
            <Input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="w-full"
            />
            <p className="mt-1 text-sm text-gray-500">
              Your API key will be used to power the AI features of the application.
            </p>
          </div>
          <Button type="submit">Save API Key</Button>
        </form>
      </div>
    </div>
  );
};

export default Settings;