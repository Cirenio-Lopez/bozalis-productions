import Nav from "../components/nav";
import Header from "../components/header";
import Films from "../components/films";
import Festivals from "../components/festivals";
import About from "../components/about";
import Socials from "../components/socials";
import Contact from "../components/contact";
import Footer from "../components/footer";
import client from "../apolloClient";
import { gql } from "@apollo/client";

function Index({ filmData, awardData, aboutData }) {
  return (
    <>
      <Nav />
      <Header />
      <Films filmData={filmData} />
      <Festivals awardData={awardData} />
      <About aboutData={aboutData} />
      <Socials />
      <Contact />
      <Footer />
    </>
  );
}
export default Index;

export async function getStaticProps() {
  const { data: filmData } = await client.query({
    query: gql`
      {
        films(orderBy: publishedAt_DESC, first: 100) {
          id
          author
          authorLink
          description
          title
          videoLink
          role
          coverImage {
            id
            url
          }
          carouselImages {
            id
            url
          }
        }
      }
    `,
  });

  const { data: awardData } = await client.query({
    query: gql`
      {
        awards(orderBy: publishedAt_DESC) {
          id
          filmTitle
          filmImage {
            id
            url
          }
          filmAwards {
            awardTitle
            awardLink
            awardDescription
          }
        }
      }
    `,
  });

  const { data: aboutData } = await client.query({
    query: gql`
      {
        abouts(last: 1) {
          id
          description
          aboutImages {
            id
            url
          }
        }
      }
    `,
  });

  return {
    props: { filmData, awardData, aboutData },
  };
}
