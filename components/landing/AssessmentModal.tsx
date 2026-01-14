"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, Loader2, Mail, MessageCircle, Phone, Briefcase, Layers, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface AssessmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Step = "loading" | "experience" | "stack" | "contact";
type ContactMethod = "email" | "telegram" | "whatsapp";

const EXPERIENCE_LEVELS = [
    { id: "junior", label: "Junior", sub: "0-1 years", icon: "🌱" },
    { id: "mid", label: "Middle", sub: "2-4 years", icon: "🚀" },
    { id: "senior", label: "Senior", sub: "5-7 years", icon: "💎" },
    { id: "lead", label: "Staff/Lead", sub: "8+ years", icon: "👑" },
];

const TECH_STACKS = [
    "React", "Node.js", "Python", "Java", "Go", 
    "Rust", "C++", "System Design", "AWS", 
    "Kotlin", "Swift", "Typescript", "Next.js"
];

const LOADING_MESSAGES = [
    "Connecting to AI Recruiter...",
    "Analyzing Market Demand...",
    "Calibrating Difficulty...",
    "Preparing Environment...",
    "Ready for Assessment"
];

export const AssessmentModal = ({ isOpen, onClose }: AssessmentModalProps) => {
    const [step, setStep] = useState<Step>("loading");
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);
    
    // Form Data
    const [experience, setExperience] = useState("");
    const [stack, setStack] = useState<string[]>([]);
    const [contactMethod, setContactMethod] = useState<ContactMethod>("email");
    const [contactValue, setContactValue] = useState("");

    // Reset when opening
    useEffect(() => {
        if (isOpen) {
            setStep("loading");
            setLoadingProgress(0);
            setLoadingMsgIndex(0);
            setExperience("");
            setStack([]);
            setContactValue("");
            
            // Mock Loading Process
            const interval = setInterval(() => {
                setLoadingProgress(prev => {
                    const next = prev + 1; // slow progress 
                    if (next >= 100) return 100;
                    return next;
                });
            }, 30);

            const msgInterval = setInterval(() => {
                setLoadingMsgIndex(prev => (prev + 1) % LOADING_MESSAGES.length);
            }, 800);

            const timer = setTimeout(() => {
                clearInterval(interval);
                clearInterval(msgInterval);
                setLoadingProgress(100);
                setTimeout(() => setStep("experience"), 500);
            }, 3500);

            return () => {
                clearTimeout(timer);
                clearInterval(interval);
                clearInterval(msgInterval);
            };
        }
    }, [isOpen]);

    const handleStackToggle = (tech: string) => {
        setStack(prev => 
            prev.includes(tech) 
                ? prev.filter(t => t !== tech)
                : [...prev, tech]
        );
    };

    const handleNext = () => {
        if (step === "experience") setStep("stack");
        else if (step === "stack") setStep("contact");
    };

    const handleSubmit = () => {
        // TODO: Submit data to backend
        console.log({ experience, stack, contactMethod, contactValue });
        alert("Thanks! We will contact you shortly.");
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm"
                    />
                    
                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="w-full max-w-lg bg-white pointer-events-auto rounded-2xl shadow-2xl overflow-hidden border border-slate-100 relative">
                            {/* Close Button */}
                            {step !== "loading" && (
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}

                            {/* Content */}
                            <div className="p-8">
                                <AnimatePresence mode="wait">
                                    {step === "loading" && (
                                        <motion.div
                                            key="loading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                                        >
                                            <div className="relative w-20 h-20">
                                                <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
                                                <div 
                                                    className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center font-bold text-sm text-indigo-600">
                                                    {loadingProgress}%
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-semibold text-slate-900">
                                                    Setting up Environment
                                                </h3>
                                                <p className="text-slate-500 h-6">
                                                    {LOADING_MESSAGES[loadingMsgIndex]}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === "experience" && (
                                        <motion.div
                                            key="experience"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="text-center space-y-2">
                                                <h2 className="text-2xl font-bold text-slate-900">Experience Level</h2>
                                                <p className="text-slate-500">Help the AI tailor the difficulty.</p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                {EXPERIENCE_LEVELS.map((level) => (
                                                    <button
                                                        key={level.id}
                                                        onClick={() => setExperience(level.id)}
                                                        className={cn(
                                                            "relative p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02]",
                                                            experience === level.id
                                                                ? "border-indigo-600 bg-indigo-50/50"
                                                                : "border-slate-100 hover:border-indigo-200 hover:bg-slate-50"
                                                        )}
                                                    >
                                                        <div className="text-2xl mb-2">{level.icon}</div>
                                                        <div className="font-semibold text-slate-900">{level.label}</div>
                                                        <div className="text-xs text-slate-500">{level.sub}</div>
                                                        
                                                        {experience === level.id && (
                                                            <div className="absolute top-3 right-3 text-indigo-600">
                                                                <Check className="w-5 h-5" />
                                                            </div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>

                                            <Button 
                                                className="w-full h-12 text-lg gap-2"
                                                onClick={handleNext}
                                                disabled={!experience}
                                            >
                                                Continue <ArrowRight className="w-5 h-5" />
                                            </Button>
                                        </motion.div>
                                    )}

                                    {step === "stack" && (
                                        <motion.div
                                            key="stack"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="text-center space-y-2">
                                                <h2 className="text-2xl font-bold text-slate-900">Your Tech Stack</h2>
                                                <p className="text-slate-500">Select technologies you use.</p>
                                            </div>

                                            <div className="flex flex-wrap gap-2 justify-center py-4">
                                                {TECH_STACKS.map((tech) => (
                                                    <button
                                                        key={tech}
                                                        onClick={() => handleStackToggle(tech)}
                                                        className={cn(
                                                            "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                                                            stack.includes(tech)
                                                                ? "bg-indigo-600 text-white border-indigo-600 shadow-md transform scale-105"
                                                                : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50"
                                                        )}
                                                    >
                                                        {tech}
                                                    </button>
                                                ))}
                                            </div>

                                            <Button 
                                                className="w-full h-12 text-lg gap-2"
                                                onClick={handleNext}
                                                disabled={stack.length === 0}
                                            >
                                                Continue <ArrowRight className="w-5 h-5" />
                                            </Button>
                                        </motion.div>
                                    )}

                                    {step === "contact" && (
                                        <motion.div
                                            key="contact"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="text-center space-y-2">
                                                <h2 className="text-2xl font-bold text-slate-900">Get Your Plan</h2>
                                                <p className="text-slate-500">Where should we send your results?</p>
                                            </div>

                                            <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1 rounded-lg">
                                                {(["email", "telegram", "whatsapp"] as const).map((method) => (
                                                    <button
                                                        key={method}
                                                        onClick={() => setContactMethod(method)}
                                                        className={cn(
                                                            "flex items-center justify-center p-2 rounded-md text-sm font-medium transition-all",
                                                            contactMethod === method
                                                                ? "bg-white text-slate-900 shadow-sm"
                                                                : "text-slate-500 hover:text-slate-700"
                                                        )}
                                                    >
                                                        {method === "email" && <Mail className="w-4 h-4 mr-2" />}
                                                        {method === "telegram" && <MessageCircle className="w-4 h-4 mr-2" />}
                                                        {method === "whatsapp" && <Phone className="w-4 h-4 mr-2" />}
                                                        <span className="capitalize">{method}</span>
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-700">
                                                    {contactMethod === "email" ? "Email Address" : 
                                                     contactMethod === "telegram" ? "Telegram Username" : "WhatsApp Number"}
                                                </label>
                                                <Input 
                                                    value={contactValue}
                                                    onChange={(e) => setContactValue(e.target.value)}
                                                    placeholder={
                                                        contactMethod === "email" ? "you@example.com" :
                                                        contactMethod === "telegram" ? "@username" : "+1 234 567 8900"
                                                    }
                                                    className="h-12 text-lg"
                                                />
                                            </div>

                                            <Button 
                                                className="w-full h-12 text-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-200"
                                                onClick={handleSubmit}
                                                disabled={!contactValue}
                                            >
                                                Start Assessment
                                            </Button>
                                            
                                            <p className="text-xs text-center text-slate-400">
                                                By clicking Start, you agree to our Terms of Service and Privacy Policy.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                
                                {/* Step Indicator */}
                                {step !== "loading" && (
                                    <div className="flex justify-center gap-2 mt-8">
                                        {(["experience", "stack", "contact"] as const).map((s) => (
                                            <div
                                                key={s}
                                                className={cn(
                                                    "h-1.5 rounded-full transition-all duration-300",
                                                    s === step ? "w-8 bg-indigo-600" : 
                                                    (step === "stack" && s === "experience") || (step === "contact" && s !== "contact") 
                                                        ? "w-2 bg-indigo-200" 
                                                        : "w-2 bg-slate-100"
                                                )}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
