import React from "react";
import Image from "next/image";
import { HeadingH2, ParagraphElement } from "../ui";
import { cn } from "../../lib/utils";
import { useContactForm, ContactFormComponent } from "../SingleForm";

const landingPage = process.env.NEXT_PUBLIC_API_BASE_URL;
const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

const contactBannerData = {
  title: "Big Ideas Start Here - Share Yours Now!",
  ratings: [
    {
      logo: `${cdnImage}landing/images/footer-ppc/clutch-logo-footer.svg`,
      rating: "4.7",
    },
    {
      logo: `${cdnImage}landing/images/footer-ppc/goodfirm-logo.svg`,
      rating: "4.8",
    },
  ],
  iso: {
    logo: `${cdnImage}landing/images/iso-2013.svg`,
    text: "ISO 27001:2013",
  },
  salesManager: {
    name: "Gautam Sharma",
    role: "Sales Manager",
    avatar: `${cdnImage}landing/images/footer-ppc/form-profile-pic.png`,
    message:
      "Hey, I'm Gautam Sharma, Sales Manager at Bacancy! Got questions? Fill out the form—I'm happy to help!",
  },
  starImage: `${cdnImage}main-boot-5/images/star-white.png`,
};

const ContactBanner = ({ className }) => {
  const { title, ratings, iso, salesManager, starImage } = contactBannerData;

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
  });

  return (
    <section className={cn("", className)} id="contact-form-id">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left side - Form */}
          <div className="md:col-span-6 lg:col-span-7 bg-light-orange rounded-lg rounded-b-none md:rounded-r-none md:rounded-l-lg p-6 lg:p-12 shadow-lg">
            <HeadingH2 className="font-medium pr-4">{title}</HeadingH2>
            <div className="w-full lg:max-w-xl">
              <ContactFormComponent
                onSubmit={handleSubmit(onSubmit)}
                register={register}
                errors={errors}
                isSubmitting={isSubmitting}
                submitError={submitError}
                submitSuccess={submitSuccess}
                submitButtonText="INQUIRE NOW"
                formClassName="space-y-sm"
              />
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
