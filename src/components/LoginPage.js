import { useState } from "react";
import { checkValidData } from "../utils/validData";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react"; // 👈 icons

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👈 toggle state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate using controlled values
    const message = checkValidData(formData.email, formData.password);
    if (message) {
      setErrorMessage(message);
      return;
    }

    setErrorMessage(null);
    setIsSubmitted(true);
  };

  return (
    // 🔹 Outer wrapper for full-page background image + gradient
    <div
      className="login-bg min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
     
    >
      <h1 className="text-white text-shadow-black shadow-2xl text-3xl md:text-5xl font-bold mb-10 text-center">
        Be a Part of SwaadExpress
      </h1>

      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl opacity-75 w-[80vw] md:w-full max-w-md border border-gray-200"
        >
          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">
            Login
          </h2>

          {/* USERNAME */}
          <div className="relative mb-4">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full pl-10 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          {/* EMAIL */}
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative mb-6">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {errorMessage && (
            <p className="font-bold text-red-800 mb-4">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] transition-all"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center animate-fadeIn">
          <h2 className="text-4xl font-extrabold text-green-600 mt-8 mb-4 drop-shadow-md">
             Form Submitted Successfully! 
          </h2>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 drop-shadow-lg">
            Welcome{" "}
            <span className="text-5xl">{formData.username || "User"}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
