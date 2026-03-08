export type Task = {
  id: string
  title: string
  description: string
  reward: number
  deadline: string
  category: string
  difficulty: "easy" | "medium" | "hard"
  tags: string[]
  submissionCount: number
  views: number
  isBookmarked?: boolean
  requirements?: string[]
  attachments?: { name: string; size: string }[]
  postedBy?: string
  postedAt?: string
}

export type Activity = {
  id: string
  type: "submission" | "winner" | "new_task"
  message: string
  timestamp: string
  user?: string
}

export const categories = [
  "All",
  "Development",
  "Design",
  "AI / ML",
  "Marketing",
  "Writing",
]

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Build AI Chatbot with RAG",
    description:
      "Create a conversational AI chatbot using retrieval-augmented generation. The bot should be able to answer questions based on provided documentation.",
    reward: 2500,
    deadline: "2026-03-15",
    category: "AI / ML",
    difficulty: "hard",
    tags: ["Python", "LangChain", "OpenAI", "Vector DB"],
    submissionCount: 12,
    views: 847,
    requirements: [
      "Must use LangChain or similar framework",
      "Support for PDF document ingestion",
      "Real-time streaming responses",
      "Deploy-ready with Docker",
    ],
    attachments: [
      { name: "requirements.pdf", size: "2.4 MB" },
      { name: "sample_docs.zip", size: "15 MB" },
    ],
    postedBy: "TechStart Inc.",
    postedAt: "2026-03-01",
  },
  {
    id: "2",
    title: "React Dashboard UI Components",
    description:
      "Design and implement a set of reusable dashboard components including charts, tables, and stat cards with dark mode support.",
    reward: 1800,
    deadline: "2026-03-20",
    category: "Development",
    difficulty: "medium",
    tags: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
    submissionCount: 8,
    views: 523,
    requirements: [
      "Must be fully responsive",
      "Dark and light mode support",
      "Accessible (WCAG 2.1 AA)",
      "Storybook documentation",
    ],
    postedBy: "DataViz Co.",
    postedAt: "2026-03-02",
  },
  {
    id: "3",
    title: "Logo Design for Fintech Startup",
    description:
      "Create a modern, professional logo for a fintech startup focused on crypto payments. Should convey trust and innovation.",
    reward: 800,
    deadline: "2026-03-12",
    category: "Design",
    difficulty: "easy",
    tags: ["Logo", "Branding", "Figma", "Illustrator"],
    submissionCount: 24,
    views: 1203,
    isBookmarked: true,
    postedBy: "CryptoFlow",
    postedAt: "2026-03-03",
  },
  {
    id: "4",
    title: "SEO Content Strategy",
    description:
      "Develop a comprehensive SEO content strategy including keyword research, content calendar, and 5 sample blog posts.",
    reward: 1200,
    deadline: "2026-03-25",
    category: "Marketing",
    difficulty: "medium",
    tags: ["SEO", "Content", "Strategy", "Analytics"],
    submissionCount: 6,
    views: 312,
    postedBy: "GrowthLabs",
    postedAt: "2026-03-04",
  },
  {
    id: "5",
    title: "Technical Documentation Writer",
    description:
      "Write comprehensive API documentation for a REST API with 50+ endpoints. Should include examples and use cases.",
    reward: 1500,
    deadline: "2026-03-18",
    category: "Writing",
    difficulty: "medium",
    tags: ["Technical Writing", "API Docs", "Markdown"],
    submissionCount: 4,
    views: 198,
    postedBy: "DevTools Inc.",
    postedAt: "2026-03-05",
  },
  {
    id: "6",
    title: "Mobile App UI/UX Redesign",
    description:
      "Redesign the UI/UX for an existing fitness tracking mobile app. Focus on improving user engagement and retention.",
    reward: 3000,
    deadline: "2026-03-28",
    category: "Design",
    difficulty: "hard",
    tags: ["Figma", "Mobile", "UI/UX", "Prototyping"],
    submissionCount: 15,
    views: 892,
    postedBy: "FitTrack",
    postedAt: "2026-03-01",
  },
]

export const mockActivities: Activity[] = [
  {
    id: "1",
    type: "submission",
    message: "Alex submitted a solution to Build AI Chatbot",
    timestamp: "2 hours ago",
    user: "Alex",
  },
  {
    id: "2",
    type: "winner",
    message: "Sarah won the task Logo Design for Startup",
    timestamp: "5 hours ago",
    user: "Sarah",
  },
  {
    id: "3",
    type: "new_task",
    message: "New task posted: React Dashboard UI",
    timestamp: "1 day ago",
  },
  {
    id: "4",
    type: "submission",
    message: "Mike submitted a solution to SEO Strategy",
    timestamp: "1 day ago",
    user: "Mike",
  },
  {
    id: "5",
    type: "winner",
    message: "Jordan won the task API Documentation",
    timestamp: "2 days ago",
    user: "Jordan",
  },
]

export const userStats = {
  tasksPosted: 12,
  tasksSolved: 8,
  totalRewards: 15400,
  activeSubmissions: 3,
}
