import emoji from "react-easy-emoji";

const greeting = {
  username: "Juan Saldana",
  title: "Hi all, I'm Juan",
  subTitle: emoji("A Junior Software Developer based in Dallas, TX gaining experience in Web, Mobile, and Software Development by building applications with current technologies. "),
  resumeLink: "https://drive.google.com/file/d/10Ze8ZwbsH1eK4FduK23MJ5L5BqcddavD/view?usp=sharing"
};

const socialMediaLinks = {
  github: "https://github.com/saldanaj97",
  linkedin: "https://www.linkedin.com/in/juan-saldana/",
  gmail: "saldanaj97@gmail.com",
};

const skillsSection = {
  title: "About Me",
  subTitle: "Seeking oppurtunities gain experience in the following technologies",
  skills: [
    emoji("⚡ Developed highly interactive Front end / User Interfaces for both web and mobile applications"),
    emoji("⚡ Integration of third party services such as Firebase, Microsoft Azure, and Microsoft SQL Server")
  ],

// https://fontawesome.com/icons?d=gallery 
softwareSkills: [
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
        skillName: "ReactJS",
        fontAwesomeClassname: "fab fa-react"
    },
    {
        skillName: "SQL",
        fontAwesomeClassname: "fas fa-database"
    },
    {
        skillName: "Firebase",
        fontAwesomeClassname: "fas fa-fire"
    },
    {
        skillName: "Python",
        fontAwesomeClassname: "fab fa-python"
    }
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
        progressPercentage: "80%"  
    },
    {
        Stack: "Mobile App Development",
        progressPercentage: "60%"
    },
    {
        Stack: "Programming",
        progressPercentage: "90%"
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
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach me at my email, through the phone, or on LinkedIn.",
  number: "(469)432-9695",
  email_address: "saldanaj97@gmail.com"
};

const twitterDetails = {
  userName : "juansaldana97"//Replace "twitter" with your twitter username without @
};
export { greeting, socialMediaLinks, skillsSection, educationSection, techStack, openSource, achievementSection, contactInfo , twitterDetails};