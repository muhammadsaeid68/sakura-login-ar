
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="auth-title">مرحبًا بعودتك!</h1>
      <p className="auth-subtitle">حيث تزدهر العودة كما تتفتح الأزهار.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-field">
          <Label htmlFor="email" className="text-right block mb-1.5">البريد الإلكتروني</Label>
          <Input 
            id="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
        </div>
        
        <div className="form-field">
          <Label htmlFor="password" className="text-right block mb-1.5">كلمة المرور</Label>
          <div className="relative">
            <Input 
              id="password" 
              type={showPassword ? "text" : "password"}
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10" 
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm cursor-pointer">تذكرني</Label>
          </div>
          <Link to="/forgot-password" className="text-sm text-primary hover:underline">
            هل نسيت كلمة المرور؟
          </Link>
        </div>
        
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          تسجيل الدخول
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          ليس لديك حساب؟{" "}
          <Link to="/signup" className="text-secondary font-medium hover:underline">
            أنشئ حسابًا
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
