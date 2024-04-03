// import React, { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import PropTypes from 'prop-types';
// import Fade from 'react-reveal';
// import { Container } from 'react-bootstrap';
// import Header from './Header';
// import endpoints from '../constants/endpoints';
// import FallbackSpinner from './FallbackSpinner';

// const styles = {
//   iconStyle: {
//     height: 75,
//     width: 75,
//     margin: 10,
//     marginBottom: 0,
//   },
//   introTextContainer: {
//     whiteSpace: 'pre-wrap',
//   },
// };

// function Skills(props) {
//   const { header } = props;
//   const [data, setData] = useState(null);

//   const renderSkillsIntro = (intro) => (
//     <h4 style={styles.introTextContainer}>
//       <ReactMarkdown children={intro} />
//     </h4>
//   );

//   useEffect(() => {
//     fetch(endpoints.skills, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//   }, []);

//   return (
//     <>
//       <Header title={header} />
//       {data ? (
//         <Fade>
//           <div className="section-content-container">
//             <Container>
//               {renderSkillsIntro(data.intro)}
//               {data.skills?.map((rows) => (
//                 <div key={rows.title}>
//                   <br />
//                   <h3>{rows.title}</h3>
//                   {rows.items.map((item) => (
//                     <div key={item.title} style={{ display: 'inline-block' }}>
//                       <img
//                         style={styles.iconStyle}
//                         src={item.icon}
//                         alt={item.title}
//                       />
//                       <p>{item.title}</p>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </Container>
//           </div>
//         </Fade>
//       ) : <FallbackSpinner /> }
//     </>
//   );
// }

// Skills.propTypes = {
//   header: PropTypes.string.isRequired,
// };

// export default Skills;

import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { Container } from 'react-bootstrap';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
  },
};

// Provided skills data
const skillsData = {
  "intro": "I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools, and platforms I have worked with:",
  "skills": [
    {
      "title": "Languages & Databases",
      "items": [
        { "icon": "images/skills/C++.png", "title": "C++" },
        { "icon": "images/skills/python.png", "title": "Python" },
        { "icon": "images/skills/js.png", "title": "JavaScript" },
        { "icon": "images/skills/mongo-db.png", "title": "MongoDB" },
        { "icon": "images/skills/postgres.png", "title": "Postgres" },
        { "icon": "images/skills/Typescript.svg", "title": "TypeScript" },
        { "icon": "images/skills/cloud-bigtable.svg", "title": "Bigtable" },
        { "icon": "images/skills/bigquery.svg", "title": "BigQuery" }
      ]
    },
    {
      "title": "Frameworks & Technologies",
      "items": [
        { "icon": "images/skills/android_new.png", "title": "Flask" },
        { "icon": "images/skills/react.png", "title": "React" },
        { "icon": "images/skills/nodejs.png", "title": "Nodejs" },
        { "icon": "images/skills/django.png", "title": "Django" },
        { "icon": "images/skills/numpy.svg", "title": "Numpy" },
        { "icon": "images/skills/pandas.svg", "title": "Pandas" },
        { "icon": "images/skills/tf.png", "title": "Tensorflow" },
        { "icon": "images/skills/plotly.jpg", "title": "Plotly" }
      ]
    },
    {
      "title": "Tools & Platforms",
      "items": [
        { "icon": "images/skills/google-cloud.svg", "title": "Google Cloud Platform" },
        { "icon": "images/skills/git.png", "title": "Git" },
        { "icon": "images/skills/docker.png", "title": "Docker" }
      ]
    },
    {
      "title": "Certifications",
      "items": [
        { "icon": "images/skills/ACE.jpg", "title": "ACE - GCP" },
        { "icon": "images/skills/ML.jpg", "title": "ML(Stanford Online)" }
      ]
    }
  ]
};

function Skills(props) {
  const { header } = props;

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown>{intro}</ReactMarkdown>
    </h4>
  );

  return (
    <>
      <Header title={header} />
      <Fade>
        <div className="section-content-container">
          <Container>
            {renderSkillsIntro(skillsData.intro)}
            {skillsData.skills?.map((section, index) => (
              <div key={index}>
                <br />
                <h3>{section.title}</h3>
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} style={{ display: 'inline-block' }}>
                    <img
                      style={styles.iconStyle}
                      src={item.icon}
                      alt={item.title}
                    />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            ))}
          </Container>
        </div>
      </Fade>
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;

