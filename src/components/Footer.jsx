import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGlobe, FaInstagram } from "react-icons/fa";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Footer = () => {
    return (
        <motion.div
            variants={slideIn("up", "tween", 0.2, 1)}
            className="bg-black-100 p-8 rounded-2xl mt-12"
        >
            <div className="flex flex-col items-center">
                <h3 className={`${styles.sectionHeadText} mb-4`}>Connect with me</h3>
                <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/your-profile"
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
                <p className="text-white mt-4 text-sm text-center">&copy; 2024 Mohamed Laaribi. All rights reserved.</p>
            </div>
        </motion.div>
    );
};

export default Footer;
