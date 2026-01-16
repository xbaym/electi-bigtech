"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto max-w-5xl">
         <div className="mb-16 text-center">
           <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Invest in your career. Pay the rest when you succeed.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Membership Card */}
            <Card className="flex flex-col border-zinc-200 shadow-sm hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                    <CardTitle className="text-xl">Membership</CardTitle>
                    <div className="mt-4">
                        <span className="text-4xl font-bold text-slate-900">$250</span>
                        <span className="text-slate-500 ml-2">/month</span>
                    </div>
                    <CardDescription className="text-base text-slate-500 mt-2">
                        Get full access to the AI simulator and training materials.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <Separator className="mb-6 bg-slate-100" />
                    <ul className="space-y-4 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-slate-900" />
                            Mock Interview Preparation
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-slate-900" />
                            System Design Practice
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-slate-900" />
                            24/7 Availability
                        </li>
                         <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-slate-900" />
                            Personalized Improvement Plans
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full h-12 text-base font-semibold bg-slate-900 hover:bg-slate-800">
                        Start Training Now
                    </Button>
                </CardFooter>
            </Card>

             {/* Success Fee Card */}
            <Card className="flex flex-col border-zinc-200 shadow-sm hover:shadow-lg transition-shadow bg-slate-900 text-white border-transparent">
                <CardHeader>
                    <CardTitle className="text-xl text-slate-100">Success Fee</CardTitle>
                    <div className="mt-4">
                        <span className="text-4xl font-bold text-white">10%</span>
                        <span className="text-slate-400 ml-2">of 1st year salary</span>
                    </div>
                    <CardDescription className="text-base text-slate-400 mt-2">
                        Charged only when you land a job in US, EU, or Canada.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <Separator className="mb-6 bg-slate-800" />
                     <ul className="space-y-4 text-sm text-slate-300">
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-white" />
                            Career mentorship
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-white" />
                            Salary negotiation support
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-white" />
                            Direct referrals to HR
                        </li>
                        <li className="flex items-center gap-2 text-white font-medium">
                            <Check className="w-4 h-4 text-white" />
                            No fee if you don't get hired
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                     <Button variant="outline" className="w-full h-12 text-base font-semibold bg-white text-slate-900 hover:bg-slate-100 border-white hover:text-slate-900">
                        Join Waitlist
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
};
