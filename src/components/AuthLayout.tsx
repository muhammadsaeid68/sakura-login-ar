
import React from "react";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
  illustrationSrc: string;
  className?: string;
}

const AuthLayout = ({ children, illustrationSrc, className }: AuthLayoutProps) => {
  return (
    <div className={cn("auth-container", className)}>
      <div className="form-side animate-fade-in">
        {children}
      </div>
      <div className="illustration-side">
        <img 
          src={illustrationSrc} 
          alt="Japanese landscape illustration" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default AuthLayout;
