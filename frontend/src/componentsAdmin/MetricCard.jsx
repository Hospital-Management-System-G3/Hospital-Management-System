import React from "react";

const MetricCard = ({
  icon,
  title,
  value,
  unit,
  bgColor = "bg-white",
  textColor = "text-gray-800",
}) => (
  <div
    className={`${bgColor} ${textColor} rounded-2xl p-4 flex items-center justify-between shadow-sm`}
  >
    <div>
      <p className="text-sm opacity-70">{title}</p>
      <p className="text-2xl font-bold">
        {value} <span className="text-sm font-normal">{unit}</span>
      </p>
    </div>
    <div className="text-3xl">{icon}</div>
  </div>
);

export default MetricCard;
