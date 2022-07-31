import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useViedeos from "../hooks/useVideos";
const App = () => {
  const [selecteVideo, setSelectedVideos] = useState(null);
  const [videos, search] = useViedeos("buildings");

  useEffect(() => {
    setSelectedVideos(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="row">
          <div className="eleven wide column">
            <VideoDetail video={selecteVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideos(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
