import { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
const { ipcRenderer } = window.require("electron");
const fs = window.require("fs");

export default function FolderScreen() {
  let data = useContext(UserContext);
  const history = useHistory();

  // console.log(path);
  return (
    <div className="folder">
      <div className="directory">
        <label htmlFor="file">
          Select empty folder to drop the converted video
        </label>
        <button
          className="btn btn-secondary btn-block mb-4"
          onClick={(event) => {
            ipcRenderer.send("open-file-dialog");
            ipcRenderer.on("select-folder", (event, paths) => {
              console.log(event);
              console.log(paths + "folderscreen");
              data.setFolderPath(paths);
            });
          }}
        >
          Choose Folder
        </button>
      </div>
      <label htmlFor="file">Select MP4 file to convert</label>
      <input
        type="file"
        id="file"
        accept="video/mp4"
        onChange={(e) => {
          data.setPath(e.target.files[0]);
          history.push("/convert");
        }}
      />
      <div className="text-center text-decoration-none mt-5">
        <Link to="/">
          <a>Go To Home</a>
        </Link>
      </div>
    </div>
  );
}
