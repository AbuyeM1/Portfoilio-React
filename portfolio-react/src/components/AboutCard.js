import React from "react";
import Profile from "../assets/Profile.png";

function AboutCard() {
  return (
    <div className="about-container">
      <h5>About Me</h5>

      <img
        src={Profile}
        alt="profile-photo"
        className="profile float-left"
      ></img>
      <div>
        <div className="mt-3">
          <p>I am a Fullstack Developer.</p>
          <p></p>

          <p>
            I am interested in learning about new opportunities and can be
            reached through this portfolio, by email:
            <a href="Abuye20@yahoo.com" target="_blank">
              Abuye20@yahoo.com,{" "}
            </a>{" "}
            through<a href="https://github.com/AbuyeM1"> GitHub</a>, or through{" "}
            <a href="https://www.linkedin.com/in/abuye-mamuye-5a49921b0/">
              LinkedIn.
            </a>
            Cheers!
          </p>
        </div>

        <div className="card-body contactLinks">
          <a
            href="https://www.linkedin.com/in/abuye-mamuye-5a49921b0/"
            className="card-link"
          >
            LinkedIn
          </a>
          <a href="https://github.com/AbuyeM1" className="card-link">
            GitHub
          </a>
        </div>
      </div>
      {/* end copy paste  */}
    </div>
  );
}

export default AboutCard;
