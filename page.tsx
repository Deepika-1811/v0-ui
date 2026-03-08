"use client"

import { use, useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/smarthire/navbar"
import { Footer } from "@/components/smarthire/footer"
import { CategoryBadge } from "@/components/smarthire/category-badge"
import { DifficultyBadge } from "@/components/smarthire/difficulty-badge"
import { RewardBadge } from "@/components/smarthire/reward-badge"
import { SubmissionModal } from "@/components/smarthire/submission-modal"
import { mockTasks } from "@/lib/mock-data"
import {
  ArrowLeft,
  Clock,
  Eye,
  FileText,
  Download,
  Bookmark,
  Share2,
  CheckCircle2,
} from "lucide-react"

function getDeadlineText(deadline: string): { text: string; isUrgent: boolean } {
  const deadlineDate = new Date(deadline)
  const now = new Date()
  const diffTime = deadlineDate.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 0) return { text: "Expired", isUrgent: true }
  if (diffDays === 0) return { text: "Due today", isUrgent: true }
  if (diffDays === 1) return { text: "Due tomorrow", isUrgent: true }
  if (diffDays <= 7) return { text: `${diffDays} days left`, isUrgent: true }
  return { text: `${Math.ceil(diffDays / 7)} weeks left`, isUrgent: false }
}

export default function TaskDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = use(params)
  const task = mockTasks.find((t) => t.id === resolvedParams.id)
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(task?.isBookmarked || false)

  if (!task) {
    notFound()
  }

  const deadline = getDeadlineText(task.deadline)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back Link */}
          <Link
            href="/tasks"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tasks
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <CategoryBadge category={task.category} />
                  <DifficultyBadge difficulty={task.difficulty} />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {task.title}
                </h1>

                <div className="flex items-center gap-4 flex-wrap text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Eye className="h-4 w-4" />
                    {task.views} views
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FileText className="h-4 w-4" />
                    {task.submissionCount} submissions
                  </span>
                  {task.postedBy && (
                    <span>
                      Posted by{" "}
                      <span className="text-foreground font-medium">
                        {task.postedBy}
                      </span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {task.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Description */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Description
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {task.description}
                  </p>
                </CardContent>
              </Card>

              {/* Requirements */}
              {task.requirements && task.requirements.length > 0 && (
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold text-foreground mb-4">
                      Requirements
                    </h2>
                    <ul className="space-y-3">
                      {task.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Attachments */}
              {task.attachments && task.attachments.length > 0 && (
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold text-foreground mb-4">
                      Attachments
                    </h2>
                    <div className="space-y-3">
                      {task.attachments.map((attachment, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">
                                {attachment.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {attachment.size}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="bg-card border-border">
                  <CardContent className="p-6 space-y-6">
                    {/* Reward */}
                    <div className="text-center pb-6 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-2">
                        Reward
                      </p>
                      <RewardBadge amount={task.reward} size="lg" />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-secondary rounded-xl">
                        <p className="text-2xl font-bold text-foreground">
                          {task.views}
                        </p>
                        <p className="text-xs text-muted-foreground">Views</p>
                      </div>
                      <div className="text-center p-4 bg-secondary rounded-xl">
                        <p className="text-2xl font-bold text-foreground">
                          {task.submissionCount}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Submissions
                        </p>
                      </div>
                    </div>

                    {/* Deadline */}
                    <div
                      className={`flex items-center justify-center gap-2 p-4 rounded-xl ${
                        deadline.isUrgent
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      <Clock className="h-5 w-5" />
                      <span className="font-medium">{deadline.text}</span>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12"
                        onClick={() => setIsSubmitModalOpen(true)}
                      >
                        Submit Solution
                      </Button>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant="outline"
                          className={`bg-card border-border hover:bg-secondary ${
                            isBookmarked
                              ? "text-primary border-primary"
                              : "text-foreground"
                          }`}
                          onClick={() => setIsBookmarked(!isBookmarked)}
                        >
                          <Bookmark
                            className={`h-4 w-4 mr-2 ${
                              isBookmarked ? "fill-primary" : ""
                            }`}
                          />
                          Save
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-card border-border text-foreground hover:bg-secondary"
                        >
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <SubmissionModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        taskTitle={task.title}
      />
    </div>
  )
}
