"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Home",
    links: ["Categories", "Devices", "Pricing", "FAQ"],
  },
  {
    title: "Movies",
    links: ["Genres", "Trending", "New Release", "Popular"],
  },
  {
    title: "Shows",
    links: ["Genres", "Trending", "New Release", "Popular"],
  },
  {
    title: "Support",
    links: ["Contact Us"],
  },
  {
    title: "Subscription",
    links: ["Plans", "Features"],
  },
];

const socialIcons = [
  {
    name: "Facebook",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white"
      >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-background">
      <div className="section-container mx-auto px-5 md:px-12 pt-16 pb-6 flex flex-col gap-20">
        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-md font-medium text-white mb-5!">
                {section.title}
              </h4>
              <ul className="list-none flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary no-underline transition-colors duration-200 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect With Us */}
          <div className="flex flex-col gap-5">
            <h4 className="text-lg font-semibold text-white mb-5">
              Connect With Us
            </h4>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  className="w-11 h-11 rounded-lg bg-surface border-border hover:bg-border hover:border-border-light"
                  asChild
                >
                  <a href="#" aria-label={social.name}>
                    {social.svg}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar - divider + left/right layout */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            ©2026 streamvibe, All Rights Reserved
          </p>
          <div className="flex gap-2 sm:gap-5 flex-wrap justify-center">
            <a
              href="#"
              className="text-sm text-text-muted no-underline transition-colors duration-200 hover:text-text-secondary"
            >
              Terms of Use
            </a>
            <span className="text-sm text-border-light">|</span>
            <a
              href="#"
              className="text-sm text-text-muted no-underline transition-colors duration-200 hover:text-text-secondary"
            >
              Privacy Policy
            </a>
            <span className="text-sm text-border-light">|</span>
            <a
              href="#"
              className="text-sm text-text-muted no-underline transition-colors duration-200 hover:text-text-secondary"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
