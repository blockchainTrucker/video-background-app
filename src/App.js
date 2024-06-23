import React from 'react';
import VideoBackground from './components/VideoBackground';
import videoSrc from './assets/video.mp4'; // Ensure you have a video file in the assets folder

function App() {
  return (
    <div className="App">
      <VideoBackground videoSrc={videoSrc}>
        <h1>Welcome to My Website</h1>
        <p>Enhance your web experience with video backgrounds</p>
      </VideoBackground>
    </div>
  );
}

export default App;