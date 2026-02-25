"use client";

import React, { useState } from "react";

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
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="section-heading mb-3">
                        Choose the plan that's right for you
                    </h2>
                    <p className="section-description">
                        Join StreamVibe and select from our flexible subscription options tailored to suit your
                        viewing preferences. Get ready for non-stop entertainment!
                    </p>
                </div>
                {/* Billing toggle */}
                <div className="flex bg-[#0F0F0F] border border-border rounded-lg p-1 flex-shrink-0">
                    <button
                        onClick={() => setBilling("monthly")}
                        className={`px-5 py-[10px] rounded-md border-none text-[15px] font-medium font-inherit cursor-pointer transition-all duration-200 ${
                            billing === "monthly" 
                                ? "bg-surface text-text-primary" 
                                : "bg-transparent text-text-secondary hover:text-text-primary"
                        }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBilling("yearly")}
                        className={`px-5 py-[10px] rounded-md border-none text-[15px] font-medium font-inherit cursor-pointer transition-all duration-200 ${
                            billing === "yearly" 
                                ? "bg-surface text-text-primary" 
                                : "bg-transparent text-text-secondary hover:text-primary"
                        }`}
                    >
                        Yearly
                    </button>
                </div>
            </div>

            {/* Plan cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => {
                    const [isHovered, setIsHovered] = useState(false);

                    return (
                        <div
                            key={plan.name}
                            className={`rounded-xl p-10 transition-all duration-200 ${
                                isHovered ? "border-border-light -translate-y-0.5" : "border-border"
                            }`}
                            style={{
                                background: "linear-gradient(145deg, #1A1A1A 0%, #141414 100%)",
                                border: "1px solid #262626",
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <h3 className="text-xl font-semibold text-text-primary mb-3">
                                {plan.name}
                            </h3>
                            <p className="text-base text-text-secondary leading-[1.6] mb-6">
                                {plan.description}
                            </p>
                            <div className="mb-8">
                                <span className="text-[40px] font-bold text-text-primary">
                                    ${billing === "yearly" ? (parseFloat(plan.price) * 10).toFixed(2) : plan.price}
                                </span>
                                <span className="text-base text-text-secondary ml-1">
                                    /{billing === "yearly" ? "yr" : "mo"}
                                </span>
                            </div>
                            <div className="flex gap-4">
                                <button className="btn-outline flex-1">
                                    Start Free Trial
                                </button>
                                <button className="btn-primary flex-1 justify-center">
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
