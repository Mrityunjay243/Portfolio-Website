// import React, { useEffect, useState, useContext } from 'react';
// import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
// import { Container } from 'react-bootstrap';
// import ReactMarkdown from 'react-markdown';
// import PropTypes from 'prop-types';
// import { ThemeContext } from 'styled-components';
// import Fade from 'react-reveal';
// import Header from './Header';
// import endpoints from '../constants/endpoints';
// import FallbackSpinner from './FallbackSpinner';
// import '../css/experience.css';

// const styles = {
//   ulStyle: {
//     listStylePosition: 'outside',
//     paddingLeft: 20,
//   },
//   subtitleContainerStyle: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   subtitleStyle: {
//     display: 'inline-block',
//   },
//   inlineChild: {
//     display: 'inline-block',
//   },
//   itemStyle: {
//     marginBottom: 10,
//   },
// };

// function Experience(props) {
//   const theme = useContext(ThemeContext);
//   const { header } = props;
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(endpoints.experiences, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res.experiences))
//       .catch((err) => err);
//   }, []);

//   return (
//     <>
//       <Header title={header} />

//       {data
//         ? (
//           <div className="section-content-container">
//             <Container>
//               <Timeline
//                 lineColor={theme.timelineLineColor}
//               >
//                 {data.map((item) => (
//                   <Fade>
//                     <TimelineItem
//                       key={item.title + item.dateText}
//                       dateText={item.dateText}
//                       dateInnerStyle={{ background: theme.accentColor }}
//                       style={styles.itemStyle}
//                       bodyContainerStyle={{ color: theme.color }}
//                     >
//                       <h2 className="item-title">
//                         {item.title}
//                       </h2>
//                       <div style={styles.subtitleContainerStyle}>
//                         <h4 style={{ ...styles.subtitleStyle, color: theme.accentColor }}>
//                           {item.subtitle}
//                         </h4>
//                         {item.workType && (
//                         <h5 style={styles.inlineChild}>
//                     &nbsp;·
//                           {' '}
//                           {item.workType}
//                         </h5>
//                         )}
//                       </div>
//                       <ul style={styles.ulStyle}>
//                         {item.workDescription.map((point) => (
//                           <div key={point}>
//                             <li>
//                               <ReactMarkdown
//                                 children={point}
//                                 components={{
//                                   p: 'span',
//                                 }}
//                               />
//                             </li>
//                             <br />
//                           </div>
//                         ))}
//                       </ul>
//                     </TimelineItem>
//                   </Fade>
//                 ))}
//               </Timeline>
//             </Container>
//           </div>
//         ) : <FallbackSpinner /> }
//     </>
//   );
// }

// Experience.propTypes = {
//   header: PropTypes.string.isRequired,
// };

// export default Experience;

import React, { useContext } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal';
import Header from './Header';
import '../css/experience.css';

const styles = {
  ulStyle: {
    listStylePosition: 'outside',
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: 'inline-block',
  },
  inlineChild: {
    display: 'inline-block',
  },
  itemStyle: {
    marginBottom: 10,
  },
};

function Experience(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;

  const data = [
    {
        title: "Open-Source Contributor",
        subtitle: "North Carolina State University",
        workType: "Full-time",
        workDescription: [
            "Modernized the Expertiza e-learning platform, using TypeScript and Ruby on Rails, and introduced admin rights. Deployed backend on Docker for improved portability and scalability.",
            "Executed unit tests for CRUD operations, ensuring accurate JSON responses and enhancing application reliability through automated CI/CD pipelines."
        ],
        dateText: "09/2023 – 12/2023"
    },
    {
        title: "Business Analyst - Data and Analytics",
        subtitle: "Quantiphi, Inc.",
        workType: "IFull-Time",
        workDescription: [
            "Worked on the migration of 24TB of TPC-DS dataset across 30 tables from S3 to GCS. Measured the data-ingestion latencies to BigQuery, and achieved 30% faster results compared to the existing Snowflake environment.", 
            "Analyzed the P-95 metrics of QthD, achieved 20% faster query run time from the load testing done on Jmeter",
            "Benchmarked tableau and looker dashboards for a client, after their migration to GCP. Achieved 70% faster load times.",
            "Created user stories (along with design teams) for the selected personas for a PLM product."
        ],
        dateText: "07/2022 – 07/2023"
    },
    {
        title: "Business Analyst - Intern",
        subtitle: "Quantiphi, Inc.",
        workType: "Intern",
        workDescription: [
            "Created project roadmaps, scoped use-cases and designed future state architectures on Google Cloud.",
            "Designed hands-on labs to onboard greenfield customers - migrating from AWS EMR to serverless spark on GCP.", 
            "Collaborated with team members using version control systems such as Gitlabs to organize modifications & assign tasks.", 
            "Received full-time offer after completion of 6-month internship from January to July in 2022."
        ],
        dateText: "01/2022 – 07/2022"
    }
];

  return (
    <>
      <Header title={header} />

      <div className="section-content-container">
        <Container>
          <Timeline
            lineColor={theme.timelineLineColor}
          >
            {data.map((item) => (
              <Fade key={item.title + item.dateText}>
                <TimelineItem
                  dateText={item.dateText}
                  dateInnerStyle={{ background: theme.accentColor }}
                  style={styles.itemStyle}
                  bodyContainerStyle={{ color: theme.color }}
                >
                  <h2 className="item-title">
                    {item.title}
                  </h2>
                  <div style={styles.subtitleContainerStyle}>
                    <h4 style={{ ...styles.subtitleStyle, color: theme.accentColor }}>
                      {item.subtitle}
                    </h4>
                    {item.workType && (
                      <h5 style={styles.inlineChild}>
                        &nbsp;·
                        {' '}
                        {item.workType}
                      </h5>
                    )}
                  </div>
                  <ul style={styles.ulStyle}>
                    {item.workDescription.map((point) => (
                      <div key={point}>
                        <li>
                          <ReactMarkdown
                            children={point}
                            components={{
                              p: 'span',
                            }}
                          />
                        </li>
                        <br />
                      </div>
                    ))}
                  </ul>
                </TimelineItem>
              </Fade>
            ))}
          </Timeline>
        </Container>
      </div>
    </>
  );
}

Experience.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Experience;