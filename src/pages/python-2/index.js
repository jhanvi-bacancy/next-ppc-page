import React from "react";
import { BannerWithList } from "../../components/ui/banner";
import { pythonBannerData } from "./data";


export default function PythonPage() {
    return (
        <div>
            <BannerWithList data={pythonBannerData} />
            {/* Add other page content here */}
        </div>
    );
}
