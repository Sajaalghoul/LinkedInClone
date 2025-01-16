import React from "react";

const UserImage = ({ image, style }) => {
  return (
    <img
      className="border border-white mx-auto absolute top-8 left-4 rounded-full"
      src={image}
      style={style}
      alt="cardUserImage"
    />
  );
};

export default UserImage;
