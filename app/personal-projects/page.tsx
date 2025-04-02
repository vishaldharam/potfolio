import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Youtube, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Personal Projects | Vishal Dharam",
  description:
    "Explore Vishal Dharam's personal projects and side ventures in software development.",
  keywords: [
    "Vishal Dharam",
    "personal projects",
    "side projects",
    "open source",
    "software development",
  ],
};

export const personalProjects = [
  {
    id: "internlink",
    title: "Internlink - AI Proctoring & Job Platform",
    description:
      "An AI-powered internship and job portal with integrated candidate assessments and video proctoring.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "Redis",
      "Redux",
      "FastAPI",
      "AI Video Proctoring",
    ],
    github: "https://github.com/vishaldharam",
    youtube: "https://youtu.be/3aTZfJUXoJc",
    youtubeThumb: "/placeholder.svg?height=180&width=320",
    fullDescription:
      "Internlink is an AI-powered job and internship portal that streamlines candidate assessments through automated testing and AI-driven video proctoring. Built using React for the frontend and Node.js for the backend, it utilizes Redux for efficient state management and Redis for caching. The platform ensures secure and fair assessments by integrating AI-based video monitoring to prevent cheating. Future updates will include an online course module to help candidates upskill.",
    features: [
      "AI-based video proctoring for secure assessments",
      "Automated skill-based testing for job and internship applications",
      "Seamless job and internship matching",
      "Real-time monitoring and fraud detection",
      "Integrated online course platform (upcoming feature)",
      "Efficient state management with Redux and backend caching with Redis",
    ],
    challenges:
      "Ensuring accurate AI proctoring while maintaining a seamless candidate experience was a significant challenge. We optimized video analysis algorithms and implemented real-time fraud detection to enhance security and reliability.",
  },
  {
    id: "chat",
    title: "Vibe Reach - AI-Powered Chat Application",
    description:
      "A real-time chat application with AI-driven messaging, built using WebSockets, Redis, and custom AI models trained on user history.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "Redis",
      "WebSockets",
      "FastAPI",
      "AI Model Training",
    ],
    github: "https://github.com/vishaldharam",
    youtube: "https://youtu.be/f4cb18i1mRY",
    youtubeThumb: "/placeholder.svg?height=180&width=320",
    fullDescription:
      "Vibe Reach is a cutting-edge chat application designed for seamless real-time messaging. It leverages WebSockets and Redis to ensure scalable and efficient communication. Unlike traditional chat platforms, it integrates AI that learns from user interactions, eliminating third-party AI dependencies and ensuring privacy. Built with React for the frontend and a backend powered by Node.js, Python, and FastAPI, Vibe Reach delivers an intelligent, personalized chat experience.",
    features: [
      "Real-time messaging with WebSockets and Redis",
      "AI-driven chat trained on user interactions for personalization",
      "No third-party AI dependencies, ensuring data privacy",
      "Optimized WebSocket infrastructure for high concurrency",
      "Multi-device synchronization for seamless chat experience",
      "User-controlled AI prompt training for customized responses",
    ],
    challenges:
      "Scaling WebSockets for high concurrency was a challenge. Implemented Redis for distributed pub/sub messaging and optimized AI model training to deliver personalized yet responsive chat experiences without increasing latency.",
  },
  {
    id: "sangam",
    title: "Sangam Bharat - E-commerce for Farmers & Agriculture Lovers",
    description:
      "An e-commerce platform for farmers, agriculture enthusiasts, and pet lovers, enabling seamless buying and selling of animals, farming equipment, and agricultural products.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "Redis",
      "ElasticSearch",
      "Razorpay",
      "B2B Dashboard",
    ],
    github: "https://github.com/vishaldharam",
    youtube: "https://youtu.be/X-3WVm1UNaA",
    youtubeThumb: "/placeholder.svg?height=180&width=320",
    fullDescription:
      "Sangam Bharat is a specialized e-commerce platform catering to farmers, agriculture enthusiasts, and pet lovers. Users can browse and purchase animals, farming tools, pesticides, and other agricultural products seamlessly. Built with Next.js and NestJS, the platform integrates Razorpay for secure transactions, Redis for caching, and ElasticSearch for optimized product searches. Additionally, a dedicated B2B dashboard allows sellers to list products and manage their inventory efficiently.",
    features: [
      "Buy and sell animals, farming equipment, and agricultural products",
      "Seamless checkout process with Razorpay payment integration",
      "Real-time order tracking and profile management",
      "Optimized product search with ElasticSearch",
      "B2B dashboard for sellers to add and manage products",
      "High-performance backend using NestJS and Redis caching",
    ],
    challenges:
      "Building a scalable search and recommendation system was a challenge. Implemented ElasticSearch for optimized product discovery and Redis for caching frequently accessed data, ensuring smooth performance even with high traffic.",
  },
];

export const getYouTubeID = (url: any) => {
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match ? match[1] : null;
};

export default function PersonalProjects() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mb-10">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
          Personal Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Passion projects and open-source contributions I've developed in my
          spare time.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {personalProjects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Project Demo</h4>
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
                        src={`https://www.youtube.com/embed/${getYouTubeID(
                          project.youtube
                        )}?autoplay=1`}
                        title={project.title}
                        allow=" encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 mt-auto">
              <Button asChild variant="outline" size="sm">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="mr-2 h-4 w-4" /> Watch Demo
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href={`/personal-projects/${project.id}`}>
                  View Details <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

// function YouTubeEmbed({ videoId, title }: any) {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div className="relative w-full h-full">
//       {isPlaying ? (

//       ) : (
//         <div
//           className="relative w-full h-full cursor-pointer"
//           onClick={() => setIsPlaying(true)}
//         >
//           <img
//             src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
//             alt={`${title} demo video thumbnail`}
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
//             <Youtube className="h-12 w-12 text-white" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
