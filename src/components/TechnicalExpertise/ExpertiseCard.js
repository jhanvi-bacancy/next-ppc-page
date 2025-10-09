import React from "react";
import { ParagraphElement } from "../ui";

const ExpertiseCard = ({ title, items }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-light rounded-lg overflow-hidden shadow-sm">
      {/* Orange Header */}
      <div className="w-full sm:w-80 bg-primary text-white p-4 sm:p-6 flex items-center justify-center sm:justify-start">
        <ParagraphElement
          color="white"
          className="font-semibold text-center sm:text-left"
          noMargin
        >
          {title}
        </ParagraphElement>
      </div>

      {/* White Content Area */}
      <div className="flex-1 bg-white p-4 sm:p-6 flex items-center">
        <div className="flex items-center space-x-1 sm:space-x-2 flex-wrap justify-center sm:justify-start">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index < items.length - 1 ? (
                <ParagraphElement
                  className="font-normal px-2 sm:px-4 border-r border-r-secondary !mb-0"
                  color="secondary"
                  noMargin
                >
                  {item}
                </ParagraphElement>
              ) : (
                <ParagraphElement
                  className="font-normal px-4 border-none !mb-0"
                  color="secondary"
                  noMargin
                >
                  {item}
                </ParagraphElement>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
