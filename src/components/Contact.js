import React from "react";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
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

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full mt-25 md:mt-60">
        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-green-50 shadow-lg rounded-2xl p-6 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-800">Contact Info</h3>
          <p className="flex items-center gap-3 text-gray-700">
            <MapPin className="text-blue-700" /> 123 Food Street, Dehradun, India
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <Phone className="text-blue-700" /> +91 98765 43210
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <Mail className="text-blue-700" /> contact@swaadexpress.com
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/amanuniyal1012/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-green-900"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/amanuniyal01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-green-900"
            >
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
