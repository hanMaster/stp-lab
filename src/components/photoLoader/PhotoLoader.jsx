import React from "react";

const PhotoLoader = (position, onClick) => {
  return <div className="photos-loader" onClick={e => onClick}></div>;
};

export default PhotoLoader;
