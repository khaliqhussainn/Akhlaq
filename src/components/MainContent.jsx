import React from 'react';
import AchievementsTimeline from './AchievementsTimeline';
import "./media.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <div id="index-banner" className="parallax-container animated fadeIn">
        <div className="section no-pad-bot">
          <div className="container"></div>
        </div>
        {/* <div className="parallax animated fadeIn">
          <img src="http://wallpapercave.com/wp/oyWzOyN.jpg" className="responsive-img headerImg" alt="" id="desktop-img" />
          <img src="http://cdnstatic.visualizeus.com/thumbs/d7/89/dance,people,michaeljackson,american,bw,billiejean-d7899444cdd8129480592f730a8d38f4_h.jpg?ts=93246" id="tablet-img" className="responsive-img headerImg animated fadeIn" alt="" />
          <img src="" className="responsive-img headerImg" alt="" id="tablet-img" />
          <img src="http://images4.fanpop.com/image/photos/21700000/MICHAEL-mj-s-robot-dance-21791699-711-1024.jpg" className="responsive-img headerImg" alt="" id="mobile-img" />
        </div> */}
      </div>
      <div className="row animated bounceInUp" id="negative-top">
        <div className="col l8 offset-l2 m10 offset-m1 s12">
          <div className="card">
            {/* <div className="card-header">
              <div className="card-title">Achievements of <span className="inkked">Michael Jackson</span></div>
            </div> */}
            <div className="card-content">
              {/* <blockquote>
                Always believe in yourself. No matter who's around you being Negative or thrusting Negative Energy at you, Totally block it Off. <br />
                <b>BECAUSE WHATEVER YOU BELIEVE, YOU BECOME.</b>
                <br />
                <small>
                  - Michael Jackson (Artist, Legend)
                </small>
              </blockquote> */}
              <AchievementsTimeline />
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="page-footer black center-align">
        <div className="row">
          <div className="col l4 offset-l4 m8 offset-m2 s12">
            <h5 className="white-text" style={{ margin: 0 }}>To know More:</h5>
            <h6 className="white-text" style={{ paddingLeft: '30px', textAlign: 'center', fontWeight: 300, fontSize: '18px', lineHeight: '1.5em' }}>
              If you have time, you should read more about this <b>incredible human being</b>, <b>Legend</b> and <b>an Artist of an Era</b> on his <a href="https://en.wikipedia.org/wiki/Michael_Jackson" target="_blank" style={{ fontWeight: 400, color: 'burlywood' }}>Wikipedia</a> entry.
            </h6>
          </div>
        </div>
        <div className="footer-copyright black">
        </div>
      </footer> */}
    </main>
  );
};

export default MainContent;
