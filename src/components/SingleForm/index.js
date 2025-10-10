import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Input, TextArea, Button, ParagraphElement, HeadingH3 } from "../ui";
import { api } from "../../api/apiManager";
import { ENDPOINTS } from "../../api/endpoints";
import { getClientIp, getLocationData } from "../../lib/helper";
import { Dialog, DialogContent } from "../ui/dialog";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

export const useContactForm = ({ onSuccess, onError, leadingPage }) => {
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
        leadingPage: leadingPage || "-",
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
        onSuccess?.();
      } else {
        throw new Error("No response from server");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to submit form. Please try again later.";
      setSubmitError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearError = () => {
    setSubmitError("");
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    submitError,
    submitSuccess,
    onSubmit,
    onClearError: clearError,
  };
};

export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address",
  },
};

export const phoneValidation = {
  pattern: {
    value: /^[0-9+\-() ]+$/,
    message: "Invalid phone number",
  },
};

export const nameValidation = {
  minLength: {
    value: 2,
    message: "Name must be at least 2 characters",
  },
};

export const ContactFormComponent = ({
  onSubmit,
  register,
  errors,
  isSubmitting,
  submitError,
  submitSuccess,
  onClearError,
  submitButtonText = "INQUIRE NOW",
  className = "",
  formClassName = "space-y-6",
}) => {
  return (
    <div>
      <Dialog open={!!submitError} onOpenChange={() => onClearError?.()}>
        <DialogContent className="boxed text-center bg-white">
          <div className="flex flex-col items-center">
            <HeadingH3>Oops, sorry. Something went wrong.</HeadingH3>
            <ParagraphElement color="secondary">
              We recommend you Schedule a Free Call.
            </ParagraphElement>
            <Button
              href="https://calendly.com/bacancymeeting/30-minute-meeting"
              target="_blank"
              uppercase
            >
              SCHEDULE A CALL NOW
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <form onSubmit={onSubmit} className={formClassName}>
        {submitSuccess && (
          <div className="text-green-600 text-sm text-center mb-4">
            Form submitted successfully! We&apos;ll get back to you soon.
          </div>
        )}
        <Input
          {...register("name", nameValidation)}
          type="text"
          placeholder="Full Name"
          error={errors.name?.message}
          icon={
            <Image
              src={`${cdnImage}landing/images/person.png`}
              alt="user"
              width={16}
              height={16}
            />
          }
          className={`w-full bg-gray-light ${className}`}
        />

        <Input
          {...register("email", emailValidation)}
          type="email"
          placeholder="Your Business Email ID"
          error={errors.email?.message}
          icon={
            <Image
              src={`${cdnImage}landing/images/email.png`}
              alt="email"
              width={16}
              height={16}
            />
          }
          className={`w-full bg-gray-light ${className}`}
        />

        <Input
          {...register("phone", phoneValidation)}
          type="tel"
          placeholder="Phone Number"
          error={errors.phone?.message}
          icon={
            <Image
              src={`${cdnImage}landing/images/phone-call.png`}
              alt="phone"
              width={16}
              height={16}
            />
          }
          className={`w-full bg-gray-light ${className}`}
        />

        <TextArea
          {...register("requirements")}
          placeholder="Describe Your Requirements"
          error={errors.requirements?.message}
          icon={
            <Image
              src={`${cdnImage}landing/images/message.png`}
              alt="message"
              width={16}
              height={16}
            />
          }
          className={`w-full bg-gray-light min-h-[100px] sm:min-h-[120px] ${className}`}
          rows={4}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            loading={isSubmitting}
            className="font-normal w-full sm:w-auto"
            disabled={isSubmitting}
            fullWidth
            uppercase
          >
            {isSubmitting ? "Submitting..." : submitButtonText}
          </Button>
        </div>
      </form>
    </div>
  );
};
