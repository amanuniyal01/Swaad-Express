import User from "./User";
import Footer from "./Footer";
import { teamMembers } from "../utils/mockdata";
import { Link } from "react-router-dom";
import Team from "./Team";

// import icons (using lucide-react)
import { MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="About bg-gradient-to-b from-orange-50 to-white">
      <h1 className="mt-[10px] md:mt-[120px] text-[35px] md:text-[50px] flex items-center justify-center gap-2">
       
        Swaad is not just food, it’s an experience of authentic taste crafted
        with love
         
      </h1>
      <p className=" text-[23px] md:text-[30px]">
        At Swaad Express, we bring authentic flavors with love and passion.
      </p>

      <Link className="card-link" to="/reviews">
        <button
          className=" px-4 py-2 md:px-6 md:py-3 my-5 md:my-4 rounded-lg text-white font-semibold 
          bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 
          hover:from-orange-500 hover:via-yellow-500 hover:to-red-500 
          shadow-md hover:shadow-lg transition-all duration-300"
        >
          Customer Reviews
        </button>
      </Link>

      <Team />

      <h2 className="text-xl md:text-2xl font-semibold mt-6">Find us Here:</h2>

      <div className="location relative flex flex-col items-center gap-4">
        <iframe
          className="map w-[80vw] h-[40vh] md:w-[50vw] md:h-[50vh]"
          title="restaurant-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509472!2d-122.42184728468114!3d37.77492927975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1c9bcd2b%3A0x3e4a49c8b3af1e0!2sYour%20Restaurant!5e0!3m2!1sen!2sin!4v1676888888888"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <div className="contact-info text-center md:text-left">
          <h3 className="flex items-center justify-center md:justify-start gap-2 font-semibold text-lg">
            <MapPin className="text-red-500" />
            Visit Us
          </h3>
          <p>123 Food Street, Flavor Town, India</p>

          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="text-green-600" />
            +91 98765 43210
          </p>

          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="text-blue-600" />
            contact@swaadexpress.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
