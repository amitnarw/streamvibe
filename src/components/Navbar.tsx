"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LuSearch, LuBell } from "react-icons/lu";
import Link from "next/link";
import SegmentedControl from "./SegmentedControl";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const links = ["Home", "Movies & Shows", "Support", "Subscriptions"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Background layers for smooth gradient transition */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 bg-linear-to-b from-background via-background/80 to-transparent ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 bg-linear-to-b from-background/90 via-background/50 to-transparent ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between relative mx-auto! py-5 max-w-7xl">
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
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-xl hidden lg:block">
          <SegmentedControl
            options={links}
            value={active}
            onChange={setActive}
          />
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
      <div className="md:hidden flex items-center justify-between relative mx-auto! p-5">
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
        <div className="flex items-center gap-5">
          <button
            className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            aria-label="Search"
          >
            <LuSearch size={24} strokeWidth={1.5} />
          </button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-surface border-border-light rounded-xl"
              >
                {mobileMenuOpen ? (
                  <RiMenu4Line size={28} strokeWidth={1.5} />
                ) : (
                  <RiMenu4Line size={28} />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="p-4 overflow-y-auto border-b-0 bg-transparent"
              showCloseButton={false}
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>

              {/* Custom Close Button */}
              <div className="flex justify-end mb-4!">
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-surface border-border-light text-white hover:text-gray-300"
                  >
                    <RiCloseLine size={28} />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>

              <div className="flex flex-col gap-4 mt-4 bg-dark-background p-4 rounded-2xl">
                {links.map((link) => (
                  <Button
                    key={link}
                    variant={active === link ? "secondary" : "ghost"}
                    size="lg"
                    onClick={() => {
                      setActive(link);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full px-8 py-6 rounded-xl text-lg font-bold justify-start ${
                      active === link
                        ? "text-white border-border-light"
                        : "text-gray-400"
                    }`}
                  >
                    {link}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
