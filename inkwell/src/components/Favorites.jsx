// //Favorites.jsx//
// import React, { useState } from "react";
// import { useAppContext } from "./context/appContext"; // Ensure the correct path and case sensitivity

// const Favorites = () => {
//   const { favorites, removeFavorites } = useAppContext();
//   const [showFavorites, setShowFavorites] = useState(false);

//   const toggleFavorites = () => {
//     setShowFavorites(!showFavorites);
//   };

//   return (
//     <div className="favorites">
//       <button onClick={toggleFavorites}>
//         {showFavorites ? "Hide Favorites" : "Show Favorites"}
//       </button>

//       {showFavorites && favorites.length > 0
//         ? favorites.map((book) => (
//             <div key={book.id} className="book">
//               <h4>{book.title}</h4>
//               <img src={book.image_url} alt={book.title} />
//               <button onClick={() => removeFavorites(book.id)}>
//                 Remove from Favorites
//               </button>
//             </div>
//           ))
//         : showFavorites && <h1>You don't have any favorite books yet.</h1>}
//     </div>
//   );
// };

// export default Favorites;





// src/components/Favorites.jsx
import React, { useState } from "react";
import { useAppContext } from "../context/appContext";

const Favorites = () => {
  const { favorites, removeFavorites } = useAppContext();
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="favorites">
      <button onClick={toggleFavorites}>
        {showFavorites ? "Hide Favorites" : "Show Favorites"}
      </button>

      {showFavorites && favorites.length > 0
        ? favorites.map((book) => (
            <div key={book.id} className="book">
              <h4>{book.title}</h4>
              <img src={book.image_url} alt={book.title} />
              <button onClick={() => removeFavorites(book.id)}>
                Remove from Favorites
              </button>
            </div>
          ))
        : showFavorites && <h1>You don't have any favorite books yet.</h1>}
    </div>
  );
};

export default Favorites;
