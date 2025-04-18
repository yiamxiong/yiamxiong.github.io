import React from "react";
import "./Academics.css";
import AcademicsHeader from "./AcademicsHeader";

const academicTracks = {
  programming: [
    {
      title: "Intro to Computers & Programming",
      overview:
        "Introduced computer fundamentals, software development, file systems, cybersecurity basics, and beginner logic using flowcharts and pseudocode.",
      highlights: [
        "Classified programming languages and software types",
        "Practiced problem solving using flowcharts and pseudocode",
        "Explored basic cybersecurity threats and protections",
      ],
    },
    {
      title: "Programming Fundamentals",
      overview:
        "Focused on programming logic, structure, and problem-solving using pseudocode and JavaScript.",
      highlights: [
        "Created flowcharts and structured logic using loops and conditions",
        "Wrote JavaScript code and debugged using console tools",
        "Built logic-based mini programs for user input and output",
      ],
    },
    {
      title: "Python Data Programming",
      overview:
        "Learned Python basics, data structures, file I/O, OOP, and SQLite for backend programming.",
      highlights: [
        "Wrote Python functions and used lists, loops, and conditionals",
        "Interacted with SQLite to query and manage data",
        "Analyzed data using Pandas and produced simple reports",
      ],
    },
    {
      title: "Machine Learning",
      overview:
        "Introduced ML types, Python libraries, and interpreting model predictions.",
      highlights: [
        "Explored supervised/unsupervised/reinforcement learning",
        "Practiced with scikit-learn models",
        "Applied Python libraries to real datasets",
      ],
    },
  ],
  data: [
    {
      title: "Database 1",
      overview:
        "Learned relational database theory, ERD modeling, SQL basics, and normalization.",
      highlights: [
        "Designed tables using primary/foreign keys",
        "Created and queried databases using SQL SELECT and JOIN",
        "Used subqueries and GROUP BY for data analysis",
      ],
    },
    {
      title: "Database 2",
      overview:
        "Expanded on SQL and DBMS management, including complex queries and ERD modeling.",
      highlights: [
        "Created complex joins, aggregate queries, and subqueries",
        "Used ERDs to model data relationships and normalize to 3NF",
        "Practiced database performance testing and optimization",
      ],
    },
    {
      title: "Introductory ETL",
      overview:
        "Learned data integration, ETL pipelines, transformation, and data validation.",
      highlights: [
        "Built ETL pipelines to clean and merge structured/unstructured data",
        "Explored ELT vs ETL strategies",
        "Prepared clean data for analytics and BI",
      ],
    },
    {
      title: "Data Security & Privacy",
      overview:
        "Explored data protection, compliance (GDPR/HIPAA), SQL security, and breach response.",
      highlights: [
        "Configured SQL Server permissions and encrypted fields",
        "Learned privacy standards like GDPR, HIPAA, CCPA",
        "Practiced phishing recognition and risk response",
      ],
    },
  ],
  reporting: [
    {
      title: "BI Data 1 – Paginated Reports",
      overview:
        "Used SQL Server, SSMS, and Power BI Report Builder to create paginated reports.",
      highlights: [
        "Created reports with headers, filters, and drill-through logic",
        "Connected ODBC sources to SQL Server and Access",
        "Designed visualizations and grouped reports by data",
      ],
    },
    {
      title: "BI Data 2 – Interactive Reports",
      overview:
        "Designed interactive dashboards using Power BI Desktop and Power Query.",
      highlights: [
        "Created KPI measures and custom visuals",
        "Used slicers, drill-through, bookmarks, and row-level security",
        "Deployed reports to Power BI Service",
      ],
    },
    {
      title: "BI Data 3 – Visualization",
      overview: "Capstone visual storytelling project using layered Power BI visuals.",
      highlights: ["Designed interactive business dashboards", "Focused on story-driven visuals"],
    },
  ],
  business: [
    {
      title: "Microsoft Excel",
      overview:
        "Developed business spreadsheets, charts, pivot tables, and dashboard-style summaries.",
      highlights: [
        "Used formulas, What-If Analysis, INDEX/MATCH",
        "Created visualizations using charts and conditional formatting",
      ],
    },
    {
      title: "Systems Analysis & Design",
      overview:
        "Followed the SDLC to define requirements, create ERDs, DFDs, and propose IT solutions.",
      highlights: [
        "Used Agile and structured methodologies",
        "Planned system requirements using diagrams and stakeholder interviews",
      ],
    },
    {
      title: "Business Analytics",
      overview:
        "Explored descriptive, predictive, and prescriptive analytics using Excel and open data.",
      highlights: [
        "Used INDEX/MATCH, What-If Analysis, and dashboards",
        "Identified KPIs and data-driven decision points",
      ],
    },
    {
      title: "Project Management",
      overview:
        "Practiced all PM phases from planning to WBS, charter, risk, and post-mortem docs.",
      highlights: [
        "Built project charters, scope docs, and risk plans",
        "Used PM tools and WBS methods to plan and report progress",
      ],
    },
  ],
};

const DataAnalystAcademics = () => {
  return (
    <>
      <AcademicsHeader />
      <div className="academics-wrapper" id="academics">
        <div className="academics-hero">
          <h1 className="academics-title">Data Analyst Academic Portfolio</h1>
          <p className="academics-subtitle">
            A track-based breakdown of my coursework, showcasing skills in programming,
            data analysis, business intelligence, and reporting.
          </p>
        </div>

        {Object.entries(academicTracks).map(([track, courses]) => (
          <div key={track} id={track} className="track-section">
            <div className="track-header">
              <h2 className="track-title">
                {track.charAt(0).toUpperCase() + track.slice(1)} Track
              </h2>
            </div>

            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <h3>{course.title}</h3>
                <p><strong>Overview:</strong> {course.overview}</p>
                <p><strong>Key Learning:</strong></p>
                <ul>
                  {course.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default DataAnalystAcademics;