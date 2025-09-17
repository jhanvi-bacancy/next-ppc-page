import React from "react";
import { BannerWithList, TrustedLogos } from "../../components/ui";
import { pythonBannerData, trustedLogosData } from "./data";

export default function PythonPage() {
  return (
    <div>
      <BannerWithList data={pythonBannerData} className="py-lg" />
      {/* Add other page content here */}
      <TrustedLogos data={trustedLogosData} className="py-lg bg-gray-light" />
    </div>
  );
}
