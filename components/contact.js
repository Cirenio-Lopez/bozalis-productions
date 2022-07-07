import Link from "next/link";
//Framer Motion
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 300 },
};

function Contact() {
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
      id="socials"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      <div className="section-wrapper">
        <div className="title-wrapper">
          <h2>Contact</h2>
        </div>
        <div className="content-container">
          <div className="content-wrapper">
            <div className="content-block">
              <div className="title">
                <Link href="mailto:thomasbozalisfilm@gmail.com">
                  <a className="title-hover mobile">
                    thomasbozalisfilm@gmail.com
                  </a>
                </Link>
              </div>
              <div className="description">
                Feel free to reach out with anything film-related or not!
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
