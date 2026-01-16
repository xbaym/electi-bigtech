"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const FitCheck = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Is Electi right for you?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            We are selective because we want you to succeed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Good Fit Column */}
          <div className="p-8 bg-white border rounded-2xl border-green-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
                <CheckCircle2 className="w-64 h-64 text-green-500" />
             </div>
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-100 rounded-full">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Electi is a good fit if you:</h3>
                </div>
                
                <ul className="space-y-4 text-slate-600">
                    {[
                        "Have 1+ year of professional software engineering experience",
                        "Are targeting Big Tech roles (Google, Meta, Amazon, etc.)",
                        "Can commit 10–15 hours per week to preparation",
                        "Are ready to prepare for 3–6 months (typical for Big Tech)"
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-slate-100">
                    <p className="font-semibold text-slate-900 mb-4">Are willing to:</p>
                    <ul className="space-y-3 text-slate-600">
                        {[
                            "Solve 150–300 coding problems (LeetCode-style)",
                            "Practice system design weekly (for mid/senior levels)",
                            "Do mock interviews and iterate on feedback"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2.5 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100 text-sm text-green-800 italic">
                    📌 This is how most successful Google / Meta candidates actually prepare.
                </div>
            </div>
          </div>

          {/* Not Good Fit Column */}
          <div className="p-8 bg-white border rounded-2xl border-red-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
                <XCircle className="w-64 h-64 text-red-500" />
             </div>
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-100 rounded-full">
                        <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Electi is NOT a good fit if you:</h3>
                </div>

                <ul className="space-y-4 text-slate-600">
                    {[
                        "Expect to get hired in 2–3 weeks",
                        "Want a guaranteed offer or referral without preparation",
                        "Are not ready to invest months of consistent effort",
                        "Are “just curious” about Big Tech but not fully committed",
                        "Are looking for shortcuts instead of skill-building"
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
