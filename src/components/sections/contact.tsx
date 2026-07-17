"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/shared/icons"

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
]

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background border-t border-border/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card">
            <Mail className="h-4 w-4 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Get In Touch</h2>
          <p className="mx-auto max-w-md text-sm text-muted-foreground leading-relaxed">
            Have a question, want to collaborate, or just want to talk compiler internals? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center hover:border-foreground/30 hover:bg-muted/50 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background group-hover:border-foreground/30 transition-colors">
                <method.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                  {method.label}
                </span>
                <span className="block text-sm text-foreground font-medium break-all">
                  {method.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
