"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const companies = [
  "Google",
  "Meta",
  "Amazon",
  "Netflix",
  "Uber",
  "Stripe",
  "Microsoft",
  "Apple",
  "Airbnb",
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100/50">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
          Mentors from world-class engineering teams
        </p>
      </div>
      
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {companies.map((company) => (
            <div
              key={company}
              className={cn(
                "mx-8 flex items-center justify-center",
                "text-2xl font-bold text-slate-300 select-none grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
              )}
            >
              {company}
            </div>
          ))}
        </Marquee>
        
        {/* Gradients to fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};
