export const profile = {
  name: "Kaushik Gurrala",
  role: "AI/ML Software Engineer",
  location: "Skillman, New Jersey",
  email: "gurralakaushik08@gmail.com",
  github: "https://github.com/KaushikGurrala",
  linkedin: "https://www.linkedin.com/in/kaushik-gurrala-b305742a5/",
  resume: "",
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  impact: string;
  metric: string;
  metricLabel: string;
  tech: string[];
  flow: string[];
  challenge: string;
  approach: string;
  result: string;
  github?: string;
  accent: "mint" | "violet" | "blue";
};

export const projects: Project[] = [
  {
    slug: "clinical-nlp-gateway",
    index: "01",
    title: "Clinical NLP Gateway",
    kicker: "MODEL TO OPERATIONS",
    description:
      "A production-style clinical NLP workflow that decides when text represents patient care before extracting relevant clinical entities.",
    impact: "Designed as an interchangeable service with evaluation, auditability, and controlled integration.",
    metric: "2-stage",
    metricLabel: "classification + extraction",
    tech: ["Python", "FastAPI", "DistilBERT", "BioClinicalBERT", "Docker", "SQL", "React"],
    flow: ["Input", "Classify", "Extract", "Serve", "Audit", "Review"],
    challenge:
      "General medical statements, quotations, family references, and actual patient-care text cannot be handled as though they mean the same thing.",
    approach:
      "A DistilBERT gate makes the routing decision. Approved text moves to BioClinicalBERT for entity extraction, then through a containerized FastAPI contract into an audit and review workflow.",
    result:
      "Built an end-to-end path with frozen validation and holdout datasets, precision/recall/F1 evaluation, error analysis, version controls, and fail-closed configuration behavior.",
    accent: "mint",
  },
  {
    slug: "aqros-agentic-validation",
    index: "02",
    title: "AQROS",
    kicker: "AGENTIC VALIDATION",
    description:
      "A multi-agent AI platform for structured strategy analysis, retrieval, governance checks, and deterministic decision gates.",
    impact: "AI coordinates interpretation; deterministic gates retain control of validation decisions.",
    metric: "500+",
    metricLabel: "strategies evaluated",
    tech: ["LangGraph", "LangChain", "Azure OpenAI", "RAG", "React", "Multi-agent workflows"],
    flow: ["Strategy", "Retrieve", "Analyze", "Score", "Gate", "Explain"],
    challenge:
      "Complex validation work is slow when evidence, rules, explanations, and review steps are spread across disconnected processes.",
    approach:
      "Multi-agent workflows coordinate retrieval and analysis while deterministic thresholds control validation outcomes and preserve explainability.",
    result:
      "Evaluated more than 500 strategies and reduced manual validation time by 75% while preserving structured governance checks.",
    accent: "violet",
  },
  {
    slug: "electricity-forecasting",
    index: "03",
    title: "Industrial Load Forecasting",
    kicker: "TIME-SERIES INTELLIGENCE",
    description:
      "A 15-minute-ahead electricity-demand forecasting system for industrial steel-plant data.",
    impact: "Compared tree-based and recurrent models using a chronological holdout instead of a random split.",
    metric: "0.998",
    metricLabel: "XGBoost R²",
    tech: ["XGBoost", "Random Forest", "LSTM", "GRU", "Python", "Feature Engineering"],
    flow: ["History", "Features", "Train", "Holdout", "Compare", "Forecast"],
    challenge:
      "Industrial demand contains daily and weekly structure, abrupt changes, and temporal dependencies that random data splitting can misrepresent.",
    approach:
      "Engineered time and lag features, trained four model families, and evaluated future periods through chronological validation.",
    result:
      "XGBoost achieved an R² of 0.998 on the chronological test set and outperformed the recurrent alternatives in this experiment.",
    github: "https://github.com/KaushikGurrala/Electricity-Forecasting-Steel-Industry",
    accent: "blue",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "AI & NLP",
    detail: "LLMs, transformer classification, clinical entity extraction, RAG, agentic workflows, prompt engineering",
  },
  {
    number: "02",
    title: "Backend & Systems",
    detail: "Python, FastAPI, REST APIs, SQL, PostgreSQL, MySQL, Docker, service integration",
  },
  {
    number: "03",
    title: "Evaluation",
    detail: "Precision, recall, F1, accuracy, R², holdout design, error analysis, regression thinking",
  },
  {
    number: "04",
    title: "Product Interface",
    detail: "React, TypeScript, JavaScript, HTML, CSS, operator-focused administrative workflows",
  },
];

export const experience = [
  {
    period: "FEB 2026 — PRESENT",
    title: "AI/ML Software Engineer",
    summary:
      "Building a containerized clinical NLP service, integrating model findings with an AI gateway and SQL audit workflow, and extending an operator-facing administrative experience.",
    tags: ["Clinical NLP", "FastAPI", "Transformers", "Docker", "SQL", "React"],
  },
  {
    period: "APR 2023 — AUG 2023",
    title: "Web Developer Intern",
    summary:
      "Built responsive web features and test scripts while collaborating across frontend, backend, and design workstreams.",
    tags: ["React", "Node.js", "TypeScript", "Testing"],
  },
];

export const buildProcess = [
  ["Understand", "Clarify the user problem, constraints, and failure cases."],
  ["Prototype", "Build the smallest useful end-to-end path."],
  ["Evaluate", "Measure behavior with holdouts, metrics, and error analysis."],
  ["Integrate", "Connect models to APIs, data, interfaces, and existing services."],
  ["Observe", "Make system behavior visible through logs, audits, and health signals."],
  ["Improve", "Let evidence—not novelty—guide the next iteration."],
];
