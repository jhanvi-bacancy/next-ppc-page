import React, { useState } from "react";
import { Input, TextArea, Button, HeadingH4, ParagraphElement } from "../ui";
import Image from "next/image";

const ContactForm = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg">
      <HeadingH4 className="mb-6 text-center">
        Get Your 15 Days Risk Free Trial
      </HeadingH4>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
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
          name="email"
          placeholder="Your Business Email ID"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
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
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
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
          name="requirements"
          placeholder="Describe Your Requirements"
          value={formData.requirements}
          onChange={handleChange}
          error={errors.requirements}
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
            href={data.href}
            target={data.target}
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
