"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/data";
import * as LucideIcons from "lucide-react";

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

// helper to split array into chunks of 2
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export function SkillsSection() {
  // split categories into rows of 2
  const groupedSkills = chunkArray(skills, 2);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="space-y-16"
        >
          {/* Title */}
          <motion.div variants={item} className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
          </motion.div>

          {/* Rows of skills (2 categories side by side) */}
          {groupedSkills.map((group, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {group.map((skillCategory) => (
                <motion.div
                  key={skillCategory.category}
                  variants={item}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-4">
                    {skillCategory.skills.map((skill) => {
                      const IconComponent =
                        (LucideIcons as any)[skill.icon] || LucideIcons.Code;
                      return (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <IconComponent className="h-4 w-4 text-primary" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
