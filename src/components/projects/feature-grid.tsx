import { Check } from "lucide-react";

interface FeatureGridProps {
  features: string[];
}

/** Key-feature grid shared by every app case study. */
export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {features.map((feature, index) => (
        <li
          key={feature}
          className="border-border bg-card flex gap-3 rounded-xl border p-4"
        >
          <span
            aria-hidden="true"
            className="bg-primary/5 text-primary border-primary/15 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
          >
            <Check className="h-3.5 w-3.5" />
          </span>
          <div className="space-y-1">
            <span className="text-muted-foreground block font-mono text-[10px] font-semibold tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
