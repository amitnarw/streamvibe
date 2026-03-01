"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import SectionHeader from "./SectionHeader";

const genres = [
  { name: "Action", image: "/category3.webp" },
  { name: "Adventure", image: "/category4.webp" },
  { name: "Comedy", image: "/category1.webp" },
  { name: "Drama", image: "/category2.webp" },
  { name: "Horror", image: "/category5.webp" },
  { name: "Action", image: "/category3.webp" },
  { name: "Adventure", image: "/category4.webp" },
];

function GenreCard({ genre }: { genre: (typeof genres)[0] }) {
  return (
    <div className="bg-button-background border border-border/50 rounded-xl p-3 sm:p-5 pb-10 sm:pb-12 cursor-pointer group transition-all duration-200 hover:border-border-light relative overflow-hidden">
      {/* Category poster image */}
      <div className="rounded-lg overflow-hidden">
        <Image
          src={genre.image}
          alt={genre.name}
          width={100}
          height={100}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 left-0 flex items-end bg-linear-to-t pb-3 sm:pb-5 from-button-background via-button-background/90 to-transparent h-50 w-full">
        <div className="flex items-center justify-between w-full px-4 sm:px-6">
          <span className="text-sm font-semibold text-white">{genre.name}</span>
          <GoArrowRight />
        </div>
      </div>
      {/* Label + arrow */}
    </div>
  );
}

export default function Categories() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const carouselControls = (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        disabled={current === 0}
        className="p-2! rounded-lg bg-button-background border-none disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <GoArrowLeft size={20} />
      </Button>
      <div className="flex gap-1 px-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === current
                ? "w-4 sm:w-5 bg-primary"
                : "w-1.5 sm:w-2 bg-border-light"
            }`}
          />
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        disabled={current === count - 1}
        className="p-2! rounded-lg bg-button-background border-none disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <GoArrowRight size={20} />
      </Button>
    </>
  );

  return (
    <section className="section-container flex flex-col gap-5 sm:gap-15 mt-20! sm:mt-60!">
      <SectionHeader
        title="Explore our wide variety of categories"
        description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new, we have it all."
      >
        <div className="hidden sm:flex items-center gap-3 bg-dark-background p-2.5 rounded-lg border border-surface-light">
          {carouselControls}
        </div>
      </SectionHeader>

      {/* Genre cards carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4!">
            {genres.map((genre, index) => (
              <CarouselItem
                key={index}
                className="pl-4 sm:pl-6 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5! xl:max-w-[20%]!"
              >
                <GenreCard genre={genre} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex sm:hidden items-center justify-between gap-3 bg-dark-background p-2.5 rounded-lg border border-surface-light self-center md:self-auto mx-auto mt-6"
      >
        {carouselControls}
      </motion.div>
    </section>
  );
}
