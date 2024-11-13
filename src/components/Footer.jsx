import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGlobe, FaInstagram } from "react-icons/fa";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import profilePic from '../assets/profile.jpg';  // Pfad zu deinem Bild

const Footer = () => {
    return (
        <motion.div
            variants={slideIn("up", "tween", 0.2, 1)}
            className="bg-black-100 p-8 rounded-2xl mt-12"
        >
            <div className="flex flex-col md:flex-row md:justify-center items-center md:items-start space-y-4 md:space-y-0">
                <img src={profilePic} alt="Profile" className="w-28 h-28 rounded-full md:mr-8" />
                <div className="flex flex-col items-center text-center space-y-4">
                    <h3 className={`${styles.sectionHeadText}`}>Connect with me</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/med-laaribi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-600 transition-colors duration-300"
                        >
                            <FaLinkedin className="text-2xl md:text-3xl" />
                        </a>
                        <a
                            href="https://github.com/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-600 transition-colors duration-300"
                        >
                            <FaGithub className="text-2xl md:text-3xl" />
                        </a>
                        <a
                            href="https://your-portfolio.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-600 transition-colors duration-300"
                        >
                            <FaGlobe className="text-2xl md:text-3xl" />
                        </a>
                        <a
                            href="https://www.instagram.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-pink-600 transition-colors duration-300"
                        >
                            <FaInstagram className="text-2xl md:text-3xl" />
                        </a>
                    </div>
                    <p className="text-white text-sm">&copy; 2024 Mohamed Laaribi. All rights reserved.</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
