"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        id: "1",
        question: "What is StreamVibe?",
        answer:
            "StreamVibe is a streaming service that allows you to watch movies and shows on demand. You can watch our content on any device, anytime, anywhere.",
    },
    {
        id: "2",
        question: "How much does StreamVibe cost?",
        answer:
            "StreamVibe offers three plans: Basic at $9.99/month, Standard at $12.99/month, and Premium at $14.99/month. Each plan offers different features and content access levels.",
    },
    {
        id: "3",
        question: "What content is available on StreamVibe?",
        answer:
            "StreamVibe offers a wide variety of content including the latest blockbusters, classic movies, popular TV shows, documentaries, and exclusive original content.",
    },
    {
        id: "4",
        question: "How can I watch StreamVibe?",
        answer:
            "You can watch StreamVibe on your smartphone, tablet, Smart TV, laptop, gaming console, or VR headset. Simply download our app or visit our website.",
    },
    {
        id: "5",
        question: "How do I sign up for StreamVibe?",
        answer:
            "You can sign up for StreamVibe by visiting our website or downloading our app. Click on the 'Sign Up' button and follow the easy registration process.",
    },
    {
        id: "6",
        question: "What is the StreamVibe free trial?",
        answer:
            "StreamVibe offers a 14-day free trial for all new subscribers. You can cancel anytime during the trial period without being charged.",
    },
    {
        id: "7",
        question: "How do I contact StreamVibe customer support?",
        answer:
            "You can contact our customer support team through our 'Support' page on the website, via email at support@streamvibe.com, or through our live chat feature.",
    },
    {
        id: "8",
        question: "What are the StreamVibe payment methods?",
        answer:
            "StreamVibe accepts all major credit cards, debit cards, PayPal, and various regional payment methods. You can manage your payment methods in your account settings.",
    },
];

export default function FAQ() {
    const leftCol = faqs.filter((_, i) => i % 2 === 0);
    const rightCol = faqs.filter((_, i) => i % 2 !== 0);

    return (
        <section className="section-container">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-12 gap-6">
                <div className="max-w-xl">
                    <h2 className="section-heading mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="section-description">
                        Got questions? We&apos;ve got answers! Check out our FAQ section to find answers to the most
                        common questions about StreamVibe.
                    </p>
                </div>
                <Button className="bg-gradient-to-r from-[#E50000] to-[#B40000] hover:from-[#CC0000] hover:to-[#990000]">Ask a Question</Button>
            </div>

            {/* FAQ grid - 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                    <Accordion type="single" collapsible className="space-y-6" defaultValue="1">
                        {leftCol.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id} className="px-6 py-2 rounded-xl border border-border bg-gradient-to-br from-surface to-background">
                                <AccordionTrigger className="hover:no-underline py-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-lg font-semibold text-primary min-w-9 flex-shrink-0">
                                            {faq.id.padStart(2, "0")}
                                        </span>
                                        <span className="text-lg font-medium text-text-primary text-left">
                                            {faq.question}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-base text-text-secondary leading-relaxed">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div className="flex flex-col gap-6">
                    <Accordion type="single" collapsible className="space-y-6">
                        {rightCol.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id} className="px-6 py-2 rounded-xl border border-border bg-gradient-to-br from-surface to-background">
                                <AccordionTrigger className="hover:no-underline py-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-lg font-semibold text-primary min-w-9 flex-shrink-0">
                                            {faq.id.padStart(2, "0")}
                                        </span>
                                        <span className="text-lg font-medium text-text-primary text-left">
                                            {faq.question}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-base text-text-secondary leading-relaxed">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
