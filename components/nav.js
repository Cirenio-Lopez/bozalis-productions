import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

function Nav() {
  const [top, setTop] = useState(0);
  const [prevPos, setPrevPos] = useState(0);
  const [visible, setVisible] = useState(true);

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevPos >= currentScrollPos || currentScrollPos < 10);
    setPrevPos(currentScrollPos);
    setTop(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevPos, visible, top, handleScroll]);

  return (
    <nav>
      <div
        className={`nav-container ${top == 0 ? "" : "darken"} ${
          visible ? "" : "hidden"
        }`}
      >
        <div
          className="logo"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          TB
        </div>
        <div className="nav-items">thomasbozalisfilm@gmail.com</div>
        <div className="nav-items-small">
          <Link href="mailto:thomasbozalisfilm@gmail.com">
            <a>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
