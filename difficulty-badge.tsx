"use client"

import { Badge } from "@/components/ui/badge"

const difficultyConfig = {
  easy: {
    label: "Easy",
    className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  medium: {
    label: "Medium",
    className: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  hard: {
    label: "Hard",
    className: "bg-red-500/20 text-red-400 border-red-500/30",
  },
}

interface DifficultyBadgeProps {
  difficulty: "easy" | "medium" | "hard"
}

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const config = difficultyConfig[difficulty]

  return (
    <Badge variant="outline" className={`${config.className} font-medium`}>
      {config.label}
    </Badge>
  )
}
