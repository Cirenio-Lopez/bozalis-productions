//Framer Motion
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Link from "next/link";

const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 300 },
};

function Festivals({ awardData }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="festivals"
      className="section-container"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      <div className="section-wrapper">
        <div className="title-wrapper">
          <h2>Awards</h2>
        </div>
        <div className="content-container">
          <div className="content-wrapper">
            {awardData.awards.map((film) => {
              return (
                <div className="content-block" key={film.id}>
                  <div className="still">
                    <img src={film.filmImage.url} alt={film.filmTitle} />
                  </div>
                  <div className="title">{film.filmTitle}</div>
                  <div className="description">
                    {film.filmAwards.map((award, index) => {
                      return (
                        <span className="award" key={index}>
                          <Link href={award.awardLink}>
                            <a className="festival">{award.awardTitle}</a>
                          </Link>
                          - {award.awardDescription}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Festivals;
