import React, { useMemo, useState, useEffect } from "react";

const PROJECTS = [
  {
    id: "conflict-warehouse",
    title: "Conflict & Crisis Data Warehouse",
    subtitle: "UNHCR + ACLED · DuckDB · Pandas",
    description:
      "Reproducible Bronze/Silver/Gold lakehouse with ingestion manifest, data-quality gates, and curated gold marts for refugee flows vs conflict.",
    highlights: ["Bronze/Silver/Gold", "Ingestion manifest", "DQ checks"],
    tags: ["Data Engineering", "DuckDB", "Public Policy"],
    status: "Live MVP",
    repo: "https://github.com/Costinha66/conflit_warehouse",
  },
  {
    id: "foodsub-explorer",
    title: "FoodSub Explorer",
    subtitle: "Embeddings · Graph KG · Retrieval",
    description:
      "Ingredient embeddings + substitution graph for context-aware swaps (nutrition, constraints, flavor proximity).",
    highlights: ["Embeddings", "Graph"],
    tags: ["NLP", "Knowledge Graph", "Food"],
    status: "Delivered",
  },
  {
    id: "mvl-object-labeler",
    title: "Multimodal Object Labeler - Eggshell",
    subtitle: "Vision-Language · VLM · Streamlit",
    description:
      "App that supports the upload of an image to detect and describe features in a eggshell",
    highlights: ["VLM Q&A"],
    tags: ["Computer Vision", "VLM"],
    status: "Delivered",
  },
];

const TAGS = ["All", "Data Engineering", "ML Systems", "NLP", "Computer Vision", "Public Policy"];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800/60 dark:text-slate-100">
      {children}
    </span>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900/40 dark:ring-slate-800">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-300">
        {label}
      </p>
      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-900/40 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-3">
        <a href="#home" className="text-sm font-semibold tracking-tight">
          Filipe Costa
        </a>
        <nav className="flex gap-4 text-sm text-slate-600 dark:text-slate-200">
          <a className="hover:text-slate-900 dark:hover:text-white" href="#projects">
            Projects
          </a>
          <a className="hover:text-slate-900 dark:hover:text-white" href="#about">
            About
          </a>
          <a className="hover:text-slate-900 dark:hover:text-white" href="#contact">
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
    <section
      id="home"
      className="min-h-[calc(100vh-3.5rem)] w-full bg-slate-950 text-slate-100"
    >
      <div className="mx-auto w-full px-6 py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Data Scientist · EngD @ JADS
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              I build ML systems and data products that people can actually use and understand.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-200/90">
              My work spans from large-scale recommendation systems serving millions of users to multimodal AI models combining vision and text. 
              I’m currently exploring robust, interpretable ML architectures through an EngD at JADS.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Machine Learning</Badge>
              <Badge>Recommender Systems</Badge>
              <Badge>Causal Inference</Badge>
              <Badge>Deep Learning</Badge>
              <Badge>Python</Badge>
              <Badge>Pyspark</Badge>
              <Badge>DuckDB</Badge>
              <Badge>Polars</Badge>
              <Badge>FastAPI</Badge>
            </div>
            <div className="mt-7 flex gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-950 shadow hover:bg-white"
              >
                View projects
              </a>
              <button
                onClick={() => setEnabled(!enabled)}
                className="rounded-xl border border-slate-700/70 bg-slate-950/40 px-4 py-2 text-sm text-slate-100 hover:bg-slate-900"
              >
                {enabled ? "Dark" : "Light"} mode
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 w-full max-w-sm">
              <Stat label="Years in DS/ML" value="4" />
              <Stat label="Deployed projects" value="10+" />
              <Stat label="Domains" value="Finance, E-commerce, Agriculture, Food industry, Cybercrime" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-900/40 dark:ring-slate-800">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:bg-slate-800/70 dark:text-slate-200">
          {p.status}
        </span>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-300">{p.subtitle}</p>
      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-100">{p.description}</p>
      <div className="flex flex-wrap gap-2">
        {p.highlights?.map((h) => (
          <span
            key={h}
            className="rounded-full bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500 ring-1 ring-slate-100 dark:bg-slate-900/40 dark:text-slate-200 dark:ring-slate-800/60"
          >
            {h}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {p.tags?.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="pt-1">
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-900 hover:underline dark:text-slate-100"
          >
            View repo ↗
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectsSection() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const q = query.toLowerCase().trim();
      const matchesText =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q);
      const matchesTag = tag === "All" || p.tags?.includes(tag);
      return matchesText && matchesTag;
    });
  }, [query, tag]);

  return (
    <section id="projects" className="mx-auto w-full px-6 py-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            Compact, production-minded projects that match my CV.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none ring-slate-200 focus:ring-2 dark:border-slate-800 dark:bg-slate-900/40"
          />
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900/40"
          >
            {TAGS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto w-full px-6 py-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-900/40 dark:ring-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          About
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-100">
          I’ve shipped recommenders at scale (Prozis), worked on conflict/crisis data (warehouse for
          refugee flows), and I’m doing an EngD at JADS to go deeper into reliable AI systems. I like
          to show working code, good docs, and realistic data products.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>Recommenders</Badge>
          <Badge>ETL & Lakehouse</Badge>
          <Badge>VLM</Badge>
          <Badge>Stakeholder Comms</Badge>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto w-full px-6 py-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-900/40 dark:ring-slate-800">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Contact
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-100">
          Based in Eindhoven, NL — open to EU-wide roles and collaborations.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="mailto:filipeedge@gmail.com"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950"
          >
            Email me
          </a>
          <a
            href="https://github.com/Costinha66"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-200 bg-white/60 px-4 py-2 text-sm text-slate-900 hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-100"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/filipe-costa-b3199b13b/"
            target="_blank"
            className="rounded-xl border border-slate-200 bg-white/60 px-4 py-2 text-sm text-slate-900 hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-100"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} Filipe Costa — Portfolio
      </p>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProjectsSection />
      <About />
      <Contact />
    </div>
  );
}
