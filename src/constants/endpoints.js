const endpoints = {
  navbar: {
    logo: {
      source: 'images/logo.png',
      height: 45,
      width: 50,
    },
    sections: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'About',
        href: '/about',
      },
      {
        title: 'Skills',
        href: '/skills',
      },
      {
        title: 'Education',
        href: '/education',
      },
      {
        title: 'Experience',
        href: '/experience',
      },
      {
        title: 'Projects',
        href: '/projects',
      },
      {
        title: 'Resume',
        href: 'https://drive.google.com/file/d/1SdJyZJGl817dSVZWb7sE8bldpb-kBPxO/view?usp=sharing',
        type: 'link',
      },
    ],
  },
  routes: {
    sections: [
      {
        component: 'About',
        path: '/about',
        headerTitle: 'About',
      },
      {
        component: 'Skills',
        path: '/skills',
        headerTitle: 'Skills',
      },
      {
        component: 'Education',
        path: '/education',
        headerTitle: 'Education',
      },
      {
        component: 'Experience',
        path: '/experience',
        headerTitle: 'Experience',
      },
      {
        component: 'Projects',
        path: '/projects',
        headerTitle: 'Projects',
      },
    ],
  },
  home: {
    name: 'Mrityunjay Joshi',
    roles: ['a developer', 'a technology enthusiast', 'an aspiring cloud developer', 'a big data enthusiast'],
  },
  social: {
    social: [
      {
        network: 'linkedin',
        href: 'https://www.linkedin.com/in/mrityunjay-joshi-mj-16b694170/',
      },
      {
        network: 'github',
        href: 'https://github.com/Mrityunjay243',
      },
      {
        network: 'email',
        href: 'mailto:mrityunjayjoshi.work@gmail.com',
      },
    ],
  },
  about: {
    about: " As a graduate of the Master's in Computer Science program at North Carolina State University, I have acquired a strong foundation in software engineering and system design methodologies. I have also developed my skills in software engineering, machine learning, and cloud computing, as evidenced by my projects, certification from Google Cloud, and my publications in IEEE. \n \n I have applied my knowledge and skills in real-world projects as a Business Analyst at Quantiphi for the Data and Analytics practice, focused on US West customers. I worked on enterprise data warehouse modernization projects, involving migrations from legacy tools to Google Cloud's data suite solutions. I also designed future state architectures, performed revenue cost analysis, created engagement roadmaps, and implemented risk mitigation strategies. \n \n I am passionate about solving complex problems and driving technological innovation. I am looking for new opportunities to leverage my expertise and contribute to the growth and success of leading organizations in the field of Software Engineering, Data Analytics, and Data Science. I am eager to learn from and collaborate with talented professionals and deliver value-added solutions.",
    imageSource: 'images/about/profile.jpg',
  },
  skills: {
    intro: 'I love to learn new things and experiment with new technologies. These are some of the major languages, technologies, tools, and platforms I have worked with:',
    skills: [
      {
        title: 'Languages & Databases',
        items: [
          {
            icon: '../skills/C++.png',
            title: 'C++',
          },
          {
            icon: 'images/skills/python.png',
            title: 'Python',
          },
          {
            icon: 'images/skills/js.png',
            title: 'JavaScript',
          },
          {
            icon: 'images/skills/mongo-db.png',
            title: 'MongoDB',
          },
          {
            icon: 'images/skills/postgres.png',
            title: 'Postgres',
          },
          {
            icon: 'images/skills/Typescript.svg',
            title: 'TypeScript',
          },
          {
            icon: 'images/skills/cloud-bigtable.svg',
            title: 'Bigtable',
          },
          {
            icon: 'images/skills/bigquery.svg',
            title: 'BigQuery',
          },
        ],
      },
      {
        title: 'Frameworks & Technologies',
        items: [
          {
            icon: 'images/skills/android_new.png',
            title: 'Android',
          },
          {
            icon: 'images/skills/react.png',
            title: 'React',
          },
          {
            icon: 'images/skills/nodejs.png',
            title: 'Node.js',
          },
          {
            icon: 'images/skills/django.png',
            title: 'Django',
          },
          {
            icon: 'images/skills/numpy.svg',
            title: 'Numpy',
          },
          {
            icon: 'images/skills/pandas.svg',
            title: 'Pandas',
          },
          {
            icon: 'images/skills/tf.png',
            title: 'TensorFlow',
          },
          {
            icon: 'images/skills/plotly.jpg',
            title: 'Plotly',
          },
        ],
      },
      {
        title: 'Tools & Platforms',
        items: [
          {
            icon: 'images/skills/google-cloud.svg',
            title: 'Google Cloud Platform',
          },
          {
            icon: 'images/skills/git.png',
            title: 'Git',
          },
          {
            icon: 'images/skills/docker.png',
            title: 'Docker',
          },
        ],
      },
      {
        title: 'Certifications',
        items: [
          {
            icon: 'images/skills/ACE.jpg',
            title: 'ACE - GCP',
          },
          {
            icon: 'images/skills/ML.jpg',
            title: 'Machine Learning (Stanford Online)',
          },
        ],
      },
    ],
  },
  education: {
    education: [
      {
        title: 'Fall 2023 - Summer 2025',
        cardTitle: 'Master of Computer Science',
        cardSubtitle: 'North Carolina State University',
        cardDetailedText: 'CGPA - 3.6',
        icon: {
          src: 'images/education/lorem-ipsum.png',
        }, // Trailing comma added here
      },
      {
        title: 'Fall 2018 - Summer 2022',
        cardTitle: 'Bachelor of Technology - Electronics and Communication Engineering',
        cardSubtitle: 'University of Mumbai - Sardar Patel Institute of Technology',
        cardDetailedText: 'CGPA - 8.73',
        icon: {
          src: 'images/education/lorem-ipsum2.png',
        }, // Trailing comma added here
      },
      {
        title: 'Apr 2018',
        cardTitle: 'High School',
        cardSubtitle: 'Apeejay School Nerul - Mumbai, India',
        cardDetailedText: 'Grade - 93%',
        icon: {
          src: 'images/education/lorem-ipsum3.png',
        }, // Trailing comma added here
      }, // And also here, if more entries are expected to be added in the future
    ], // Trailing comma here if this is part of a larger object structure
  },
  experiences: {
    experiences: [
      {
        title: 'Open-Source Contributor',
        subtitle: 'North Carolina State University',
        workType: 'Full-time',
        workDescription: [
          'Modernized the Expertiza e-learning platform, using TypeScript and Ruby on Rails, and introduced admin rights. Deployed backend on Docker for improved portability and scalability.',
          'Executed unit tests for CRUD operations, ensuring accurate JSON responses and enhancing application reliability through automated CI/CD pipelines.',
        ], // Trailing comma added here
        dateText: '09/2023 – 12/2023',
      }, // Trailing comma added here
      {
        title: 'Business Analyst - Data and Analytics',
        subtitle: 'Quantiphi, Inc.',
        workType: 'Full-Time',
        workDescription: [
          'Worked on the migration of 24TB of TPC-DS dataset across 30 tables from S3 to GCS. Measured the data-ingestion latencies to BigQuery, and achieved 30% faster results compared to the existing Snowflake environment.',
          'Analyzed the P-95 metrics of QthD, achieved 20% faster query run time from the load testing done on Jmeter',
          'Benchmarked tableau and looker dashboards for a client, after their migration to GCP. Achieved 70% faster load times.',
          'Created user stories (along with design teams) for the selected personas for a PLM product.',
        ], // Trailing comma added here
        dateText: '07/2022 – 07/2023',
      }, // Trailing comma added here
      {
        title: 'Business Analyst - Intern',
        subtitle: 'Quantiphi, Inc.',
        workType: 'Intern',
        workDescription: [
          'Created project roadmaps, scoped use-cases and designed future state architectures on Google Cloud.',
          'Designed hands-on labs to onboard greenfield customers - migrating from AWS EMR to serverless spark on GCP.',
          'Collaborated with team members using version control systems such as Gitlabs to organize modifications & assign tasks.',
          'Received full-time offer after completion of 6-month internship from January to July in 2022.',
        ], // Trailing comma added here
        dateText: '01/2022 – 07/2022',
      }, // Trailing comma here if you anticipate adding more items in the future
    ], // Trailing comma here if this is part of a larger object structure
  },
  projects: {
    projects: [
      {
        title: 'Network Security Enhancement',
        bodyText: "- Performed an analysis of all the IPv4 and IPv6 CIDR blocks falling under North Carolina State University's ASN\n - Fetched all the data of the hosts under the ASN using censys.io\n - Analysed the network vulnerabilities using shodan, aggregated the top 10 most frequent vulnerabilities and mapped them with their severity scores. \n - Reported the top 3 biggest threats to NCSU admin",
        links: [
          {
            text: 'Confidential',
          },
        ],
        tags: [
          'Python Scripting',
          'Censys.io',
          'Shodan',
          'Plotly',
          'Matplotlib',
          'National Vulnerability Database',
        ],
      },
      {
        title: 'Expertiza LMS Platform',
        bodyText: '- Reimplemented the courses and instructor section in the e-learning platform that manages student’s courses and grades for Professor Ed Geiringer, using TypeScript and Ruby on Rails.\n - Key elements included a main page displaying course listings, administrative capabilities to manage courses and TAs, and various React components like Course Row, TA Management Modal, and Course Editor.\n - Incorporated design patterns like Composite, DRY, Provider, Observer, HOC, and Mediator. Testing scenarios involved Jest and Enzyme for features like listing courses, managing TAs, and UI validation.',
        links: [
          {
            text: 'GitHub',
            href: 'https://github.com/expertiza/reimplementation-front-end/pull/23',
          },
          {
            text: 'Live',
            href: 'https://expertiza.ncsu.edu/',
          },
        ],
        tags: [
          'React',
          'Docker',
          'Ruby on Rails',
          'TypeScript',
        ],
      },
      {
        title: 'Expense Tracker Bot',
        bodyText: '- Created a Telegram Bot to manage expenses using Python, Telegram API.\n - Included functionalities such as spend analytics, and currency conversion to the user using Data Analysis techniques.\n - Interfaced the BOT with Discord and Slack using the respective APIs.\n Enabled automated deployment using Travis CI, achieved a code coverage of 90%',
        links: [
          {
            text: 'GitHub',
            href: 'https://github.com/Mrityunjay243/dollar_bot',
          },
        ],
        tags: [
          'Python',
          'TravisCI',
          'Discord API',
          'Slack API',
          'Flask',
        ],
      },
      {
        title: 'Railway Ticketing System',
        bodyText: '- Developed a Ruby on Rails-based Rail Ticketing System.\n - Implemented Admin, Passenger, Train, Ticket, Customer Review modules with user registration and ticket booking.\n - Leveraged Redis as the backend database and ensured security against unauthorized access and data manipulation.\n - Utilised Devise library for user authentication.',
        links: [
          {
            text: 'GitHub',
            href: 'https://github.ncsu.edu/mjoshi6/CSC_ECE_517_Fall2023_Program_2',
          },
        ],
        tags: [
          'Ruby',
          'Ruby on Rails',
          'Redis',
          'Devise',
        ],
      },
      {
        title: 'Secure Chat App',
        bodyText: '- A web application that allows users to send texts in real-time.\n - End to End encryption using RSA Algorithm.\n - Uses Firebase database to store texts.\n - Secured with Fingerprint lock.',
        links: [
          {
            text: 'GitHub',
            href: '',
          },
        ],
        tags: [
          'Node.js',
          'Socket Programming',
          'Firebase',
          'RSA',
        ],
      },
      {
        title: 'SentiScope',
        bodyText: '- Engineered advanced Deep Learning models including LSTM, GRU, and CNNs to conduct sophisticated analysis of user emotions, tones, and moods in text, achieving remarkable accuracies of 95.2%, 90%, and 87.6% respectively.\n - Leveraged K-Nearest Neighbors (KNN) and clustering techniques to innovate text authorship identification, attaining an impressive accuracy of 80%.\n - Integrated the deep learning modules into a Django app, which utilized Twitter API to analyze trends, as well as user emotions on twitter.',
        links: [
          {
            text: 'GitHub',
            href: 'https://github.com/Mrityunjay243/textclassification-',
          },
        ],
        tags: [
          'Python',
          'Django',
          'Angular',
          'Twitter API',
          'TensorFlow',
          'Word2Vec',
          'VADER',
        ],
      },
      {
        title: 'Portfolio Optimization using Deep Learning',
        bodyText: '- Trained deep-learning models to forecast asset prices on historical time series data\n - Attained Sharpe ratio of 0.26 & 91% accuracy with LSTM. Optimized portfolio forecasts using statistical models\n - Cross-examined Machine Learning models to validate the impact of predictions, published the research on IEEE',
        links: [
          {
            text: 'GitHub',
            href: 'https://github.com/Mrityunjay243/portfolio_optimisation',
          },
        ],
        tags: [
          'Python',
          'TensorFlow',
          'Yahoo Finance API',
          'Plotly',
          'Matplotlib',
          'Pandas',
          'NumPy',
        ],
      },
      {
        title: 'Recruitment Platform',
        bodyText: '- Developed a robust platform for candidates & employers using Django, with job search efficiency, and user engagement\n - Got an accuracy of 86% by implementing TF-IDF with Logistic Regression, thereby boosting job matching accuracy.\n - Utilized React to create a frontend for the application to allow different scenes to interact',
        links: [
          {
            text: 'GitHub',
            href: 'https://github.com/Mrityunjay243/python-django-job-portal-ARP',
          },
        ],
        tags: [
          'Python',
          'Django',
          'React',
          'TF-IDF',
          'Logistic Regression',
        ],
      },
      {
        title: 'Music Mood Classifier',
        bodyText: '- Designed a music mood classifier that achieved an accuracy score of 0.82 by leveraging a Multi-Class Neural Network\n - Further performed an in-depth analysis of popular music trends.',
        links: [
          {
            text: 'GitHub',
            href: '',
          },
        ],
        tags: [
          'Python',
          'TensorFlow',
          'Keras',
          'Librosa',
          'Spotify API',
        ],
      },
      {
        title: 'Sahayak-bot',
        bodyText: '- Simulated an automated bot with a robotic arm that can autonomously navigate around a room or warehouse and transport objects from one place to another',
        links: [
          {
            text: 'GitHub',
            href: '',
          },
        ],
        tags: [
          'Real-Time Operating Systems',
          'Python',
          'RosPy',
        ],
      },
    ],
  },
};

export default endpoints;
