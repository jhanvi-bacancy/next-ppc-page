import React from "react";
import { BannerWithList, TrustedLogos } from "../../components/ui";
import { pythonBannerData, trustedLogosData } from "./data";

export default function PythonPage() {
  return (
    <div>
      <BannerWithList data={pythonBannerData} />
      {/* Add other page content here */}
      <TrustedLogos data={trustedLogosData} />
    </div>
  );
}
