import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { HeadingH2, ParagraphElement } from "../ui/typography";

export const ContactBanner = ({ data = {}, className }) => {
  const { title, ratings, iso, salesManager, starImage } = data;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      // Here you would typically make an API call to submit the form
      // For now, we'll simulate an API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Clear form after successful submission
      reset();

      // You might want to show a success message or redirect
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <section className={cn("", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left side - Form */}
          <div className="md:col-span-6 lg:col-span-7 bg-light-orange rounded-lg rounded-b-none md:rounded-r-none md:rounded-l-lg p-6 lg:p-12 shadow-lg">
            <HeadingH2 className="!text-h2 font-medium mb-6 pr-4 lg:mb-8 text-dark">
              {title}
            </HeadingH2>
            <div className="w-full lg:max-w-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                  {...register("fullName", {
                    minLength: {
                      value: 2,
                      message: "Full Name must be at least 2 characters",
                    },
                  })}
                  type="text"
                  placeholder="Full Name"
                  error={errors.fullName?.message}
                  className="w-full"
                />
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Your Business Email ID"
                  error={errors.email?.message}
                  className="w-full"
                />
                <Input
                  {...register("phone", {
                    pattern: {
                      value: /^\+?[\d\s-]{10,}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  type="tel"
                  placeholder="Phone Number"
                  error={errors.phone?.message}
                  className="w-full"
                />
                <TextArea
                  {...register("message", {
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  placeholder="Message"
                  error={errors.message?.message}
                  className="w-full min-h-[100px] sm:min-h-[120px]"
                  rows={4}
                />
                <Button
                  type="submit"
                  variant="filled"
                  size="md"
                  loading={isSubmitting}
                  className="font-normal px-6"
                  uppercase
                >
                  INQUIRE NOW
                </Button>
              </form>
            </div>
          </div>

          {/* Right side - Ratings and Info */}
          <div className="md:col-span-6 lg:col-span-5 bg-primary rounded-lg rounded-t-none md:rounded-l-none md:rounded-r-lg p-8 lg:p-10 text-white">
            <div className="flex flex-col px-16 py-4">
              {/* Ratings and ISO Section */}
              <div className="flex-grow">
                {/* Clutch Rating */}
                {ratings.map((rating, index) => (
                  <div
                    key={index}
                    className="first:pt-0 py-8 border-b border-dotted border-white"
                  >
                    <Image
                      src={rating.logo}
                      alt={rating.platform}
                      width={140}
                      height={40}
                      className="h-10 w-auto object-contain mb-4"
                    />
                    <div className="flex items-center">
                      <Image
                        src={starImage}
                        alt="Star"
                        width={24}
                        height={24}
                        className="w-8 h-8 mr-2 object-contain"
                      />
                      <ParagraphElement className="text-h4 font-medium !text-white">
                        {rating.rating}
                      </ParagraphElement>
                    </div>
                  </div>
                ))}

                {/* ISO Certification */}
                {iso && (
                  <div className="flex justify-start gap-x-4 items-center py-8 border-b border-dotted border-white">
                    <Image
                      src={iso.logo}
                      alt="ISO"
                      width={140}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                    <ParagraphElement className="text-h5 font-medium !text-white">
                      {iso.text}
                    </ParagraphElement>
                  </div>
                )}
              </div>
            </div>
            {/* Sales Manager Info */}
            {salesManager && (
              <div className="flex items-start gap-5 !mt-0 px-10 py-12 rounded-lg">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={salesManager.avatar}
                    alt={salesManager.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>

                <ParagraphElement className="text-sm !text-white leading-relaxed">
                  {salesManager.message}
                </ParagraphElement>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
