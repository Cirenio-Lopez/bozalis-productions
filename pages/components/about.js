import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function About() {
  return (
    <section className="section-container" id="about">
      <div className="section-wrapper">
        <div className="title-wrapper">
          <h2>About</h2>
        </div>
        <div className="content-container">
          <div className="content-wrapper">
            <div className="content-block">
              <div className="description">
                <div className="about">
                  {
                    "Hello! My name is Thomas Bozalis, and I am a high school filmmaker currently based in Dallas, Texas. I first got into filmmaking in 8th grade in the video production class at my middle school. I have been making serious, hysterical, and enjoyable work ever since! I am currently in my junior year of high school and hope to continue making films through high school and into college. Filmmaking became a passion of mine, as it allows me to express myself in a way I have never been able to with any other outlet.\n\nI have worked on a wide variety of projects, ranging from two-hour spur of the moment projects I make with friends to week long 10-hour days. I have experience working on collegiate level sets as a grip, gaffer, and camera assistant, and for my high school I often direct, or I am the cinematographer for the film. I hope to continue to improve my story telling through the films I make and help others tell theirs."
                  }
                </div>
              </div>
              <div className="still about-still">
                <Carousel showThumbs="false" infiniteLoop autoPlay>
                  <img
                    src="https://static.wixstatic.com/media/616242_ce27a0b7b76040e9958fabfff296761c~mv2.jpg/v1/fill/w_695,h_463,q_85,usm_0.66_1.00_0.01/616242_ce27a0b7b76040e9958fabfff296761c~mv2.jpg"
                    alt="Thomas Bozalis"
                  />
                  <img
                    src="https://static.wixstatic.com/media/616242_6cfb524130df435184143cca7ab3cfa3~mv2.jpg/v1/fill/w_655,h_983,q_85,usm_0.66_1.00_0.01/616242_6cfb524130df435184143cca7ab3cfa3~mv2.jpg"
                    alt="Thomas Bozalis"
                  />
                  <img
                    src="https://static.wixstatic.com/media/616242_e4a2f52547ef44968eb5a61ad4f85dd2~mv2.jpg/v1/fill/w_786,h_523,q_85,usm_0.66_1.00_0.01/616242_e4a2f52547ef44968eb5a61ad4f85dd2~mv2.jpg"
                    alt="Thomas Bozalis"
                  />
                  <img
                    src="https://static.wixstatic.com/media/616242_46017009b394418db769dd5ba5122ebd~mv2.jpg/v1/fill/w_655,h_437,q_85,usm_0.66_1.00_0.01/616242_46017009b394418db769dd5ba5122ebd~mv2.jpg"
                    alt="Thomas Bozalis"
                  />
                  <img
                    src="https://static.wixstatic.com/media/616242_fd2b9455d2104adf898b1e89683ebdf2~mv2.jpg/v1/fill/w_655,h_798,q_85,usm_0.66_1.00_0.01/616242_fd2b9455d2104adf898b1e89683ebdf2~mv2.jpg"
                    alt="Thomas Bozalis"
                  />
                  <img
                    src="https://static.wixstatic.com/media/616242_55eb5bb584f94ea2aabfe375104fbdb7~mv2.jpg/v1/fill/w_655,h_491,q_85,usm_0.66_1.00_0.01/616242_55eb5bb584f94ea2aabfe375104fbdb7~mv2.jpg"
                    alt="Thomas Bozalis"
                  />
                  <img
                    src="https://static.wixstatic.com/media/616242_37b580565abc4b398253a45fa8be0b0f~mv2.jpg/v1/fill/w_655,h_438,q_85,usm_0.66_1.00_0.01/616242_37b580565abc4b398253a45fa8be0b0f~mv2.jpg"
                    alt="Thomas Bozalis"
                  />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
