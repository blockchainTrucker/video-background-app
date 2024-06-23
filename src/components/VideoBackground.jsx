import React from 'react';
import './VideoBackground.css';

const VideoBackground = ({ videoSrc, children }) => {
  return (
    <div className="video-background">
      <video className="video-content" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;