import React, { useState } from "react";
import { Input, TextArea, Button, HeadingH4, ParagraphElement } from "../ui";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { api } from "../../api/apiManager";
import { ENDPOINTS } from "../../api/endpoints";
import { getClientIp, getLocationData } from "../../lib/helper";

const ContactForm = ({ data }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      requirements: "",
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
        window.location.href = "https://www.bacancytechnology.com/thank-you";
        // process.env.NEXT_PUBLIC_API_BASE_URL + "/thank-you";
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
    <div className="w-full max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg">
      <HeadingH4 className="mb-6 text-center">
        Get Your 15 Days Risk Free Trial
      </HeadingH4>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Input
          {...register("name")}
          placeholder="Your Name"
          error={errors.name?.message}
          icon={
            <Image
              src="https://www.bacancytechnology.com/landing/images/person.png"
              alt="user"
              width={16}
              height={16}
            />
          }
          className="bg-gray-light"
        />

        <Input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Your Business Email ID"
          error={errors.email?.message}
          icon={
            <Image
              src="https://www.bacancytechnology.com/landing/images/email.png"
              alt="email"
              width={16}
              height={16}
            />
          }
          className="bg-gray-light"
        />

        <Input
          type="tel"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9+\-() ]+$/,
              message: "Invalid phone number",
            },
          })}
          placeholder="Phone Number"
          error={errors.phone?.message}
          icon={
            <Image
              src="https://www.bacancytechnology.com/landing/images/phone-call.png"
              alt="phone"
              width={16}
              height={16}
            />
          }
          className="bg-gray-light"
        />

        <TextArea
          {...register("requirements")}
          placeholder="Describe Your Requirements"
          error={errors.requirements?.message}
          icon={
            <Image
              src="https://www.bacancytechnology.com/landing/images/message.png"
              alt="message"
              width={16}
              height={16}
            />
          }
          className="bg-gray-light"
        />

        {submitError && (
          <div className="text-red-600 text-sm text-center mb-4">
            {submitError}
          </div>
        )}

        {submitSuccess && (
          <div className="text-green-600 text-sm text-center mb-4">
            Form submitted successfully! We&apos;ll get back to you soon.
          </div>
        )}

        <div className="flex justify-center">
          <Button
            type="submit"
            variant="filled"
            size="md"
            className="font-normal px-8 w-full sm:w-auto"
            disabled={isSubmitting}
            loading={isSubmitting}
            uppercase
          >
            {isSubmitting ? "Submitting..." : data.text}
          </Button>
        </div>
      </form>

      <ParagraphElement
        color={"secondary"}
        className="mt-6 text-sm text-center text-gray-600"
      >
        We guarantee 100% security of your information. We will not share the
        details you provide above with anyone. Your email won&apos;t be used for
        spamming.
      </ParagraphElement>
    </div>
  );
};

export default ContactForm;
