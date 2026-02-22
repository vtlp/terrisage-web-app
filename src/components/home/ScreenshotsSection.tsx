"use client";

import { motion } from "framer-motion";

export function ScreenshotsSection() {
  return (
    <section className="section-padding overflow-hidden bg-card">
      <div className="container-wide">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight"
          >
            {/* Powerful simplicity in every pixel */}
            Designed for real work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A high-performance CRM that feels like a natural extension of your workflow.
            Mobile-first for on-the-go action, desktop-native for the big picture.
            {/* Mobile-first means you can act from anywhere. On desktop, you simply see more at once. */}
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Screenshot Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-0 group"
          >
            <div className="bg-background/80 backdrop-blur-md rounded-2xl p-2 sm:p-4 border border-border/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden">
              <div className="aspect-[16/10] bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Abstract UI Elements */}
                <div className="absolute inset-0 grid grid-cols-12 gap-4 p-6 opacity-30">
                  <div className="col-span-3 space-y-4">
                    <div className="h-full bg-foreground/10 rounded-lg"></div>
                  </div>
                  <div className="col-span-9 space-y-6">
                    <div className="h-12 bg-foreground/10 rounded-lg w-1/3"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-32 bg-primary/20 rounded-xl border border-primary/20"></div>
                      <div className="h-32 bg-foreground/10 rounded-xl"></div>
                      <div className="h-32 bg-foreground/10 rounded-xl"></div>
                    </div>
                    <div className="h-64 bg-foreground/10 rounded-xl w-full"></div>
                  </div>
                </div>
                <div className="text-center z-10">
                  <span className="text-sm font-medium text-muted-foreground px-4 py-2 bg-background/50 rounded-full border border-border">
                    Desktop Dashboard View
                  </span>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.div>

          {/* Mobile Screenshot 1 - Left Overlap */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute -left-4 sm:-left-20 -bottom-10 sm:-bottom-20 z-10 w-40 sm:w-64"
          >
            <div className="bg-background rounded-[2.5rem] p-2 sm:p-3 border border-border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] group hover:-translate-y-4 transition-transform duration-500">
              <div className="bg-muted rounded-[2rem] aspect-[9/19.5] flex items-center justify-center relative overflow-hidden">
                {/* Abstract Mobile UI */}
                <div className="absolute inset-x-4 top-12 bottom-4 space-y-4 opacity-40">
                  <div className="h-2 w-12 bg-primary/40 rounded mx-auto mb-8"></div>
                  <div className="h-32 bg-foreground/10 rounded-2xl"></div>
                  <div className="h-4 w-full bg-foreground/10 rounded"></div>
                  <div className="h-4 w-2/3 bg-foreground/10 rounded"></div>
                  <div className="space-y-2 pt-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-12 bg-foreground/5 rounded-xl border border-border/50"></div>
                    ))}
                  </div>
                </div>
                <div className="text-center z-10 transform -rotate-12">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    Mobile Lead Detail
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Screenshot 2 - Right Overlap */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute -right-4 sm:-right-16 top-1/4 sm:top-1/3 z-10 w-36 sm:w-56"
          >
            <div className="bg-background rounded-[2.5rem] p-2 border border-border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] group hover:-translate-y-4 transition-transform duration-500">
              <div className="bg-muted rounded-[2rem] aspect-[9/19.5] flex items-center justify-center relative overflow-hidden">
                {/* Abstract Mobile UI */}
                <div className="absolute inset-x-4 top-12 bottom-4 space-y-4 opacity-40">
                  <div className="h-2 w-8 bg-foreground/20 rounded mx-auto mb-8"></div>
                  <div className="h-16 w-16 bg-primary/20 rounded-full mx-auto mb-4"></div>
                  <div className="h-4 w-2/3 bg-foreground/10 rounded mx-auto"></div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="h-20 bg-foreground/10 rounded-xl"></div>
                    <div className="h-20 bg-foreground/10 rounded-xl"></div>
                  </div>
                  <div className="h-32 bg-foreground/10 rounded-xl mt-4"></div>
                </div>
                <div className="text-center z-10 transform rotate-6">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-foreground/70 bg-foreground/5 px-3 py-1.5 rounded-full border border-border/50">
                    Insights
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <p className="text-sm text-muted-foreground/60 italic">
            Screenshots are for illustrative purposes and represent the potential UI layout.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
