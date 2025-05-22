import React from "react";
import "./Academics.css";
import AcademicsHeader from "./AcademicsHeader";
import ArtifactDisplay from "../../components/artifact/ArtifactDisplay";

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
      artifact: {
        type: "html",
        title: "HTML5 Canvas Animation",
        codePath: "/artifacts/yxiong5_turtle.html",
        iframeSrc: "/artifacts/yxiong5_turtle.html",
        reflection: "This animation was my first hands-on practice using HTML canvas and JavaScript loops to create a visual output. It helped reinforce logic, graphics, and how iteration shapes behavior over time."
      }
      
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
      artifact: {
        type: "javascript",
        title: "Fishing Trip Calculator in JavaScript",
        codePath: "/artifacts/fish.js",
        iframeSrc: "/artifacts/fish_preview.html",
        reflection: `This project helped me learn how to collect and process user input, use arrays and loops, and output meaningful data. I realized how important error handling and input validation are for user-friendly applications. If I revisited this, I would use a more dynamic interface instead of prompt() and explore better ways to display data.`
      }
    }
    ,
    {
      title: "Python Data Programming",
      overview:
        "Learned Python basics, data structures, file I/O, OOP, and SQLite for backend programming.",
      highlights: [
        "Wrote Python functions and used lists, loops, and conditionals",
        "Interacted with SQLite to query and manage data",
        "Analyzed data using Pandas and produced simple reports"
      ],
      artifact: {
        type: "python",
        title: "Python CLI Program with SQLite",
        language: "python",
        codeTabs: [
          { label: "ui.py", path: "/artifacts/ui.py" },
          { label: "db.py", path: "/artifacts/db.py" },
          { label: "business.py", path: "/artifacts/business.py" }
        ],
        iframeSrc: "/artifacts/ui_preview.html",
        reflection: `This multi-file Python CLI project taught me how to modularize code using functions and classes across multiple files, interact with a SQLite database using Python, and design command-line interfaces. The use of clear separation between business logic, user interface, and database layers helped reinforce my understanding of real-world software design patterns.`
      }
      
      
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
      artifact: {
        type: "python",
        title: "K-Nearest Neighbors (kNN) Model with Scikit-learn",
        codePath: "/artifacts/kNN.py",
        iframeSrc: "/artifacts/kNN_preview.html",
        reflection: `In this notebook, I implemented the K-Nearest Neighbors (kNN) algorithm to classify data. I learned how to preprocess features, split datasets, train a model, and evaluate its accuracy. The final results showed how kNN predicts labels based on nearest points in feature space—a concept that’s intuitive yet powerful.\n
      If you're not familiar with machine learning, think of kNN like this:
      Imagine you're trying to decide what movie to watch. You look at the 3 friends whose tastes are most like yours and go with what the majority of them liked. That’s basically how kNN makes predictions — by looking at its 'nearest neighbors' and following the crowd.\n
      This project helped solidify my understanding of supervised learning, and showed me how data preprocessing and good evaluation metrics are just as important as the algorithm itself.`
      }
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
      artifact: {
        type: "sql",
        title: "Complex Multi-Join Queries with Aggregates",
        codePath: "/artifacts/database1.sql",
        iframeSrc: "/artifacts/database1_preview.html",
        reflection: `This SQL project deepened my understanding of complex joins, subqueries, grouping, and filtering logic. I practiced writing efficient queries that return meaningful business insights across multiple related tables. Through this, I became more confident in SQL aggregation, nested selects, and transforming data for reporting. For instance, Query 5 calculates flight durations and averages by year, giving insight into operational trends.

      This experience prepared me to write clear and performance-aware queries in real-world business environments.`

      }
    },    
    {
      title: "Database 2",
      overview:
        "Expanded on SQL and DBMS management, including complex queries and ERD modeling.",
      highlights: [
        "Created complex joins, aggregate queries, and subqueries",
        "Used ERDs to model data relationships and normalize to 3NF",
        "Practiced database performance testing and optimization"
      ],
      artifact: {
        type: "sql",
        title: "MySQL IT Help Desk System",
        codePath: "/artifacts/ithelpdesk_schema.sql",
        iframeSrc: "/artifacts/ithelpdesk_preview.html",
        reflection: `This artifact demonstrates my ability to model and manage a normalized relational database with real-world business logic. I implemented stored procedures, foreign key constraints, and techniques to simulate an IT help desk system.\n
        One of the biggest takeaways was understanding how to write maintainable SQL for both schema and data. I also got hands-on practice designing for future scalability.`
      }
    },    
    {
      title: "Introductory ETL",
      overview:
        "Learned data integration, ETL pipelines, transformation, and data validation.",
      highlights: [
        "Built ETL pipelines to clean and merge structured/unstructured data",
        "Explored ELT vs ETL strategies",
        "Prepared clean data for analytics and BI"
      ],
      artifact: {
        type: "text",
        title: "ETL Pipeline Design with Alteryx",
        codePath: "/artifacts/etl_steps.txt",  // your uploaded text file
        iframeSrc: "/artifacts/etl_preview.html", // create this as a summary preview
        reflection: `This ETL project helped me understand how to design clean, reusable workflows to transform raw data into analysis-ready output. I explored joins, filters, formulas, and output nodes to control flow and shape data. The process emphasized error-checking and data validation at each step.`
      }
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
      artifact: {
        type: "image",
        title: "Table-Level Permissions in SQL Server",
        codePath: "/artifacts/PD_Table_Permissions.png",
        iframeSrc: "/artifacts/data_privacy_preview.html",
        reflection: `This screenshot shows table-level permissions configured in SQL Server Management Studio (SSMS), where specific users were granted specific access to sensitive data. This exercise gave me hands-on practice with core principles of role-based access control, one of the key expectations in data privacy laws like GDPR and HIPAA. Understanding how to apply and verify access restrictions at the table level helps ensure data confidentiality and minimizes risks from unauthorized access.
      
      I also researched and presented comparisons between GDPR, HIPAA, and CCPA — strengthening both my compliance awareness and communication skills.`
      }
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
      artifact: {
        type: "text",
        title: "Sales by Territory Paginated Report",
        codePath: "/artifacts/salesbyterritory_report.txt",
        iframeSrc: "/artifacts/salesbyterritory_preview.html",
        reflection: `This paginated reporting project helped me develop real-world reporting skills by structuring data into clear, grouped, and exportable formats. I learned how to design reports that balance on-screen readability with printer-friendly layouts. Applying dynamic grouping, drill-down toggles, and parameterized filtering prepared me for building flexible reports for business analysis. This experience reinforced my ability to transform raw SQL Server data into professional reports ready for leadership review.`

      }      
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
      artifact: {
        type: "image",
        title: "Power BI Interactive Reports: Sales & Employee Analysis",
        codePath: "/artifacts/sales_dashboard_preview.png",
        iframeSrc: "/artifacts/employee_dept_preview.html",
        reflection: `
                      This interactive reporting project allowed me to practice building dynamic dashboards for two core business domains: Sales and HR. Using slicers, bookmarks, and drill-throughs, I created two separate reports tailored to the audience — a sales analyst and an HR manager.

                      The visual styling, layout planning, and interactivity taught me how to balance storytelling with technical detail. These dashboards were designed in Power BI Desktop and later published to Power BI Service.

                      <b>Download PBIX Files</b><br>
                      <a href="https://github.com/yiamxiong/powerbi-dashboards/raw/refs/heads/main/EmployeeReport.pbix" target="_blank">Employee Report</a><br>
                      <a href="https://github.com/yiamxiong/powerbi-dashboards/raw/refs/heads/main/SalesReport.pbix" target="_blank">Sales Report</a>`
      }
    },
    {
      title: "BI Data 3 – Visualization",
      overview: "Capstone visual storytelling project using layered Power BI visuals.",
      highlights: [
        "Designed multi-layer dashboards that highlight trends and outliers",
        "Balanced visual aesthetics with analytical depth",
        "Practiced layout composition, iconography, and accessible labeling"
      ],
      artifact: {
        type: "image",
        title: "Airline Data Storytelling Dashboard",
        codePath: "/artifacts/visualization_1.png", // left panel
        iframeSrc: "/artifacts/visualization_2.html", // right panel HTML will embed image
        reflection: `This capstone dashboard project challenged me to go beyond visuals and think critically about how data tells a story. I focused on designing intuitive layouts that highlight trends, comparisons, and outliers across passenger demographics, flight status, and global travel patterns.

        Each visual element was carefully chosen to balance clarity and insight — from donut charts that segment airport regions to trend lines that reveal monthly fluctuations. I used slicers, drill-through filters, and performance indicators to create a user-driven experience, simulating real-world use cases for stakeholders in HR and airline operations.
        
        This experience reinforced not only my technical skills in Power BI but also my ability to communicate complex data in a way that informs decisions and sparks curiosity.`
        
      }
    }
    
  ],
  business: [
    {
      title: "Microsoft Excel",
      overview:
        "Developed business spreadsheets, charts, pivot tables, and dashboard-style summaries.",
      highlights: [
        "Used formulas like IF, VLOOKUP, MIN/MAX, and MEDIAN",
        "Created visualizations including trend lines and summary tables",
        "Organized multi-sheet workbooks for scenario-based analysis"
      ],
      artifact: {
        type: "image",
        title: "Excel Data Trends: Ethereum Price Analysis",
        codePath: "/artifacts/excel_artifact.png",
        iframeSrc: "/artifacts/excel_artifact_preview.html",
        reflection: `This project showcases my ability to analyze real-world time-series data using Excel. I applied multiple built-in functions to generate key metrics (Min, Median, Max, Average), then created a summary dashboard combining visual charts and data tables.
    
        This artifact reflects my skill in transforming raw data into clean, interactive, and visually compelling outputs — the kind of work expected in analyst roles. If revisited, I would further automate the summary calculations using named ranges and explore dynamic charts with slicers or form controls for interactivity.
    
        The ETH dataset provided a strong use case to demonstrate financial trend analysis and business reporting techniques in a familiar tool used across nearly every organization.`
      }
    }
    ,
    {
      title: "Systems Analysis & Design",
      overview:
        "Followed the SDLC to define requirements, create ERDs, DFDs, and propose IT solutions.",
      highlights: [
        "Used Agile and structured methodologies",
        "Planned system requirements using diagrams and stakeholder interviews",
      ],
      artifact: {
        type: "image",
        title: "From ERD to 3NF: A Systems Analysis Process",
        codeTabs: [
          { label: "ERD Diagram", path: "/artifacts/ERD.drawio.png" },
          { label: "3NF Schema", path: "/artifacts/3NF.png" },
          { label: "Sample Data", path: "/artifacts/Customer.png" }
        ],
        iframeSrc: "/artifacts/sad_preview.html",
        reflection: `This multi-part artifact demonstrates my understanding of how to translate business requirements into normalized data models.
      
        The first tab presents the original Entity Relationship Diagram (ERD), where I modeled relationships between customers, orders, employees, and parts. It shows cardinality and attributes, serving as the foundation for database design.
      
        The second tab transitions that ERD into 3rd Normal Form (3NF), removing redundancy and ensuring referential integrity — key to scalable and efficient systems. This transformation helped me apply normalization rules in a structured way.
      
        The final tab is a snapshot of sample data loaded into a relational table, connecting theory to a working implementation.
      
        By walking through the SDLC process — from diagrams to schema to data — I learned how thoughtful system design directly impacts query performance, data quality, and business usability. This experience also sharpened my communication skills, as I had to explain my model choices clearly during review sessions.`
      }
    },    
    {
      title: "Business Analytics",
      overview:
        "Explored descriptive, predictive, and prescriptive analytics using Excel and open data.",
      highlights: [
        "Used INDEX/MATCH, What-If Analysis, and dashboards",
        "Identified KPIs and data-driven decision points"
      ],
      artifact: {
        type: "image",
        title: "Full-Cycle Analysis in Excel: Descriptive, Predictive, Prescriptive",
        codeTabs: [
          { label: "Descriptive", path: "/artifacts/BA_Descriptive_Analysis.png" },
          { label: "Predictive", path: "/artifacts/BA_Predictive_Analysis.png" },
          { label: "Prescriptive", path: "/artifacts/BA_Prescriptive_Analysis.png" }
        ],
        iframeSrc: "/artifacts/ba_preview.html",
        reflection: `This three-part Excel artifact demonstrates how I applied full-cycle business analytics — descriptive, predictive, and prescriptive — to real data around programming language interest over time.
    
        <strong>Descriptive Analysis:</strong> I began with trendlines and summary stats (MIN, MAX, AVERAGE), using COUNTIF and INDEX/MATCH to allow users to explore interest levels by date. This provided a foundational understanding of how Python, Java, and C++ have evolved in popularity.
    
        <strong>Predictive Analysis:</strong> I calculated percent variance over time and built forecasts using future dates, charting each language's potential trajectory. This sharpened my ability to visualize seasonal shifts and make realistic forward-looking projections using just spreadsheet tools.
    
        <strong>Prescriptive Analysis:</strong> Finally, I applied goal-seeking analysis to determine what future monthly interest would be required to reach target averages. This practical “what-if” technique simulated data-driven decision-making for performance improvement.
    
        This project showcases not only Excel mastery — from data cleaning to complex formulas — but also my ability to move beyond numbers and tell a story with purpose. I approached this data like a consultant would: diagnose, forecast, and advise — a skillset I’m excited to bring to any business intelligence or analyst role.
    
        <strong>📁 Download the full Excel workbook:</strong>
        <a href="/artifacts/Business_Analytics.xlsx" download target="_blank">Business_Analytics.xlsx</a>`
        , 
        isEnlargableImages: true
      }
    },    
    {
      title: "Project Management",
      overview:
        "Followed PMI principles to manage a mock construction project from initiation through closing using MS Project and Excel.",
      highlights: [
        "Created Gantt charts, risk register, and cost tracking sheets",
        "Applied Work Breakdown Structures and network diagrams to plan deliverables"
      ],
      artifact: {
        type: "image",
        title: "Phases of Project Management with Deliverables",
        codeTabs: [
          { label: "Initiation", path: "/artifacts/pm_initiation.png" },
          { label: "Planning", path: "/artifacts/pm_planning.png" },
          { label: "Execution", path: "/artifacts/pm_execution.png" },
          { label: "Risk Register", path: "/artifacts/pm_risk_register.png" },
          { label: "Cost Performance", path: "/artifacts/pm_cost.png" }
        ],
        reflection: `
          This artifact captures my full project lifecycle documentation, built from scratch during my Project Management course.
          
          <strong>Initiation:</strong> I defined the project scope, mission, and key objectives for a sustainable housing development initiative, emphasizing cost-effectiveness and community impact.
    
          <strong>Planning:</strong> I built a Requirements Traceability Matrix and established change control procedures while mapping stakeholders and risks. This helped align all tasks to strategic goals.
    
          <strong>Execution:</strong> I visualized task dependencies using a network diagram and Gantt charts to maintain clarity on critical paths and timelines.
    
          <strong>Risk Register:</strong> I developed a risk matrix assessing probability, impact, and mitigation strategies — simulating how real-world managers prepare for project volatility.
    
          <strong>Cost Performance:</strong> I tracked resource costs, task overruns, and variances through custom Excel dashboards. These visualizations gave me insight into budget performance at a glance.
    
          <strong>Takeaway:</strong> This experience gave me hands-on exposure to scope planning, resource allocation, risk mitigation, and project cost tracking. It strengthened my ability to communicate project status clearly, an essential skill in both IT and business environments.
        `,
        iframeSrc: "/artifacts/project_preview.html"
      }
    }
    ,    
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
                {course.artifact && (
                  <ArtifactDisplay
                  language={course.artifact.type}
                  codePath={course.artifact.codePath}
                  codeTabs={course.artifact.codeTabs}
                  iframeSrc={course.artifact.iframeSrc}
                  title={course.artifact.title}
                  reflection={course.artifact.reflection}
                />                
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default DataAnalystAcademics;