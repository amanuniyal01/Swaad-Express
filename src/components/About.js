import User from "./User";
import Footer from "./Footer";
import { teamMembers } from "../utils/mockdata";
import { Link } from "react-router-dom";

import Team from "./Team";
const About = () => {
  

    return (

        <div className="about">

            <h1>"Swaad is not just food, it’s an experience of authentic taste crafted with love."</h1>
            <p> At Swaad Express, we bring authentic flavors with love and passion.</p>
              <Link className="card-link" to="/reviews">
                <button className="reviews-btn">Customer Reviews</button>
            </Link>
                <Team />
            <h2>Find us Here:</h2>
            <div className="location" >
                <iframe className="map"
                
                    title="restaurant-location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509472!2d-122.42184728468114!3d37.77492927975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1c9bcd2b%3A0x3e4a49c8b3af1e0!2sYour%20Restaurant!5e0!3m2!1sen!2sin!4v1676888888888"

                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                  <div className="contact-info">
    <h3>📍 Visit Us</h3>
    <p>123 Food Street, Flavor Town, India</p>
    <p>📞 +91 98765 43210</p>
    <p>✉️ contact@swaadexpress.com</p>
  </div>
            </div>

        
          

            <Footer />

        </div>

    )
}
export default About;