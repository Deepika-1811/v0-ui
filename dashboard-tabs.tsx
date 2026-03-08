"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TaskCard } from "./task-card"
import type { Task } from "@/lib/mock-data"

interface DashboardTabsProps {
  myTasks: Task[]
  mySubmissions: Task[]
  savedTasks: Task[]
}

export function DashboardTabs({
  myTasks,
  mySubmissions,
  savedTasks,
}: DashboardTabsProps) {
  return (
    <Tabs defaultValue="my-tasks" className="w-full">
      <TabsList className="bg-secondary border border-border mb-6">
        <TabsTrigger
          value="my-tasks"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          My Tasks
        </TabsTrigger>
        <TabsTrigger
          value="my-submissions"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          My Submissions
        </TabsTrigger>
        <TabsTrigger
          value="saved"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Saved Tasks
        </TabsTrigger>
      </TabsList>

      <TabsContent value="my-tasks">
        {myTasks.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {myTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <EmptyState message="You haven't posted any tasks yet." />
        )}
      </TabsContent>

      <TabsContent value="my-submissions">
        {mySubmissions.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mySubmissions.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <EmptyState message="You haven't submitted any solutions yet." />
        )}
      </TabsContent>

      <TabsContent value="saved">
        {savedTasks.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <EmptyState message="You haven't saved any tasks yet." />
        )}
      </TabsContent>
    </Tabs>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <span className="text-2xl text-muted-foreground">📋</span>
      </div>
      <p className="text-muted-foreground">{message}</p>
    </div>
  )
}
