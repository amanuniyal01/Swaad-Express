import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";
import { useTheme } from "../utils/ThemeContext";
import { TextWithIcon } from "../reusableComponents/TextWithIcon";
import { SocialIcon } from "../reusableComponents/SocialIcon";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const inputClass =
    "w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600";

  return (
    <section className=" bg-gray-700 flex flex-col items-center justify-center p-8">
      <div className="contact w-full h-[60vh]  bg-red-800 absolute top-[-200px] left-0 right-0 bottom-20">

      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-20 z-40">
        Get in Touch with Swaad Express 🍴
      </h2>
      <p className=" z-40 text-white font-[200] text-xl md:text-2xl mb-10 text-center max-w-2xl">
        Have questions, feedback, or want to book catering with us?
        Fill out the form below or reach us directly!
      </p>


      <div className="grid md:grid-cols-2 z-40 gap-10 max-w-6xl w-full  md:mt-60">

        <form className={` shadow-lg rounded-2xl p-6 space-y-4 
          ${isDarkMode ? "bg-gray- text-white" : "bg-white"}`}>
          <input
            type="text"
            placeholder="Your Name"
            className={inputClass}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={inputClass}
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className={inputClass}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="bg-green-50 shadow-lg rounded-2xl p-6 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-800">Contact Info</h3>
          <TextWithIcon Icon={MapPin}>
            123 Food Street, Dehradun, India
          </TextWithIcon>

          <TextWithIcon Icon={Phone}>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </TextWithIcon>

          <TextWithIcon Icon={Mail}>
            <a href="mailto:contact@swaadexpress.com">contact@swaadexpress.com</a>
          </TextWithIcon>

          <div className="flex gap-4 mt-4">
            <SocialIcon
              Icon={Linkedin}
              href="https://www.linkedin.com/in/amanuniyal1012/"
            />

            <SocialIcon
              Icon={Github}
              href="https://github.com/amanuniyal01"
            />
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
