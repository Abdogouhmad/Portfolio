import { cn } from "@/lib/utils";

interface TechChipsProps {
  items: string[];
  limit?: number;
  size?: "sm" | "md";
  className?: string;
}

/** Shared stack chips used by cards and case studies. */
export function TechChips({
  items,
  limit,
  size = "sm",
  className,
}: TechChipsProps) {
  const visible = typeof limit === "number" ? items.slice(0, limit) : items;
  const remaining = items.length - visible.length;

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {visible.map((item) => (
        <span
          key={item}
          className={cn(
            "bg-muted text-foreground border-border/40 rounded border font-mono",
            size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs",
          )}
        >
          {item}
        </span>
      ))}
      {remaining > 0 && (
        <span className="text-muted-foreground self-center font-mono text-[10px]">
          +{remaining} more
        </span>
      )}
    </div>
  );
}
