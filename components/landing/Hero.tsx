"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Terminal, Code2 } from "lucide-react";
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
                        The AI simulator that trains engineers from developing markets to get hired at Google, Meta, and Amazon. Practice Coding & System Design with a ruthless AI Recruiter.
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
                                electi-workspace.tsx
                            </div>
                         </div>

                         {/* Split Screen Content */}
                         <div className="grid grid-cols-1 md:grid-cols-2 h-[400px]">
                            {/* Left: Code Editor */}
                            <div className="p-6 font-mono text-sm text-slate-300 border-r border-slate-800/50 bg-slate-950/50">
                                <div className="flex gap-2 text-slate-500 mb-4">
                                    <Code2 className="w-4 h-4" />
                                    <span>solution.py</span>
                                </div>
                                <div className="space-y-1">
                                    <p><span className="text-purple-400">def</span> <span className="text-blue-400">two_sum</span>(nums, target):</p>
                                    <p className="pl-4 text-slate-500"># Naive approach</p>
                                    <p className="pl-4"><span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-yellow-300">range</span>(<span className="text-yellow-300">len</span>(nums)):</p>
                                    <p className="pl-8"><span className="text-purple-400">for</span> j <span className="text-purple-400">in</span> <span className="text-yellow-300">range</span>(i + 1, <span className="text-yellow-300">len</span>(nums)):</p>
                                    <p className="pl-12"><span className="text-purple-400">if</span> nums[i] + nums[j] == target:</p>
                                    <p className="pl-16"><span className="text-purple-400">return</span> [i, j]</p>
                                </div>
                            </div>

                            {/* Right: AI Chat */}
                            <div className="flex flex-col p-6 bg-slate-900/30">
                                <div className="flex items-center gap-2 mb-6 text-slate-400 text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    AI Recruiter Online
                                </div>

                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold">
                                            AI
                                        </div>
                                        <div className="flex-1 bg-slate-800/50 rounded-lg rounded-tl-none p-3 text-sm text-slate-300 border border-slate-700/50">
                                            <p>I noticed your solution uses a nested loop, which results in <span className="text-orange-400 font-bold">O(n²)</span> time complexity.</p>
                                            <p className="mt-2 text-slate-400">In a Big Tech interview, this would likely be rejected due to inefficiency for large inputs.</p>
                                            <p className="mt-2">Can you optimize this to <span className="text-green-400 font-bold">O(n)</span> using a hash map?</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden">
                                           {/* User avatar placeholder */} 
                                           <div className="w-full h-full bg-slate-600" />
                                        </div>
                                        <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg rounded-tr-none p-3 text-sm text-blue-100">
                                            Good catch. Let me refactor using a dictionary.
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
