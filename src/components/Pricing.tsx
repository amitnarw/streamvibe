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
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: 48,
                }}
            >
                <div>
                    <h2 className="section-heading" style={{ marginBottom: 12 }}>
                        Choose the plan that&apos;s right for you
                    </h2>
                    <p className="section-description">
                        Join StreamVibe and select from our flexible subscription options tailored to suit your
                        viewing preferences. Get ready for non-stop entertainment!
                    </p>
                </div>
                {/* Billing toggle */}
                <div
                    style={{
                        display: "flex",
                        background: "#0F0F0F",
                        border: "1px solid #262626",
                        borderRadius: 8,
                        padding: 4,
                        flexShrink: 0,
                    }}
                >
                    <button
                        onClick={() => setBilling("monthly")}
                        style={{
                            padding: "10px 20px",
                            borderRadius: 6,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 500,
                            fontFamily: "inherit",
                            cursor: "pointer",
                            background: billing === "monthly" ? "#1A1A1A" : "transparent",
                            color: billing === "monthly" ? "#fff" : "#999",
                            transition: "all 0.2s",
                        }}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBilling("yearly")}
                        style={{
                            padding: "10px 20px",
                            borderRadius: 6,
                            border: "none",
                            fontSize: 15,
                            fontWeight: 500,
                            fontFamily: "inherit",
                            cursor: "pointer",
                            background: billing === "yearly" ? "#1A1A1A" : "transparent",
                            color: billing === "yearly" ? "#fff" : "#999",
                            transition: "all 0.2s",
                        }}
                    >
                        Yearly
                    </button>
                </div>
            </div>

            {/* Plan cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        style={{
                            background: "linear-gradient(145deg, #1A1A1A 0%, #141414 100%)",
                            border: "1px solid #262626",
                            borderRadius: 12,
                            padding: 40,
                            transition: "border-color 0.2s, transform 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#333";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#262626";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: "#fff", marginBottom: 12 }}>
                            {plan.name}
                        </h3>
                        <p style={{ fontSize: 16, color: "#999", lineHeight: 1.6, marginBottom: 24 }}>
                            {plan.description}
                        </p>
                        <div style={{ marginBottom: 32 }}>
                            <span style={{ fontSize: 40, fontWeight: 700, color: "#fff" }}>
                                ${billing === "yearly" ? (parseFloat(plan.price) * 10).toFixed(2) : plan.price}
                            </span>
                            <span style={{ fontSize: 16, color: "#999", marginLeft: 4 }}>
                                /{billing === "yearly" ? "yr" : "mo"}
                            </span>
                        </div>
                        <div style={{ display: "flex", gap: 16 }}>
                            <button className="btn-outline" style={{ flex: 1 }}>
                                Start Free Trial
                            </button>
                            <button className="btn-primary" style={{ flex: 1, justifyContent: "center" }}>
                                Choose Plan
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
