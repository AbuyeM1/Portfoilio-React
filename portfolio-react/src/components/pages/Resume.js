import React from "react";
import ResumePNG from "../../assets/resume.png";

function Resume() {
  return (
    <div className="contact-card">
      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a
            href="mailto:Abuye20@yahoo.com"
            className="ml-4 mt-4 font-weight-bold"
            style={{ color: "blue" }}
          >
            Email
            <br />
            Abuye20@yahoo.com
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/abuye-mamuye-5a49921b0/"
            className="ml-4 mt-4 font-weight-bold"
            style={{ color: "blue" }}
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/AbuyeM1"
            className="ml-4 mt-4 font-weight-bold"
            style={{ color: "blue" }}
          >
            GitHub
          </a>

          <img src={ResumePNG} alt="profile-photo" className="resumePNG"></img>
          <a href="https://drive.google.com/file/d/1lMZcQvq4RDS78WXkjAslJuHMlc9achwz/view?usp=sharing">
            <h1 className="text-center mt-5 " style={{ color: "red" }}>
              Click to View Here
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
