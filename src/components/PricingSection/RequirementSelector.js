import React, { useState } from "react";
import { HeadingH2, ParagraphElement, Radio, Button } from "../ui";
import { cn } from "../../lib/utils";

const RequirementSelector = ({ className, onSubmit, options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(selectedOption);
    }
  };

  return (
    <div className={cn("w-full py-sm", className)}>
      <div className="text-center mb-sm">
        <HeadingH2>{options.title}</HeadingH2>
        <ParagraphElement color="secondary">
          {options.subtitle}
        </ParagraphElement>
      </div>

      <form onSubmit={handleSubmit} className="lg:px-20 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-sm">
          {options.optionsList.map((option) => (
            <div
              key={option.value}
              className={cn(
                "px-4 py-3 rounded-lg border transition-all duration-200 border-primary bg-primary-light"
              )}
            >
              <Radio
                name="requirement"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={(e) => setSelectedOption(e.target.value)}
                label={option.label}
                variant="primary"
                className="w-full"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="font-normal w-full sm:w-auto"
            fullWidth
          >
            {options.buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequirementSelector;
