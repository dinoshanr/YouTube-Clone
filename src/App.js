import React, { useState } from "react";
import { Grid } from "@material-ui/core";



//this way we are importing multiple components at once
import { SearchBar, VideoList, VideoDetail } from "./components";

import youtube from "./api/youtube";

//dark mode

//dark mode

export default () => {
  //this is passed on so we can just be simple when connecting the state
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 4,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      }
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}
