//general imports
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import _ from "lodash";
import Link from "next/link";
//temp Data
import filmData from "../data/PopupContent";
//This import prevents hydration issues from occurring (HTML tags inside div tags)
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function Films() {
  const contentRows = _.chunk(filmData, 2);
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
                      <div className="film">
                        <div className="film-cover">
                          <img src={film.popup_img} />
                        </div>
                        <div className="film-desc-wrapper">
                          <div className="film-title">{film.video.title}</div>
                          <div className="film-role">{film.video.role}</div>
                        </div>
                      </div>
                    }
                    key={film.video.title}
                    modal
                  >
                    {(close) => (
                      <>
                        <div className="player-wrapper">
                          <Carousel showThumbs="false">
                            <ReactPlayer
                              className="react-player"
                              url={film.video.link}
                              key={film.title}
                              width="100%"
                              height="100%"
                              pip={true}
                              controls={true}
                              playing={false}
                            />
                            {film.carousel_img.map((img) => {
                              return (
                                <img
                                  className="img-carousel"
                                  src={img}
                                  key={img}
                                />
                              );
                            })}
                          </Carousel>
                        </div>
                        <Link href={film.video.link}>
                          <a>
                            <span className="author">{film.video.author}</span>
                            <span className="title">{film.video.title}</span>
                            <span className="festivals">
                              Festivals: {film.video.festivals}
                            </span>
                            <span className="description">
                              {film.video.description}
                            </span>
                          </a>
                        </Link>
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
