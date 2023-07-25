import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! My name is Iqsan and I enjoy creating things that live on the
            internet. My interest in web development started back in 2014 when I
            created my first project called blog, a blog app built using HTML
            and CSS.
          </p>
          <p className="about-grid-info-text">
            I have worked on various software development projects and developed
            skills in various programming languages such as Node.js, React.js,
            and Go. In addition, I also have experience in web application
            development and integrating systems with various platforms.
          </p>

          <p className="about-grid-info-text">
            I enjoy collaborating with business teams and stakeholders to
            understand their needs and provide effective software solutions.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">PHP Laravel</li>
            <li className="about-grid-info-list-item">React.js</li>
            <li className="about-grid-info-list-item">Golang</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/iqsan.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
