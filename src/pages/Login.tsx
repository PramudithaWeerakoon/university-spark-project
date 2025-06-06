
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Eye, EyeOff, User, GraduationCap, Info } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState<'student' | 'instructor'>('student');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  // Demo credentials
  const demoCredentials = {
    student: {
      email: 'student@university.edu',
      password: 'student123'
    },
    instructor: {
      email: 'instructor@university.edu', 
      password: 'instructor123'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { ...formData, loginType });
    
    // Navigate based on login type
    if (loginType === 'instructor') {
      navigate('/instructor-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: demoCredentials[loginType].email,
      password: demoCredentials[loginType].password
    });
  };

  return (
    <div className="min-h-screen university-gradient flex items-center justify-center px-4 py-6">
      <div className="max-w-md w-full space-y-6 md:space-y-8">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
            <span className="text-blue-900 font-bold text-xl md:text-2xl">U</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Welcome Back</h2>
          <p className="mt-2 text-blue-100 text-sm md:text-base">Sign in to your UniLearn account</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
          {/* Demo Credentials Info */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <h4 className="font-medium text-blue-900 mb-2 text-sm md:text-base">Demo Credentials</h4>
                <div className="text-xs md:text-sm text-blue-700 space-y-1">
                  <p className="break-all"><strong>Student:</strong> {demoCredentials.student.email} / {demoCredentials.student.password}</p>
                  <p className="break-all"><strong>Instructor:</strong> {demoCredentials.instructor.email} / {demoCredentials.instructor.password}</p>
                </div>
                <button
                  type="button"
                  onClick={fillDemoCredentials}
                  className="mt-2 text-xs md:text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  Fill {loginType} demo credentials
                </button>
              </div>
            </div>
          </div>

          {/* Login Type Selection */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg">
              <button
                type="button"
                onClick={() => setLoginType('student')}
                className={`flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-md transition-colors text-sm md:text-base ${
                  loginType === 'student'
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <User className="w-4 h-4" />
                Student
              </button>
              <button
                type="button"
                onClick={() => setLoginType('instructor')}
                className={`flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-md transition-colors text-sm md:text-base ${
                  loginType === 'instructor'
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Instructor
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                placeholder={demoCredentials[loginType].email}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 text-sm md:text-base"
                  placeholder={demoCredentials[loginType].password}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-lg text-white bg-blue-900 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 transition-colors text-sm md:text-base"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In as {loginType === 'student' ? 'Student' : 'Instructor'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
