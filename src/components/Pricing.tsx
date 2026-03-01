"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import SectionHeader from "./SectionHeader";
import SegmentedControl from "./SegmentedControl";

const plans = [
  {
    name: "Basic Plan",
    price: "9.99",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
  },
  {
    name: "Standard Plan",
    price: "12.99",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
  },
  {
    name: "Premium Plan",
    price: "14.99",
    description:
      "Access to the widest selection of movies and shows, including all new releases and Offline Viewing.",
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="section-container flex flex-col gap-5 sm:gap-15">
      <SectionHeader
        title="Choose the plan that's right for you"
        description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      >
        <SegmentedControl
          options={[
            { label: "Monthly", value: "monthly" },
            { label: "Yearly", value: "yearly" },
          ]}
          value={billing}
          onChange={(val) => setBilling(val as "monthly" | "yearly")}
        />
      </SectionHeader>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className="p-6 lg:p-10 bg-button-background border border-border/50 rounded-xl hover:border-border-light"
          >
            <CardHeader className="p-0 mb-4 lg:mb-5">
              <CardTitle className="text-lg md:text-xl font-semibold text-white overflow-hidden">
                <AnimatedText text={plan.name} activeKey={`title-${billing}`} />
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-xs md:text-sm leading-relaxed text-text-secondary mt-4! overflow-hidden">
              <AnimatedText
                text={plan.description}
                activeKey={`desc-${billing}`}
                delay={0.05}
              />
            </CardDescription>
            <CardContent className="p-0 flex items-baseline my-8!">
              <span className="flex items-baseline text-2xl md:text-3xl font-semibold text-white leading-none overflow-hidden">
                $
                <AnimatedText
                  text={
                    billing === "yearly"
                      ? (parseFloat(plan.price) * 10).toFixed(2)
                      : plan.price
                  }
                  activeKey={`price-${billing}`}
                />
              </span>
              <span className="flex items-baseline text-xs md:text-sm text-text-secondary ml-2 font-medium overflow-hidden">
                /
                <AnimatedText
                  text={billing === "yearly" ? "year" : "month"}
                  activeKey={`period-${billing}`}
                  yOffset={15}
                />
              </span>
            </CardContent>
            <CardFooter className="p-0 flex flex-row gap-2 sm:gap-4 overflow-hidden">
              <Button
                variant="outline"
                className="flex-1 h-auto px-0 py-4 sm:py-4 border-border bg-background hover:bg-surface text-white text-xs sm:text-sm font-semibold rounded-lg"
              >
                Start Free Trial
              </Button>
              <Button className="flex-1 h-auto px-0 py-4 sm:py-4 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold rounded-lg text-center">
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
