// import React, { useEffect, useState, useContext } from 'react';
// import { Chrono } from 'react-chrono';
// import { Container } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import Fade from 'react-reveal';
// import { ThemeContext } from 'styled-components';
// import endpoints from '../constants/endpoints';
// import Header from './Header';
// import FallbackSpinner from './FallbackSpinner';
// import '../css/education.css';

// function Education(props) {
//   const theme = useContext(ThemeContext);
//   const { header } = props;
//   const [data, setData] = useState(null);
//   const [width, setWidth] = useState('50vw');
//   const [mode, setMode] = useState('VERTICAL_ALTERNATING');

//   useEffect(() => {
//     fetch(endpoints.education, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);

//     if (window?.innerWidth < 576) {
//       setMode('VERTICAL');
//     }

//     if (window?.innerWidth < 576) {
//       setWidth('90vw');
//     } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
//       setWidth('90vw');
//     } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
//       setWidth('75vw');
//     } else {
//       setWidth('50vw');
//     }
//   }, []);

//   return (
//     <>
//       <Header title={header} />
//       {data ? (
//         <Fade>
//           <div style={{ width }} className="section-content-container">
//             <Container>
//               <Chrono
//                 hideControls
//                 allowDynamicUpdate
//                 useReadMore={false}
//                 items={data.education}
//                 cardHeight={250}
//                 mode={mode}
//                 theme={{
//                   primary: theme.accentColor,
//                   secondary: theme.accentColor,
//                   cardBgColor: theme.chronoTheme.cardBgColor,
//                   cardForeColor: theme.chronoTheme.cardForeColor,
//                   titleColor: theme.chronoTheme.titleColor,
//                 }}
//               >
//                 <div className="chrono-icons">
//                   {data.education.map((education) => (education.icon ? (
//                     <img
//                       key={education.icon.src}
//                       src={education.icon.src}
//                       alt={education.icon.alt}
//                     />
//                   ) : null))}
//                 </div>
//               </Chrono>
//             </Container>
//           </div>
//         </Fade>
//       ) : <FallbackSpinner /> }
//     </>
//   );
// }

// Education.propTypes = {
//   header: PropTypes.string.isRequired,
// };

// export default Education;

import React, { useState, useContext } from 'react';
import { Chrono } from 'react-chrono';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import Header from './Header';
import '../css/education.css';

function Education(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [width, setWidth] = useState('50vw');
  const [mode, setMode] = useState('VERTICAL_ALTERNATING');

  const data = {
    education: [
      {
        title: 'Fall 2023 - Summer 2025',
        cardTitle: 'Master of Computer Science',
        cardSubtitle: 'North Carolina State University',
        cardDetailedText: 'CGPA - 3.6',
        icon: {
          src: 'images/education/lorem-ipsum.png',
        },
      },
      {
        title: 'Fall 2018 - Summer 2022',
        cardTitle: 'Bachelor of Technology - Electronics and Communication Engineering',
        cardSubtitle: 'University of Mumbai - Sardar Patel Institute of Technology',
        cardDetailedText: 'CGPA - 8.73',
        icon: {
          src: 'images/education/lorem-ipsum2.png',
        },
      },
      {
        title: 'Apr 2018',
        cardTitle: 'High School',
        cardSubtitle: 'Apeejay School Nerul - Mumbai, India',
        cardDetailedText: 'Grade - 93%',
        icon: {
          src: 'images/education/lorem-ipsum3.png',
        },
      },
    ],
  };

  if (window?.innerWidth < 576) {
    setMode('VERTICAL');
    setWidth('90vw');
  } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
    setWidth('90vw');
  } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
    setWidth('75vw');
  } else {
    setWidth('50vw');
  }

  return (
    <>
      <Header title={header} />
      <Fade>
        <div style={{ width }} className="section-content-container">
          <Container>
            <Chrono
              hideControls
              allowDynamicUpdate
              useReadMore={false}
              items={data.education}
              cardHeight={250}
              mode={mode}
              theme={{
                primary: theme.accentColor,
                secondary: theme.accentColor,
                cardBgColor: theme.chronoTheme.cardBgColor,
                cardForeColor: theme.chronoTheme.cardForeColor,
                titleColor: theme.chronoTheme.titleColor,
              }}
            >
              <div className="chrono-icons">
                {data.education.map((education) => (education.icon ? (
                  <img
                    key={education.icon.src}
                    src={education.icon.src}
                    alt={education.icon.alt}
                  />
                ) : null))}
              </div>
            </Chrono>
          </Container>
        </div>
      </Fade>
    </>
  );
}

Education.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education;
