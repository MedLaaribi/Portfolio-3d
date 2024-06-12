import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
    return (
        <>
            <section className="relative w-full h-screen mx-auto bg-primary">

                <div className="relative w-full h-screen mt-1 pt-4 flex justify-center items-center">
                    <div className="relative w-full max-w-7xl mx-auto h-5/6 bg-cover bg-center rounded-lg overflow-hidden"
                         style={{ backgroundImage: "url('/StadtImage.webp')", borderRadius: '2rem' }}>
                        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    </div>
                </div>

                {/* Text und Grafik */}
                <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto z-10 ${styles.paddingX} flex flex-row items-start gap-5`}>
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#915EFF]"/>
                        <div className="w-1 sm:h-80 h-40 violet-gradient"/>
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Welcome !
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I am Mohamed
                        </p>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I specialise in the development of <br/> <span
                            className="text-[#915EFF]">User Interfaces</span> and <span className="text-[#915EFF]">Web Applications</span>.
                        </p>
                    </div>
                </div>

                <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
                    <a href="#about">
                        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                            <motion.div
                                animate={{ y: [0, 24, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                                className="w-3 h-3 rounded-full bg-secondary mb-1"
                            />
                        </div>
                    </a>
                </div>
            </section>
        </>
    );
};

export default Hero;
