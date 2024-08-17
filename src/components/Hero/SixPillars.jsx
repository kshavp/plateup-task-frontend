import React, { useState } from "react";
import Badge from "./Badge";
import Arrow from "./Arrow";
import CardSection from "./CardSection";

const SixPillars = () => {
  const [activeBadge, setActiveBadge] = useState(null);
  const badgeLabels = [
    "Nutrition",
    "Physical Activity",
    "Restorative Sleep",
    "Stress Management",
    "Social Connection",
    "Substance Abuse",
  ];
  const handleBadgeClick = (badge) => {
    setActiveBadge(badge);
  };
  return (
    <div className="section-2">
      <p className="para-1">HOW IT WORKS</p>
      <div className="lifestyle">
      <p className="para-2">
        Lifestyle as medicine : <span className="">The Six Pillars</span>
      </p>
      <Arrow />
      </div>
      <div className="badge-section">
        {badgeLabels.map((badge, index) => (
          <Badge
            key={index}
            text={badge}
            isActive={activeBadge === badge}
            onClick={() => {
                handleBadgeClick(badge);
            }}
          />
        ))}
      </div>
      <CardSection />
    </div>
  );
};

export default SixPillars;
