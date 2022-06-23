import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faVimeo } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Socials() {
  library.add(faInstagram, faVimeo);
  return (
    <section className="section-container" id="socials">
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
    </section>
  );
}

export default Socials;
