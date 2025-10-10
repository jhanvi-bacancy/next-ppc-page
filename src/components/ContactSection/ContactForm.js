import React from "react";
import { ParagraphElement } from "../ui";
import { useContactForm, ContactFormComponent } from "../SingleForm";

const ContactForm = ({ data, formData }) => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    submitError,
    submitSuccess,
    onSubmit,
    onClearError,
  } = useContactForm({
    leadingPage: formData.leadingPageEndpoint,
    onSuccess: () => {
      window.location.href = formData.thankYouPageEndpoint;
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
        onClearError={onClearError}
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
