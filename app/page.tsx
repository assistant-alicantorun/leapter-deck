"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ============================================================================
// LEAPTER BRAND CONSTANTS
// ============================================================================

const BRAND = {
  colors: {
    orange: "#FA4B00",
    purple: "#B379FF",
    text: "#1E1E24",
    textMuted: "#6B7280",
    background: "#FFFFFF",
    backgroundAlt: "#FAFAFA",
  },
  gradient: "linear-gradient(135deg, #FA4B00 0%, #B379FF 100%)",
};

// ============================================================================
// LEAPTER LOGO COMPONENT (Exact SVG from website)
// ============================================================================

function LeapterLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 58"
      height="58"
      width="200"
      className={className}
    >
      <defs>
        <linearGradient
          id="logo-gradient"
          gradientUnits="userSpaceOnUse"
          x1="39.882"
          y1="57.301"
          x2="9.97"
          y2="8.481"
        >
          <stop stopColor="#FA4B00" />
          <stop stopColor="#B379FF" offset="1" />
        </linearGradient>
      </defs>
      <g>
        <path fill="url(#logo-gradient)" d="M0 57.301V42.976h14.325V57.3z" />
        <path fill="url(#logo-gradient)" d="M28.65 28.65h14.326v14.326h-28.65V0H28.65z" />
        <path fill="url(#logo-gradient)" d="M42.976 28.65V14.326H57.3v14.326z" />
        <path fill="#1E1E24" d="M71.36 40V15.7h4.17v20.7h12.9V40z" />
        <path fill="#1E1E24" d="M98.733 40.36q-2.85 0-4.98-1.14a8.05 8.05 0 0 1-3.24-3.3q-1.14-2.13-1.14-4.98t1.11-4.92a7.95 7.95 0 0 1 3.21-3.24q2.07-1.14 4.89-1.14 2.7 0 4.65 1.08 1.95 1.05 3 3.03 1.08 1.95 1.08 4.65v1.5h-14.04q.24 2.46 1.65 3.81 1.41 1.32 3.78 1.32 1.74 0 2.85-.66t1.53-1.98h4.14q-.66 2.82-2.91 4.41-2.22 1.56-5.58 1.56m-5.34-11.31h10.02q-.24-1.98-1.5-3.03-1.26-1.08-3.33-1.08t-3.42 1.08q-1.35 1.05-1.77 3.03" />
        <path fill="#1E1E24" d="M115.944 40.33q-3.09 0-4.89-1.53-1.77-1.53-1.77-4.02 0-2.61 1.8-4.05t5.16-1.44h5.7v-.75q0-3.6-4.08-3.6-3.45 0-4.14 2.49h-4.08q.51-2.79 2.64-4.29 2.16-1.5 5.61-1.5 3.87 0 5.91 1.8 2.04 1.77 2.04 5.16v7.29h1.95V40h-4.23v-2.85h-1.26q-.93 1.5-2.52 2.34t-3.84.84m.6-3.18q1.53 0 2.76-.6t1.92-1.59q.72-1.02.72-2.25v-.57h-5.49q-3.3 0-3.3 2.46 0 1.2.9 1.89.9.66 2.49.66" />
        <path fill="#1E1E24" d="M131.233 47.2V26.11h-2.07V22h4.26v2.85h1.26q.9-1.56 2.49-2.37 1.59-.84 3.81-.84 2.73 0 4.62 1.17 1.92 1.14 2.91 3.24 1.02 2.1 1.02 4.95t-.99 4.98q-.96 2.1-2.82 3.24-1.83 1.14-4.41 1.14-2.04 0-3.57-.78-1.5-.81-2.31-2.28h-.12v9.9zm9.03-10.35q2.52 0 3.84-1.56 1.35-1.56 1.35-4.29t-1.35-4.29q-1.32-1.56-3.84-1.56-2.25 0-3.6 1.29t-1.35 3.48v2.16q0 2.19 1.35 3.48t3.6 1.29" />
        <path fill="#1E1E24" d="M157.675 40q-1.65 0-2.58-.84-.9-.84-.9-2.55V25.18h-3.24V22h3.27v-5.4h4.02V22h4.47v3.18h-4.44v11.61h4.89V40z" />
        <path fill="#1E1E24" d="M174.109 40.36q-2.85 0-4.98-1.14a8.05 8.05 0 0 1-3.24-3.3q-1.14-2.13-1.14-4.98t1.11-4.92a7.95 7.95 0 0 1 3.21-3.24q2.07-1.14 4.89-1.14 2.7 0 4.65 1.08 1.95 1.05 3 3.03 1.08 1.95 1.08 4.65v1.5h-14.04q.24 2.46 1.65 3.81 1.41 1.32 3.78 1.32 1.74 0 2.85-.66t1.53-1.98h4.14q-.66 2.82-2.91 4.41-2.22 1.56-5.58 1.56m-5.34-11.31h10.02q-.24-1.98-1.5-3.03-1.26-1.08-3.33-1.08t-3.42 1.08q-1.35 1.05-1.77 3.03" />
        <path fill="#1E1E24" d="M187.09 40V26.11h-2.07V22h4.26v3.45h1.26q.72-1.77 2.28-2.7 1.59-.93 3.63-.93h1.5v3.51h-1.68q-2.55 0-3.87 1.47-1.29 1.47-1.29 3.93V40z" />
      </g>
    </svg>
  );
}

// ============================================================================
// SLIDE TEMPLATES
// ============================================================================

// Title Slide Template
function TitleSlide({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <LeapterLogo className="mb-12" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        style={{ color: BRAND.colors.text }}
      >
        {title || "Slide Title"}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl max-w-3xl"
        style={{ color: BRAND.colors.textMuted }}
      >
        {subtitle || "Slide subtitle or description goes here"}
      </motion.p>
    </div>
  );
}

// Content Slide Template (Title + Content Area)
function ContentSlide({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-12"
        style={{ color: BRAND.colors.text }}
      >
        {title || "Slide Title"}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex-1 flex items-center justify-center"
      >
        {children || (
          <div
            className="w-full h-full rounded-2xl border-2 border-dashed flex items-center justify-center"
            style={{ borderColor: BRAND.colors.textMuted + "40" }}
          >
            <p style={{ color: BRAND.colors.textMuted }}>Content area</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// Two Column Slide Template
function TwoColumnSlide({
  title,
  leftContent,
  rightContent,
}: {
  title?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-12"
        style={{ color: BRAND.colors.text }}
      >
        {title || "Slide Title"}
      </motion.h2>
      <div className="flex-1 grid grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center"
        >
          {leftContent || (
            <div
              className="w-full h-full rounded-2xl border-2 border-dashed flex items-center justify-center"
              style={{ borderColor: BRAND.colors.textMuted + "40" }}
            >
              <p style={{ color: BRAND.colors.textMuted }}>Left column</p>
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center"
        >
          {rightContent || (
            <div
              className="w-full h-full rounded-2xl border-2 border-dashed flex items-center justify-center"
              style={{ borderColor: BRAND.colors.textMuted + "40" }}
            >
              <p style={{ color: BRAND.colors.textMuted }}>Right column</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

// Bullet Points Slide Template
function BulletSlide({
  title,
  bullets,
}: {
  title?: string;
  bullets?: string[];
}) {
  const defaultBullets = ["Point one", "Point two", "Point three", "Point four"];
  const items = bullets || defaultBullets;

  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-12"
        style={{ color: BRAND.colors.text }}
      >
        {title || "Slide Title"}
      </motion.h2>
      <div className="flex-1 flex items-center">
        <ul className="space-y-6 text-2xl">
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4"
            >
              <span
                className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                style={{ background: BRAND.gradient }}
              />
              <span style={{ color: BRAND.colors.text }}>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Image Slide Template
function ImageSlide({
  title,
  imageUrl,
  caption,
}: {
  title?: string;
  imageUrl?: string;
  caption?: string;
}) {
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-8"
        style={{ color: BRAND.colors.text }}
      >
        {title || "Slide Title"}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="flex-1 flex flex-col items-center justify-center"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title || "Slide image"}
            className="max-h-[60vh] rounded-2xl shadow-2xl"
          />
        ) : (
          <div
            className="w-full max-w-4xl h-96 rounded-2xl border-2 border-dashed flex items-center justify-center"
            style={{ borderColor: BRAND.colors.textMuted + "40" }}
          >
            <p style={{ color: BRAND.colors.textMuted }}>Image placeholder</p>
          </div>
        )}
        {caption && (
          <p className="mt-4 text-lg" style={{ color: BRAND.colors.textMuted }}>
            {caption}
          </p>
        )}
      </motion.div>
    </div>
  );
}

// Quote Slide Template
function QuoteSlide({
  quote,
  author,
  role,
}: {
  quote?: string;
  author?: string;
  role?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl"
      >
        <div
          className="text-8xl font-bold mb-4"
          style={{ background: BRAND.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          &ldquo;
        </div>
        <blockquote
          className="text-3xl md:text-4xl font-medium leading-relaxed mb-8"
          style={{ color: BRAND.colors.text }}
        >
          {quote || "Quote text goes here"}
        </blockquote>
        <div>
          <p className="text-xl font-semibold" style={{ color: BRAND.colors.text }}>
            {author || "Author Name"}
          </p>
          <p className="text-lg" style={{ color: BRAND.colors.textMuted }}>
            {role || "Title, Company"}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// End Slide Template
function EndSlide({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center h-full text-center px-16"
      style={{ background: BRAND.gradient }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
          {title || "Thank You"}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
          {subtitle || "Questions?"}
        </p>
      </motion.div>
    </div>
  );
}

// ============================================================================
// SAMPLE SLIDES (Template Examples)
// ============================================================================

const slides = [
  <TitleSlide key="1" title="Presentation Title" subtitle="Your subtitle or tagline here" />,
  <ContentSlide key="2" title="Content Slide" />,
  <TwoColumnSlide key="3" title="Two Columns" />,
  <BulletSlide key="4" title="Key Points" />,
  <ImageSlide key="5" title="Visual Slide" />,
  <QuoteSlide key="6" quote="Add your quote here" author="Author" role="Title, Company" />,
  <EndSlide key="7" />,
];

// ============================================================================
// MAIN PRESENTATION COMPONENT
// ============================================================================

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Slide animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ backgroundColor: BRAND.colors.background }}
    >
      {/* Slide Content */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ color: BRAND.colors.text }}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ color: BRAND.colors.text }}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="w-3 h-3 rounded-full transition-all"
            style={{
              background: index === currentSlide ? BRAND.gradient : BRAND.colors.textMuted + "40",
              transform: index === currentSlide ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div
        className="absolute bottom-6 right-6 text-sm font-mono"
        style={{ color: BRAND.colors.textMuted }}
      >
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Logo in corner */}
      <div className="absolute top-6 left-6">
        <LeapterLogo className="h-8 w-auto" />
      </div>
    </div>
  );
}
