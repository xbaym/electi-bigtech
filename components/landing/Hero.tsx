"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AssessmentModal } from "@/components/landing/AssessmentModal";
import { useState } from "react";

const OFFERINGS = [
    "Carefully chosen mentors to guide and support you",
    "Job application support & referrals",
    "Mock interview preparation",
    "Resume prep and improvements",
    "Community of likeminded engineers"
];

export const Hero = () => {
    const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

    return (
        <section className="relative flex flex-col items-center justify-center w-full min-h-screen py-20 overflow-hidden bg-white">
            <AssessmentModal isOpen={isAssessmentOpen} onClose={() => setIsAssessmentOpen(false)} />
            {/* Background Pattern */}
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                "opacity-50"
                )}
            />

            <div className="z-10 flex flex-col items-center max-w-5xl px-4 mx-auto text-center gap-8">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium rounded-full border-orange-200 bg-orange-50/50 text-orange-700 backdrop-blur-sm">
                        Mentors from World-Class Teams
                    </Badge>
                </motion.div>

                {/* Headlines */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl font-bold tracking-tighter text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
                        Your Path to <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                             Big Tech Engineering
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-500 sm:text-xl">
                        Get personalized mentorship, mock interviews, and referrals to land your dream job.
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ShimmerButton className="shadow-2xl" onClick={() => setIsAssessmentOpen(true)}>
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Get my free guide and check my eligibility
                        </span>
                    </ShimmerButton>
                </motion.div>

                {/* Offerings List */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl text-left"
                >
                    {OFFERINGS.map((item, i) => (
                        <div key={i} className={cn(
                            "flex items-center gap-3 p-4 rounded-xl border bg-white/50 backdrop-blur-sm",
                            "border-slate-100 shadow-sm hover:shadow-md transition-all duration-300",
                            i === OFFERINGS.length - 1 && OFFERINGS.length % 2 !== 0 ? "sm:col-span-2 sm:justify-center" : ""
                        )}>
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
