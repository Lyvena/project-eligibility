import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { useToast } from '../hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { UserPlus, LogIn } from 'lucide-react';

export const AuthDialog = () => {
  const { toast } = useToast();
  const { register: registerSignup, handleSubmit: handleSignupSubmit } = useForm();
  const { register: registerLogin, handleSubmit: handleLoginSubmit } = useForm();

  const onSignup = (data: any) => {
    toast({
      title: "Account created",
      description: "Welcome to PGF Checker!",
    });
  };

  const onLogin = (data: any) => {
    toast({
      title: "Logged in",
      description: "Welcome back!",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <UserPlus className="h-4 w-4" />
          Sign Up
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Authentication</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <form onSubmit={handleSignupSubmit(onSignup)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  {...registerSignup("email", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  {...registerSignup("password", { required: true })}
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="login">
            <form onSubmit={handleLoginSubmit(onLogin)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  {...registerLogin("email", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  {...registerLogin("password", { required: true })}
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};