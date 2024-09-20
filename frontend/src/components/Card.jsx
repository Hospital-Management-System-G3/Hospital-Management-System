// import React from 'react';

// function Card({ username, profilepic }) {
//   return (
//     <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
//       <img
//         className="w-full h-48 object-cover"
//         src={profilepic ? profilepic : 'https://via.placeholder.com/150'} // Fallback image if profilepic is not available
//         alt={username}
//       />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{username}</div>
//       </div>
//     </div>
//   );
// }

// export default Card;


// `http://localhost:5000/uploads/${profilepic}`



import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ username, profilepic }) {
    const navigate = useNavigate();
  // Assuming profilepic contains just the filename (e.g., "profilepic.jpg")
  const imageUrl = profilepic 
    ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1i0dVOGCshOV79lLXRsY2WKSL_-wz9N82g` 
    : 'https://via.placeholder.com/150'; // Fallback image

    const handleViewDetails = () => {
        navigate(`/details/${username}`);
      };
    
  return (
     <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <img
        className="w-full h-48 object-cover mb-4 rounded"
        src={imageUrl}
        alt={username}
      />
      <div className="px-6 py-4">
        <div className="text-lg font-bold mb-2 text-black">{username}</div>
        <button
          onClick={handleViewDetails}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card;    
