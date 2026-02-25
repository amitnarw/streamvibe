"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const genres = [
    {
        name: "Action",
        posters: [
            "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200&h=300&fit=crop",
        ],
    },
    {
        name: "Adventure",
        posters: [
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=300&fit=crop",
        ],
    },
    {
        name: "Comedy",
        posters: [
            "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=200&h=300&fit=crop",
        ],
    },
    {
        name: "Drama",
        posters: [
            "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=200&h=300&fit=crop",
        ],
    },
    {
        name: "Horror",
        posters: [
            "https://images.unsplash.com/photo-1509248961895-b886fcc08c78?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1604975999044-188783d54fb3?w=200&h=300&fit=crop",
            "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=200&h=300&fit=crop",
        ],
    },
];

function GenreCard({ genre }: { genre: (typeof genres)[0] }) {
    return (
        <Card className="p-6 cursor-pointer">
            {/* 2x2 poster grid */}
            <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden mb-4">
                {genre.posters.map((poster, i) => (
                    <div
                        key={i}
                        className="aspect-[3/4] rounded overflow-hidden"
                    >
                        <img 
                            src={poster} 
                            alt={`${genre.name} poster ${i + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            {/* Label + arrow */}
            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-text-primary">{genre.name}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </Card>
    );
}

export default function Categories() {
    const [page, setPage] = useState(0);

    return (
        <section className="section-container">
            {/* Header row */}
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="section-heading mb-3">
                        Browse by Category
                    </h2>
                    <p className="section-description">
                        Find your favorite movies and TV shows by category
                    </p>
                </div>
                {/* Carousel navigation */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setPage(Math.max(0, page - 1))}
                        className="w-11 h-11 rounded-lg bg-[#0F0F0F]"
                    >
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-text-primary">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                    <div className="flex gap-1">
                        {[0, 1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={`h-1 rounded transition-all duration-300 ${
                                    i === page ? "w-6 bg-primary" : "w-2 bg-border-light"
                                }`}
                            />
                        ))}
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setPage(Math.min(3, page + 1))}
                        className="w-11 h-11 rounded-lg bg-[#0F0F0F]"
                    >
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-text-primary">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
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
