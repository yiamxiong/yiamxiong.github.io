import React, { useEffect, useState } from "react";
import "./ArtifactDisplay.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ArtifactDisplay({
  title,
  codePath,
  codeTabs,
  iframeSrc,
  language = "html",
  reflection,
  isEnlargableImages = false
}) {
  const [codeMap, setCodeMap] = useState({});
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const fetchCode = async () => {
      if (codeTabs && codeTabs.length > 0) {
        const map = {};
        for (const tab of codeTabs) {
          try {
            const res = await fetch(tab.path);
            const text = await res.text();
            map[tab.label] = text;
          } catch {
            map[tab.label] = "// Error loading code";
          }
        }
        setCodeMap(map);
        setSelectedTab(codeTabs[0].label);
      } else if (codePath) {
        try {
          const res = await fetch(codePath);
          const text = await res.text();
          setCodeMap({ default: text });
          setSelectedTab("default");
        } catch {
          setCodeMap({ default: "// Error loading code" });
          setSelectedTab("default");
        }
      }
    };

    fetchCode();
  }, [codePath, codeTabs]);

  const renderTabs = () => (
    <div className="artifact-tabs">
      {codeTabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setSelectedTab(tab.label)}
          className={selectedTab === tab.label ? "active" : ""}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );

  const renderImage = () => {
    const imagePath = codeTabs.find((t) => t.label === selectedTab)?.path;
    return (
      <div className="artifact-image-wrapper fade-in">
        {isEnlargableImages ? (
          <a href={imagePath} target="_blank" rel="noopener noreferrer">
            <img src={imagePath} alt={selectedTab} className="artifact-image" />
          </a>
        ) : (
          <img src={imagePath} alt={selectedTab} className="artifact-image" />
        )}
      </div>
    );
  };

  return (
    <div className="artifact-container">
      <h4 className="artifact-title">{title}</h4>

      {title === "K-Nearest Neighbors (kNN) Model with Scikit-learn" && (
        <div className="artifact-tags">
          <span className="tag">Python</span>
          <span className="tag">kNN</span>
          <span className="tag">scikit-learn</span>
        </div>
      )}

      <div className="artifact-lang">Language: {language.toUpperCase()}</div>

      <div className="artifact-content">
        <div className="artifact-code">
          {language === "image" && codeTabs ? (
            <>
              <div className="artifact-tabs-row">
                {renderTabs()}
                {isEnlargableImages && (
                  <span className="artifact-hint">
                    🔍 Click image to view full size
                  </span>
                )}
              </div>
              {renderImage()}
            </>
          ) : language === "image" ? (
            <div className="artifact-image-wrapper fade-in">
              <img src={codePath} alt={title} className="artifact-image" />
            </div>
          ) : codeTabs && codeTabs.length > 0 ? (
            <>
              {renderTabs()}
              <SyntaxHighlighter
                language={language}
                style={oneDark}
                wrapLines={true}
              >
                {codeMap[selectedTab] || "// Loading..."}
              </SyntaxHighlighter>
            </>
          ) : (
            <SyntaxHighlighter
              language={language}
              style={oneDark}
              wrapLines={true}
            >
              {codeMap[selectedTab] || "// Loading..."}
            </SyntaxHighlighter>
          )}
        </div>

        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            title={title}
            className="artifact-preview"
            frameBorder="0"
            scrolling="no"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <div className="artifact-placeholder">Live preview not available</div>
        )}
      </div>

      {reflection && (
        <div
          className="artifact-reflection"
          dangerouslySetInnerHTML={{ __html: reflection }}
        />
      )}
    </div>
  );
}
