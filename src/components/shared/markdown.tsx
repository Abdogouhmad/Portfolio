import React from "react";
import Link from "next/link";

interface MarkdownProps {
  content: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .trim();
}

export function Markdown({ content }: MarkdownProps) {
  // Normalize newlines and trim
  const renderedBlocks: React.ReactNode[] = [];

  let inCodeBlock = false;
  let codeBlockLines: string[] = [];
  let codeBlockLang = "";

  // We process the content line by line to handle multi-line blocks like code and lists
  const lines = content.split("\n");

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Handle code block start/end
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        // End of code block
        const code = codeBlockLines.join("\n");
        renderedBlocks.push(
          <div
            key={`code-${i}`}
            className="border-border bg-muted/50 my-6 overflow-hidden rounded-lg border font-mono text-sm leading-relaxed"
          >
            <div className="border-border bg-muted text-muted-foreground flex items-center justify-between border-b px-4 py-1.5 text-xs select-none">
              <span>{codeBlockLang || "text"}</span>
            </div>
            <pre className="overflow-x-auto p-4">
              <code className="text-foreground">{code}</code>
            </pre>
          </div>,
        );
        inCodeBlock = false;
        codeBlockLines = [];
        codeBlockLang = "";
      } else {
        // Start of code block
        inCodeBlock = true;
        codeBlockLang = line.trim().slice(3).trim();
      }
      i++;
      continue;
    }

    if (inCodeBlock) {
      codeBlockLines.push(line);
      i++;
      continue;
    }

    const trimmed = line.trim();

    // Handle Headings
    if (trimmed.startsWith("### ")) {
      const headingText = trimmed.slice(4);
      renderedBlocks.push(
        <h4
          key={`h3-${i}`}
          id={slugify(headingText)}
          className="text-foreground mt-8 mb-3 scroll-mt-20 text-lg font-semibold tracking-tight"
        >
          {renderInline(headingText)}
        </h4>,
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      const headingText = trimmed.slice(3);
      renderedBlocks.push(
        <h3
          key={`h2-${i}`}
          id={slugify(headingText)}
          className="text-foreground border-border mt-10 mb-4 scroll-mt-20 border-b pb-1.5 text-xl font-semibold tracking-tight"
        >
          {renderInline(headingText)}
        </h3>,
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("# ")) {
      const headingText = trimmed.slice(2);
      renderedBlocks.push(
        <h2
          key={`h1-${i}`}
          id={slugify(headingText)}
          className="text-foreground mt-12 mb-6 scroll-mt-20 text-2xl font-bold tracking-tight"
        >
          {renderInline(headingText)}
        </h2>,
      );
      i++;
      continue;
    }

    // Handle Blockquotes
    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().slice(2));
        i++;
      }
      renderedBlocks.push(
        <blockquote
          key={`quote-${i}`}
          className="border-primary text-muted-foreground my-6 border-l-2 pl-4 italic"
        >
          {quoteLines.map((ql, qIdx) => (
            <p key={qIdx} className={qIdx > 0 ? "mt-2" : ""}>
              {renderInline(ql)}
            </p>
          ))}
        </blockquote>,
      );
      continue;
    }

    // Handle Bullet Lists
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const listItems: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        listItems.push(lines[i].trim().slice(2));
        i++;
      }
      renderedBlocks.push(
        <ul
          key={`list-${i}`}
          className="text-muted-foreground my-4 ml-6 list-disc [&>li]:mt-1.5"
        >
          {listItems.map((item, itemIdx) => (
            <li key={itemIdx}>{renderInline(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    // Handle Empty Lines
    if (trimmed === "") {
      i++;
      continue;
    }

    // Default: Paragraph
    // We group consecutive non-empty lines into a single paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !isBlockStart(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    renderedBlocks.push(
      <p
        key={`p-${i}`}
        className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-4"
      >
        {renderInline(paraLines.join(" "))}
      </p>,
    );
  }

  return <div className="space-y-4">{renderedBlocks}</div>;
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
  );
}

function renderInline(text: string): React.ReactNode[] {
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\)|`.*?`)/g;
  const matches = text.split(regex);

  return matches.map((part, idx) => {
    // Bold
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Code
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={idx}
          className="bg-muted text-foreground border-border relative rounded border px-[0.3rem] py-[0.15rem] font-mono text-xs font-semibold"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    // Link
    if (part.startsWith("[") && part.includes("](")) {
      const closeBracket = part.indexOf("]");
      const linkText = part.slice(1, closeBracket);
      const linkUrl = part.slice(closeBracket + 2, -1);
      const isExternal = linkUrl.startsWith("http");

      if (isExternal) {
        return (
          <a
            key={idx}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary font-medium underline underline-offset-4 transition-colors"
          >
            {linkText}
          </a>
        );
      } else {
        return (
          <Link
            key={idx}
            href={linkUrl}
            className="text-foreground hover:text-primary font-medium underline underline-offset-4 transition-colors"
          >
            {linkText}
          </Link>
        );
      }
    }
    // Plain text
    return part;
  });
}
