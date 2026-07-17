"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 bg-background border-t border-border/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">About Me</h2>
              <div className="h-1 w-12 bg-primary rounded" />
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm <strong className="text-foreground">Abderrahman Gouhmad</strong>, a software developer driven by a fascination for systems programming, and performance-oriented computing. I enjoy building things that compile in milliseconds and run with minimal overhead.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My engineering philosophy revolves around simplicity, deterministic behavior, and robustness. I actively work within the <strong className="text-foreground">Rust ecosystem</strong> and spend my time building developer tooling like <Link href="https://github.com/Abdogouhmad/ltx" className="underline underline-offset-4 font-semibold text-foreground hover:text-primary transition-colors">ltx</Link>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When I'm not writing Rust, I'm configuring Linux environments (I'm a happy user of <strong className="text-foreground">CachyOS</strong> and <strong className="text-foreground">Niri</strong>), learning POSIX internals, or reading compiler design publications. I believe in continuous learning and contributing back to the open-source community that empowers us.
            </p>
          </motion.div>

          {/* Interactive Graphic/Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
              {/* Terminal Title bar */}
              <div className="flex items-center justify-between border-b border-border bg-muted/60 px-4 py-2 select-none">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">gouhmad.rs</span>
              </div>

              {/* Mock code listing */}
              <div className="p-5 font-mono text-xs leading-relaxed text-muted-foreground overflow-x-auto">
                <span className="text-purple-500">struct</span> <span className="text-blue-500">Engineer</span> {"{"}
                <div className="pl-4">
                  <span>name: <span className="text-green-500">{"\"Abderrahman Gouhmad\""}</span>,</span>
                  <br />
                  <span>role: <span className="text-green-500">{"\"Software Engineer\""}</span>,</span>
                  <br />
                  <span>specialties: vec![</span>
                  <div className="pl-4">
                    <span className="text-green-500">{"\"Rust\""}</span>,
                    <br />
                    <span className="text-green-500">{"\"Linux Kernels\""}</span>,
                    <br />
                    <span className="text-green-500">{"\"Parser & Tooling\""}</span>,
                  </div>
                  <span>],</span>
                  <br />
                  <span>hobbies: vec![</span>
                  <div className="pl-4">
                    <span className="text-green-500">{"\"Arch Linux\""}</span>,
                    <br />
                    <span className="text-green-500">{"\"CachyOS\""}</span>,
                    <br />
                    <span className="text-green-500">{"\"Niri\""}</span>,
                    <br />
                    <span className="text-green-500">{"\"Helix Editor\""}</span>,
                    <br />
                    <span className="text-green-500">{"\"Self Hosting\""}</span>
                  </div>
                  <span>]</span>
                </div>
                {"}"}
                <br />
                <br />
                <span className="text-purple-500">impl</span> <span className="text-blue-500">Developer</span> <span className="text-purple-500">for</span> <span className="text-blue-500">Engineer</span> {"{"}
                <div className="pl-4">
                  <span className="text-purple-500">fn</span> <span className="text-yellow-600">code_quality</span>(&self) -&gt; <span className="text-yellow-600">Percent</span> {"{"}
                  <div className="pl-4">
                    <span className="text-purple-500">let</span> mut q = <span className="text-yellow-600">Percent</span>(<span className="text-orange-500">100</span>);
                    <br />
                    <span className="text-purple-500">if</span> self.uses_unsafe_rust {"{"}
                    <div className="pl-4">
                      q = q.recheck_carefully();
                    </div>
                    {"}"}
                    <br />
                    q
                  </div>
                  {"}"}
                </div>
                {"}"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
