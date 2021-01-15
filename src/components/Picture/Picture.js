import React from "react";
import Image from "react-bootstrap/Image";
import "./picture.css";
import profile from "../../assets/profile.webp";

const Picture = () => {
  return <Image className="pic-style" src={profile} roundedCircle />;
};

export default Picture;
