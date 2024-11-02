import React from 'react';
import "./media.css";
const achievementsModel = [
  {
    date: 1924,
    title: "Born in 1924",
    description: 'He was Born in 1924 in Delhi to a family of artisans who had migrated from Peshawar during the early years of British rule...'
  },
  {
    date: 1940,
    title: 'A Journey of Knowledge',
    description: 'He received his education at Madrasa Aalia in Fatehpuri and later at Darul Uloom in Deoband, where he honed his knowledge and understanding of Islamic teachings. His dedication to his studies and profound insight into the Quran soon earned him recognition as a respected authority on the sacred text.'
  },
  {
    date: 1946,
    title: 'A Beacon of Hope: Commitment to Freedom and Community',
    description: 'After Completing his studies at Madrasa Aalia, he began his journey as a nationalist. He actively participated in India’s freedom movement, driven by a deep sense of justice and responsibility. During the tumultuous days surrounding Partition, when Indian Muslims faced significant mental and physical hardships and were often regarded with suspicion, he stood alongside other nationalist and community leaders. Together, they devoted themselves to selfless social service, working tirelessly to instill confidence and hope within the Muslim community. This pivotal experience shaped his life’s mission, guiding him toward the promotion of religious sciences, the safeguarding of social and moral values, and a lifelong commitment to community service.'
  },
  {
    date: 1955,
    title: "Champion of Justice: A Journalist's Fight for the Muslim Community",
    description: 'As a journalist, he fearlessly brought to light the struggles faced by the Muslim community, shining a spotlight on the injustices inflicted upon them. With a keen eye for detail, he exposed the insidious evils that had begun to permeate society. Through his compelling articles published in various newspapers and magazines, he advocated for noble values and social justice, urging readers to recognize the importance of unity and understanding. Moreover, he actively worked to thwart the malicious schemes of communal forces intent on creating discord between Hindus and Muslims. His influential booklet, Firqa Parasti ki Aag, called on the government to confront this troubling issue, emphasizing the urgent need for communal harmony and peace.'
  },
  {
    date: 1960,
    title: 'A Reluctant Politician: From Election Victory to Community Advocate',
    description: 'In 1960, he achieved a significant milestone by winning the Delhi Corporation election as a Congress candidate, he dedicated himself to addressing the needs of his constituents and worked tirelessly to alleviate their difficulties. However, disillusioned by the underhanded tactics prevalent in politics, he ultimately chose to step away from this arena. Redirecting his focus, he devoted the remainder of his life to societal and community service, determined to make a positive impact outside the confines of political strife.'
  },
  {
    date: 1972,
    title: 'A Prolific Scholar: Contributions to Islamic Studies and Cultural Heritage',
    description: 'He authored twenty books in Urdu, English, and Hindi, covering a wide range of topics related to Islamic studies as well as general subjects. His prolific output includes approximately 150 descriptive and research articles that delve into various aspects of the Quran and Islamic sciences. As an active member of two academic and cultural bodies, he participated in both national and international conferences and seminars, presenting valuable research papers.'
  },
  {
    date: 1975,
    title: "Dilli ki Beradariyan",
    description: 'A passionate advocate for Delhi rich and diverse culture, Maulana Akhlaq Hussain Qasmi wrote hundreds of books and booklets addressing religious issues. He regularly contributed articles and personal reflections to numerous newspapers and magazines, tackling political, social, and religious matters. His notable work, Dilli ki Beradariyan (Communities and Fraternities of Delhi), encapsulates the true history and cultural essence of Delhi during his time, serving as a testament to his commitment to preserving the city’s heritage.'
  },
  {
    date: 1990,
    title: 'Recognized Excellence: Honored with Delhi Urdu Academy Awards',
    description: 'Throughout his distinguished career, Maulana Akhlaq Hussain Qasmi significant contributions to literature and culture did not go unnoticed. His unwavering commitment to promoting Islamic studies and advocating for social justice earned him widespread acclaim. In recognition of his outstanding work, he was honored with prestigious awards, including the Presidential Award and the Delhi Urdu Academy Award. These accolades not only celebrated his literary achievements but also underscored his vital role in preserving and enriching the cultural fabric of his community.'
  },
  // {
  //   date: 2009,
  //   title: '2.6 Million Downloads Sold',
  //   description: 'In the week following his death, Jackson became the first artist to sell more than 1 million digital tracks in one week. (He sold 2.6 million tracks, easily breaking the old record.) He also became the first artist to have the three best-selling albums in the United States. Two weeks later, he became the first artist to have six of the 10 best-selling albums.'
  // },
  {
    date: 2014,
    title: 'A Legacy That Lives On',
    description: 'As the sun set on a somber day, the air was thick with emotion as the community came together to honor a remarkable life. His Namaz-e Janaza was led by the revered Maulana Arshad Madni of Jamiatul Ulama, a leader who stood as a symbol of faith and respect. The prayers resonated deeply, echoing the collective gratitude and sorrow felt by all who had been touched by his unwavering commitment to justice and compassion. At the Mehdian Graveyard, approximately five thousand mourners gathered, their hearts heavy with loss yet united in admiration for the hero they were bidding farewell. Each individual stood as a testament to the countless lives he had influenced, the hope he had instilled, and the love he had shared. As he was laid to rest, tears mingled with smiles as stories of his bravery and selflessness filled the air, celebrating a legacy that would inspire generations to come. In that moment, he transcended the realm of ordinary mortals; he became a beacon of hope, a champion of unity, and a reminder that true heroes never truly leave us—they continue to live on in the hearts and actions of those they inspired.'
  }
];

const AchievementsTimeline = () => {
  return (
    <section id="cd-timeline" className="cd-container">
      {achievementsModel.map((achievement, index) => (
        <div className="cd-timeline-block" key={index}>
          <div className="cd-timeline-img cd-picture animated fadeInUp" style={{ animationDelay: `${index}s` }}>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture" />
          </div>
          <div className="cd-timeline-content animated fadeInUp" style={{ animationDelay: `${index}s` }}>
            <h5>{achievement.title} <b>({achievement.date})</b></h5>
            <p className="content">{achievement.description}</p>
            <a href="#0" className="cd-read-more grey lighten-4 black-text">Read more</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AchievementsTimeline;
