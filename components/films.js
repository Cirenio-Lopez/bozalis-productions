//general imports
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import _ from "lodash";
import Link from "next/link";
import React, { useEffect } from "react";

//This import prevents hydration issues from occurring (HTML tags inside div tags)
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
//Framer Motion
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 300 },
};

function Films({ filmData }) {
  const contentRows = _.chunk(filmData.films, 2);
  return (
    <section id="films">
      <div className="films-wrapper">
        {contentRows.map((content, index) => {
          return (
            <div className="films-row" key={index}>
              {content.map((film) => {
                return (
                  <Popup
                    trigger={
                      <div className="film-container">
                        <Film film={film} />
                      </div>
                    }
                    key={film.title}
                    modal
                  >
                    {(close) => (
                      <>
                        <div className="player-wrapper">
                          <Carousel showThumbs="false">
                            <ReactPlayer
                              className="react-player"
                              url={film.videoLink}
                              key={film.title}
                              width="100%"
                              height="100%"
                              pip={true}
                              controls={true}
                              playing={false}
                            />
                            {film.carouselImages.map((img, index) => {
                              return (
                                <img
                                  className="img-carousel"
                                  src={img.url}
                                  key={img.id}
                                  alt={film.title + " " + index}
                                />
                              );
                            })}
                          </Carousel>
                        </div>
                        <div className="info-wrapper">
                          <Link href={film.authorLink}>
                            <a>
                              <span className="author">{film.author}</span>
                            </a>
                          </Link>

                          <Link href={film.videoLink}>
                            <a>
                              <span className="title">{film.title}</span>
                            </a>
                          </Link>
                          <span className="festivals">
                            Festivals: {film.festivals}
                          </span>
                          <span className="description">
                            {film.description}
                          </span>
                        </div>
                        <button className="exit" onClick={close} />
                      </>
                    )}
                  </Popup>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Films;

export const Film = React.forwardRef((film, ref) => {
  const controls = useAnimation();
  const [setView, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="film"
      ref={setView}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      <div className="film-cover">
        <img src={film.film.coverImage.url} alt={film.film.title} />
      </div>
      <div className="film-desc-wrapper">
        <div className="film-title">{film.film.title}</div>
        <div className="film-role">{film.film.role}</div>
      </div>
    </motion.div>
  );
});

Film.displayName = "Film";
