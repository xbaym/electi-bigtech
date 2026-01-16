"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, Send, Map } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Personal Plan",
      description: "Get a personalized roadmap to crack the interview.",
      icon: <Map className="w-6 h-6 text-slate-900" />,
    },
    {
      id: "02",
      title: "Mentorship",
      description: "Practice with engineers from top tech companies.",
      icon: <Users className="w-6 h-6 text-slate-900" />,
    },
    {
      id: "03",
      title: "Get Referred",
      description: "Our mentors push your profile directly to HR systems.",
      icon: <Send className="w-6 h-6 text-slate-900" />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="mb-16 text-center">
           <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            From practice to placement in three steps.
          </p>
        </div>

        <div className="relative">
            {/* Connecting Line (for desktop) */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 hidden md:block -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-24">
                {steps.map((step, index) => (
                    <div key={step.id} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Content */}
                        <div className={`flex-1 text-center ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                             <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                             <p className="text-slate-500 max-w-xs mx-auto md:mx-0">{step.description}</p>
                        </div>
                        
                        {/* Number/Icon */}
                        <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border border-slate-200 shadow-lg">
                            {step.icon}
                            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                                {step.id}
                            </div>
                        </div>
                        
                        {/* Empty Space for alignment */}
                        <div className="flex-1 hidden md:block"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
