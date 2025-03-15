import React from "react";

const YouTubeEmbed = () => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lB3PcsI45uU"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        id="online"
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;