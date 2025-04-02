import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"

export const metadata: Metadata = {
  title: "Vishal Dharam | Senior Developer",
  description:
    "Portfolio of Vishal Dharam, a senior developer specializing in web development and software engineering.",
  keywords: ["Vishal Dharam", "senior developer", "web development", "software engineer", "portfolio"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishaldharam.com",
    title: "Vishal Dharam | Senior Developer",
    description:
      "Portfolio of Vishal Dharam, a senior developer specializing in web development and software engineering.",
    siteName: "Vishal Dharam Portfolio",
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <section className="container py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            Want to see more?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Check out my contributions and personal projects to learn more about my work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* <Button asChild size="lg">
              <Link href="/contributions">
                View Contributions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}
            <Button asChild size="lg">
              <Link href="/personal-projects">
                Personal Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Vishal Dharam. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:contact@vishaldharam.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

