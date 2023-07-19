/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/my background.jpg";

const imageAltText = "blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hello! I'm Ogunmola Rofiat, a Cloud Engineer/DevOps Professional with a Finance Background,I'm passionate about offering cloud services to individuals and businesses.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "DevOps",
  "Linux Administration",
  "Containerization",
  "Cloud Computing",
  "Infrastructure as a code",
  "Configuration Management",
  "Container Orchestration",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am thrilled to be on this journey of combining my background in Finance with my newfound passion for technology, my ultimate goal is to make a meaningful impact within the tech industry. I am always open to new opportunities, collaborations, and connections, so please feel free to reach out!";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#3387b8",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
