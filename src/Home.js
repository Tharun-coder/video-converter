import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Video Coverter</h1>
      <div className="content">
        <Link to="/project">
          <button className="btn btn-light">
            {" "}
            <i class="fa fa-plus" aria-hidden="true"></i> Add Project
          </button>
        </Link>
      </div>
    </div>
  );
}
