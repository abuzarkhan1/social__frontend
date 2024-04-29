import React from "react";
import reel from "../../Assets/reel.mp4"


const UserReelCard = () => {
  return (
    <div className="w-[15rem] px-2">
      <video
        className="w-full h-full"
        controls
        src={reel}/>
    </div>
  );
};

export default UserReelCard;