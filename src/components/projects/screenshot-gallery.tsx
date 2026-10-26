import Image from "next/image";
import { Smartphone } from "lucide-react";
import type { ProjectScreenshot } from "@/data/portfolio";

interface ScreenshotGalleryProps {
  screenshots: ProjectScreenshot[];
  emptyMessage?: string;
}

/**
 * Horizontally scrollable phone-frame gallery. Images are local, so next/image
 * handles sizing and lazy loading without a remote loader.
 */
export function ScreenshotGallery({
  screenshots,
  emptyMessage,
}: ScreenshotGalleryProps) {
  if (screenshots.length === 0) {
    return (
      <div className="border-border bg-card flex flex-col items-center gap-3 rounded-xl border border-dashed p-8 text-center">
        <Smartphone
          className="text-muted-foreground h-6 w-6"
          aria-hidden="true"
        />
        <p className="text-foreground text-sm font-medium">
          Screenshots coming soon
        </p>
        {emptyMessage && (
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            {emptyMessage}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-label="Project screenshots"
      className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0"
    >
      <ul className="flex snap-x snap-mandatory gap-5">
        {screenshots.map((screenshot, index) => (
          <li
            key={screenshot.src}
            className="w-[220px] shrink-0 snap-start sm:w-[260px]"
          >
            <figure>
              <div className="border-border relative aspect-[9/19.5] overflow-hidden rounded-[2rem] border-4 bg-zinc-950 shadow-xl">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes="(max-width: 640px) 220px, 260px"
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <figcaption className="text-muted-foreground mt-2 text-center font-mono text-[10px]">
                Screen {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
