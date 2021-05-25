import UserContext from "./UserContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
const fs = window.require("fs");

const process = window.require("child_process");
const randomstring = window.require("randomstring");

export default function ConvertScreen() {
  const data = useContext(UserContext);
  const dir = "./media";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  console.log(data.folderPath);
  return (
    <div className="convert">
      <p className="bg-white text-dark p-2 rounded">
        <b>Video selected for conversion - </b> {data.path.path}
      </p>
      <button
        className="btn btn-primary btn-sm btn-block mt-5"
        onClick={() => {
          //Coversion ffmpeg

          process.exec(
            `ffmpeg -i ${
              data.path.path
            } -profile:v baseline -level 3.0 -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls media/${randomstring.generate(
              7
            )}_video.m3u8`,
            (err, stdout, stderr) => {
              console.log(stdout);

              alert(
                "Your video coversion have been completed. Please get the video from the directory"
              );
              if (err !== null) {
                console.log(err);
              }
            }
          );
        }}
      >
        Convert Now
      </button>
      <div className="text-center text-decoration-none mt-5">
        <Link to="/">
          <a>Go To Home</a>
        </Link>
      </div>
    </div>
  );
}
