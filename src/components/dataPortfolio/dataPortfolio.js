import React, { useContext } from "react";
import "./dataPortfolio.css";
import { Fade } from "react-reveal";
import { dataPortfolioSection } from "../../portfolio";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { StyleContext } from "../../contexts/StyleContext";

export default function DataPortfolio() {
    const { isDark } = useContext(StyleContext);
  
    if (!dataPortfolioSection.display) return null;
  
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="dataPortfolio">
          <div className="data-portfolio-section">
            <hr className="section-divider" />
            <div className="academic-main-div">
              <div className="data-portfolio-header">
                <h1
                  className={
                    isDark
                      ? "dark-mode heading academic-heading"
                      : "heading academic-heading"
                  }
                >
                  {dataPortfolioSection.title}
                </h1>
                <p
                  className={
                    isDark
                      ? "dark-mode subTitle academic-subtitle"
                      : "subTitle academic-subtitle"
                  }
                >
                  {dataPortfolioSection.subtitle}
                </p>
              </div>
  
              <div className="data-portfolio-button">
                <Link to={dataPortfolioSection.linkUrl}>
                  <Button text={dataPortfolioSection.linkText} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  