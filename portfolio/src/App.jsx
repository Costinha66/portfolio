import React, { useMemo, useState, useEffect } from "react";

const PROJECTS = [
  {
    id: "conflict-warehouse",
    title: "Conflict & Crisis Data Warehouse",
    subtitle: "UNHCR + ACLED · DuckDB · Polars · Streamlit",
    description:
      "Reproducible Bronze/Silver/Gold lakehouse with ingestion manifest, DQ gates, curated gold marts (lags/rolling features), and a 1-click analytics app for flows vs. conflict overlays.",
    highlights: ["Bronze/Silver/Gold", "Ingestion manifest", "DQ checks", "Streamlit app"],
    tags: ["Data Engineering", "DuckDB", "ETL", "Public Policy"],
    status: "Live MVP",
    repo: "https://github.com/Costinha66/conflit_warehouse",
    demo: null,
    year: 2025,
  },
  {
    id: "recsys-in-a-box",
    title: "Recommendation System in a Box",
    subtitle: "FastAPI · Ranking · Docker Compose",
    description:
      "A minimal yet realistic e-commerce recommender (hybrid CF + content) with feature store stubs, offline metrics, and live API endpoints.",
    highlights: ["Hybrid ranking", "FastAPI", "Offline metrics", "Docker"],
    tags: ["ML Systems", "Recommenders", "APIs"],
    status: "Prototype",
    repo: "#",
    demo: null,
    year: 2025,
  },
  {
    id: "foodsub-explorer",
    title: "FoodSub Explorer",
    subtitle: "Embeddings · Graph KG · Retrieval",
    description:
      "Ingredient embeddings and substitution graph for context-aware swaps (nutrition, constraints, flavor proximity) with a simple interactive explorer.",
    highlights: ["Embeddings", "Graph", "Retriever"],
    tags: ["NLP", "Knowledge Graph", "Food"],
    status: "Work in progress",
    repo: "#",
    demo: null,
    year: 2025,
  },
  {
    id: "mvl-object-labeler",
    title: "Multimodal Object Labeler",
    subtitle: "Vision-Language · Q&A over images",
    description:
      "Upload an image and ask questions like ‘How many cracked eggs?’ or ‘Which grains are damaged?’ Uses a light VLM with promptable tools.",
    highlights: ["VLM Q&A", "Prompt tools"],
    tags: ["Computer Vision", "VLM", "Applied AI"],
    status: "Concept",
    repo: "#",
    demo: null,
    year: 2025,
  },
  {
    id: "urban-heat-mapping",
    title: "Urban Heat Mapping",
    subtitle: "Geospatial · Sentinel · Anomaly Detection",
    description:
      "A compact geo pipeline that surfaces temperature anomalies over time for selected cities, with policy-style storytelling.",
    highlights: ["NDVI/LST proxies", "Timeseries", "Story cards"],
    tags: ["Geospatial", "Time Series", "Public Policy"],
    status: "Idea",
    repo: "#",
    demo: null,
    year: 2025,
  },
  {
    id: "music-similarity",
    title: "Duet Similarity Explorer",
    subtitle: "Audio Embeddings · 2-Cellos fun",
    description:
      "Embeds tracks to explore ‘duet compatibility’ and arrange playable pairings. Personal, musical, and nerdy.",
    highlights: ["Audio2Vec", "Nearest neighbors"],
    tags: ["Audio", "Embeddings", "Playful"],
    status: "Idea",
    repo: "#",
    demo: null,
    year: 2025,
  },
];

const TAGS = [
  "All",
  "Data Engineering",
  "ML Systems",
  "Computer Vision",
  "VLM",
  "NLP",
  "Knowledge Graph",
  "Geospatial",
  "Audio",
  "Public Policy",
  "ETL",
  "APIs",
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium opacity-90">
      {children}
    </span>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex flex-col items-start gap-1 rounded-2xl border p-4 shadow-sm">
      <div className="text-sm opacity-70">{label}</div>
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 bg-white/90 dark:bg-neutral-900/90 border-b">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold">
          Filipe Costa
        </a>
        <nav className="flex items-center gap-3 text-sm">
          <a className="hover:opacity-80" href="#projects">
            Projects
          </a>
          <a className="hover:opacity-80" href="#about">
            About
          </a>
          <a className="hover:opacity-80" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function useDarkPref() {
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (enabled) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [enabled]);
  return { enabled, setEnabled };
}

function Hero() {
  const { enabled, setEnabled } = useDarkPref();
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pt-10 pb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Data Scientist → Systems Thinker
          </h1>
          <p className="mt-4 text-lg opacity-80">
            I build lean, production-minded ML/AI systems and clear data products. From e-commerce
            recommenders to refugee-flow warehouses and VLM demos, my work favors clarity, speed, and
            measurable impact.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>Python</Badge>
            <Badge>DuckDB</Badge>
            <Badge>Polars</Badge>
            <Badge>PyTorch</Badge>
            <Badge>FastAPI</Badge>
            <Badge>Streamlit</Badge>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3 w-full md:w-auto">
          <div className="grid grid-cols-3 gap-3 w-full md:w-80">
            <Stat label="Years in DS/ML" value="3+" />
            <Stat label="Deployed projects" value="10+" />
            <Stat label="Domains" value="5" />
          </div>
          <button
            onClick={() => setEnabled(!enabled)}
            className="mt-2 rounded-xl border px-3 py-2 text-sm hover:shadow"
            title="Toggle theme"
          >
            {enabled ? "☾ Dark" : "☀︎ Light"}
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="group relative flex flex-col gap-3 rounded-3xl border p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
        <span className="text-xs rounded-full border px-2 py-1 opacity-80">{p.status}</span>
      </div>
      <div className="text-sm opacity-70">{p.subtitle}</div>
      <p className="text-[15px] leading-6 opacity-90">{p.description}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        {p.highlights.map((h) => (
          <span key={h} className="text-xs rounded-full bg-black/5 dark:bg-white/10 px-2 py-1">
            {h}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
        {p.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-3">
        {p.repo && (
          <a
            href={p.repo}
            className="rounded-xl border px-3 py-2 text-sm hover:shadow"
            target="_blank"
            rel="noreferrer"
          >
            View repo ↗
          </a>
        )}
        {p.demo && (
          <a
            href={p.demo}
            className="rounded-xl border px-3 py-2 text-sm hover:shadow"
            target="_blank"
            rel="noreferrer"
          >
            Live demo ↗
          </a>
        )}
      </div>
      <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-black/10 dark:group-hover:ring-white/10 pointer-events-none" />
    </article>
  );
}

function ProjectsSection() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const q = query.toLowerCase().trim();
      const byText =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.tags.join(" ").toLowerCase().includes(q);
      const byTag = tag === "All" || p.tags.includes(tag);
      return byText && byTag;
    });
  }, [query, tag]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
          <p className="mt-1 opacity-80 text-sm max-w-2xl">
            A selection of compact, production-minded projects. Search or filter by tag.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="w-full sm:w-72 rounded-xl border px-3 py-2 text-sm bg-transparent"
          />
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded-xl border px-3 py-2 text-sm bg-transparent"
          >
            {TAGS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 leading-7 opacity-90 max-w-3xl">
          I’ve shipped recommenders at scale (Prozis), built conflict-aware data products for
          humanitarian insight, and currently pursue an EngD at JADS focused on robust, deployable AI
          systems. I care about clear architectures, measurable outcomes, and making complex ideas
          easy to use.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>Recommenders</Badge>
          <Badge>VLM & Vision</Badge>
          <Badge>ETL & Lakehouse</Badge>
          <Badge>Experimentation</Badge>
          <Badge>Stakeholder Comms</Badge>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-14">
      <div className="rounded-3xl border p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 opacity-90">Based in Eindhoven, NL — open to EU-wide roles and collaborations.</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a href="mailto:filipeedge@gmail.com" className="rounded-xl border px-3 py-2 text-sm hover:shadow">
            Email me
          </a>
          <a href="#" className="rounded-xl border px-3 py-2 text-sm hover:shadow" title="Attach your latest CV">
            Download CV
          </a>
          <a
            href="https://github.com/Costinha66"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border px-3 py-2 text-sm hover:shadow"
          >
            GitHub ↗
          </a>
          <a href="#" className="rounded-xl border px-3 py-2 text-sm hover:shadow">
            LinkedIn ↗
          </a>
        </div>
      </div>
      <footer className="mt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Filipe Costa — Built with React & Tailwind classes
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-black/10 dark:selection:bg-white/20">
      <Header />
      <Hero />
      <ProjectsSection />
      <About />
      <Contact />
    </div>
  );
}
