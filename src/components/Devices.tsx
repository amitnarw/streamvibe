"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  MdSmartphone,
  MdTabletMac,
  MdTv,
  MdLaptopMac,
  MdVideogameAsset,
  MdHeadset,
} from "react-icons/md";
import { BsPhoneFill, BsFillTabletFill, BsTvFill, BsLaptopFill, BsHeadsetVr } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";

const devices = [
  {
    name: "Smartphones",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
    icon: <BsPhoneFill className="text-primary" size={28} />,
  },
  {
    name: "Tablet",
    description:
      "StreamVibe is optimized for both Android and iOS tablets. Download our app from the Google Play Store or the Apple App Store.",
    icon: <BsFillTabletFill className="text-primary" size={28} />,
  },
  {
    name: "Smart TV",
    description:
      "StreamVibe is optimized for Smart TVs. Download our app from the Google Play Store or the Apple App Store.",
    icon: <BsTvFill className="text-primary" size={28} />,
  },
  {
    name: "Laptops",
    description:
      "StreamVibe is optimized for both Windows and macOS laptops. Download our app from the Google Play Store or the Apple App Store.",
    icon: <BsLaptopFill  className="text-primary" size={28} />,
  },
  {
    name: "Gaming Consoles",
    description:
      "StreamVibe is optimized for gaming consoles. Download our app from the Google Play Store or the Apple App Store.",
    icon: <IoGameController className="text-primary" size={28} />,
  },
  {
    name: "VR Headsets",
    description:
      "StreamVibe is optimized for VR headsets. Download our app from the Google Play Store or the Apple App Store.",
    icon: <BsHeadsetVr  className="text-primary" size={28} />,
  },
];

export default function Devices() {
  return (
    <section className="section-container flex flex-col gap-15">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h2 className="section-heading">
          We Provide you streaming experience across various devices.
        </h2>
        <p className="section-description">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>

      {/* Device cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {devices.map((device) => (
          <Card
            key={device.name}
            className="relative p-6 lg:p-10 overflow-hidden bg-dark-background border-border rounded-xl rounded-lg flex flex-col gap-5"
          >
            {/* Red gradient glow on top right */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
            
            {/* Icon + Title row */}
            <div className="relative flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-button-background flex items-center justify-center shrink-0">
                <div className="text-primary">{device.icon}</div>
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-lg tracking-[1px] text-white">
                  {device.name}
                </CardTitle>
              </CardHeader>
            </div>
            <CardDescription className="relative text-sm leading-relaxed text-text-secondary">
              {device.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}
