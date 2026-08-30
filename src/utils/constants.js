import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL = "https://play-lh.googleusercontent.com/g-7jE8N5NYm9nh1Ne18QytVXbNjvfn438cBU8WYplHnNZK25zhqeU73xs_oKGPzQGeTM";

export const QUICK_LINKS = [
    {
        href: "/",
        title: "Home"
    },
    {
        href: "/restaurants",
        title: "Menu"
    },
    {
        href: "/about",
        title: "About Us"
    },
    {
        href: "/contact",
        title: "Contact"
    }
];
export const ContactInfo = [
    {
        icon: MapPin,
        text: "New Delhi, India",
    },
    {
        icon: Phone,
        text: "+91 98765 43210",
    },
    {
        icon: Mail,
        text: "amanuniyal315@gmail.com",
    },
];

export const SocialLinks = [
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/yourusername",
        hoverColor: "hover:text-pink-700",
    },
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/amanuniyal1012/",
        hoverColor: "hover:text-blue-600",
    },
    {
        icon: FaGithub,
        href: "https://github.com/amanuniyal01",
        hoverColor: "hover:text-yellow-400",
    },
];