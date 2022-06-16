import React, { useState, useEffect } from "react";
import LineIcon from "react-lineicons";
import "../css/vplayer.css";
import Socialicons from "../components/Socialicons";
import { propTypes } from "react-bootstrap/esm/Image";
import axios from "axios";
import ReactPlayer from "react-player";
function VideoPlayer() {
  const [information, setInformation] = useState("");
  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);
  return (
    <div>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={information.videoTwoMin}
          playing
          // playIcon={<button>Play</button>}
          // light={<Socialicons bordered />}
          controls={true}
          volume={1}
          width="100%"
          height="100%"
          onReady={() => console.log("ready")}
        />
      </div>
      <p>My 30 Second Pitch!</p>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={information.videoThirtySec}
          playing
          // playIcon={<button>Play</button>}
          // light={<Socialicons bordered />}
          controls={true}
          volume={1}
          width="100%"
          height="100%"
          onReady={() => console.log("ready")}
        />
      </div>
    </div>
  );
}
export default VideoPlayer;
