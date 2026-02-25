"use client";

import React, { useState } from "react";

const faqs = [
    {
        id: 1,
        question: "What is StreamVibe?",
        answer:
            "StreamVibe is a streaming service that allows you to watch movies and shows on demand. You can watch our content on any device, anytime, anywhere.",
    },
    {
        id: 2,
        question: "How much does StreamVibe cost?",
        answer:
            "StreamVibe offers three plans: Basic at $9.99/month, Standard at $12.99/month, and Premium at $14.99/month. Each plan offers different features and content access levels.",
    },
    {
        id: 3,
        question: "What content is available on StreamVibe?",
        answer:
            "StreamVibe offers a wide variety of content including the latest blockbusters, classic movies, popular TV shows, documentaries, and exclusive original content.",
    },
    {
        id: 4,
        question: "How can I watch StreamVibe?",
        answer:
            "You can watch StreamVibe on your smartphone, tablet, Smart TV, laptop, gaming console, or VR headset. Simply download our app or visit our website.",
    },
    {
        id: 5,
        question: "How do I sign up for StreamVibe?",
        answer:
            "You can sign up for StreamVibe by visiting our website or downloading our app. Click on the 'Sign Up' button and follow the easy registration process.",
    },
    {
        id: 6,
        question: "What is the StreamVibe free trial?",
        answer:
            "StreamVibe offers a 14-day free trial for all new subscribers. You can cancel anytime during the trial period without being charged.",
    },
    {
        id: 7,
        question: "How do I contact StreamVibe customer support?",
        answer:
            "You can contact our customer support team through our 'Support' page on the website, via email at support@streamvibe.com, or through our live chat feature.",
    },
    {
        id: 8,
        question: "What are the StreamVibe payment methods?",
        answer:
            "StreamVibe accepts all major credit cards, debit cards, PayPal, and various regional payment methods. You can manage your payment methods in your account settings.",
    },
];

function FAQItem({
    faq,
    isOpen,
    onToggle,
}: {
    faq: (typeof faqs)[0];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="bg-surface border border-border rounded-xl overflow-hidden transition-colors duration-200 hover:border-border-light">
            <button
                onClick={onToggle}
                className="w-full flex items-center gap-4 px-7 py-6 bg-transparent border-none cursor-pointer text-left font-inherit"
            >
                <span className="text-lg font-semibold text-text-primary min-w-[36px] flex-shrink-0">
                    {String(faq.id).padStart(2, "0")}
                </span>
                <span className="text-lg font-medium text-text-primary flex-1">
                    {faq.question}
                </span>
                <div className={`w-[36px] h-[36px] rounded-lg bg-background border border-border flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : "rotate-0"
                }`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-primary">
                        <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
                        <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <>
                    <div className="h-px bg-border mx-7" />
                    <div className="px-7 py-5">
                        <p className="text-base text-text-secondary leading-[1.6]">{faq.answer}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(1);

    const leftCol = faqs.filter((_, i) => i % 2 === 0);
    const rightCol = faqs.filter((_, i) => i % 2 !== 0);

    return (
        <section className="section-container">
            {/* Header row */}
            <div className="flex items-start justify-between mb-12">
                <div className="max-w-[600px]">
                    <h2 className="section-heading mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="section-description">
                        Got questions? We've got answers! Check out our FAQ section to find answers to the most
                        common questions about StreamVibe.
                    </p>
                </div>
                <button className="btn-primary">Ask a Question</button>
            </div>

            {/* FAQ grid - 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                    {leftCol.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openId === faq.id}
                            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-6">
                    {rightCol.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openId === faq.id}
                            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
