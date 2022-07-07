import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faVimeo } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
//Framer Motion
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 300 },
};

function Socials() {
  library.add(faInstagram, faVimeo);
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
          <h2>Socials</h2>
        </div>
        <div className="content-container">
          <div className="content-wrapper">
            <div className="content-block">
              <div className="title">
                <Link href="https://vimeo.com/user117184099">
                  <a className="title-hover">
                    Vimeo <FontAwesomeIcon icon={["fab", "vimeo"]} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="content-block">
              <div className="title">
                <Link href="https://www.instagram.com/bozalis_productions/">
                  <a className="title-hover">
                    Instagram <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Socials;
