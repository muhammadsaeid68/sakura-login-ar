
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt with:", { fullName, email, password });
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="auth-title">أنشئ حسابك الجديد</h1>
      <p className="auth-subtitle">ابدأ رحلتك بين الأزهار الهادئة.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-field">
          <Label htmlFor="fullName" className="text-right block mb-1.5">الاسم الكامل</Label>
          <Input 
            id="fullName" 
            type="text" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full"
            required
          />
        </div>
        
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
        
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          إنشاء حساب
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          لديك حساب؟{" "}
          <Link to="/" className="text-secondary font-medium hover:underline">
            سجل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
