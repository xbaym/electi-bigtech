"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const FitCheck = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Who is Electi for?
            </h2>
          <p className="mt-4 text-lg text-slate-500">
            We are selective because we want you to succeed.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
            {/* Good Fit Column */}
            <div className="flex flex-col h-full p-8 border rounded-2xl border-zinc-200 bg-white hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white shadow-sm">
                        <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Electi is a good fit if you:</h3>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                    {[
                        "Have 1+ year of professional software engineering experience",
                        "Are targeting Big Tech roles (Google, Meta, Amazon, etc.)",
                        "Can commit 10–15 hours per week to preparation",
                        "Are ready to prepare for 3–6 months"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                            <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="pt-6 border-t border-slate-200">
                    <p className="font-semibold text-slate-900 mb-4">You are willing to:</p>
                    <ul className="space-y-3">
                        {[
                            "Solve 150–300 coding problems",
                            "Practice system design weekly",
                            "Do mock interviews and iterate on feedback"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Not Good Fit Column */}
            <div className="flex flex-col h-full p-8 border rounded-2xl border-zinc-200 bg-white">
                <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400">
                        <XCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-500">Electi is NOT a good fit if you:</h3>
                </div>

                <ul className="space-y-4">
                    {[
                        "Expect to get hired in 2–3 weeks",
                        "Want a guaranteed offer or referral without preparation",
                        "Are not ready to invest months of consistent effort",
                        "Are “just curious” but not fully committed",
                        "Are looking for shortcuts instead of skill-building"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-500">
                            <XCircle className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
        <div className="mt-12 text-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-50 rounded-full border border-slate-200">
                <span className="flex w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                This is how most successful Google / Meta candidates actually prepare.
            </div>
        </div>
      </div>
    </section>
  );
};
