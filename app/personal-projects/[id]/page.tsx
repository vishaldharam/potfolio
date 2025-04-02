import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getYouTubeID, personalProjects } from "../page";

// Import the personal projects data
// This is a simplified version - in your actual code, you'd import from your data source

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = personalProjects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Vishal Dharam`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return personalProjects.map((project) => ({
    id: project.id,
  }));
}

export default function PersonalProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = personalProjects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="container py-12 md:py-16 lg:py-20">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p className="mt-4">The project you're looking for doesn't exist.</p>
        <Button asChild variant="ghost" className="mt-6">
          <Link href="/personal-projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Personal Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/personal-projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Personal Projects
        </Link>
      </Button>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl gradient-text">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3>Overview</h3>
            <p>{project.fullDescription}</p>

            <h3>Challenges</h3>
            <p>{project.challenges}</p>

            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mt-8">
            <Button asChild>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="mr-2 h-4 w-4" /> Watch Demo
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden border">
            <Image
              src={`https://img.youtube.com/vi/${getYouTubeID(project.youtube)}/hqdefault.jpg`}
              alt={project.title}
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Demo Video</CardTitle>
              <CardDescription>
                Watch a demonstration of the project in action
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video rounded-md overflow-hidden border">
                <Link
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div key={project.id} className="relative w-full h-64">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${getYouTubeID(project.youtube)}?autoplay=1`}
                      title={project.title}
                      allow=" encrypted-media"
                      allowFullScreen
                    />
                  </div>
                  {/* <Image
                    src={project.youtubeThumb || "/placeholder.svg"}
                    alt={`${project.title} demo video thumbnail`}
                    fill
                    className="object-cover"
                  /> */}
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
              <CardDescription>
                The main technologies and tools used in this project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
