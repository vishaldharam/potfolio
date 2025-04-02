import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

export const commercialProjects = [
  {
    id: "abouv-app",
    title: "ABOUV App",
    description:
      "Developed an assessment-first job platform, achieving 8K+ users, 30K+ assessments, and 100+ job placements in 2 months.",
    image: "/og-image.jpg?height=300&width=600",
    technologies: [
      "NextJs",
      "ReactJs",
      "Node.js",
      "NestJs",
      "Prisma ORM",
      "PostgreSQL",
      "Docker",
    ],
    link: "https://abouv.com/",
    fullDescription:
      "This enterprise-grade ERP system was designed to streamline operations across multiple departments including finance, HR, inventory management, and customer relations. As the lead developer, I architected the system using a microservices approach to ensure scalability and maintainability. The solution included real-time dashboards, automated reporting, and integration with existing legacy systems. Currently, I am working on an assessment-first job platform that has seen tremendous growth in just two months, with over 8,000 users, 30,000+ assessment sessions, and more than 100 students successfully placed in jobs.",

    challenges:
      "The main challenge was integrating with legacy systems while ensuring data consistency across all modules. We implemented a robust event-driven architecture to maintain data integrity. In the assessment-first job platform, the key challenge was handling a high volume of real-time assessments while ensuring seamless performance and accurate scoring mechanisms.",

    results:
      "The implementation resulted in a 35% increase in operational efficiency, reduced manual data entry by 70%, and provided executives with real-time insights for better decision-making. For the assessment-first job platform, we achieved rapid adoption with 8,000+ users in just two months, facilitated over 30,000 assessment sessions, and successfully placed 100+ students in jobs.",

    features: [
      "Multi-tenant architecture supporting global operations",
      "Real-time dashboards and analytics",
      "Automated workflow management",
      "Comprehensive audit logging",
      "Role-based access control",
      "Scalable assessment engine for handling high traffic",
      "Automated scoring and ranking system for job applicants",
      "Integration with companies for direct hiring",
      "AI-based recommendation system for job matching",
      "Live tracking of assessment performance and progress",
    ],
    role:"Tech lead",
    teamSize: 8,
  },
  {
    id: "b2b-saas",
    title: "ABOUV B2B SaaS",
    description:
      "Built a B2B SaaS platform enabling companies to filter and hire candidates based on skills, preferences, experience, and assessment scores.",
    image: "/og-image.jpg?height=300&width=600",
    technologies: [
      "Next.js",
      "NestJs",
      "TypeScript",
      "GCP",
      "Prisma ORM",
      "PostgreSQL",
    ],
    role:"Tech lead",
    teamSize: 4,
    link: "https://recruiter.abouv.com/",
    fullDescription:
      "This B2B SaaS platform streamlines the hiring process by allowing companies to filter and hire candidates based on multiple factors, including skills, preferences, experience, and assessment scores. The system provides a subscription-based model, offering advanced candidate insights and filtering capabilities. It leverages scalable cloud infrastructure and real-time data processing to ensure seamless performance.",
    challenges:
      "The main challenge was designing an efficient filtering system that could handle large datasets while providing real-time candidate insights. We optimized database queries, implemented indexing strategies, and used caching mechanisms to ensure fast response times.",
    results:
      "The platform has helped companies significantly reduce hiring time by automating candidate filtering, improving match accuracy, and streamlining the recruitment pipeline. Early adoption has shown increased efficiency in finding qualified candidates, leading to higher placement success rates.",
    features: [
      "Advanced candidate filtering based on skills, experience, and preferences",
      "Integration of assessment scores for data-driven hiring",
      "Subscription-based SaaS model for businesses",
      "AI-powered recommendations for better hiring decisions",
      "Real-time candidate analytics and reporting",
      "Automated interview scheduling and notifications",
    ],
  },
  {
    id: "fintarget",
    title: "Fintarget - Trading Automation",
    description:
      "Automated trading platform enabling users to execute and track trades seamlessly with linked brokers.",
    image: "/fn.avif?height=300&width=600",
    technologies: ["React", "Python", "Node.js", "Redis", "Microservices"],
    link: "https://fintarget.in/",
    fullDescription:
      "Fintarget is an advanced trading automation platform that allows users to run their trading strategies automatically with a linked broker. The system provides real-time trade tracking, seamless execution, and portfolio management through an intuitive dashboard. Built using a microservices architecture, the backend efficiently handles trade execution, market data streaming, and risk management.",
    challenges:
      "One of the key challenges was ensuring ultra-low latency trade execution while handling high-frequency data streams. We optimized real-time event processing using Redis, implemented a scalable microservices architecture, and ensured seamless integration with multiple broker APIs.",
    results:
      "Fintarget has enabled traders to automate their strategies without manually logging into broker terminals, reducing execution delays and improving trade efficiency. Early adopters report a smoother trading experience with real-time insights and enhanced strategy management.",
    features: [
      "Automated trade execution with linked brokers",
      "Real-time trade tracking and analytics dashboard",
      "Custom strategy integration and backtesting",
      "Seamless API integration with multiple brokers",
      "Risk management and automated stop-loss mechanisms",
      "Scalable microservices architecture for high performance",
    ],
    role:"Backend Devloper",
    teamSize: 14,
  },
];

export function ProjectsSection() {
  return (
    <section
      className="container py-12 md:py-16 lg:py-20 bg-muted/30"
      id="projects"
    >
      <div className="mx-auto max-w-[58rem] space-y-6 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl gradient-text">
          Commercial Projects
        </h2>
        <p className="text-lg text-muted-foreground">
          A selection of enterprise-level projects I've led and contributed to
          throughout my career.
        </p>
      </div>
      <div className="mx-auto mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {commercialProjects.map((project, index) => (
          <Card
            key={project.id}
            className="project-card flex flex-col overflow-hidden animate-fade-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild variant="default" className="gap-1 w-full">
                <Link href={`/projects/${project.id}`}>
                  View Details <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* <div className="mt-10 text-center">
        <Button asChild size="lg" className="gradient-bg border-none">
          <Link href="/commercial-projects">
            View All Commercial Projects{" "}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div> */}
    </section>
  );
}
