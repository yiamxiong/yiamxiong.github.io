/* Custom Portfolio for Yia Moua Xiong */
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import APlusCert from "./assets/images/A+.png";
import NPlusCert from "./assets/images/N+.png";


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
    "Systems/Network Technician pivoting into Data Analytics. Experienced in IT systems and support with a strong foundation in troubleshooting, networking, and infrastructure. Currently gaining hands-on expertise in Power BI, Python, and SQL for data storytelling and decision-making."
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
  subTitle: "SYSTEMS/NETWORK PRO TURNED DATA ANALYST",
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
    { skillName: "Entra ID", fontAwesomeClassname: "fas fa-user-shield" },
    { skillName: "SharePoint", fontAwesomeClassname: "fas fa-share-alt" }
  ],
  display: true
  
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Wisconsin–Stout",
      logo: require("./assets/images/uwStoutLogo.png"),
      subHeader: "Bachelor of Science – Business Information Technology",
      duration: "Expected Spring 2027",
      desc: "Building advanced skills in business technology, information systems, project management, and organizational operations.",
      descBullets: [
        "Expanding technical and leadership skills through business and information technology coursework",
        "Applying technology solutions to improve processes, decision-making, and organizational performance"
      ]
    },
    {
      schoolName: "Chippewa Valley Technical College",
      logo: require("./assets/images/cvtcLogo.png"),
      subHeader: "Associate of Applied Science – IT Data Analyst",
      duration: "Graduated 2025",
      desc: "Completed a second degree in data analytics, building on prior IT networking and systems experience.",
      descBullets: [
        "Completed hands-on coursework in Power BI, SQL, Python, and data storytelling",
        "Studied machine learning, data privacy, business intelligence, and data visualization"
      ]
    },
    {
      schoolName: "Chippewa Valley Technical College",
      logo: require("./assets/images/cvtcLogo.png"),
      subHeader: "Associate of Applied Science – IT Network Specialist",
      duration: "Graduated 2011",
      desc: "Focused on infrastructure, systems troubleshooting, and server and network administration.",
      descBullets: [
        "Built a strong foundation in Active Directory, DHCP, DNS, Windows Server, and VMware",
        "Prepared for CompTIA certifications and real-world network support roles"
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
      companylogo: require("./assets/images/chippewacountyLogo.png"),
      date: "Dec 2022 – Present",
      desc: "Create and manage SharePoint environments, troubleshoot Entra ID and Avatar EHR, and develop user training materials. Provide broad technical support across departments."
    },
    {
      role: "IT Consultant",
      company: "Grow Green Garden Supplies",
      companylogo: require("./assets/images/gggsLogo.png"),
      date: "Mar 2021 – Dec 2022",
      desc: "Maintained POS systems and backups, managed network devices, and supported day-to-day IT operations including inventory systems."
    },
    {
      role: "IT Systems Technician",
      company: "Eau Claire Area School District",
      companylogo: require("./assets/images/ecasdLogo.jpg"),
      date: "Aug 2019 – Mar 2021",
      desc: "Monitored district servers and backup processes, supported endpoint management, software patching, and provided Tier 2 technical support."
    },
    {
      role: "IT Field Technician",
      company: "Eau Claire Area School District",
      companylogo: require("./assets/images/ecasdLogo.jpg"),
      date: "Oct 2017 – Aug 2019",
      desc: "Configured devices, repaired AV and tech components, supported staff and students with day-to-day IT needs."
    },
    {
      role: "Technical Services Consultant IV",
      companylogo: require("./assets/images/idexxLogo.jpg"),
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
      projectName: "Power BI Dashboard",
      projectDesc: "Built dynamic sales dashboards with DAX, slicers, and drill-through reports using a sample dataset.",
      footerLink: [{ name: "View Repo", url: "https://github.com/yiamxiong/powerbi-dashboards" }]
    },
    {
      image: "",
      projectName: "Machine Learning Analysis",
      projectDesc: "Used Python, pandas, and Jupyter Notebook to predict data.",
      footerLink: [{ name: "View Repo", url: "https://github.com/yiamxiong/MachineLearning" }]
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
      image: APlusCert,
      imageAlt: "CompTIA A+",
      footerLink: []
    },
    {
      title: "CompTIA Network+",
      subtitle: "Skilled in networking protocols, configurations, and network troubleshooting.",
      image: NPlusCert,
      imageAlt: "CompTIA Network+",
      footerLink: []
    }
  ],
  display: true
};

const dataPortfolioSection = {
  title: "Academic Portfolio 📘",
  subtitle:
    "Explore my coursework across Python, SQL, Excel, Power BI, and more. This portfolio showcases the hands-on projects I completed during my transition into data analytics.",
  linkText: "View Full Academic Portfolio →",
  linkUrl: "/data-analyst-academics",
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
  number: "",
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
  resumeSection,
  dataPortfolioSection
};
