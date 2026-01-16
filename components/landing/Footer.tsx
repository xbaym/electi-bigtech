"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AssessmentModal } from "@/components/landing/AssessmentModal";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <AssessmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* CTA Section */}
      <div className="container px-4 py-24 mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
          Ready to double your salary?
        </h2>
        <p className="max-w-xl mx-auto mb-10 text-lg text-slate-400">
          Join 800+ engineers who have successfully transitioned to Big Tech companies using Electi.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
                size="lg" 
                className="h-12 px-8 text-base font-semibold bg-white text-slate-900 hover:bg-slate-100"
                onClick={() => setIsModalOpen(true)}
            >
                Join the Waitlist
            </Button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-slate-800/50 bg-slate-950">
        <div className="container px-4 py-8 mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Electi Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
                <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
                    Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
                    Terms of Service
                </Link>
                <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
                    Twitter
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
};
