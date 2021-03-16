import React from "react";
import PortfolioCard from "../portfolioCard";
import projects from "../../project.json";

function Blog() {
  return (
    <div>
      <div className="container portfolio-container">
        <h1 className="title">Projects List</h1>
        <div className="row">
          <PortfolioCard
            name={projects[0].name}
            image={projects[0].image}
            project={projects[0].project}
            Deployment={projects[0].Deployment}
          />
          <PortfolioCard
            name={projects[1].name}
            image={projects[1].image}
            project={projects[1].project}
            Deployment={projects[1].Deployment}
          />
        </div>

        <div className="row">
          <PortfolioCard
            name={projects[2].name}
            image={projects[2].image}
            project={projects[2].project}
            Deployment={projects[2].Deployment}
          />

          <PortfolioCard
            name={projects[3].name}
            image={projects[3].image}
            project={projects[3].project}
            Deployment={projects[3].Deployment}
          />
        </div>

        <div className="row">
          <PortfolioCard
            name={projects[4].name}
            image={projects[4].image}
            project={projects[4].project}
            Deployment={projects[4].Deployment}
          />

          <PortfolioCard
            name={projects[5].name}
            image={projects[5].image}
            project={projects[5].project}
            Deployment={projects[5].Deployment}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
