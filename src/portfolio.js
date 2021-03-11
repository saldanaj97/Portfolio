import emoji from "react-easy-emoji";

require('dotenv').config()

const greeting = {
  username: "Juan Saldana",
  title: "Hi all, I'm Juan",
  subTitle: emoji("A highly motivated Software Developer based in Dallas, TX looking for oppurtunities in developing Web and Mobile applications. My goal is to help make others lives easier by taking part in creating new exciting products for people with the use of cutting edge technology. The buttons below contain links to contact me or look at my past work. "),
  resumeLink: "https://drive.google.com/file/d/1J6__84YcylqPMCjDeGiMm1hTPPxoIRzr/view?usp=sharing"
};

const socialMediaLinks = {
  github: "https://github.com/saldanaj97",
  linkedin: "https://www.linkedin.com/in/juan-saldana/",
  gmail: "saldanaj97@gmail.com",
};

const skillsSection = {
  title: "About Me",
  subTitle: "Seeking oppurtunities develop new products with the following technologies.",
  skills: [
    emoji("⚡ Developed highly interactive and user friendly interfaces for both mobile and web applcations."),
    emoji("⚡ Experience with integration of third party services such as Firebase, Microsoft Azure, and Microsoft SQL Server.")
  ],

// https://fontawesome.com/icons?d=gallery 
softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
  ]
};

const educationSection = {
    title: "Education", 
    subtitle: "Relevant Coursework", 
    courses: [
        {
            courseName: 'Data Structures'
        },
        {
            courseName: 'Algorithms'
        }, 
        {
            courseName: 'Human Computer Interfaces (UI Development)'
        },
        {
            courseName: 'Intro to Databases'
        }, 
        {
            courseName: 'Software Engineering'
        },
        {
            courseName: 'Computer Networking'
        }, 
        {
            courseName: 'Technical Writing'
        }
    ]
}


const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
        Stack: "Web Development", 
        progressPercentage: "90%"  
    },
    {
        Stack: "Mobile App Development",
        progressPercentage: "50%"
    },
  ]
};

const languageStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
        Stack: "Java", 
        progressPercentage: "90%"  
    },
    {
        Stack: "Python",
        progressPercentage: "80%"
    },
    {
        Stack: "C++",
        progressPercentage: "60%"
    }
  ]
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saldanaj97", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and Certifications I have acquired! ",

  achivementsCards: [
    {
      title: "C++ LinkedIn Assessment",
      subtitle: "Passed C++ LinkedIn Assessment displaying solid foundational knowledge of C++.",
      image: require("./assets/images/cplusplus.png"),
      footerLink: [
      ]
    },
    {
        title: "Git LinkedIn Assessment",
        subtitle: "Passed Git LinkedIn Assessment displaying solid foundational knowledge of Git.",
        image: require("./assets/images/git.png"),
        footerLink: [
        ]
    },
    {
      title: "Python LinkedIn Assessment",
      subtitle: "Passed Python LinkedIn Assessment displaying solid foundational knowledge of python.",
      image: require("./assets/images/python.png"),
      footerLink: [
      ]
  },
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach me at my email, through the phone, or on LinkedIn.",
  number: "(469)432-9695",
  email_address: "saldanaj97@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, educationSection, techStack, languageStack, openSource, achievementSection, contactInfo};
