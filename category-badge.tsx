"use client"

import { Badge } from "@/components/ui/badge"
import { Code, Palette, Brain, Megaphone, PenTool } from "lucide-react"

const categoryConfig: Record<
  string,
  { icon: React.ElementType; className: string }
> = {
  Development: {
    icon: Code,
    className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  Design: {
    icon: Palette,
    className: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  },
  "AI / ML": {
    icon: Brain,
    className: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  Marketing: {
    icon: Megaphone,
    className: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  Writing: {
    icon: PenTool,
    className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
}

interface CategoryBadgeProps {
  category: string
  showIcon?: boolean
}

export function CategoryBadge({
  category,
  showIcon = true,
}: CategoryBadgeProps) {
  const config = categoryConfig[category] || {
    icon: Code,
    className: "bg-muted text-muted-foreground",
  }
  const Icon = config.icon

  return (
    <Badge
      variant="outline"
      className={`${config.className} font-medium flex items-center gap-1.5`}
    >
      {showIcon && <Icon className="h-3 w-3" />}
      {category}
    </Badge>
  )
}
