import React from "react";
import Button from "./Button";

const users = [
  {
    name: "Babucarr Sanneh",
    following: false,
    profile_photo: "./images/user-0.jpg",
  },
  {
    name: "Muha Ceesay",
    following: true,
    profile_photo: "./images/user-1.jpg",
  },
  {
    name: "Mama Cham",
    following: false,
    profile_photo: "./images/user-2.jpg",
  },
  {
    name: "Rohey Jobe",
    following: false,
    profile_photo: "./images/user-3.jpg",
  },
  {
    name: "Omar Foon",
    following: false,
    profile_photo: "./images/user-4.jpg",
  },
];

const FriendItem = () => {
  return (
    <div className="card-body">
      <ul className="friends-list">
        {users.map((users, index) => (
          <li key={index} className="friend-item">
            <div className="image-wrapper">
              <img src={users.profile_photo}></img>
            </div>
            <span className="friend-name">{users.name}</span>
            <Button users={users} />
            {/* <button
              className={`follow-btn ${
                users.following ? "followed" : "follow-btn"
              }
              }`}
            >
              {users.following ? "following" : "follow"}
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// const FriendItem = () => {
//   return (
//     <div className="card-body">
//       <ul className="friends-list">
//         {/* <!-- Friend 1 --> */}
//         <li className="friend-item">
//           <div className="img-wrapper">
//             <img src="." alt="Friend profile picture" />
//           </div>
//           <p className="friend-name">Bubacarr Sanneh</p>
//           <button className="follow-btn" children="Follow"></button>
//         </li>
//         {/* <!-- Friend 2 --> */}
//         <li className="friend-item">
//           <div className="img-wrapper">
//             <img src="images/user-1.jpg" alt="Friend profile picture" />
//           </div>
//           <p className="friend-name">Muha Ceesay</p>
//           <button className="follow-btn followed" children="Following"></button>
//         </li>
//         {/* <!-- Friend 3 --> */}
//         <li className="friend-item">
//           <div className="img-wrapper">
//             <img src="images/user-2.jpg" alt="Friend profile picture" />
//           </div>
//           <p className="friend-name">Mama Cham</p>
//           <button className="follow-btn">Follow</button>
//         </li>
//         {/* <!-- Friend 4 --> */}
//         <li className="friend-item">
//           <div className="img-wrapper">
//             <img src="images/user-3.jpg" alt="Friend profile picture" />
//           </div>
//           <p className="friend-name">Rohey Jobe</p>
//           <button className="follow-btn">Follow</button>
//         </li>
//         {/* Friend 5 */}
//         <li className="friend-item">
//           <div className="img-wrapper">
//             <img src="images/user-4.jpg" alt="Friend profile picture" />
//           </div>
//           <p className="friend-name">Omar Foon</p>
//           <button className="follow-btn">Follow</button>
//         </li>
//       </ul>
//       <div>
//         <ul></ul>
//       </div>
//     </div>
//   );
// };

export default FriendItem;
