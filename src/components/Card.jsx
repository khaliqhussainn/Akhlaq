import React from "react";
import video1 from "../assets/1.png";
import video2 from "../assets/3.jpg";
import video3 from "../assets/4.jpeg";
import video4 from "../assets/5.jpeg";
import video5 from "../assets/7.jpeg";
import video6 from "../assets/6.jpeg";
import "./style.css";
const Card = () => {
  return (
    <div>
      {/* <!--===== cards =====--> */}
      <section className="cards section" id="cards">
        <p className="section-title">Watch All Videos </p>

        <div className="card-container">
          <div className="card-img">
            <img
              src={video1}
              href="https://youtu.be/dSVio-Kpjs4?si=C5wdaI_TdPiw1SqV"
              alt="asp.net"
            />
            <p className="card-title">            
                Maulana Akhlaq Hussain Qasmi Mozu Tofique Qismat part 1 of 3 -
                25 April 2008
            </p>
              <a href="https://youtu.be/dSVio-Kpjs4?si=C5wdaI_TdPiw1SqV" className="card__title">
              Click To Watch Full Video
              </a>

            <p className="card-subtitle">
              Maulana Akhlaq Hussain Qasmi: Profound Reflections on Destiny and
              Divine Wisdom — Unveiling the Depths of Faith, Spirituality, and
              the Human Journey Through the Teachings of Mozu Tofique Qismat.
              <br />
              <br />
              {/* add some more content */}
            </p>
          </div>

          <div className="card-img">
          <img
              src={video3}
              href="https://youtu.be/dSVio-Kpjs4?si=C5wdaI_TdPiw1SqV"
              alt="asp.net"
            />
            <p className="card-title">MAULANA AKHLAQ DUA KI QABULIYATE</p>
            <a
              href="https://youtu.be/dSVio-Kpjs4?si=C5wdaI_TdPiw1SqV"
              className="card__title"
            >
              Click To Watch Full Video
            </a>
            <p className="card-subtitle">
              Maulana Akhlaq: Unveiling the Mysteries of Dua and Its Acceptance
              – A Deep Dive into the Power of Prayers, Faith, and Divine Will.
              Discover How True Devotion Can Lead to Miraculous Responses and
              Open the Doors to Blessings Beyond Imagination
              <br />
            </p>
          </div>

          <div className="card-img">
          <img
              src={video4}
              href="https://youtu.be/PwIY_I8_rN0?si=r7Iie7SddZ7Ic3pd"
              alt="asp.net"
            />
            <p className="card-title">
              0:02 / 10:57 MAULANA AKHLAQ HUSSAIN QASMI MOZU SABAR KI IQSAM 5 OF
              6 -AUG 1994
            </p>
            <a
              href="https://youtu.be/PwIY_I8_rN0?si=r7Iie7SddZ7Ic3pd"
              className="card__title"
            >
              Click To Watch Full Video
            </a>
            <p className="card-subtitle">
              Maulana Akhlaq Hussain Qasmi: The Many Dimensions of Patience
              (Sabr) — A Profound Exploration into the Essence, Types, and
              Spiritual Strength of Sabr. Discover How Patience Transforms the
              Soul, Elevates Faith, and Guides Us Through Life’s Greatest Trials
              with Unshakable Resilience and Grace.
              <br />
            </p>
          </div>

        
          <div className="card-img">
          <img
              src={video5}
              href="https://youtu.be/PwIY_I8_rN0?si=r7Iie7SddZ7Ic3pd"
              alt="asp.net"
            />
            <p className="card-title">
              Maulana Akhlaq Hussain Qasmi Mozu Ilme Jafar Ilme Najum
            </p>
            <a
              href="https://youtu.be/SJraw78vmDs?si=QJjLKuW7_RVbnqOa"
              className="card__title"
            >
              Click To Watch Full Video
            </a>
            <p className="card-subtitle">
              Maulana Akhlaq Hussain Qasmi: The Mystical Knowledge of
              Ilm-e-Jafar and Ilm-e-Najum — Delving into the Secrets of Ancient
              Sciences, Astrology, and Divine Wisdom. Explore How These Sacred
              Teachings Reveal Hidden Truths, Unlock Cosmic Mysteries, and
              Illuminate the Path of Spiritual Insight and Guidance.
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
