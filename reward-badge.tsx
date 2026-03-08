"use client"

import { DollarSign } from "lucide-react"

interface RewardBadgeProps {
  amount: number
  size?: "sm" | "md" | "lg"
}

export function RewardBadge({ amount, size = "md" }: RewardBadgeProps) {
  const sizeClasses = {
    sm: "text-sm px-2 py-0.5",
    md: "text-base px-3 py-1",
    lg: "text-xl px-4 py-2",
  }

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-400 font-bold ${sizeClasses[size]} border border-emerald-500/30`}
    >
      <DollarSign className={iconSizes[size]} />
      {amount.toLocaleString()}
    </div>
  )
}
