import React from "react";
import { HeadingH5 } from "../ui";

const ExpertiseCard = ({ title, items }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-light rounded-lg overflow-hidden shadow-sm">
      {/* Orange Header */}
      <div className="w-full sm:w-64 bg-primary text-white p-4 sm:p-6 flex items-center justify-center sm:justify-start">
        <HeadingH5 className="font-semibold !text-white !text-sm !mb-0 text-center sm:text-left">
          {title}
        </HeadingH5>
      </div>

      {/* White Content Area */}
      <div className="flex-1 bg-white p-4 sm:p-6 flex items-center">
        <div className="flex items-center space-x-1 sm:space-x-2 flex-wrap justify-center sm:justify-start">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index < items.length - 1 ? (
                <span className="text-dark text-xs sm:text-sm font-normal px-1 sm:px-2 border-r border-r-secondary">
                  {item}
                </span>
              ) : (
                <span className="text-dark text-xs sm:text-sm font-normal px-1 sm:px-2 border-none">
                  {item}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;