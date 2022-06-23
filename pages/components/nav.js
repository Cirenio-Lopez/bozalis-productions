import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">TB</div>
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
