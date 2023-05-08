import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/codeid.jpg",
      projectName: "Code Academy",
      projectLink: "https://github.com/Iqsan01/codeid",
      projectDescription:
        "This web application is built using various technologies for both the frontend and backend. On the frontend, it uses React.js as the main JavaScript library, along with Redux saga for state management and Tailwind for styling. On the backend, it utilizes Node.js as the runtime environment and Express as the web application framework, with Postgres as the database management system.",
      projectTech: [
        "React.js",
        "Redux Saga",
        "Tailwind",
        "Postgres",
        "Node.js",
        "Express",
      ],
      projectExternalLinks: {
        github: "https://github.com/Iqsan01/codeid",
        externalLink: "https://github.com/Iqsan01/codeid",
      },
    },
    {
      image: "/dashboard.png",
      projectName: "Admin Dashboard",
      projectLink: "https://ecomvision-dashboard.netlify.app/",
      projectDescription:
        "I am building and deploying a MERN stack admin dashboard. For the frontend, I am using Material UI, Material UI Data Grid, Nivo Charts, Redux Toolkit, and Redux Toolkit Query. For the backend, I am using Node JS, Express Js, Mongoose, and MongoDB. Additionally, I will create a data model using Entity Relationship Diagrams and demonstrate how to make aggregate calls in MongoDB.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/Iqsan01/fullstack-dashboard.git",
        externalLink: "https://ecomvision-dashboard.netlify.app/",
      },
    },
    {
      image: "/spotify.png",
      projectName: "Spotify Clone",
      projectLink: "https://netlify.com",
      projectDescription:
        "I am building a Spotify clone with React JS, Styled Components using Spotify API and Context API.",
      projectTech: [
        "React.js",
        "Axios",
        "React Icons",
        "Netlify Cli",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/Iqsan01/spotify-clone.git",
        externalLink: "https://spotify-clone-api.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
