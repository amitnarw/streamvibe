"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

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
                        Join StreamVibe and select from our flexible subscription options tailored to suit your
                        viewing preferences. Get ready for non-stop entertainment!
                    </p>
                </div>
                {/* Billing toggle */}
                <div className="flex bg-[#0F0F0F] border border-border rounded-lg p-1 flex-shrink-0">
                    <Button
                        variant={billing === "monthly" ? "secondary" : "ghost"}
                        onClick={() => setBilling("monthly")}
                        className="px-6 py-3 rounded-md text-base font-medium"
                    >
                        Monthly
                    </Button>
                    <Button
                        variant={billing === "yearly" ? "secondary" : "ghost"}
                        onClick={() => setBilling("yearly")}
                        className="px-6 py-3 rounded-md text-base font-medium"
                    >
                        Yearly
                    </Button>
                </div>
            </div>

            {/* Plan cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <Card key={plan.name} className="p-8">
                        <CardHeader className="p-0 mb-3">
                            <CardTitle>{plan.name}</CardTitle>
                        </CardHeader>
                        <CardDescription className="text-base leading-relaxed mb-6">
                            {plan.description}
                        </CardDescription>
                        <CardContent className="p-0 mb-8">
                            <span className="text-[36px] font-bold text-text-primary">
                                ${billing === "yearly" ? (parseFloat(plan.price) * 10).toFixed(2) : plan.price}
                            </span>
                            <span className="text-base text-text-secondary ml-1">
                                /{billing === "yearly" ? "year" : "month"}
                            </span>
                        </CardContent>
                        <CardFooter className="p-0 flex gap-4">
                            <Button variant="outline" className="flex-1">
                                Start Free Trial
                            </Button>
                            <Button className="flex-1 bg-gradient-to-r from-[#E50000] to-[#B40000] hover:from-[#CC0000] hover:to-[#990000]">
                                Choose Plan
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
