// import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
// import { Container, Col, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import Fade from 'react-reveal';
// import Header from './Header';
// import endpoints from '../constants/endpoints';
// import FallbackSpinner from './FallbackSpinner';

// const styles = {
//   introTextContainer: {
//     margin: 10,
//     flexDirection: 'column',
//     whiteSpace: 'pre-wrap',
//     textAlign: 'left',
//     fontSize: '1.2em',
//     fontWeight: 500,
//   },
//   introImageContainer: {
//     margin: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     display: 'flex',
//   },
// };

// function About(props) {
//   const { header } = props;
//   const [data, setData] = useState(null);

//   const parseIntro = (text) => (
//     <ReactMarkdown
//       children={text}
//     />
//   );

//   useEffect(() => {
//     fetch(endpoints.about, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//   }, []);

//   return (
//     <>
//       <Header title={header} />
//       <div className="section-content-container">
//         <Container>
//           {data
//             ? (
//               <Fade>
//                 <Row>
//                   <Col style={styles.introTextContainer}>
//                     {parseIntro(data.about)}
//                   </Col>
//                   <Col style={styles.introImageContainer}>
//                     <img src={data?.imageSource} alt="profile" />
//                   </Col>
//                 </Row>
//               </Fade>
//             )
//             : <FallbackSpinner />}
//         </Container>
//       </div>
//     </>
//   );
// }

// About.propTypes = {
//   header: PropTypes.string.isRequired,
// };

// export default About;

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

function About(props) {
  const { header } = props;

  const data = {
    about: "As a graduate of the Master's in Computer Science program at North Carolina State University, I have acquired a strong foundation in software engineering and system design methodologies. I have also developed my skills in software engineering, machine learning, and cloud computing, as evidenced by my projects, certification from Google Cloud, and my publications in IEEE. \n \n I have applied my knowledge and skills in real-world projects as a Business Analyst at Quantiphi for the Data and Analytics practice, focused on US West customers. I worked on enterprise data warehouse modernization projects, involving migrations from legacy tools to Google Cloud's data suite solutions. I also designed future state architectures, performed revenue cost analysis, created engagement roadmaps, and implemented risk mitigation strategies. \n \n I am passionate about solving complex problems and driving technological innovation. I am looking for new opportunities to leverage my expertise and contribute to the growth and success of leading organizations in the field of Software Engineering, Data Analytics, and Data Science. I am eager to learn from and collaborate with talented professionals and deliver value-added solutions.",
    imageSource: "images/about/profile.jpg"
  };

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          <Fade>
            <Row>
              <Col style={styles.introTextContainer}>
                {parseIntro(data.about)}
              </Col>
              <Col style={styles.introImageContainer}>
                <img src={data?.imageSource} alt="profile" />
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;