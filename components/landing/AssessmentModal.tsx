"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AssessmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AssessmentModal = ({ isOpen, onClose }: AssessmentModalProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    
    // Form Data
    const [fullName, setFullName] = useState("");
    const [telegram, setTelegram] = useState("");
    const [linkedin, setLinkedin] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log({ fullName, telegram, linkedin });
        setIsLoading(false);
        setIsSuccess(true);
        
        // Close after success message
        setTimeout(() => {
            onClose();
            setIsSuccess(false);
            setFullName("");
            setTelegram("");
            setLinkedin("");
        }, 2000);
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
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Content */}
                            <div className="p-8">
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">Success!</h3>
                                        <p className="text-slate-500">Your guide is on its way.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="text-center space-y-2">
                                            <h2 className="text-2xl font-bold text-slate-900">Get Your Free Guide</h2>
                                            <p className="text-slate-500">
                                                Preparation to get into Big Tech
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="fullName">Full Name</Label>
                                                <Input 
                                                    id="fullName"
                                                    value={fullName}
                                                    onChange={(e) => setFullName(e.target.value)}
                                                    placeholder="John Doe"
                                                    required
                                                    className="h-11"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="telegram">Telegram or Phone Number</Label>
                                                <Input 
                                                    id="telegram"
                                                    value={telegram}
                                                    onChange={(e) => setTelegram(e.target.value)}
                                                    placeholder="@username or +1 234..."
                                                    required
                                                    className="h-11"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="linkedin">LinkedIn (Optional)</Label>
                                                <Input 
                                                    id="linkedin"
                                                    value={linkedin}
                                                    onChange={(e) => setLinkedin(e.target.value)}
                                                    placeholder="linkedin.com/in/johndoe"
                                                    className="h-11"
                                                />
                                            </div>
                                        </div>

                                        <Button 
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full h-12 text-base font-semibold bg-slate-900 hover:bg-slate-800"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    Get my free guide & Check Eligibility
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </>
                                            )}
                                        </Button>

                                        <p className="text-xs text-center text-slate-400">
                                            We respect your privacy. No spam.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
