"use client";

import { motion } from "framer-motion";
import { UserCheck, Briefcase, MessageSquare, FileText, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AssessmentModal } from "@/components/landing/AssessmentModal";
import { useState } from "react";

const OFFERINGS = [
    {
        icon: UserCheck,
        text: "Carefully chosen mentors to guide and support you",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: Briefcase,
        text: "Job application support & referrals",
        color: "bg-orange-100 text-orange-600" 
    },
    {
        icon: MessageSquare,
        text: "Mock interview preparation",
        color: "bg-green-100 text-green-600"
    },
    {
        icon: FileText,
        text: "Resume prep and improvements",
        color: "bg-purple-100 text-purple-600"
    },
    {
        icon: Users,
        text: "Community of likeminded engineers",
        color: "bg-pink-100 text-pink-600"
    }
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

                {/* Offerings List / Bento Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full mt-16 max-w-5xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-left">
                        {OFFERINGS.map((item, i) => (
                            <div 
                                key={i} 
                                className={cn(
                                    "group relative flex flex-col gap-4 p-6 rounded-2xl border bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300",
                                    "border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1",
                                    // Bento Grid Layout Logic
                                    // First 3 items span 2 columns each (3x2 = 6)
                                    // Last 2 items span 3 columns each (2x3 = 6)
                                    i < 3 ? "md:col-span-2" : "md:col-span-3"
                                )}
                            >
                                <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
                                    item.color
                                )}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg leading-tight">
                                        {item.text}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
