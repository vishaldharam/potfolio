"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Tech Lead | Full Stack Developer | AI Agent Expert";

  useEffect(() => {
    let currentIndex = 0;
    let direction = "typing"; // 'typing' or 'deleting'

    const typingInterval = setInterval(() => {
      if (direction === "typing") {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.substring(0, currentIndex));
          currentIndex++;

          if (currentIndex > fullText.length) {
            // Pause at the end before starting to delete
            setTimeout(() => {
              direction = "deleting";
            }, 2000);
          }
        }
      } else {
        // Deleting
        if (currentIndex >= 0) {
          setTypedText(fullText.substring(0, currentIndex));
          currentIndex--;

          if (currentIndex < 0) {
            // Pause before typing again
            setTimeout(() => {
              currentIndex = 0;
              direction = "typing";
            }, 500);
          }
        }
      }
    }, 100);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const handleDownload = () => {
    console.log("sdsds");
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path relative to the public folder
    link.download = "Vishal_Dharam_Resume.pdf"; // Suggested download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-12 text-center md:py-16 lg:py-20">
      <div className="mx-auto max-w-[58rem] space-y-4">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Vishal Dharam
        </h1>
        <h2 className="text-2xl font-medium gradient-text md:text-3xl h-10 relative">
          {typedText}
          <span
            className={`absolute ${
              showCursor ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          >
            |
          </span>
        </h2>
        <p className="text-lg text-muted-foreground md:text-xl">
          Building robust, scalable applications with modern technologies. With
          over 3 years of experience in software development, I specialize in
          creating elegant solutions to complex problems.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Button asChild size="lg" className="animate-fade-in">
          <Link href="/contact">
            Contact Me <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          onClick={() => handleDownload()}
          variant="outline"
          size="lg"
          className="animate-fade-in delay-150"
        >
          <Download onClick={() => handleDownload()} className="mr-2 h-4 w-4" />{" "}
          Download Resume
        </Button>
      </div>
    </section>
  );
}
