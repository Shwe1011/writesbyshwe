"use client";

import { useEffect, useRef, useState } from "react";

type Animation = "fadeInUp" | "fadeIn" | "scaleIn";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: Animation;
}

const animationClass: Record<Animation, string> = {
  fadeInUp: "animate-fade-in-up",
  fadeIn: "animate-fade-in",
  scaleIn: "animate-scale-in",
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fadeInUp",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? animationClass[animation] : "opacity-0"} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
