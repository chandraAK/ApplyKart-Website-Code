import { Fragment } from "react";
import Header from "components/shared/header";
import Footer from "components/shared/footer";
import AppFooter from "../homepage/AppFooter";
import Head from "next/head";


const AboutPage = () => {
  return (
    <Fragment>
      <Head>
      <title> About Us | ApplyKart</title>
        <meta name="description" content="Find jobs with ApplyKart"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content=" About Us | ApplyKart" />
        <meta property="og:description" content="Find jobs with ApplyKart" />
        <meta property="og:image" content="https://applykart.co/assets/images/applykart-logo.png" />
        <meta property="og:url" content="https://www.applykart.co/about" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en-au" />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:site" content="https://applykart.co/" />
        <meta name="twitter:title" content="About Us | ApplyKart" />
        <meta name="twitter:description" content="Find jobs with ApplyKart" />
        <meta name="twitter:image" content="https://applykart.co/assets/images/applykart-logo.png" />
      </Head>
      <Header
        styleClass="style_two bg-transparent position-absolute"
        logoUrl="assets/images/black-logo.svg"
        hideButtons={0}
        isCommonPage={1}
      />
     

      {/* Content Box */}
      <div className="about-us-container pt-5">
        <div className="container">
          <h3 className="text-center faq-ask-que my-3">About us</h3>
          <p className="about-us-slogen text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
          <div className="about-us-content my-3">
            <h6 className="my-2 about-company">ABOUT COMPANY</h6>
            <div className="about-us-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries,orem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Content Box */}

      {/* <Banner/> */}
      {/* <Footer /> */}
      <AppFooter />
    </Fragment>
  );
};

export default AboutPage;
