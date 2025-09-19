import { useNavigate } from "react-router-dom";
import { useTheme } from "../utils/ThemeContext";

const Starter = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme(); // ✅ get dark mode state

  const movetoabout = () => {
    navigate("/about");
  };

  return (
    <div
      className={`starter text-center px-4 sm:px-6 md:px-12 py-16 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-blue-50"
      }`}
    >
      <h1
        className={`text-3xl sm:text-4xl md:text-3xl lg:text-[61px] font-extrabold mb-6 leading-tight transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-white"
        }`}
      >
        “Swaad – Where Every{" "}
        <span className={isDarkMode ? "text-blue-400" : "text-blue-700"}>
          Bite
        </span>{" "}
        Tells a Story”
      </h1>
      <p
        className={`max-w-[800px] mx-auto text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light transition-colors duration-300 ${
          isDarkMode ? "text-gray-300" : "text-gray-200"
        }`}
      >
        From rich, traditional recipes to modern culinary delights, we serve
        dishes made with love, freshness, and authentic taste
      </p>
      <button
        onClick={movetoabout}
        className="mt-6 px-4 sm:px-6 py-2 sm:py-3 cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm sm:text-base md:text-lg font-semibold rounded-[12px] shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        Learn more
      </button>
    </div>
  );
};

export default Starter;
