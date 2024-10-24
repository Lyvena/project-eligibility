import React from 'react';
import { ClipboardCheck } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <ClipboardCheck className="h-8 w-8 text-primary" />
      <span className="font-bold text-xl">PGF Checker</span>
    </div>
  );
};