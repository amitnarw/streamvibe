"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const faqs = [
  {
    id: "1",
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
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

  const renderFaqList = (items: typeof faqs, defaultOpen?: string) => (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col"
      defaultValue={defaultOpen}
    >
      {items.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        >
          <AccordionItem
            value={faq.id}
            className="border-none rounded-none bg-transparent"
          >
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4 w-full">
                <span className="w-[52px] h-[52px] rounded-[10px] bg-[#1A1A1A] flex items-center justify-center text-[18px] font-semibold text-white shrink-0">
                  {faq.id.padStart(2, "0")}
                </span>
                <span className="text-[16px] font-medium text-white text-left flex-1">
                  {faq.question}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="ml-[68px]">
                <p className="text-[14px] text-text-muted leading-[1.6]">
                  {faq.answer}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Red gradient divider line */}
          {index < items.length - 1 && (
            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, #E50000 50%, transparent)",
              }}
            />
          )}
        </motion.div>
      ))}
    </Accordion>
  );

  return (
    <section className="section-container flex flex-col gap-5 sm:gap-15">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      >
        <Button className="bg-primary hover:bg-primary-hover text-white shrink-0 px-6 shadow-2xl w-auto">
          Ask a Question
        </Button>
      </SectionHeader>
      {/* FAQ grid - Mobile: single column in order, Desktop: 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div className="md:hidden">{renderFaqList(faqs)}</div>
        <div className="hidden md:block">{renderFaqList(leftCol)}</div>
        <div className="hidden md:block">{renderFaqList(rightCol)}</div>
      </div>
    </section>
  );
}
