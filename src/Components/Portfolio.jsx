/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ScreenFocus.jpg";

const imageAltText = "person focus on solving a problem";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Docker Deployment Workflow for Laravel App",
    description:
      "It involves developing and implementing a systematic process for deploying a Laravel application using Docker, we design a Docker image that includes the required components, such as the PHP runtime, web server, and Laravel framework. We carefully configure the image to ensure seamless compatibility with the application.",
    url: "https://github.com/Bolasto/Docker-Deployment-Workflow-for-Laravel-App",
  },
  {
    title: "Terraform for Infrastructure as Code on AWS",
    description:
      "The goal is to set up a private network infrastructure on AWS, interconnecting multiple instances, and making it accessible to users through a load balancer and a Route53 domain.",
    url: "https://github.com/Bolasto/Terraform-for-Infrastructure-as-Code-on-AWS/tree/main",
  },
  {
    title: "Docker Deployment for a React App",
    description:
      "A Single react app and Socks app deployment on Amazon EKS using Terraform as the configuration management tool and Helm charts to help manage Kubernetes applications on ArgoCD using both Prometheus and Gafara as monitoring tools with a CI/CD pipeline also with GitHub Actions.",
    url: "https://github.com/Bolasto/altschool-final-exam",
  },
  {
    title: "Javascript Test",
    description:
      "Taking different Challenges, Actively participating in coding challenges, hackathons, and open-source projects, These experiences sharpen my problem-solving skills, encourage collaboration, and foster innovation in my approach to JavaScript development .",
    url: "https://github.com/Bolasto/Ogunmola-Rofiat-assignment-02",
  },
];

const Portfolio = () => {
  return (
    <section
      className="padding"
      id="portfolio"
      style={{ backgroundColor: "#45a6d6", color: "black" }}
    >
      <h2 style={{ textAlign: "center" }}>
        <strong> Portfolio </strong>
      </h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
