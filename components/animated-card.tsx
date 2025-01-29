"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type React from "react" // Added import for React

export function AnimatedCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className={className}>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  )
}

