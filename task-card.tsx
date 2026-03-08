"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bookmark, Clock, Eye, FileText } from "lucide-react"
import { CategoryBadge } from "./category-badge"
import { DifficultyBadge } from "./difficulty-badge"
import { RewardBadge } from "./reward-badge"
import type { Task } from "@/lib/mock-data"

interface TaskCardProps {
  task: Task
  onBookmark?: (id: string) => void
}

function getDeadlineText(deadline: string): string {
  const deadlineDate = new Date(deadline)
  const now = new Date()
  const diffTime = deadlineDate.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 0) return "Expired"
  if (diffDays === 0) return "Due today"
  if (diffDays === 1) return "Due tomorrow"
  if (diffDays <= 7) return `${diffDays} days left`
  return `${Math.ceil(diffDays / 7)} weeks left`
}

export function TaskCard({ task, onBookmark }: TaskCardProps) {
  const deadlineText = getDeadlineText(task.deadline)
  const isUrgent = deadlineText.includes("today") || deadlineText.includes("tomorrow")

  return (
    <Link href={`/tasks/${task.id}`}>
      <Card className="group bg-card border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full flex flex-col">
        <CardHeader className="space-y-3 pb-3">
          <div className="flex items-start justify-between gap-2">
            <CategoryBadge category={task.category} />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0 text-muted-foreground hover:text-primary"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onBookmark?.(task.id)
              }}
            >
              <Bookmark
                className={`h-4 w-4 ${task.isBookmarked ? "fill-primary text-primary" : ""}`}
              />
            </Button>
          </div>
          <div className="space-y-2">
            <RewardBadge amount={task.reward} size="sm" />
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {task.title}
            </h3>
          </div>
        </CardHeader>

        <CardContent className="flex-1 pb-3">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {task.description}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <DifficultyBadge difficulty={task.difficulty} />
            {task.tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-secondary text-secondary-foreground text-xs"
              >
                {tag}
              </Badge>
            ))}
            {task.tags.length > 2 && (
              <Badge
                variant="secondary"
                className="bg-secondary text-secondary-foreground text-xs"
              >
                +{task.tags.length - 2}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-3 border-t border-border">
          <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Eye className="h-3.5 w-3.5" />
                {task.views}
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-3.5 w-3.5" />
                {task.submissionCount}
              </span>
            </div>
            <span
              className={`flex items-center gap-1 ${isUrgent ? "text-amber-400" : ""}`}
            >
              <Clock className="h-3.5 w-3.5" />
              {deadlineText}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
