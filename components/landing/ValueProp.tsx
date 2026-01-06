"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, DollarSign, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ValueProp = () => {
  return (
    <section id="product" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to crack the interview
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            A comprehensive training ground designed for the modern technical interview.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 auto-rows-[300px]">
          {/* Card 1: Dynamic AI Training (Large) */}
          <Card className="col-span-1 md:col-span-2 overflow-hidden border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Dynamic AI Training
              </CardTitle>
              <CardDescription>
                Practice with an AI that adapts to your skill level.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 h-full relative overflow-hidden">
               <div className="absolute inset-0 top-20 px-6 bg-slate-50/50 border-t border-slate-100">
                  <div className="space-y-4 mt-6">
                      <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">AI</div>
                          <div className="bg-white p-3 rounded-lg rounded-tl-none border border-slate-200 shadow-sm text-sm text-slate-600">
                              Let's discuss how you would design a URL shortener like Bit.ly.
                          </div>
                      </div>
                       <div className="flex gap-3 flex-row-reverse">
                          <div className="w-8 h-8 rounded-full bg-slate-200" />
                          <div className="bg-blue-600 p-3 rounded-lg rounded-tr-none shadow-sm text-sm text-white">
                              I would start by estimating the traffic and storage requirements...
                          </div>
                      </div>
                  </div>
               </div>
            </CardContent>
          </Card>

          {/* Card 2: The Referral License (Tall) */}
          <Card className="col-span-1 md:row-span-2 overflow-hidden border-zinc-200 shadow-sm hover:shadow-md transition-shadow relative bg-gradient-to-b from-white to-orange-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-orange-500" />
                The Referral License
              </CardTitle>
              <CardDescription>
                Unlock referrals to internal ATS systems.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-full pb-20">
                <div className="relative">
                    <div className="absolute inset-0 bg-orange-200 rounded-full blur-2xl opacity-20 animate-pulse" />
                    <div className="relative w-32 h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full border border-orange-200 flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-16 h-16 text-orange-500" />
                    </div>
                </div>
                <div className="mt-8 text-center space-y-2">
                    <Badge variant="outline" className="border-orange-200 bg-orange-100 text-orange-700">
                        Verified
                    </Badge>
                    <p className="text-sm text-slate-500 px-6">
                        Pass the AI exam to get pushed directly to HR.
                    </p>
                </div>
            </CardContent>
          </Card>

          {/* Card 3: Risk-Free Model */}
          <Card className="col-span-1 md:col-span-2 overflow-hidden border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
               <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Risk-Free Model
              </CardTitle>
              <CardDescription>
                Pay only when you succeed.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-full flex items-center px-6 pb-6">
                <div className="w-full flex justify-between items-center bg-slate-100 rounded-xl p-6 border border-slate-200">
                    <div>
                        <p className="text-2xl font-bold text-slate-900">$250/mo</p>
                        <p className="text-sm text-slate-500">Training Fee</p>
                    </div>
                    <div className="h-8 w-px bg-slate-300 mx-4" />
                    <div>
                         <p className="text-2xl font-bold text-slate-900">Success Fee</p>
                         <p className="text-sm text-slate-500">Upon hiring</p>
                    </div>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
