import React from "react";
import khaliq from "../assets/khalique1.jpg";
import hero from "../assets/bg.png";
import herores from "../assets/bg.res.png";
import herores2 from "../assets/bg.res2.png";
import hero2 from "../assets/7.jpeg";

import "./style.css";
const Home = () => {
  return (
    <div id="home" className="hero-img-div">
      <div>
        <div className="hero__img-div">
          <img src={hero} alt="Khalique Hussain" className="hero-img" />
        </div>
        <div className="res">
          <div className="hero__img-div-res">
            <img src={herores} alt="Khalique Hussain" className="hero-img" />
          </div>
          <div className="hero__img-div-res2">
            <img src={herores2} alt="Khalique Hussain" className="hero-img" />
          </div>
        </div>
      </div>
      <div className="hero__content" id="about">
        {/* <h1 className="hero-name"> Syed Akhlaq Hussain Qasmi </h1> */}
        <h1 className="hero-name"> About </h1>
        <blockquote className="hero-bio">
          <strong>Maulana Akhlaq Husain Qasmi, </strong> was a prominent figure
          deeply rooted in Delhi's tradition of cultural harmony, communal
          unity, and hospitality. Born in 1924 in Delhi to a family of artisans
          from Peshawar, he studied at Madrasa Aalia, Fatehpuri, and Darul
          Uloom, Deoband, emerging as an esteemed scholar of the Qur'an and an
          active participant in India’s freedom movement. During the challenging
          times surrounding Partition, he dedicated himself to uplifting the
          Muslim community, fostering resilience and unity. As a journalist, he
          boldly highlighted the struggles of Muslims and campaigned for social
          justice, exposing injustices and addressing societal issues through
          his writings.
          <br />
          His booklet Firqa Parasti ki Aag urged the government to counter
          communal discord. In 1960, he won a seat on the Delhi Corporation as a
          Congress candidate, but later withdrew from politics to focus on
          social service. A devoted writer and advocate of Delhi’s rich cultural
          heritage, Maulana Qasmi authored hundreds of works on religious and
          social topics. His notable book, Dilli ki Beradariyan, captures the
          essence of Delhi's diverse communities. Recognized for his
          contributions to literature and social reform, he received prestigious
          awards from{" "}
          <strong>
            {" "}
            for the President of India and the Delhi Urdu Academy.
          </strong>
        </blockquote>
      </div>
    </div>
  );
};

export default Home;
