import emoji from "react-easy-emoji";

require("dotenv").config();

const greeting = {
  username: "Juan Saldana",
  title: "Hi all, I'm Juan",
  subTitle: emoji(
    "A highly motivated Software Developer based in Dallas, TX seeking opportunities in developing web applications primarily using javascript and javascript frameworks. The buttons below contain links to contact me or look at my past work. "
  ),
  resumeLink: "https://docs.google.com/document/d/1uziqWB0PZMeOtWaplyu45jTNqNo6uaIc/edit?usp=sharing&ouid=108676278263961432674&rtpof=true&sd=true",
};

const socialMediaLinks = {
  github: "https://github.com/saldanaj97",
  linkedin: "https://www.linkedin.com/in/juan-saldana/",
  gmail: "saldanaj97@gmail.com",
};

const skillsSection = {
  title: "About me",
  subTitle: "Searching for new oppurtunities to take part in a team developing applications with the following technologies: ",

  // https://fontawesome.com/icons?d=gallery
  softwareSkills: [
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
};

const careerGoals = {
  title: "My goals as a software engineer consist of: ",
  goals: [
    emoji("⚡ Continuing to grow as a developer through contribution to new and exisiting widely used products "),
    emoji("⚡ Working my way up different levels of software engineering with a company "),
    emoji("⚡ Helping other engineers succeed in their own journeys as a developer "),
    emoji("⚡ Gaining more knowledge of different technologies and fields by working with the many teams within a company "),
  ],
};

const educationSection = {
  title: "Education",
  subtitle: "Relevant Coursework",
  courses: [
    {
      courseName: "Data Structures",
    },
    {
      courseName: "Algorithms",
    },
    {
      courseName: "Human Computer Interfaces (UI Development)",
    },
    {
      courseName: "Intro to Databases",
    },
    {
      courseName: "Software Engineering",
    },
    {
      courseName: "Computer Networking",
    },
    {
      courseName: "Technical Writing",
    },
  ],
};

const languageStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React",
      progressPercentage: "60%",
    },
    {
      Stack: "Node/Express",
      progressPercentage: "60%",
    },
    {
      Stack: "MongoDB",
      progressPercentage: "60%",
    },
    {
      Stack: "Python",
      progressPercentage: "25%",
    },
    {
      Stack: "Flutter",
      progressPercentage: "40%",
    },
  ],
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saldanaj97", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and Certifications I have acquired! ",

  achivementsCards: [
    {
      title: "C++ LinkedIn Assessment",
      subtitle: "Passed C++ LinkedIn Assessment displaying solid foundational knowledge of C++.",
      image: require("./assets/images/cplusplus.png"),
      footerLink: [],
    },
    {
      title: "Git LinkedIn Assessment",
      subtitle: "Passed Git LinkedIn Assessment displaying solid foundational knowledge of Git.",
      image: require("./assets/images/git.png"),
      footerLink: [],
    },
    {
      title: "Python LinkedIn Assessment",
      subtitle: "Passed Python LinkedIn Assessment displaying solid foundational knowledge of python.",
      image: require("./assets/images/python.png"),
      footerLink: [],
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach me at my email, through the phone, or on LinkedIn.",
  number: "(469)432-9695",
  email_address: "saldanaj97@gmail.com",
};

export { greeting, socialMediaLinks, skillsSection, careerGoals, educationSection, languageStack, openSource, achievementSection, contactInfo };
