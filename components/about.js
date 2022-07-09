import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//Framer Motion
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 300 },
};

function About({ aboutData }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      className="section-container"
      id="about"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      <div className="section-wrapper">
        <div className="title-wrapper">
          <h2>About</h2>
        </div>
        <div className="content-container">
          <div className="content-wrapper">
            <div className="content-block">
              <div className="still about-still">
                <Carousel showThumbs="false" infiniteLoop autoPlay>
                  {aboutData.abouts[0].aboutImages.map((image) => {
                    return (
                      <img
                        src={image.url}
                        alt="Thomas Bozalis"
                        key={image.id}
                      />
                    );
                  })}
                </Carousel>
              </div>
              <div className="description">
                <div className="about">{aboutData.abouts[0].description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
