// import React, { useState, useEffect, useContext } from 'react';
// import { Container, Row, Button } from 'react-bootstrap';
// import { ThemeContext } from 'styled-components';
// import PropTypes from 'prop-types';
// import Fade from 'react-reveal/Fade';
// import Header from './Header';
// import endpoints from '../constants/endpoints';
// import ProjectCard from './projects/ProjectCard';
// import FallbackSpinner from './FallbackSpinner';

// const styles = {
//   containerStyle: {
//     marginBottom: 25,
//   },
//   showMoreStyle: {
//     margin: 25,
//   },
// };

// const Projects = (props) => {
//   const theme = useContext(ThemeContext);
//   const { header } = props;
//   const [data, setData] = useState(null);
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     fetch(endpoints.projects, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//   }, []);
//   const numberOfItems = showMore && data ? data.length : 6;
//   return (
//     <>
//       <Header title={header} />
//       {data
//         ? (
//           <div className="section-content-container">
//             <Container style={styles.containerStyle}>
//               <Row xs={1} sm={1} md={2} lg={3} className="g-4">
//                 {data.projects?.slice(0, numberOfItems).map((project) => (
//                   <Fade key={project.title}>
//                     <ProjectCard project={project} />
//                   </Fade>
//                 ))}
//               </Row>

//               {!showMore
//                 && (
//                 <Button
//                   style={styles.showMoreStyle}
//                   variant={theme.bsSecondaryVariant}
//                   onClick={() => setShowMore(true)}
//                 >
//                   show more
//                 </Button>
//                 )}
//             </Container>
//           </div>
//         ) : <FallbackSpinner /> }
//     </>
//   );
// };

// Projects.propTypes = {
//   header: PropTypes.string.isRequired,
// };

// export default Projects;

import React, { useState, useContext } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
};

// Directly declaring the project data within the component file
const projectData = {
  "projects": [
    // Insert all project items here
    // Example project item:
    {
      title: "Network Security Enhancement",
      bodyText: "- Performed an analysis of all the IPv4 and IPv6 CIDR blocks falling under North Carolina State University's ASN\n -  Fetched all the data of the hosts under the ASN using censys.io\n - Analysed the network vulnerabilities using shodan, aggregated the top 10 most frequent vulnerabilities and mapped them with their severity scores. \n - Reported the top 3 biggest threats to NCSU admin",
      links: [
          {
              "text": "Confidential"
          }
      ],
      tags : [
          "Python Scripting",
          "Censys.io",
          "Shodan",
          "Plotly", 
          "Matplotlib", 
          "National Vulnerablitiy Database"
      ]
  },
  {
      title: "Expertiza LMS Platform",
      bodyText: "- Reimplemented the courses and instructor section in the e-learning platform that manages student’s courses and grades for Professor Ed Geiringer, using TypeScript and Ruby on Rails.\n -  Key elements included a main page displaying course listings, administrative capabilities to manage courses and TAs, and various React components like Course Row, TA Management Modal, and Course Editor.\n - Incorporated design patterns like Composite, DRY, Provider, Observer, HOC, and Mediator. Testing scenarios involved Jest and Enzyme for features like listing courses, managing TAs, and UI validation.",
      links: [
          {
              "text": "GitHub",
              "href": "https://github.com/expertiza/reimplementation-front-end/pull/23"
          },
          {
              "text": "Live",
              "href": "https://expertiza.ncsu.edu/"
          }
      ],
      tags : [
          "React",
          "Docker",
          "Ruby on Rails",
          "TypeScript"
      ]
  },
  {
      title: "Expense Tracker Bot",
      bodyText: "- Created a Telegram Bot to manage expenses using Python, Telegram API.\n -  Included functionalities such as spend analytics, and currency conversion to the user using Data Analysis techniques*.\n -  Interfaced the BOT with Discord and Slack using the respective APIs.\n Enabled automated deployment using Travis CI, achieved a code coverage of 90%",
      links: [
          {
              "text": "GitHub",
              "href": "https://github.com/Mrityunjay243/dollar_bot"
          }
      ],
      tags : [
          "Python",
          "TravisCI",
          "Discord API",
          "Slack API",
          "Flask"
      ]
  },
  {
      title: "Railway Ticketing System",
      bodyText: "- Developed a Ruby on Rails-based Rail Ticketing System.\n - Implemented Admin, Passenger, Train, Ticket, Customer Review modules with user registration and ticket booking.\n - Leveaged Redis as the backend database and ensured security against unauthorized access and data manipulation. \n Utilised Device library for user authentication.",
      links: [
          {
              "text": "GitHub",
              "href": "https://github.ncsu.edu/mjoshi6/CSC_ECE_517_Fall2023_Program_2"
          }
      ],
      tags : [
          "Ruby",
          "Ruby on Rails",
          "Redis",
          "Devise"
      ]
  },
  {
      "title": "Secure Chat App",
      "bodyText": "- A web application that allows users to send texts in real time.\n - End to End encryption using **RSA** Algorithm.\n - Uses **Firebase** database to store texts.\n - Secured with **Fingerprint** lock.",
      "links": [
          {
              "text": "GitHub",
              "href": ""
          }
      ],
      "tags" : [
          "Nodejs",
          "Socket Programming",
          "Firebase",
          "RSA"
      ]
  },
  {
      "title": "SentiScope",
      "bodyText": "- Engineered advanced Deep Learning models including LSTM, GRU, and CNNs to conduct sophisticated analysis of user emotions, tones, and moods in text, achieving remarkable accuracies of 95.2%, 90%, and 87.6% respectively**.\n - Leveraged K-Nearest Neighbors (KNN) and clustering techniques to innovate text authorship identification, attaining an impressive accuracy of 80%.\n -  Integrated the deep learning modules into a Django app, which utilized Twitter API to analyze trends, as well as user emotions on twitter.",
      "links": [
          {
              "text": "GitHub",
              "href": "https://github.com/Mrityunjay243/textclassifiacation-"
          }
      ],
      "tags" : [
          "Python",
          "Django",
          "Angular",
          "Twitter API",
          "Tensorflow",
          "Word2Vec",
          "VADER"
      ]
  },
  {
      "title": "Portfolio Optimization using Deep Learning",
      "bodyText": "- Trained deep-learning models to forecast asset prices on historical time series data\n - Attained Sharpe ratio of 0.26 & 91% accuracy with LSTM. Optimized portfolio forecasts using statistical models\n - Cross-examined Machine Learning models to validate the impact of predictions, published the research on IEEE",
      "links": [
          {
              "text": "GitHub",
              "href": "https://github.com/Mrityunjay243/portfolio_optimisation"
          }
      ],
      "tags" : [
          "Python",
          "Tensorflow",
          "Yahoo Finance API",
          "Plotly",
          "Matplotlib",
          "Pandas", 
          "NumPy"
      ]
  },
  {
      "title": "Recruitment Platform",
      "bodyText": "- Developed a robust platform for candidates & employers using Django, with job search efficiency, and user engagement\n - Got an accuracy of 86% by implementing TF-IDF with Logistic Regression, thereby boosting job matching accuracy. \n Utilized React to create a front end for the application to allow different scenes to interact",
      "links": [
          {
              "text": "GitHub",
              "href": "https://github.com/Mrityunjay243/python-django-job-portal-ARP"
          }
      ],
      "tags" : [
          "Python",
          "Django",
          "React", 
          "TF-IDF", 
          "Logistic Regression"
      ]
  },
  {
      "title": "Music Mood Classifier",
      "bodyText": "- Designed a music mood classifier that achieved an accuracy score of 0.82 by leveraging Multi-Class Neural Network\n -  Further performed an in-depth analysis of popular music trends.",
      "links": [
          {
              "text": "GitHub",
              "href": ""
          }
      ],
      "tags" : [
          "Python",
          "Tensorflow",
          "Keras",
          "Librosa", 
          "Spotify API"
      ]
  }, 
  {
      "title": "Sahayak-bot",
      "bodyText": "- Simulated an automated bot with a robotic arm that can autonomously navigate around a room or warehouse and transport objects from one place to anothe",
      "links": [
          {
              "text": "GitHub",
              "href": ""
          }
      ],
      "tags" : [
          "Real TIme Operating Systems",
          "Python",
          "RosPy"
      ]
  }
    // Add all other projects following the same structure
  ]
};

const Projects = (props) => {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [showMore, setShowMore] = useState(false);

  const numberOfItems = showMore ? projectData.projects.length : 6;
  return (
    <>
      <Header title={header} />
      {projectData.projects.length > 0 ? (
        <div className="section-content-container">
          <Container style={styles.containerStyle}>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
              {projectData.projects.slice(0, numberOfItems).map((project) => (
                <Fade key={project.title}>
                  <ProjectCard project={project} />
                </Fade>
              ))}
            </Row>

            {!showMore && (
              <Button
                style={styles.showMoreStyle}
                variant={theme.bsSecondaryVariant}
                onClick={() => setShowMore(true)}
              >
                Show more
              </Button>
            )}
          </Container>
        </div>
      ) : <FallbackSpinner />}
    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;

