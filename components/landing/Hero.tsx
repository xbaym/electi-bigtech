"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Terminal, Code2, CheckCircle2, User, Video, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full min-h-screen py-20 overflow-hidden bg-white">
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
                        Backed by Mentors from FAANG
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
                        Crack the Big Tech <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                             Interview. Guaranteed.
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-500 sm:text-xl">
                        The AI simulator that trains engineers to get hired at Google, Meta, and Amazon. Practice Coding & System Design with a ruthless AI Recruiter.
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <div className="relative">
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Start Free Assessment
                            </span>
                        </ShimmerButton>
                    </div>
                    
                    <Button variant="outline" size="lg" className="rounded-full gap-2 h-12 px-6">
                        <Play className="w-4 h-4 fill-current" />
                        View Demo
                    </Button>
                </motion.div>

                {/* 3D Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative w-full mt-12 perspective-1000"
                >
                    {/* Tilted Container */}
                    <div 
                        className="relative w-full max-w-4xl mx-auto overflow-hidden bg-slate-950 rounded-xl border border-slate-800 shadow-2xl"
                        style={{
                            transform: "perspective(1000px) rotateX(2deg)",
                            transformStyle: "preserve-3d"
                        }}
                    >
                         <BorderBeam size={250} duration={12} delay={9} />
                         
                         {/* Mockup Window Header */}
                         <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>
                            <div className="flex-1 text-xs font-medium text-center text-slate-500 font-mono">
                                electi-dashboard.tsx
                            </div>
                         </div>

                         {/* Split Screen Content */}
                         <div className="grid grid-cols-1 md:grid-cols-2 h-[400px]">
                            {/* Left: AI Assessment */}
                            <div className="p-6 border-r border-slate-800/50 bg-slate-950/50 flex flex-col">
                                <div className="flex items-center gap-2 text-slate-400 mb-6 font-mono text-xs uppercase tracking-wider">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    AI Assessment
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Time Complexity</span>
                                            <span className="text-emerald-400 font-mono">O(n)</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-500 w-[95%]" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Code Quality</span>
                                            <span className="text-emerald-400 font-mono">98/100</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-500 w-[98%]" />
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium text-emerald-400">Optimal Solution</p>
                                                <p className="text-xs text-emerald-500/70 mt-1">Hash map approach validated. Ready for mentor review.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Mentor Feedback */}
                            <div className="relative flex flex-col p-6 bg-slate-900/30">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50 pointer-events-none" />
                                
                                <div className="flex items-center gap-2 text-slate-400 mb-6 font-mono text-xs uppercase tracking-wider relative z-10">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    Mentor Feedback
                                </div>

                                <div className="relative z-10 flex-1 flex flex-col">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden flex items-center justify-center">
                                                <User className="w-6 h-6 text-slate-400" />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 border-2 border-slate-950 rounded-full flex items-center justify-center">
                                                <Video className="w-3 h-3 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-slate-200">Sarah Chen</h3>
                                            <p className="text-xs text-slate-500">Video Call • 12:42</p>
                                            <div className="flex items-center gap-1.5 mt-1">
                                                <Badge variant="secondary" className="h-5 text-[10px] bg-slate-800 text-slate-400 border-slate-700">Google</Badge>
                                                <Badge variant="secondary" className="h-5 text-[10px] bg-slate-800 text-slate-400 border-slate-700">Senior Eng</Badge>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg rounded-tl-none p-4 backdrop-blur-sm">
                                            <p className="text-sm text-slate-300 leading-relaxed">
                                                "Great job optimizing to O(n)! Now let's discuss how this scales if the input dataset is distributed across multiple shards."
                                            </p>
                                        </div>
                                        <div className="flex gap-2 mt-4">
                                            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-500 text-white border-none gap-2">
                                                <Video className="w-4 h-4" />
                                                Join Call
                                            </Button>
                                            <Button size="sm" variant="outline" className="px-3 border-slate-700 hover:bg-slate-800">
                                                <Mic className="w-4 h-4 text-slate-400" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
