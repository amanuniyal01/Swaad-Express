import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { auth } from "../utils/firebase";

import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false); // Toggle mode
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggleMode = () => {
    setIsSignup(!isSignup);
    setErrorMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      if (isSignup) {
        // SIGNUP
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        // Update displayName with username
        await updateProfile(userCredential.user, {
          displayName: formData.username,
        });
      } else {
        // LOGIN
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      }

      navigate("/");
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT IMAGE */}
      <div className="relative hidden md:block">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/chef-pouring-special-sauce-pork-ribs-kitchen_181624-61946.jpg?semt=ais_incoming&w=1200&q=80"
          alt="food background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center px-4 drop-shadow-lg">
            {isSignup ? "Join" : "Be a Part of"}{" "}
            <span className="text-yellow-400">SwaadExpress</span>
          </h1>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] w-full max-w-md border border-gray-100"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>

          {/* USERNAME (Only for Signup) */}
          {isSignup && (
            <div className="relative mb-5">
              <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                name="username"
                placeholder="Your username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
            </div>
          )}

          {/* EMAIL */}
          <div className="relative mb-5">
            <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="relative mb-6">
            <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-12 pr-12 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* ERROR MESSAGE */}
          {errorMessage && (
            <p className="text-red-600 font-medium mb-4">{errorMessage}</p>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-3 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
          >
            {loading ? (isSignup ? "Signing up..." : "Signing in...") : (isSignup ? "Sign Up" : "Login")}
          </button>

          {/* TOGGLE LOGIN/SIGNUP */}
          <p className="text-center text-sm mt-6 text-gray-500">
            {isSignup ? "Already have an account? " : "Don’t have an account? "}
            <span
              onClick={handleToggleMode}
              className="text-purple-600 font-medium cursor-pointer hover:underline"
            >
              {isSignup ? "Log in" : "Sign up"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
