"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LuSearch, LuBell } from "react-icons/lu";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = ["Home", "Movies & Shows", "Support", "Subscriptions"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-background/90 via-background/50 to-transparent">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between relative !mx-auto py-5 max-w-7xl">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 z-10 transition-transform hover:scale-105"
        >
          <Image
            src="/logo.svg"
            alt="StreamVibe"
            width={50}
            height={50}
            priority
          />
          <span className="text-xl font-bold">StreamVibe</span>
        </Link>

        {/* Nav Links - Centered in a pill container */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-dark-background border-4 border-surface-light rounded-xl p-2 flex items-center gap-1 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          {links.map((link) => (
            <Button
              key={link}
              variant="ghost"
              onClick={() => setActive(link)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                active === link
                  ? "text-white bg-surface"
                  : "text-gray-400 hover:text-white hover:bg-transparent"
              }`}
            >
              {link}
            </Button>
          ))}
        </div>

        {/* Right Side - Search & Notification Icons */}
        <div className="flex items-center gap-4 shrink-0 z-10">
          {/* Search Icon */}
          <button
            className="text-white hover:text-gray-300 transition-colors cursor-pointer rounded-full p-2"
            aria-label="Search"
          >
            <LuSearch size={28} strokeWidth={1.5} />
          </button>
          {/* Notification Bell Icon */}
          <button
            className="text-white hover:text-gray-300 transition-colors cursor-pointer rounded-full p-2"
            aria-label="Notifications"
          >
            <LuBell size={25} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-6 h-20 bg-black/95 backdrop-blur-xl border-b border-surface-light">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="StreamVibe"
            width={45}
            height={45}
            priority
          />
        </a>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            aria-label="Search"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-surface border-border-light rounded-xl"
          >
            {mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
              >
                <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
                <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
              >
                <line x1="3" y1="7" x2="21" y2="7" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                <line x1="3" y1="17" x2="21" y2="17" strokeLinecap="round" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-[#0A0A0A] z-50 px-6 py-8 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Button
                key={link}
                variant={active === link ? "secondary" : "ghost"}
                size="lg"
                onClick={() => {
                  setActive(link);
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-8 py-6 rounded-3xl text-xl font-bold justify-start ${
                  active === link
                    ? "text-white border-border-light"
                    : "text-gray-400"
                }`}
              >
                {link}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
