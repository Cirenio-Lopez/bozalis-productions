import Link from "next/link";

function Footer() {
  return (
    <section className="section-container" id="footer">
      <div
        className="section-wrapper"
        style={{ justifyContent: "center", padding: "50px" }}
      >
        <div className="content-container">
          <div className="content-wrapper">
            <div className="content-block" style={{ width: "auto" }}>
              <div className="title" style={{ fontSize: "32px" }}>
                Created by{" "}
                <Link href="https://www.cirenio.net/">
                  <a style={{ textDecoration: "underline" }}>Cirenio</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
