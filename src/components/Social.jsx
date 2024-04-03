// import React, { useEffect, useState, useContext } from 'react';
// import { SocialIcon } from 'react-social-icons';
// import { ThemeContext } from 'styled-components';
// import endpoints from '../constants/endpoints';

// const styles = {
//   iconStyle: {
//     marginLeft: 10,
//     marginRight: 10,
//     marginBottom: 10,
//   },
// };

// function Social() {
//   const theme = useContext(ThemeContext);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(endpoints.social, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//   }, []);

//   return (
//     <div className="social">
//       {data ? data.social.map((social) => (
//         <SocialIcon
//           key={social.network}
//           style={styles.iconStyle}
//           url={social.href}
//           network={social.network}
//           bgColor={theme.socialIconBgColor}
//           target="_blank"
//           rel="noopener"
//         />
//       )) : null}
//     </div>
//   );
// }

// export default Social;

import React, { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

// Provided social links data
const socialData = {
  "social": [
    {
      "network": "linkedin",
      "href": "https://www.linkedin.com/in/mrityunjay-joshi-mj-16b694170/"
    },
    {
      "network": "github",
      "href": "https://github.com/Mrityunjay243"
    },
    {
      "network": "email",
      "href": "mailto:mrityunjayjoshi.work@gmail.com"
    }
  ]
};

function Social() {
  const theme = useContext(ThemeContext);

  return (
    <div className="social">
      {socialData.social.map((social, index) => (
        <SocialIcon
          key={index} // Updated key to index since "network" might not be unique
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          bgColor={theme.socialIconBgColor}
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </div>
  );
}

export default Social;
