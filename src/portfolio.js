import emoji from "react-easy-emoji";
import iRacingWeeklyScreenshot from "./assets/images/iracingweekly.png";
import chattyio from "./assets/images/chattyio.png";

require("dotenv").config({ path: "../.env" });

const greeting = {
  username: "Juan Saldana",
  title: "Hi all, I'm Juan",
  subTitle: emoji(
    "A passionate Software Engineer with experience in building web applications with React as well as experience with a different frontend UI libraries and backend frameworks. I'm thrilled about the prospect of contributing my skills and passion to your team as a junior software engineer, and I look forward to discussing how we can work together to achieve great things."
  ),
  resumeLink: "https://docs.google.com/document/d/1uziqWB0PZMeOtWaplyu45jTNqNo6uaIc/edit?usp=sharing&ouid=108676278263961432674&rtpof=true&sd=true",
};

const socialMediaLinks = {
  github: "https://github.com/saldanaj97",
  linkedin: "https://www.linkedin.com/in/juan-saldana/",
  gmail: "saldanaj97@gmail.com",
};

const aboutMe = {
  title: "About me",
  subTitle:
    "As a passionate software enthusiast, I'm on the lookout for new opportunities to join a dynamic team in building cutting-edge applications. I have hands-on experience with a range of popular technologies including React.js, Node.js, MongoDB, HTML-5, CSS, and Python.",
  goals: [
    "I'm on the lookout for new opportunities to join a dynamic team in building cutting-edge applications. As a junior software engineer, my top priority is to learn and grow as much as I can, while contributing to the development of exciting and impactful products. I'm excited to work my way up the ranks of software engineering and develop my skills alongside an experienced team.",
    "I have hands-on experience with a range of popular technologies, including but not limited to React.js, Node.js, MongoDB, HTML-5, CSS, and Python.",
    "In addition to my technical abilities, I'm a firm believer in the power of collaboration and teamwork. I'm eager to expand my knowledge and explore new technologies and fields through working with diverse teams within a company. I'm confident that with my dedication and enthusiasm, I can make a meaningful impact and help us achieve great things together.",
  ],
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
    "As a junior software engineer, my top priority is to learn and grow as much as I can, while contributing to the development of exciting and impactful products. I'm excited to work my way up the ranks of software engineering and develop my skills alongside an experienced team.",
    "In addition to my technical abilities, I'm a firm believer in the power of collaboration and teamwork. I'm dedicated to helping my fellow engineers succeed and learning from them in turn.",
    "I'm thrilled about the prospect of contributing my skills and passion to your team as a junior software engineer, and I look forward to discussing how we can work together to achieve great things.",
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
  thirdPartyExperience: [
    emoji("🚀 MongoDB Atlas"),
    emoji("🚀 Railway"),
    emoji("🚀 Heroku"),
    emoji("🚀 Netlify"),
    emoji("🚀 Firestore"),
    emoji("🚀 Github"),
  ],
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saldanaj97", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

const deployedProjects = {
  title: "Deployed Projects",
  projects: [
    {
      name: "iRacingWeekly",
      url: "https://iracingweekly.netlify.app/",
      screenshot: iRacingWeeklyScreenshot,
      description:
        "This tool will be used for viewing which races for every series are occuring each week of the season along with the time of the next available race. The user can select which cars and tracks they own as well as select which series they want to follow. ",
      repoUrl: "https://github.com/saldanaj97/iRacing-Race-Info",
      techUsed: ["MongoDB", "Express", "React", "Node", "Axios", "Material UI"],
    },
    {
      name: "Chatty.io",
      url: "https://chattyio.netlify.app/",
      screenshot: chattyio,
      description: "Chatroom with user accounts as well as group support. ",
      repoUrl: "https://github.com/saldanaj97/ChatApp",
      techUsed: ["MongoDB", "Express", "React", "Node", "Axios", "Chakra UI"],
    },
  ],
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

export {
  greeting,
  socialMediaLinks,
  aboutMe,
  careerGoals,
  educationSection,
  languageStack,
  openSource,
  deployedProjects,
  achievementSection,
  contactInfo,
};
