"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
} from "@/components/shared/icons";

const contactMethods = [
  {
    label: "Email",
    value: "gouhmad@hotmail.com",
    href: "mailto:gouhmad@hotmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Abdogouhmad",
    href: "https://github.com/Abdogouhmad",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdogouhmad",
    href: "https://www.linkedin.com/in/abdogouhmad/",
    icon: Linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-background border-border/40 border-t py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <div className="border-border bg-card inline-flex h-9 w-9 items-center justify-center rounded-lg border">
            <Mail className="text-muted-foreground h-4 w-4" />
          </div>
          <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mx-auto max-w-md text-sm leading-relaxed">
            Have a question, want to collaborate, or just want to talk compiler
            internals? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group border-border bg-card hover:border-foreground/30 hover:bg-muted/50 flex flex-col items-center gap-3 rounded-xl border p-6 text-center transition-all"
            >
              <div className="border-border bg-background group-hover:border-foreground/30 flex h-10 w-10 items-center justify-center rounded-lg border transition-colors">
                <method.icon className="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors" />
              </div>
              <div className="space-y-1">
                <span className="text-muted-foreground block font-mono text-xs font-bold tracking-wider uppercase">
                  {method.label}
                </span>
                <span className="text-foreground block text-sm font-medium break-all">
                  {method.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
