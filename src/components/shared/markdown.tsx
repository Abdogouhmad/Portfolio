import React from "react"
import Link from "next/link"

interface MarkdownProps {
  content: string
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .trim()
}

export function Markdown({ content }: MarkdownProps) {
  // Normalize newlines and trim
  const rawBlocks = content.trim().split("\n\n")
  const renderedBlocks: React.ReactNode[] = []

  let inCodeBlock = false
  let codeBlockLines: string[] = []
  let codeBlockLang = ""

  // We process the content line by line to handle multi-line blocks like code and lists
  const lines = content.split("\n")

  let i = 0
  while (i < lines.length) {
    const line = lines[i]

    // Handle code block start/end
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        // End of code block
        const code = codeBlockLines.join("\n")
        renderedBlocks.push(
          <div key={`code-${i}`} className="my-6 overflow-hidden rounded-lg border border-border bg-muted/50 font-mono text-sm leading-relaxed">
            <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-1.5 text-xs text-muted-foreground select-none">
              <span>{codeBlockLang || "text"}</span>
            </div>
            <pre className="overflow-x-auto p-4">
              <code className="text-foreground">{code}</code>
            </pre>
          </div>
        )
        inCodeBlock = false
        codeBlockLines = []
        codeBlockLang = ""
      } else {
        // Start of code block
        inCodeBlock = true
        codeBlockLang = line.trim().slice(3).trim()
      }
      i++
      continue
    }

    if (inCodeBlock) {
      codeBlockLines.push(line)
      i++
      continue
    }

    const trimmed = line.trim()

    // Handle Headings
    if (trimmed.startsWith("### ")) {
      const headingText = trimmed.slice(4)
      renderedBlocks.push(
        <h4 key={`h3-${i}`} id={slugify(headingText)} className="mt-8 mb-3 text-lg font-semibold tracking-tight text-foreground scroll-mt-20">
          {renderInline(headingText)}
        </h4>
      )
      i++
      continue
    }

    if (trimmed.startsWith("## ")) {
      const headingText = trimmed.slice(3)
      renderedBlocks.push(
        <h3 key={`h2-${i}`} id={slugify(headingText)} className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground border-b border-border pb-1.5 scroll-mt-20">
          {renderInline(headingText)}
        </h3>
      )
      i++
      continue
    }

    if (trimmed.startsWith("# ")) {
      const headingText = trimmed.slice(2)
      renderedBlocks.push(
        <h2 key={`h1-${i}`} id={slugify(headingText)} className="mt-12 mb-6 text-2xl font-bold tracking-tight text-foreground scroll-mt-20">
          {renderInline(headingText)}
        </h2>
      )
      i++
      continue
    }

    // Handle Blockquotes
    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().slice(2))
        i++
      }
      renderedBlocks.push(
        <blockquote key={`quote-${i}`} className="my-6 border-l-2 border-primary pl-4 italic text-muted-foreground">
          {quoteLines.map((ql, qIdx) => (
            <p key={qIdx} className={qIdx > 0 ? "mt-2" : ""}>
              {renderInline(ql)}
            </p>
          ))}
        </blockquote>
      )
      continue
    }

    // Handle Bullet Lists
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const listItems: string[] = []
      while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
        listItems.push(lines[i].trim().slice(2))
        i++
      }
      renderedBlocks.push(
        <ul key={`list-${i}`} className="my-4 ml-6 list-disc [&>li]:mt-1.5 text-muted-foreground">
          {listItems.map((item, itemIdx) => (
            <li key={itemIdx}>{renderInline(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    // Handle Empty Lines
    if (trimmed === "") {
      i++
      continue
    }

    // Default: Paragraph
    // We group consecutive non-empty lines into a single paragraph
    const paraLines: string[] = []
    while (i < lines.length && lines[i].trim() !== "" && !isBlockStart(lines[i].trim())) {
      paraLines.push(lines[i].trim())
      i++
    }
    renderedBlocks.push(
      <p key={`p-${i}`} className="leading-7 [&:not(:first-child)]:mt-4 text-muted-foreground">
        {renderInline(paraLines.join(" "))}
      </p>
    )
  }

  return <div className="space-y-4">{renderedBlocks}</div>
}

function isBlockStart(line: string): boolean {
  return (
    line.startsWith("```") ||
    line.startsWith("# ") ||
    line.startsWith("## ") ||
    line.startsWith("### ") ||
    line.startsWith("> ") ||
    line.startsWith("- ") ||
    line.startsWith("* ")
  )
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  let index = 0

  // Regex to match inline patterns: bold, link, code
  // Bold: **text**
  // Link: [text](url)
  // Code: `code`
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\)|`.*?`)/g
  const matches = text.split(regex)

  return matches.map((part, idx) => {
    // Bold
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    // Code
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={idx} className="relative rounded bg-muted px-[0.3rem] py-[0.15rem] font-mono text-xs font-semibold text-foreground border border-border">
          {part.slice(1, -1)}
        </code>
      )
    }
    // Link
    if (part.startsWith("[") && part.includes("](")) {
      const closeBracket = part.indexOf("]")
      const linkText = part.slice(1, closeBracket)
      const linkUrl = part.slice(closeBracket + 2, -1)
      const isExternal = linkUrl.startsWith("http")
      
      if (isExternal) {
        return (
          <a
            key={idx}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            {linkText}
          </a>
        )
      } else {
        return (
          <Link
            key={idx}
            href={linkUrl}
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            {linkText}
          </Link>
        )
      }
    }
    // Plain text
    return part
  })
}
