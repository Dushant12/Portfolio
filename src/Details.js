// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/Dushant_Technical cheif officer.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Dushant Harinkhede",
  tagline: "I want to be Software Engineer",
  img: profile,
  about: `Hello my name is Dushant Harinkhede. I am a Tech enthusiast who want to pursue career as a software developer. I have good experience with frontend webdev Technologies like HTML,CSS,Javascript and ReactJS. I  also know languages like C++,Python.Currently I am working as a CTO ing rangawardhan committee.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/dushant-harinkhede-296200210/",
  github: "https://github.com/Dushant12",
  twitter: "https://twitter.com/Dushant75111177",
  instagram: "https://www.instagram.com/dushant_harinkhede_2001/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Cheif Technical Officer",
    Company: `Rangawardhan`,
    Location: "Mumbai",
    Type: "Full Time",
    Duration: "26 oct 2022-present",
  },
  
  {
    Position: "Frontend Developer",
    Company: `Team Neo`,
    Location: "Mumbai",
    Type: "Group Project",
    Duration: "3 months",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: " YouTube, Google",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor in Computer Science",
    Company: `Veermata Jijabai Technological Institute`,
    Location: "Mumbai",
    Type: "Full Time",
    Duration: "Aug 2020 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Data Map",
    image: projectImage1,
    description: `Data-Map is a movie recommendation website which can help users discover movies which are similar to a particular movie the user enters, but with a twist! Instead of simply listing them it creates a Map of the recommendations.`,
    techstack: "HTML/CSS,JavaScript,ReactJS,ML algorithm,Flask REST API ",
    previewLink: "https://data-map.vercel.app/",
    githubLink: "https://github.com/Jash-Shah/Data-Map",
  },
  {
    title: "Snake Game",
    image: projectImage2,
    description: `It is simple snake game made using HTML,CSS and Javascript.This game was made by me when i was learning js.It is a fun game and very simple to understand so anyone can enjoy and the direction of snake movement is controlled by using keyboard.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Dushant12/snake",
  },
  {
    title: "Rangawardhan website",
    image: projectImage3,
    description: `It is a website which we are building for our college committee.The website is full of animations and is user freindly.It is responsive to mobile users also`,
    techstack: "HTML/CSS, JavaScript,ReactJS,emailjs",
    previewLink: "https://google.com",
    githubLink: "https://github.com/psankhe28/rangawardhan-website2022",
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "dushant.harinkhede.com",
  phone: "9595734153",
};
