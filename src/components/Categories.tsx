"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const genres = [
  { name: "Action", image: "/category1.webp" },
  { name: "Adventure", image: "/category2.webp" },
  { name: "Comedy", image: "/category3.webp" },
  { name: "Drama", image: "/category4.webp" },
  { name: "Horror", image: "/category5.webp" },
];

function GenreCard({ genre }: { genre: (typeof genres)[0] }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 cursor-pointer group transition-all duration-200 hover:border-border-light hover:-translate-y-0.5">
      {/* Category poster image */}
      <div className="rounded-lg overflow-hidden mb-4">
        <img
          src={genre.image}
          alt={genre.name}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Label + arrow */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-white">{genre.name}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-text-secondary"
        >
          <path
            d="M5 12h14M12 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Categories() {
  const [page, setPage] = useState(0);

  return (
    <section className="section-container">
      {/* Header row */}
      <div className="flex items-end justify-between mb-12 gap-8">
        <div>
          <h2 className="section-heading mb-3">
            Explore our wide variety of categories
          </h2>
          <p className="section-description">
            Whether you&apos;re looking for a comedy to make you laugh, a drama
            to make you think, or a documentary to learn something new, we have
            it all.
          </p>
        </div>
        {/* Carousel navigation */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage(Math.max(0, page - 1))}
            className="w-12 h-12 rounded-lg bg-[#0F0F0F] border-surface-light"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <div className="flex gap-1 px-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === page ? "w-5 bg-primary" : "w-2 bg-border-light"
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage(Math.min(3, page + 1))}
            className="w-12 h-12 rounded-lg bg-[#0F0F0F] border-surface-light"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Genre cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {genres.map((genre) => (
          <GenreCard key={genre.name} genre={genre} />
        ))}
      </div>
    </section>
  );
}
