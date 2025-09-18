"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/lib/data";
import {
  MapPin,
  Briefcase,
  Target,
  Rocket,
  GraduationCap,
  Code2,
  Languages,
  Mail,
  CheckCircle
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="space-y-12"
        >
          {/* About Me */}
          <motion.div variants={item} className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Quick Facts */}
          <motion.div variants={item}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Quick Facts</h3>
                <div className="space-y-4">

                  {/* Location */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" /> Location
                    </span>
                    <span className="text-sm sm:text-base">{personalInfo.location}</span>
                  </div>

                  {/* Experience */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" /> Experience
                    </span>
                    <span className="text-sm sm:text-base">2+ years</span>
                  </div>

                  {/* Focus */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Target className="h-4 w-4" /> Focus
                    </span>
                    <span className="text-sm sm:text-base">Backend + Machine Learning</span>
                  </div>

                  {/* Current Role */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Rocket className="h-4 w-4" /> Current Role
                    </span>
                    <span className="text-sm sm:text-base">Software Engineer @ Axtria</span>
                  </div>

                  {/* Education */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <GraduationCap className="h-4 w-4" /> Education
                    </span>
                    <span className="text-sm sm:text-base">B.Tech - Computer Science (2025)</span>
                  </div>

                  {/* Languages */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Languages className="h-4 w-4" /> Languages
                    </span>
                    <span className="text-sm sm:text-base">English, Spanish, Hindi</span>
                  </div>

                  {/* Availability */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4" /> Availability
                    </span>
                    <Badge variant="secondary">Open to opportunities</Badge>
                  </div>

                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
