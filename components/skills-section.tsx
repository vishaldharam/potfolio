import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    description:
      "Technologies and frameworks I use to build modern user interfaces",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "GraphQL",
      "Vue.js",
      "Zustand",
      "HTML",
      "CSS",
      "JavaScript",
      "CodeIgniter",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    description: "Tools and languages I use for server-side development",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "Django",
      "PHP",
      "Fast API",
      "PostgreSQL",
      "Redis",
      "MySQL",
      "SQLite",
      "Firebase",
      "GraphQL",
      "REst API",
      "MongoDB",
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Infrastructure and workflow tools I'm proficient with",
    skills: [
      "Docker",
      "Kubernetes",
      "Ansible",
      "AWS Lambda",
      "AWS EC2",
      "AWS",
      "GCP",
      "Firebase",
      "Vercel",
      "CI/CD",
      "Git",
      "GitHub Actions",
      // "Terraform",
      "Monitoring",
    ],
  },
  {
    title: "Architecture",
    description: "Design patterns and architectural approaches I implement",
    skills: [
      "Microservices",
      "Serverless",
      "Event-Driven",
      "Domain-Driven Design",
      "RESTful APIs",
      "System Design",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="container py-12 md:py-16 lg:py-20" id="skills">
      <div className="mx-auto max-w-[58rem] space-y-6 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
          Skills & Expertise
        </h2>
        <p className="text-lg text-muted-foreground">
          A comprehensive set of technical skills acquired through years of
          professional experience.
        </p>
      </div>
      <div className="mx-auto mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
          <Card key={category.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
