"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

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
    <section className="section-container">
      {/* Header row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="section-heading mb-3">
            Choose the plan that&apos;s right for you
          </h2>
          <p className="section-description">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        {/* Billing toggle */}
        <div className="flex bg-[#0F0F0F] border border-border rounded-lg p-1 shrink-0">
          <Button
            variant={billing === "monthly" ? "secondary" : "ghost"}
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2.5 rounded-md text-sm font-medium ${
              billing === "monthly"
                ? "bg-surface text-white"
                : "text-text-secondary"
            }`}
          >
            Monthly
          </Button>
          <Button
            variant={billing === "yearly" ? "secondary" : "ghost"}
            onClick={() => setBilling("yearly")}
            className={`px-6 py-2.5 rounded-md text-sm font-medium ${
              billing === "yearly"
                ? "bg-surface text-white"
                : "text-text-secondary"
            }`}
          >
            Yearly
          </Button>
        </div>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className="p-7 lg:p-8">
            <CardHeader className="p-0 mb-3">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
            </CardHeader>
            <CardDescription className="text-base leading-relaxed mb-6 text-text-secondary">
              {plan.description}
            </CardDescription>
            <CardContent className="p-0 mb-8">
              <span className="text-[2.25rem] font-bold text-white">
                $
                {billing === "yearly"
                  ? (parseFloat(plan.price) * 10).toFixed(2)
                  : plan.price}
              </span>
              <span className="text-sm text-text-secondary ml-1">
                /{billing === "yearly" ? "year" : "month"}
              </span>
            </CardContent>
            <CardFooter className="p-0 flex gap-4">
              <Button
                variant="outline"
                className="flex-1 border-border bg-background hover:bg-surface text-white"
              >
                Start Free Trial
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary-hover text-white">
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
