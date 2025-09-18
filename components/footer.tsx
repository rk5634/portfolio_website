"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          {/* Main footer line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
            <span>
              © {new Date().getFullYear()} {personalInfo.name}. Made with
            </span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and Next.js</span>
          </div>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-muted-foreground">
            Building scalable backend systems and intelligent ML solutions
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
