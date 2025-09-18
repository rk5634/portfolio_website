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
          <motion.div variants={item} >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center justify-center">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" /> Location
                    </span>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" /> Experience
                    </span>
                    <span>2+ years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Target className="h-4 w-4" /> Focus
                    </span>
                    <span>Backend + ML</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Rocket className="h-4 w-4" /> Current Role
                    </span>
                    <span>Software Engineer @ Axtria</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <GraduationCap className="h-4 w-4" /> Education
                    </span>
                    <span>B.Tech - Computer Science (2025)</span>
                  </div>
                  {/* <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Code2 className="h-4 w-4" /> Tech Stack
                    </span>
                    <span>Go, Python, AWS, Postgres</span>
                  </div> */}
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Languages className="h-4 w-4" /> Languages
                    </span>
                    <span>English, Spanish, Hindi</span>
                  </div>
                  {/* <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" /> Contact
                    </span>
                    <a
                      href="mailto:rajiv@example.com"
                      className="text-primary hover:underline"
                    >
                      rajiv0099c@gmail.com
                    </a>
                  </div> */}
                  <div className="flex items-center justify-between">
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
