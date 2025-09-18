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
      <div className="flex items-center text-center justify-center gap-3 ">
        <h1 className="mt-[10px] md:mt-[40px] text-4xl text-gray-500 flex items-center justify-center gap-2">

          ABOUT

        </h1>
        <span className="text-blue-700 font-bold text-3xl mt-10">US</span>
        <p className="w-8 sm:w-12 mt-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-14 bg-gradient-to-b from-orange-50 to-white h-[90vh] gap-10 flex-wrap">
        <div className="">
          <img className="h-full content-stretch w-full overflow-hidden" src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA=" />


        </div>
        <div className="overflow-y-hidden">
          <p className="text-gray-500 text-lg bg-gradient-to-b from-orange-50 to-white  leading-6md:leading-relaxed">
            Swaad Express is a next-generation food delivery platform designed to bridge the gap between local food vendors and hungry customers.<br /><br />
            Our platform celebrates the vibrant diversity of street food, home kitchens, and small eateries by giving them a digital stage to showcase their dishes.<br /><br />
            Unlike conventional food delivery apps that mostly highlight big restaurants, Swaad Express focuses on empowering small business owners, local chefs, and family-run kitchens, making it easier for them to reach a wider audience.<br /><br />
            We provide a seamless and intuitive interface where customers can browse a curated list of local food vendors, discover authentic regional flavors, and order freshly prepared meals with just a few clicks.<br /><br />
            For local vendors, Swaad Express acts as a free marketing and logistics partner, handling menus, promotions, and easy digital payments, so they can focus on what they do best — cooking great food.<br /><br />
            Our mission is not only to deliver meals but also to create a community around food, where tradition meets technology.<br /><br />

           </p>

        </div>
      </div>
<Link to="/reviews">
  <div className="group relative flex flex-col items-center justify-center my-10 cursor-pointer">
   
    <div className="absolute inset-0  rounded-xl blur-md opacity-70 group-hover:opacity-90 transition-all duration-300"></div>

  
    <div className="relative px-8 py-6 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-orange-600">
        Want to know what customers say?
      </h3>
      <p className="mt-2 text-gray-500">Click here to read our reviews</p>

      {/* Fancy button */}
      <button className="mt-4 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 hover:from-orange-600 hover:via-yellow-600 hover:to-red-600 transition-all duration-300">
        Read Reviews
      </button>
    </div>
  </div>
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

        <div className="contact-info absolute text-center md:text-left">
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
            amanuniyal315@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
