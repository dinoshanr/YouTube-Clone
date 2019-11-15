import React from "react";

import { Paper, Typography } from "@material-ui/core";

const mystyle = {
     color: "RED",
     backgroundColor: "BLACK",
     padding: "10px",
     fontFamily: "Arial"
   };

export default ({ video }) => {
  if (!video) return <div>
      <div>
      <h1 style={mystyle}>WELCOME TO YOUTUBE LEARNING</h1>
        <form>
        <h2>Sign In</h2>
        <p>Username</p>
        <input
          type='text'
          name='username'
        />
      <p>Password</p>
        <input
          type='text'
          name='age'
        />
        </form>
        <br></br>
        <button>SIGN IN</button>
        <form>
        <h2>Sign Up</h2>
        <p>Name</p>
        <input
          type='text'
          name='username'
        />
      <p>Password</p>
        <input
          type='text'
          name='age'
        />
      <p>Email</p>
          <input
            type='text'
            name='age'
          />
        </form>
        <br></br>
        <button>SIGN UP</button>
      </div>
  </div>;


//functional component
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
}
