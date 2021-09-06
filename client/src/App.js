import './App.css';
import Video from "./components/Video";
import Leftside from './components/Leftside';
import TopNav from './components/TopNav';
import React, { useEffect, useState } from 'react';
import axios from "./axios"

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <TopNav />
      <Leftside />
      {videos.map(({
        url, channel, description, song, likes, messages, shares
      }) => (
        <Video
          url={url}
          channel={channel}
          song={song}
          likes={likes}
          messages={messages}
          description={description}
          shares={shares}
        />
      ))}


    </div>
  );
}

export default App;
