"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AssessmentModal } from "@/components/landing/AssessmentModal";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = [
    { name: "Product", href: "#product" },
    { name: "Pricing", href: "#pricing" },
    { name: "Success Stories", href: "#stories" },
  ];

  return (
    <>
      <AssessmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/50 border-b border-zinc-200"
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
            Electi
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
            Sign In
          </Button> */}
          <Button 
            className="rounded-full bg-slate-900 text-white hover:bg-slate-800"
            onClick={() => setIsModalOpen(true)}
          >
            Start Training
          </Button>
        </div>
      </motion.nav>
    </>
  );
};
