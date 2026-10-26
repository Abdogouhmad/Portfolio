export type ProjectStatus = "done" | "in_progress" | "not_started" | "blocked";

export const projectStatusConfig: Record<
  ProjectStatus,
  { label: string; color: string }
> = {
  done: { label: "Done", color: "bg-green-500" },
  in_progress: { label: "In Progress", color: "bg-orange-500" },
  not_started: { label: "Not Started", color: "bg-gray-400" },
  blocked: { label: "Blocked", color: "bg-red-500" },
};

export type ProjectCategory = "tooling" | "mobile";

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

/** One engineering challenge and the decision it drove. */
export interface ProjectDecision {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  longDescription: string;
  image: string;
  category: ProjectCategory;
  platform?: string;
  tags?: string[];
  /** Stack chips. Kept under the original field name for compatibility. */
  technologies: string[];
  features?: string[];
  screenshots?: ProjectScreenshot[];
  /** Disclosure shown under the gallery when the images are not device captures. */
  screenshotNote?: string;
  github: string;
  /** Live demo, if one exists. */
  demo?: string;
  /** Product website, if one exists. */
  website?: string;
  /** Release page or download link, if one exists. */
  release?: string;
  featured: boolean;
  status: ProjectStatus;
  challenges: string;
  lessons: string;
  architecture: string;
  decisions?: ProjectDecision[];
  content: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    company: "Metave",
    role: "Full Stack Developer",
    duration: "May 2024 — Oct 2024",
    description: [
      "Built SaaS application using Next.js, Node.js, and Express.js.",
      "Developed RESTful APIs and integrated a serverless function with AWS for efficient data handling.",
      "Created responsive user interfaces with Tailwind CSS.",
    ],
    technologies: [
      "NextJs",
      "Linux Systems",
      "Terraform",
      "Docker",
      "REST APIs",
      "AWS",
      "TypeScript",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Rust", "TypeScript", "JavaScript", "Python", "C", "Bash"],
  },
  {
    category: "Web & Frontend",
    skills: [
      "Next.js",
      "React",
      "HTML5",
      "Tailwind CSS",
      "Framer Motion",
      "Svelte",
      "SvelteKit",
    ],
  },
  {
    category: "Mobile",
    skills: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Material 3",
      "Riverpod",
      "SQLite",
      "Hive",
      "Jetpack Glance",
      "Android Notifications",
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      "Axum",
      "Actix-web",
      "REST APIs",
      "WebSockets",
      "Tokio",
      "ExpressJs",
    ],
  },
  {
    category: "Tooling & Infrastructure",
    skills: [
      "Cargo",
      "Git",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Justfile",
      "Terraform",
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      "Linux",
      "Arch Linux",
      "CachyOS",
      "POSIX Systems",
      "Niri",
      "Hyprland",
    ],
  },
  {
    category: "Editors & Workflow",
    skills: ["Helix", "VS Code", "Neovim", "Zed"],
  },
];

export const projects: Project[] = [
  {
    id: "ltx",
    slug: "ltx",
    title: "ltx",
    tagline: "LaTeX builds that behave like a modern codebase.",
    description:
      "An extremely fast LaTeX project manager written in Rust. It handles multi-pass compilation automatically.",
    longDescription:
      "ltx treats LaTeX documents like modern software codebases, featuring incremental builds, automatic bibtex/biber resolution, and a tight write-compile-preview watch mode loop.",
    image: "/images/projects/ltx-logo.png",
    category: "tooling",
    tags: ["Developer tooling", "Rust", "LaTeX"],
    technologies: ["Rust", "LaTeX", "Cargo", "POSIX", "CI/CD"],
    github: "https://github.com/Abdogouhmad/ltx",
    demo: "",
    featured: true,
    status: "in_progress",
    challenges:
      "Parsing LaTeX source code files for active inputs, package imports, and bibliography references to construct a reliable, cyclic-free dependency graph. Ensuring compilation terminates correctly even when LaTeX throws errors or warnings.",
    lessons:
      "Learned the details of LaTeX compiler engines (pdflatex, xelatex, lualatex) and auxiliary tool flows (biber, makeindex). Gained deeper experience in asynchronous process handling and file system monitoring in Rust.",
    architecture: `
+-------------------------------------------------+
|                   ltx CLI                       |
+-------------------------------------------------+
                        |
                        v
+-------------------------------------------------+
|             Dependency Graph Engine             |
|  - Scans src/main.tex                           |
|  - Resolves \\input / \\include transitive trees   |
+-------------------------------------------------+
                        |
                        v
+-------------------------------------------------+
|             Compiler Orchestrator               |
|  - Executes pdflatex / xelatex / lualatex       |
|  - Runs biber / bibtex / makeindex              |
|  - Drives multi-pass loop until stability       |
+-------------------------------------------------+
                        |
                        v
+-------------------------------------------------+
|              Isolated Build Dir                 |
|  - Keeps root clean                             |
|  - Copies final PDF to build/                   |
+-------------------------------------------------+
`,
    content: `
### Why ltx

Most LaTeX workflows are stitched together from shell scripts, \`latexmk\`, and muscle memory. \`ltx\` treats your document the way a modern build tool treats a codebase:

- **Correct by construction** — dependency-aware compilation means bibliographies, indices, and multi-pass cross-references resolve without manual re-runs.
- **Fast** — incremental builds, parallel auxiliary passes, and a Rust core mean large multi-file theses and papers compile in a fraction of the time.
- **Predictable** — one \`ltx.toml\` describes your project; builds behave the same on your machine, your co-author's machine, and in CI.

### Features

- 🚀 **Incremental builds** — only recompiles what changed, including transitive \`\\input\`/\`\\include\` graphs.
- 🔁 **Automatic multi-pass resolution** — handles \`biber\`/\`bibtex\`, \`makeindex\`, and repeated engine passes until the document is stable.
- 👀 **Watch mode** — rebuilds on save for a tight write–compile–preview loop.
- 🧹 **Clean workspace** — auxiliary files are isolated to a build directory, never scattered next to your \`.tex\` sources.
- 🔌 **Engine-agnostic** — works with \`pdflatex\`, \`xelatex\`, and \`lualatex\`.
`,
  },
  {
    id: "walt",
    slug: "walt",
    title: "Walt",
    tagline:
      "Private, offline-first expense tracking that stays on your phone.",
    description:
      "A private, offline-first expense and income tracker for Android, built with Flutter and Material 3.",
    longDescription:
      "Walt is a fully offline personal finance tracker for Android. It combines an expense and income ledger, per-category budgets with threshold alerts, PDF and CSV reporting, biometric app lock, and in-app OTA updates — with no account, cloud, or tracking.",
    image: "/images/projects/walt/icon.png",
    category: "mobile",
    platform: "Android",
    tags: ["Finance", "Offline-first", "Privacy", "Material 3"],
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "go_router",
      "SQLite",
      "Hive CE",
      "Freezed",
      "fl_chart",
      "local_auth",
      "ota_update",
    ],
    features: [
      "Offline-first ledger — transactions, budgets, categories, and settings stay on-device in SQLite and Hive CE.",
      "Home dashboard with balance hero, income/expense breakdown, weekly spending chart, pinned budgets, and recent activity.",
      "Activity screen with day grouping, search, type/category filters, and swipe-to-delete with undo.",
      "Per-category monthly budgets with progress bars and alerts at 80% and 100% — once per threshold, per period.",
      "Reports for week, month, and year with a trend chart, category donut, and percentage breakdown.",
      "Styled PDF reports and spreadsheet-friendly CSV exports shared through the Android share sheet.",
      "Full JSON backup and restore across both stores, with a safety backup written before a restore.",
      "Optional biometric app lock via local_auth, plus nine palettes, a custom seed colour, dark mode, and AMOLED black.",
      "In-app OTA updates with a changelog and an optional APK download and install.",
    ],
    screenshots: [],
    github: "https://github.com/Abdogouhmad/walt",
    website: "https://waltapp.vercel.app",
    release: "https://github.com/Abdogouhmad/walt/releases/latest",
    featured: true,
    status: "done",
    challenges:
      "Keeping a dual-store, offline-first app honest: SQLite owns the ledger while Hive owns settings and categories, so every backup, restore, budget alert, and currency migration has to respect both stores without leaving half-written state behind.",
    lessons:
      "Walt was the project that made Riverpod's narrow-provider approach click, and it reinforced that a small, explicit service layer around platform APIs is worth more than clever abstractions. It also showed how much product value sits in boring details: an idempotent alert, a reversible delete, or a restore that writes a safety copy first.",
    architecture: `
+-------------------------------------------------+
|                   Walt App                      |
+-------------------------------------------------+
        |                   |                |
        v                   v                v
+----------------+ +----------------+ +----------------+
|  features/     | |  providers/    | |   shared/      |
|  screens + UI  | |   Riverpod     | |   widgets      |
+----------------+ +----------------+ +----------------+
        |                   |
        +---------+---------+
                  v
+-------------------------------------------------+
|                    data/                        |
|  local/     sqflite DAOs + Hive CE              |
|  models/    Freezed + json_serializable         |
|  reports/   pure aggregation + date maths       |
|  services/  notifications, PDF/CSV, backup, OTA |
+-------------------------------------------------+
`,
    decisions: [
      {
        title: "Budget alerts are idempotent per period",
        description:
          "Each alert key is built from the budget id, the period key, and the threshold, then persisted in Hive. A budget that jumps from 40% to 120% fires both the 80% and 100% alerts, but neither repeats until the next period.",
      },
      {
        title: "One backup spans SQLite and Hive",
        description:
          "The JSON backup reads raw rows from every SQLite table plus Hive settings and categories, because a database-only backup would silently lose the user's categories and preferences. Restore runs the SQLite half in a single transaction first, then applies Hive and referenced images.",
      },
      {
        title: "Reports are pure, testable functions",
        description:
          "Aggregation and date maths live in data/reports and never import Flutter. Providers only compose that output, which keeps the week/month/year boundaries and category breakdowns unit-testable without a widget tree.",
      },
      {
        title: "Android-only features degrade safely",
        description:
          "Biometrics, local notifications, and OTA install are wrapped behind services with platform checks. The Linux target used for development keeps the ledger and UI working while bypassing the parts Android owns.",
      },
    ],
    content: `
### Why Walt

Most finance apps assume an account and a server. Walt takes the opposite position: the ledger belongs on the device. There is no sign-up, no sync service, and no analytics SDK — the app opens and works whether or not the phone is online.

### What it feels like

The home screen is a summary rather than a spreadsheet: balance, this week's spending, pinned budgets, and recent activity. Deeper screens stay focused on one job — Activity for finding a transaction, Reports for understanding a period, Budgets for planning the next one.

### Offline-first, without a second source of truth

SQLite is the source of truth for transactions, budgets, accounts, and period snapshots. Hive CE handles key-value state such as theme settings, categories, and the "already alerted" markers. The backup service treats both stores as one unit so exporting and restoring cannot quietly drop the half the user forgot about.

### Platform edges are explicit

Biometrics, notifications, PDF sharing, and OTA install are Android-specific. Each lives behind a small service instead of being sprinkled through widgets, which keeps the feature code readable and lets the Linux development target run with those capabilities bypassed.
`,
  },
  {
    id: "mawaqit",
    slug: "mawaqit",
    title: "Mawaqit",
    tagline: "Prayer times that ring like a real alarm clock.",
    description:
      "A calm, location-aware prayer-times app for Android with exact-alarm adhan reminders, a live countdown, and a home-screen widget.",
    longDescription:
      "Mawaqit calculates prayer times on-device from GPS, a searched city, or manual coordinates, then delivers a pre-prayer countdown and a full adhan through Android's exact-alarm engine. It ships with a 2×2 Glance widget, Hijri dates, English/Arabic/French localization, and reliability tooling for battery and notification permissions.",
    image: "/images/projects/mawaqit/icon.png",
    category: "mobile",
    platform: "Android",
    tags: ["Prayer times", "Android alarms", "Widgets", "Offline-first"],
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "go_router",
      "adhan_dart",
      "geolocator",
      "flutter_local_notifications",
      "WorkManager",
      "home_widget",
      "Kotlin",
      "AlarmManager",
      "Jetpack Glance",
    ],
    features: [
      "Location-aware prayer times via adhan_dart — GPS, city search, or manual coordinates.",
      "Live countdown on the home screen with the next-prayer progress row and Hijri date beside the Gregorian date.",
      "Adhan that behaves like an alarm: exact alarms, a foreground playback service, and a full-screen lockscreen presenter.",
      "Pre-prayer live update notification with a system chronometer, progress bar, and Prayed/Dismiss actions (promoted on Android 16+).",
      "Two independent alert channels, each with its own tone picker and test button — a short chime and the full adhan.",
      "2×2 home-screen widget with location, next prayer, a per-second countdown, and a five-dot day sequence.",
      "Reliability permissions screen with live Allowed/Fix state for notifications, exact alarms, full-screen intents, DND access, and battery optimisation.",
      "Month prayer-times table with a solar arc, plus full English, Arabic, and French localization with RTL.",
      "In-app OTA updates with SHA-256 verification of the downloaded APK.",
    ],
    screenshots: [],
    github: "https://github.com/Abdogouhmad/mawaqit",
    release: "https://github.com/Abdogouhmad/mawaqit/releases/latest",
    featured: true,
    status: "done",
    challenges:
      "A prayer alarm has to survive Doze, reboots, timezone changes, and an app that was swiped away. Android also intentionally downgrades full-screen intents and background activity starts, so reliability is a permissions and platform-semantics problem as much as a scheduling one.",
    lessons:
      "Mawaqit pushed native Android work further than any previous project: exact alarms, a correctly typed foreground service, promoted notifications, boot receivers, and Glance. The recurring lesson was to keep scheduling math in Dart where it is testable, and give Kotlin only the jobs the platform insists on owning.",
    architecture: `
+-------------------------------------------------+
|        features/  home · times · settings       |
+-------------------------------------------------+
                  | Riverpod
                  v
+-------------------------------------------------+
|   providers/ + *_controller.dart                |
+-------------------------------------------------+
                  |
                  v
+-------------------------------------------------+
|   data/repositories  ->  data/services          |
|   adhan_dart · location · settings · OTA        |
+-------------------------------------------------+
                  |
                  v
+-------------------------------------------------+
|   Kotlin: PrayerScheduler (AlarmManager)        |
|   PrayerLiveUpdate · AdhanPlaybackService       |
|   Glance widget · BootReceiver                  |
+-------------------------------------------------+
`,
    decisions: [
      {
        title: "One native scheduler owns every alarm",
        description:
          "PrayerScheduler stores one JSON payload per occurrence and embeds a copy in the alarm PendingIntent. SharedPreferences writes are asynchronous, so the intent copy is what prevents a swipe-away from producing an alarm with no reminder data.",
      },
      {
        title: "The live update is a normal ongoing notification",
        description:
          "Instead of custom RemoteViews, the pre-prayer card uses the platform chronometer and ProgressStyle. That is what lets Android 16+ promote it to a status-bar chip and lockscreen while older releases still get a standard ongoing progress card.",
      },
      {
        title: "The adhan service is typed specialUse",
        description:
          "Declaring the playback service as mediaPlayback made the adhan appear as a media player with transport controls. specialUse keeps it in the alarm role, with the subtype documented for Play Console review.",
      },
      {
        title: "Recovery is part of scheduling",
        description:
          "AlarmManager drops alarms on reboot and package replacement, and stored alarms are absolute timestamps. BootReceiver re-arms on BOOT_COMPLETED, MY_PACKAGE_REPLACED, TIME_SET, and TIMEZONE_CHANGED rather than trusting the next background sync.",
      },
    ],
    content: `
### Why Mawaqit

Prayer times are predictable; delivering them reliably on Android is not. Mawaqit starts from the calculation — adhan_dart runs on-device from coordinates and a chosen method — and then treats delivery as a first-class feature: exact alarms, a lockscreen takeover, and a visible permissions model.

### Calm by default, loud when it matters

The app itself stays quiet: a countdown, the day's schedule, a month table, and a widget. The adhan is the exception. It plays on the alarm stream, can lift Do Not Disturb when access is granted, and stops from the on-screen button or either volume key.

### Reliability made visible

Instead of hiding failed adhans behind settings, the Permissions screen lists each system access the alarm depends on and shows a live Allowed/Fix state. A one-time battery-optimisation request runs on first install and after updates, because Doze behaviour differs across OEM builds.

### The widget is a view, not a second app

The Glance card renders a snapshot of the next prayer and a countdown, updated by the same scheduling data as the in-app screen. It keeps advancing while the app is closed and refreshes at prayer rollover, which is exactly the job a widget should do.
`,
  },
  {
    id: "anjiz",
    slug: "anjiz",
    title: "Anjiz (أنجِز)",
    tagline:
      "An offline-first to-do app with Google Tasks-style home-screen widgets.",
    description:
      "A Material 3 Expressive to-do app for Android with Drift storage, home-screen widgets, reminders, and a Pomodoro focus timer.",
    longDescription:
      "Anjiz (أنجِز) is a fully offline task manager built around Today, Upcoming, and colour-coded lists. It pairs a pure-Dart domain layer and Drift/SQLite storage with Jetpack Glance widgets, reboot-safe reminders, a Pomodoro timer with an Android 16+ Live Update, and a spring-motion Material 3 Expressive design system.",
    image: "/images/projects/anjiz/icon.png",
    category: "mobile",
    platform: "Android",
    tags: ["Productivity", "To-do", "Widgets", "Material 3 Expressive"],
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "go_router",
      "Drift",
      "SQLite",
      "Freezed",
      "flutter_local_notifications",
      "home_widget",
      "WorkManager",
      "Kotlin",
      "Jetpack Glance",
    ],
    features: [
      "Today agenda with a greeting banner, due and starred tasks, and a focused daily plan.",
      "Upcoming view with a date strip, per-day agenda, and a momentum summary.",
      "Colour-coded lists with per-list counts, progress, and a daily milestone.",
      "Tasks with due date/time, priority, notes, subtasks, recurrence, stars, and completion.",
      "Local reminders scheduled ahead of a task's due time and rebuilt after a reboot.",
      "Full-screen search across task titles and notes.",
      "Home-screen widgets: a 4×4/4×2 tasks overview, a 2×2 progress card, and a 4×1 quick-add bar.",
      "Tap-to-complete from a widget runs in a background isolate and refreshes every widget.",
      "Pomodoro focus timer with a foreground service and an Android 16+ Live Update notification.",
      "Material 3 Expressive UI with dynamic colour, spring motion, a scalloped checkbox, and a floating glass navigation bar.",
    ],
    screenshots: [
      {
        src: "/images/projects/anjiz/screenshots/01.webp",
        alt: "Anjiz Today screen design preview showing overdue and planned tasks",
      },
      {
        src: "/images/projects/anjiz/screenshots/02.webp",
        alt: "Anjiz Today screen design preview with greeting and agenda sections",
      },
      {
        src: "/images/projects/anjiz/screenshots/03.webp",
        alt: "Anjiz Lists screen design preview with colour-coded list cards",
      },
      {
        src: "/images/projects/anjiz/screenshots/04.webp",
        alt: "Anjiz task detail design preview with notes and subtasks",
      },
      {
        src: "/images/projects/anjiz/screenshots/05.webp",
        alt: "Anjiz Upcoming screen design preview with a date strip and day agenda",
      },
      {
        src: "/images/projects/anjiz/screenshots/06.webp",
        alt: "Anjiz add-task sheet design preview with schedule and metadata controls",
      },
      {
        src: "/images/projects/anjiz/screenshots/07.webp",
        alt: "Anjiz settings design preview with appearance and notification options",
      },
    ],
    screenshotNote:
      "These are high-fidelity design previews from the app's design system, not device captures. On-device screenshots will replace them as they are published.",
    github: "https://github.com/Abdogouhmad/anjiz",
    release: "https://github.com/Abdogouhmad/anjiz/releases/latest",
    featured: true,
    status: "done",
    challenges:
      "Widgets and reminders live outside the Flutter isolate, so the app has to keep a native view, a background callback, and Drift's single source of truth in sync — without letting a widget failure break an ordinary task edit.",
    lessons:
      "Anjiz was an exercise in dependency direction: keeping domain pure Dart while pushing Drift, notifications, widgets, and the Pomodoro service behind ports made the app easier to reason about. It also showed that a design system is only useful when the rules are enforced — UI primitives live in anjiz_ui, and features compose them instead of inventing new ones.",
    architecture: `
+-------------------------------------------------+
|  features/  today · upcoming · lists · detail   |
+-------------------------------------------------+
        |                       ^
        v                       |
+----------------+      +----------------+
|    domain/     | <--- |     data/      |
| entities, use  |      | Drift, DAOs,   |
| cases, ports   |      | repositories   |
+----------------+      +----------------+
        ^
        |  anjiz_ui design system + core
        |
Android: Jetpack Glance widgets <-- WidgetSyncService
         ReminderScheduler --> flutter_local_notifications
         PomodoroService (foreground + Live Update)
`,
    decisions: [
      {
        title: "One snapshot feeds every widget",
        description:
          "WidgetSyncService serialises the current tasks, lists, and widget configuration into one JSON payload. Native Glance providers read that snapshot, so the overview, progress, and quick-add widgets cannot drift into three different views of the data.",
      },
      {
        title: "Widget taps complete tasks on a background isolate",
        description:
          "Tap-to-complete does not launch the full UI. A Flutter background callback updates Drift and then asks every widget provider to refresh, keeping the interaction fast while preserving a single write path.",
      },
      {
        title: "The Pomodoro clock survives process death",
        description:
          "PomodoroService has no in-process ticker. Phase ends arrive as AlarmManager broadcasts, and the persisted run is restored and advanced by the native service, which is what makes a 25-minute focus session reliable on a phone that kills apps.",
      },
      {
        title: "Domain stays pure Dart",
        description:
          "Repository interfaces and the WidgetSyncer/ReminderScheduler ports live in domain; features never import data. That boundary is what lets reminders, widgets, and the Pomodoro service degrade to no-ops on the Linux development target.",
      },
    ],
    content: `
### Why Anjiz

Anjiz started with a simple test: can a to-do app feel calm on Android while still being fast at the moments that matter? The answer is a small set of surfaces — Today, Upcoming, Lists, task detail — each built from the same Material 3 Expressive design system rather than from one-off widgets.

### Offline-first as an architecture, not a slogan

Drift and SQLite are the single source of truth. There is no account and no network path. The domain layer is pure Dart, and the data layer implements its repository interfaces, which keeps use cases and widget logic testable without a device.

### Widgets that behave like part of the app

The overview, progress, and quick-add widgets are native Jetpack Glance code fed by a JSON snapshot. Completing a task from the home screen runs a background isolate, writes through the same database, and refreshes the widgets — no separate widget-only state.

### Motion with an off switch

Springs, scalloped shapes, and the floating glass navigation bar give the app its character, but they respect the system's reduced-motion setting and the in-app motion controls. Expressive is a default, not a requirement.
`,
  },
];
