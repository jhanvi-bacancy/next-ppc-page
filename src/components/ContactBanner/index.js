import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Input, TextArea, Button, HeadingH2, ParagraphElement } from "../ui";
import { cn } from "../../lib/utils";
import { getClientIp, getLocationData } from "../../lib/helper";
import { api } from "../../api/apiManager";
import { ENDPOINTS } from "../../api/endpoints";

const ContactBanner = ({ data = {}, className }) => {
  const { title, ratings, iso, salesManager, starImage } = data;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (formData) => {
    try {
      setIsSubmitting(true);
      setSubmitError("");
      setSubmitSuccess(false);

      // Get IP and location data
      const [clientIp, locationData] = await Promise.all([
        getClientIp(),
        getLocationData(),
      ]);

      // Transform form data to match API expectations
      const payload = {
        name: formData.name,
        email: formData.email,
        number: formData.phone,
        description: formData.requirements,
        leadingPage: "https://www.bacancytechnology.com/landing/python-2",
        userVisit: sessionStorage.getItem("landingPage") || "-",
        type: "reactForm",
        ip: clientIp,
        city: locationData.city,
        state: locationData.state,
        country: locationData.country,
        timezone: locationData.timezone,
      };

      const response = await api.post(ENDPOINTS.SF_MAIL_DATA, payload);

      if (response.status === 200) {
        setSubmitSuccess(true);
        reset();
      } else {
        throw new Error("No response from server");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error.response?.data?.message ||
          "Failed to submit form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={cn("", className)} id="contact-form-id">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left side - Form */}
          <div className="md:col-span-6 lg:col-span-7 bg-light-orange rounded-lg rounded-b-none md:rounded-r-none md:rounded-l-lg p-6 lg:p-12 shadow-lg">
            <HeadingH2 className="font-medium pr-4">{title}</HeadingH2>
            <div className="w-full lg:max-w-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-sm">
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

                {submitError && (
                  <div className="text-red-600 text-sm text-center mb-sm">
                    {submitError}
                  </div>
                )}

                {submitSuccess && (
                  <div className="text-green-600 text-sm text-center mb-sm">
                    Form submitted successfully! We&apos;ll get back to you
                    soon.
                  </div>
                )}

                <Button
                  type="submit"
                  loading={isSubmitting}
                  className="font-normal"
                  disabled={isSubmitting}
                  uppercase
                >
                  {isSubmitting ? "Submitting..." : "INQUIRE NOW"}
                </Button>
              </form>
            </div>
          </div>

          {/* Right side - Ratings and Info */}
          <div className="md:col-span-6 lg:col-span-5 bg-primary rounded-lg rounded-t-none md:rounded-l-none md:rounded-r-lg p-sm text-white">
            <div className="flex flex-col px-16 py-sm">
              {/* Ratings and ISO Section */}
              <div className="flex-grow">
                {/* Clutch Rating */}
                {ratings.map((rating, index) => (
                  <div
                    key={index}
                    className="first:pt-0 py-sm border-b border-dotted border-white"
                  >
                    <Image
                      src={rating.logo}
                      alt={rating.platform}
                      width={140}
                      height={40}
                      className="h-10 w-auto object-contain mb-4"
                    />
                    <div className="flex items-center h-svg-icon-24 w-svg-icon-24">
                      <Image
                        src={starImage}
                        alt="Star"
                        width={24}
                        height={24}
                        className="w-full h-full mr-2 object-contain"
                      />
                      <ParagraphElement
                        color="white"
                        className="text-h4 font-medium"
                        noMargin
                      >
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
                    <ParagraphElement
                      color="white"
                      className="text-base font-medium"
                      noMargin
                    >
                      {iso.text}
                    </ParagraphElement>
                  </div>
                )}
              </div>
            </div>
            {/* Sales Manager Info */}
            {salesManager && (
              <div className="flex items-start gap-5 mt-0 px-md py-12 rounded-lg">
                <div className="svg-icon rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={salesManager.avatar}
                    alt={salesManager.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>

                <ParagraphElement
                  color="white"
                  className="text-sm leading-relaxed"
                  noMargin
                >
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

export default ContactBanner;
