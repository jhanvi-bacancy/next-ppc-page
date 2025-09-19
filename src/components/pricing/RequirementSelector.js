import React, { useState } from "react";
import { HeadingH2, ParagraphElement } from "../ui/typography";
import { Radio, Button } from "../ui";
import { cn } from "../../lib/utils";

export function RequirementSelector({ className, onSubmit, options }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(selectedOption);
    }
  };

  return (
    <div className={cn("w-full py-8 md:py-12", className)}>
      <div className="text-center mb-8 md:mb-12">
        <HeadingH2 className="mb-4">{options.title}</HeadingH2>
        <ParagraphElement color="secondary">
          {options.subtitle}
        </ParagraphElement>
      </div>

      <form onSubmit={handleSubmit} className="lg:px-20 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {options.optionsList.map((option) => (
            <div
              key={option.value}
              className={cn(
                "px-4 py-3 rounded-xl border transition-all duration-200 border-primary bg-primary-light"
              )}
            >
              <Radio
                name="requirement"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={(e) => setSelectedOption(e.target.value)}
                label={option.label}
                variant="primary"
                size="md"
                className="w-full"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            variant="filled"
            size="md"
            className="px-8 w-full font-normal sm:w-auto"
          >
            {options.buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
}
