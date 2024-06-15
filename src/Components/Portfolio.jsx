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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Password generator app",
    description:
      "Enhance your online security with a robust password generator. Generate a secure password .",
    url: "https://manisha-passwordgenerator.netlify.app/",
  },
  {
    title: "Simple calculator",
    description:
      " A handy tool for your everyday calculations, beautifully designed and functional. Give it a try ",
    url: "https://manisha-simple-calculator.netlify.app/",
  },
  {
    title: "Share Profile",
    description:
      " A web-based platform for networking and sharing professional profiles effortlessly. Connect with me .",
    url: "https://manisha-shareprofile.netlify.app/",
  },
  {
    title: "See all my projects",
    description:
      "Feel free to check out all my projects on GitHub to see the range of work I've done and get a sense of my skills and interests.",
    url: "https://github.com/Manishar55?tab=repositories",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center", color: "#000" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", color: "#000" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", color: "#000" }}>
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
                <h4 style={{ flexBasis: "40px", color: "#4e4f4f" }}>{project.title}</h4>
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
