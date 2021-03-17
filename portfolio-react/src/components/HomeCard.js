import React from "react";
import Profile from "../../src/assets/profile.png";

function HomeCard() {
  return (
    <div className="row row-home">
      <div className="col-4">
        <div className="card card-home">
          <div className="card-body">
            <img
              src={Profile}
              alt="home-profile-photo"
              className="ome-profile-photo mb-3 rounded"
            ></img>
            <h3>Welcome!</h3>
            <h5 className="card-title text-center">Full Stack Web developer</h5>
            <p className="card-text text-center"></p>
            <a
              href="https://www.linkedin.com/in/abuye-mamuye-5a49921b0/"
              className="ml-5"
              style={{ color: "black" }}
            >
              LinkedIn
            </a>
            <br />
            <a
              href="https://github.com/AbuyeM1"
              className="ml-5"
              style={{ color: "black" }}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
