import React from "react";
import Avatar from './Avatar'
import '../Component/ProfileCard.css'

function ProfileCard({name, image}) {
  return (
    <div className="card">
      <Avatar 
      image={image}
    />
      <div className="card-name">{name}</div>
      
    </div>
  );
}
export default ProfileCard;