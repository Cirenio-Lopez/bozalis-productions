import Link from "next/link";

function Contact() {
  return (
    <section className="section-container" id="socials">
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
    </section>
  );
}

export default Contact;
