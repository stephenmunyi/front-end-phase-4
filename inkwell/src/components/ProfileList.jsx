// //ProfileList.jsx//
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { PROFILE_URL } from '../API';

// const ProfileList = () => {
//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     axios.get(`${PROFILE_URL}/profilelist`)
//       .then(response => setProfiles(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="profile-list">
//       {profiles.map(profile => (
//         <div key={profile.id} className='profile'>
//           <h4>{profile.name}</h4>
//           <p>{profile.bio}</p>
//           <img src={profile.avatar} alt={profile.name} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProfileList;






// src/components/ProfileList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PROFILE_URL } from '../API';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get(PROFILE_URL)
      .then(response => setProfiles(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile">
          <h4>{profile.name}</h4>
          <p>{profile.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;

