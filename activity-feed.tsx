"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Trophy, Plus, Activity } from "lucide-react"
import type { Activity as ActivityType } from "@/lib/mock-data"

interface ActivityFeedProps {
  activities: ActivityType[]
}

const activityIcons = {
  submission: FileText,
  winner: Trophy,
  new_task: Plus,
}

const activityColors = {
  submission: "bg-blue-500/20 text-blue-400",
  winner: "bg-emerald-500/20 text-emerald-400",
  new_task: "bg-purple-500/20 text-purple-400",
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2 text-foreground">
          <Activity className="h-5 w-5 text-primary" />
          Activity Feed
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const Icon = activityIcons[activity.type]
          const colorClass = activityColors[activity.type]

          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div
                className={`h-8 w-8 rounded-lg ${colorClass} flex items-center justify-center shrink-0`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">{activity.message}</p>
                <p className="text-xs text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
