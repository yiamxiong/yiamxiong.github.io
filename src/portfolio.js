/* Custom Portfolio for Yia Moua Xiong */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Yia Moua Xiong",
  title: "Hi, I'm Yia",
  subTitle: emoji(
    "Technical Support Analyst pivoting into Data Analytics. Experienced in IT systems and support with a strong foundation in troubleshooting, networking, and infrastructure. Currently gaining hands-on expertise in Power BI, Python, and SQL for data storytelling and decision-making."
  ),
  resumeLink:
    "/resume_ymxiong.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/yiamxiong",
  linkedin: "https://www.linkedin.com/in/yia-xiong/",
  gmail: "yiamxiong@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "TECH SUPPORT PRO TURNED DATA",
  skills: [
    emoji("📊 Transform complex data into understandable visuals using Power BI and Excel"),
    emoji("⚙️ Troubleshoot networks, systems, and applications across enterprise environments"),
    emoji("💻 Train and support end users with empathy and clarity")
  ],
  softwareSkills: [
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Windows Server", fontAwesomeClassname: "fab fa-windows" },
    { skillName: "Azure AD", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "SharePoint", fontAwesomeClassname: "fas fa-share-alt" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Chippewa Valley Technical College",
      logo: "",
      subHeader: "Associate of Applied Science in IT - Network Specialist",
      duration: "Expected Spring 2025",
      desc: "Coursework includes Networking, Power BI, SQL, Python, Excel, and Data Analytics foundations.",
      descBullets: [
        "Designed dashboards and analyzed data sets using Power BI",
        "Applied SQL and Python to manipulate and extract insights from structured data"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Data Analytics", progressPercentage: "70%" },
    { Stack: "IT Support & Troubleshooting", progressPercentage: "95%" },
    { Stack: "Systems & Networking", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Technical Support Analyst",
      company: "Chippewa County",
      date: "Dec 2022 – Present",
      desc: "Create and manage SharePoint environments, troubleshoot Azure AD and Avatar EHR, and develop user training materials. Provide broad technical support across departments."
    },
    {
      role: "IT Consultant",
      company: "Grow Green Garden Supplies",
      date: "Mar 2021 – Dec 2022",
      desc: "Maintained POS systems and backups, managed network devices, and supported day-to-day IT operations including inventory systems."
    },
    {
      role: "IT Systems Technician",
      company: "Eau Claire Area School District",
      date: "Aug 2019 – Mar 2021",
      desc: "Monitored district servers and backup processes, supported endpoint management, software patching, and provided Tier 2 technical support."
    },
    {
      role: "IT Field Technician",
      company: "Eau Claire Area School District",
      date: "Oct 2017 – Aug 2019",
      desc: "Configured devices, repaired AV and tech components, supported staff and students with day-to-day IT needs."
    },
    {
      role: "Technical Services Consultant IV",
      company: "IDEXX Laboratories",
      date: "Aug 2014 – Oct 2017",
      desc: "Led hardware/software implementation projects for veterinary clinics, coordinated onsite technicians, and managed network infrastructure installs."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "ACADEMIC PROJECTS AND PERSONAL INITIATIVES",
  projects: [
    {
      image: "",
      projectName: "Power BI Sales Dashboard",
      projectDesc: "Built dynamic sales dashboards with DAX, slicers, and drill-through reports using a sample dataset.",
      footerLink: [{ name: "View Repo", url: "https://github.com/yiamxiong/sales-dashboard" }]
    },
    {
      image: "",
      projectName: "Customer Churn Analysis",
      projectDesc: "Used Python, pandas, and scikit-learn to predict customer churn from telecom data.",
      footerLink: [{ name: "Coming Soon", url: "#" }]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Professional certifications demonstrating industry readiness",
  achievementsCards: [
    {
      title: "CompTIA A+",
      subtitle: "Proficient in hardware, networking, troubleshooting, and basic cybersecurity.",
      image: "",
      imageAlt: "CompTIA A+",
      footerLink: []
    },
    {
      title: "CompTIA Network+",
      subtitle: "Skilled in networking protocols, configurations, and network troubleshooting.",
      image: "",
      imageAlt: "CompTIA Network+",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blog",
  subtitle: "Coming soon: insights on data and IT from my journey.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "Knowledge is best when shared",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎤"),
  subtitle: "Maybe one day!",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "I'm open to opportunities in Data Analytics and IT!",
  number: "715-864-1943",
  email_address: "yiamxiong@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
