import React from "react";
import { ParagraphElement } from "../ui";
import { useContactForm, ContactFormComponent } from "../SingleForm";

const landingPage = process.env.NEXT_PUBLIC_API_BASE_URL;

const ContactForm = ({ data }) => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    submitError,
    submitSuccess,
    onSubmit,
  } = useContactForm({
    leadingPage: `${landingPage}/landing/python-2`,
    onSuccess: () => {
      window.location.href = `${landingPage}/thank-you`;
    },
  });

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg">
      <ParagraphElement className="mb-6 text-center">
        Get Your 15 Days Risk Free Trial
      </ParagraphElement>

      <ContactFormComponent
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        submitError={submitError}
        submitSuccess={submitSuccess}
        submitButtonText={data.text}
        formClassName="space-y-6 mb-sm"
      />

      <ParagraphElement
        color={"secondary"}
        className="text-sm text-center"
        noMargin
      >
        We guarantee 100% security of your information. We will not share the
        details you provide above with anyone. Your email won&apos;t be used for
        spamming.
      </ParagraphElement>
    </div>
  );
};

export default ContactForm;
