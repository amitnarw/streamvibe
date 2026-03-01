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
import {
  BsHeadsetVr,
  BsPhoneFill,
  BsFillTabletFill,
  BsTvFill,
  BsLaptopFill,
} from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const devices = [
  {
    name: "Smartphones",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
    icon: <BsPhoneFill className="text-primary w-5 h-5 sm:w-7 sm:h-7" />,
  },
  {
    name: "Tablet",
    description:
      "StreamVibe is optimized for both Android and iOS tablets. Download our app from the Google Play Store or the Apple App Store.",
    icon: <BsFillTabletFill className="text-primary w-5 h-5 sm:w-7 sm:h-7" />,
  },
  {
    name: "Smart TV",
    description:
      "StreamVibe is optimized for Smart TVs. Download our app from the Google Play Store or the Apple App Store.",
    icon: <BsTvFill className="text-primary w-5 h-5 sm:w-7 sm:h-7" />,
  },
  {
    name: "Laptops",
    description:
      "StreamVibe is optimized for both Windows and macOS laptops. Download our app from the Google Play Store or the Apple App Store.",
    icon: <BsLaptopFill className="text-primary w-5 h-5 sm:w-7 sm:h-7" />,
  },
  {
    name: "Gaming Consoles",
    description:
      "StreamVibe is optimized for gaming consoles. Download our app from the Google Play Store or the Apple App Store.",
    icon: <IoGameController className="text-primary w-5 h-5 sm:w-7 sm:h-7" />,
  },
  {
    name: "VR Headsets",
    description:
      "StreamVibe is optimized for VR headsets. Download our app from the Google Play Store or the Apple App Store.",
    icon: <BsHeadsetVr className="text-primary w-5 h-5 sm:w-7 sm:h-7" />,
  },
];

export default function Devices() {
  return (
    <section className="section-container flex flex-col gap-5 sm:gap-15">
      <SectionHeader
        title="We Provide you streaming experience across various devices."
        description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
      />

      {/* Device cards grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {devices.map((device) => (
          <motion.div
            key={device.name}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            className="flex"
          >
            <Card className="relative p-6 lg:p-10 overflow-hidden bg-dark-background border-border rounded-xl flex flex-col gap-5 w-full">
              {/* Red gradient glow on top right */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

              {/* Icon + Title row */}
              <div className="relative flex items-center gap-4 mb-6">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-button-background flex items-center justify-center shrink-0">
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
