import React from "react";
import ResumePNG from "../../assets/images/resume.png";

function Resume() {
  return (
    <div className="contact-card">
      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:510-467-9181" className="ml-4 mt-4 font-weight-bold">
            Phone
          </a>

          <a
            href="https://abuye20@yahoo.com"
            className="ml-4 mt-4 font-weight-bold"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/abuye-mamuye-5a49921b0/"
            className="ml-4 mt-4 font-weight-bold"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/AbuyeM1"
            className="ml-4 mt-4 font-weight-bold"
          >
            GitHub
          </a>

          <img src={ResumePNG} alt="profile-photo" className="resumePNG"></img>
          <a href="#">
            <h1 className="text-center mt-2">View Here</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
