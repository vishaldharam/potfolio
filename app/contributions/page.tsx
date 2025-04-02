import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Contributions | Vishal Dharam",
  description: "Explore Vishal Dharam's open source contributions and community involvement.",
  keywords: ["Vishal Dharam", "open source", "contributions", "community", "software development"],
}

const contributions = [
  {
    project: "React",
    description:
      "Contributed performance improvements to the React core library, reducing render times by 15% for large component trees.",
    role: "Contributor",
    contributions: ["Performance optimization", "Bug fixes", "Documentation"],
    link: "https://github.com/facebook/react",
  },
  {
    project: "Next.js",
    description:
      "Implemented new features for the App Router and contributed to the documentation for Server Components.",
    role: "Contributor",
    contributions: ["Feature implementation", "Documentation", "Code reviews"],
    link: "https://github.com/vercel/next.js",
  },
  {
    project: "TypeScript",
    description: "Helped improve type inference for generic functions and fixed several edge cases in the type system.",
    role: "Contributor",
    contributions: ["Type system improvements", "Bug fixes"],
    link: "https://github.com/microsoft/TypeScript",
  },
  {
    project: "TensorFlow",
    description: "Contributed optimizations for model training on distributed systems and improved documentation.",
    role: "Contributor",
    contributions: ["Performance optimization", "Documentation"],
    link: "https://github.com/tensorflow/tensorflow",
  },
]

const speakingEngagements = [
  {
    title: "Modern Architecture Patterns for Scalable Applications",
    event: "Tech Conference 2024",
    date: "March 2024",
    link: "#",
  },
  {
    title: "The Future of Web Development with React Server Components",
    event: "ReactConf 2023",
    date: "September 2023",
    link: "#",
  },
  {
    title: "Building Resilient Microservices",
    event: "Architecture Summit 2023",
    date: "May 2023",
    link: "#",
  },
]

export default function Contributions() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mb-10">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
          Open Source & Community
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          My contributions to open source projects and involvement in the developer community.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Open Source Contributions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {contributions.map((contribution) => (
              <Card key={contribution.project}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Github className="mr-2 h-5 w-5" />
                      {contribution.project}
                    </CardTitle>
                    <Badge>{contribution.role}</Badge>
                  </div>
                  <CardDescription>{contribution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {contribution.contributions.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={contribution.link} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Speaking Engagements</h2>
          <div className="space-y-4">
            {speakingEngagements.map((engagement) => (
              <Card key={engagement.title}>
                <CardHeader>
                  <CardTitle>{engagement.title}</CardTitle>
                  <CardDescription>
                    {engagement.event} • {engagement.date}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={engagement.link}>
                      View Presentation <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

