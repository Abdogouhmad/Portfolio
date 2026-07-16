"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { z } from "zod"
import { toast } from "sonner"
import { Mail, Send, Loader2 } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [errors, setErrors] = React.useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    // Validation using Zod
    const result = contactSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {}
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ContactFormData
        fieldErrors[path] = issue.message
      })
      setErrors(fieldErrors)
      setIsSubmitting(false)
      toast.error("Please correct the errors in the form.")
      return
    }

    try {
      // Simulate API submit delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // Success toast
      toast.success(`Thank you, ${formData.name}! Your message has been received.`)
      
      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-background border-t border-border/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card">
            <Mail className="h-4 w-4 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Get In Touch</h2>
          <p className="mx-auto max-w-md text-sm text-muted-foreground leading-relaxed">
            Have a question, want to collaborate, or just want to talk compiler internals? Shoot me a message below.
          </p>
        </div>

        {/* Contact Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid for Name and Email */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Abderrahman Gouhmad"
                  disabled={isSubmitting}
                  className="block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:ring-0 outline-none transition-all disabled:opacity-50"
                />
                {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="abderrahman@gouhmad.com"
                  disabled={isSubmitting}
                  className="block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:ring-0 outline-none transition-all disabled:opacity-50"
                />
                {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
              </div>
            </div>

            {/* Message Box */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                disabled={isSubmitting}
                className="block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:ring-0 outline-none resize-none transition-all disabled:opacity-50"
              />
              {errors.message && <span className="text-xs text-red-500 font-medium">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
