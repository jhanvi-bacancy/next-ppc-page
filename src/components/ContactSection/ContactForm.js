import React from "react";
import { Input, TextArea, Button, HeadingH4, ParagraphElement } from "../ui";
import Image from "next/image";
import { useForm } from "react-hook-form";

const ContactForm = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      requirements: "",
    },
  });

  const onSubmit = (formData) => {
    // Handle form submission
    console.log("Form submitted:", formData);
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
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            variant="filled"
            size="md"
            className="font-normal px-8 w-full sm:w-auto"
            uppercase
          >
            {data.text}
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
