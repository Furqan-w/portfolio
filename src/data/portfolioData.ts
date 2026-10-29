export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  company: string;
  year: string;
  timeline: string;
  role: string;
  team: string[];
  status: string;
  liveUrl?: string;
  coverImage: string;
  featured: boolean;
  color: string;
  accentColor: string;
  summary: string;
  background: {
    title: string;
    description: string[];
    quote?: string;
  };
  audience?: {
    title: string;
    description: string;
    details?: string[];
  };
  sections: {
    heading: string;
    subheading?: string;
    content: string[];
    highlight?: string;
    imagePlaceholder?: {
      caption: string;
      aspectRatio?: string;
      type: "dashboard" | "mobile" | "workflow" | "card" | "spreadsheet";
    };
  }[];
  impact?: {
    metric: string;
    label: string;
    description?: string;
  }[];
  learnings?: string[];
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  description: string;
  skills?: string[];
}

export interface RecommendationItem {
  title: string;
  creator: string;
  category: "watch" | "read" | "listen";
  year?: string;
  note?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  honors?: string;
  cgpa: string;
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  location: string;
  timezone: string;
  status: string;
  contact: {
    email: string;
    linkedin: string;
    framer: string;
    x: string;
    github: string;
  };
  toolkit: { name: string; category: string; level: string }[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  recommendations: {
    films: RecommendationItem[];
    books: RecommendationItem[];
    tracks: RecommendationItem[];
  };
  bucketList: { text: string; done: boolean }[];
  testimonials: Testimonial[];
  projects: Project[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Furqan Waris",
  title: "Full-Stack AI Engineer",
  bio: "Full-Stack AI Engineer and Computer Science graduate skilled in bridging modern web architectures with applied artificial intelligence. Adept at building end-to-end, AI-powered applications from data ingestion and model integration to production-ready APIs.",
  location: "Lahore, Pakistan",
  timezone: "Asia/Karachi",
  status: "Available for select opportunities",
  contact: {
    email: "furqanwaris82@gmail.com",
    linkedin: "https://linkedin.com/in/furqan-waris-b8782426a",
    framer: "https://framer.com",
    x: "https://x.com",
    github: "https://github.com",
  },
  toolkit: [
    { name: "Python", category: "Language", level: "Daily" },
    { name: "LangGraph / RAG", category: "AI & Agents", level: "Production" },
    { name: "PyTorch / ML", category: "Machine Learning", level: "Advanced" },
    { name: "Next.js / React", category: "Frontend", level: "Building" },
    { name: "FastAPI / Node.js", category: "Backend", level: "Daily" },
    { name: "MongoDB / SQL", category: "Databases", level: "Daily" },
    { name: "Langfuse / Phoenix", category: "LLMOps", level: "Proficient" },
    { name: "AWS (S3, Glue, EC2)", category: "Cloud & ETL", level: "Proficient" },
  ],
  experiences: [
    {
      company: "QTO Dev",
      period: "Jan 2026 - Present",
      role: "AI Engineer",
      description:
        "Optimized PDF document ingestion using Docling and parallel execution, increasing document parsing throughput by 16%. Developed an end-to-end RAG pipeline for construction estimation, improving Precision@20 from 66% to 83% and Recall@20 by 10%. Programmed stateful workflow routing using LangGraph with fallback loops, and integrated Langfuse for end-to-end LLM observability, tracking latencies, costs, and token usage.",
      skills: ["LangGraph", "RAG", "Langfuse", "Docling", "Python"],
    },
    {
      company: "Techroniqs",
      period: "Feb 2025 - Jan 2026",
      role: "Software Engineer",
      description:
        "Implemented asynchronous data fetching (AJAX / polling) for continuous server updates. Implemented MongoDB indexing strategies to optimize query performance, reducing data retrieval times for large datasets and improving application responsiveness under high concurrent user load.",
      skills: ["MongoDB", "Query Optimization", "AJAX", "Backend Systems"],
    },
    {
      company: "University of Central Punjab",
      period: "May - Aug 2025",
      role: "Teaching Assistant",
      description:
        "Mentored 50+ students in programming fundamentals, logic-building, and flowchart design, improving lab performance by 20%. Assisted students in debugging C/C++ and Python programs, focusing on logic errors and performance optimization, and participated in code reviews.",
      skills: ["C/C++", "Python", "Mentorship", "Code Reviews"],
    },
    {
      company: "AK Soft",
      period: "Feb - Aug 2024",
      role: "Frontend Developer",
      description:
        "Built and maintained responsive web interfaces using React, Next.js, and Tailwind CSS, delivering consistent UI across multiple devices and screen sizes. Optimized page load performance through code-level improvements, resulting in faster load times and smoother UX.",
      skills: ["React", "Next.js", "Tailwind CSS", "Frontend Optimization"],
    },
  ],
  education: [
    {
      institution: "University of Central Punjab",
      degree: "Bachelor of Computer Science",
      honors: "Graduated with Honors",
      cgpa: "3.49",
      location: "Lahore, Pakistan",
    },
  ],
  certifications: [
    { title: "Introduction to Data Engineering", issuer: "DeepLearning.AI & AWS" },
    { title: "Machine Learning Specialization", issuer: "DeepLearning.AI & Stanford Online" },
    { title: "Source Systems, Data Ingestion, and Pipelines", issuer: "DeepLearning.AI & AWS" },
    { title: "AI Agent Developer Specialization", issuer: "Vanderbilt University" },
    { title: "Data Collection and Processing with Python", issuer: "University of Michigan" },
    { title: "Trustworthy Generative AI", issuer: "Vanderbilt University" },
  ],
  recommendations: {
    films: [
      { title: "Interstellar", creator: "Christopher Nolan", category: "watch", year: "2014", note: "A breathtaking journey through space, time, love, and the limits of human perseverance." },
      { title: "Chashme Buddoor", creator: "Sai Paranjpye", category: "watch", year: "1981", note: "Pure Delhi warmth and comedic genius." },
      { title: "Chhoti Si Baat", creator: "Basu Chatterjee", category: "watch", year: "1976", note: "Timeless slice of life about quiet longing." },
      { title: "Ankhon Dekhi", creator: "Rajat Kapoor", category: "watch", year: "2013", note: "A gentle masterclass in seeing the world firsthand." },
      { title: "Masaan", creator: "Neeraj Ghaywan", category: "watch", year: "2015", note: "Grief, poetry, and redemption on the Banaras ghats." },
      { title: "Dev.D", creator: "Anurag Kashyap", category: "watch", year: "2009", note: "Electrifying reinvention of Indian cinema language." },
      { title: "Oye Lucky! Lucky Oye!", creator: "Dibakar Banerjee", category: "watch", year: "2008", note: "Sharp social observation wrapped in humor." },
      { title: "The Worst Person in the World", creator: "Joachim Trier", category: "watch", year: "2021", note: "Navigating twenties with grace, chaos and heartbreak." },
      { title: "Udaan", creator: "Vikramaditya Motwane", category: "watch", year: "2010", note: "The anthem of adolescent liberation and dreams." },
    ],
    books: [
      { title: "Sapiens", creator: "Yuval Noah Harari", category: "read", note: "How cognitive revolutions shaped human mythmaking." },
      { title: "How to Feed the World", creator: "Vaclav Smil", category: "read", note: "Grounded engineering look at humanity's greatest machine." },
      { title: "Sophie's World", creator: "Jostein Gaarder", category: "read", note: "A whimsical doorway into two millennia of philosophical inquiry." },
      { title: "India After Gandhi", creator: "Ramachandra Guha", category: "read", note: "The epic story of the world's most unlikely democracy." },
      { title: "Raag Darbari", creator: "Srilal Shukla", category: "read", note: "Biting satire of rural bureaucracy and realpolitik." },
      { title: "The Great Indian Brain Rot", creator: "Anurag Minus Verma", category: "read", note: "Modern cultural commentary on internet subcultures." },
      { title: "The White Tiger", creator: "Aravind Adiga", category: "read", note: "Raw, dark energy of modern social stratification." },
      { title: "Annapurna", creator: "Maurice Herzog", category: "read", note: "Human endurance at the edge of the world's first 8,000m climb." },
    ],
    tracks: [
      { title: "Daylight Memories", creator: "Kavinsky / Synthwave", category: "listen", note: "Focus flow playlist" },
      { title: "Kashmir Mountain Breeze", creator: "Ambient Acoustic", category: "listen", note: "Late night work state" },
      { title: "Warm Tape Loops", creator: "Four Tet / Floating Points", category: "listen", note: "Creative tinkering" },
    ],
  },
  bucketList: [
    { text: "Summit a 6,000m peak in the Himalayas", done: false },
    { text: "Design and ship a full operating system shell", done: false },
    { text: "Publish an independent physical philosophy zine", done: false },
    { text: "Drive solo through the Spiti Valley circuit", done: true },
    { text: "Master hand-wheel ceramic pottery", done: false },
    { text: "Build a product used by over 10 million people", done: true },
  ],
  testimonials: [],
  projects: [
    {
      slug: "galaxy-knowledge",
      title: "Galaxy Knowledge LLM Fine-Tuning",
      subtitle: "Domain-specific Llama fine-tuning for astronomy Q&A using LoRA and PyTorch.",
      category: "LLM Fine-Tuning & GenAI",
      company: "Astrophysics AI",
      year: "2025",
      timeline: "5 weeks",
      role: "AI Engineer",
      team: ["Sole Researcher & Developer"],
      status: "Model Evaluated & Benchmark Ready",
      coverImage: "/projects/galaxy-knowledge.jpg",
      featured: true,
      color: "#0f172a",
      accentColor: "#8b5cf6",
      summary:
        "Fine-tuned a Llama-based LLM on a domain-specific galaxy knowledge dataset using Python, PyTorch, Hugging Face Transformers, and LoRA/PEFT to dramatically improve responses to astronomy-related queries.",
      background: {
        title: "Mitigating Domain Hallucinations in Open-Source LLMs",
        description: [
          "Base foundation models exhibit significant hallucination rates when asked deep domain questions regarding galactic morphometry, cosmological redshift calculations, and spectroscopic emission lines.",
          "By curating an authoritative astrophysics dataset and establishing a rigorous LoRA/PEFT parameter-efficient fine-tuning protocol, this project aligned the model to provide precise astrophysical analyses.",
          "The evaluation pipeline verified a dramatic error reduction on complex, multi-hop astronomy questions.",
        ],
        quote: "Specialized models trained with surgical precision outperform generalist giants on scientific ground truths.",
      },
      sections: [
        {
          heading: "Data Preprocessing & Synthetic Augmentation",
          subheading: "Curating high-signal astronomical training sets",
          content: [
            "Extracted and cleaned peer-reviewed galaxy catalog literature, structuring dense tables into natural-language instruction pairs.",
            "Formulated validation splits strictly isolated by galaxy cluster to guarantee real-world generalization on unseen celestial data.",
          ],
          imagePlaceholder: {
            caption: "Instruction dataset distribution across morphology, spectroscopy, and redshift domains.",
            type: "dashboard",
          },
        },
        {
          heading: "LoRA / PEFT Parameter-Efficient Training",
          subheading: "Optimizing rank adaptation on PyTorch and Hugging Face",
          content: [
            "Configured rank-16 LoRA adapters targeting the query, key, value, and projection matrices of the Llama base transformer.",
            "Trained with 16-bit mixed precision (bfloat16), preventing catastrophic forgetting while preserving base conversational fluency.",
          ],
          imagePlaceholder: {
            caption: "Loss curve comparison: rapid convergence without divergence on validation queries.",
            type: "workflow",
          },
        },
      ],
      impact: [
        { metric: "65% → 12%", label: "Error Rate Reduction", description: "Benchmarked on unseen galaxy-related test questions." },
        { metric: "85%", label: "Compute Savings", description: "Achieved through parameter-efficient LoRA adapters." },
        { metric: "Zero", label: "Catastrophic Forgetting", description: "Preserved base linguistic logic while mastering domain truths." },
      ],
      learnings: [
        "Data hygiene in domain-specific tokenization accounts for 80% of fine-tuning success.",
        "Targeting both attention and MLP projection layers provides superior factual grounding for mathematical reasoning.",
      ],
    },
    {
      slug: "enterprise-erp",
      title: "Enterprise ERP AI Agent",
      subtitle: "Autonomous multi-step reasoning, stateful workflows, and dynamic tool calling.",
      category: "Multi-Agent Systems & LangGraph",
      company: "Enterprise AI",
      year: "2025",
      timeline: "8 weeks",
      role: "AI Architect",
      team: ["AI Engineer", "Backend Lead"],
      status: "Production Ready",
      coverImage: "/projects/enterprise-erp.jpg",
      featured: true,
      color: "#1e1b4b",
      accentColor: "#3b82f6",
      summary:
        "Architected an agentic ERP assistant using LangGraph, enabling autonomous multi-step reasoning, stateful workflows, and dynamic tool calling across disparate enterprise systems.",
      background: {
        title: "Breaking Enterprise Information Silos",
        description: [
          "Enterprise resource planning systems hold vital data across finance, inventory, human resources, and supply chains—yet teams lose hours navigating rigid SQL dashboards and separate tools.",
          "We engineered an intelligent agentic routing graph that understands complex human intent, autonomously queries relevant ERP microservices, verifies permission boundaries, and synthesizes actionable reports.",
        ],
        quote: "Transforming rigid relational software into a proactive conversational colleague.",
      },
      sections: [
        {
          heading: "Stateful Workflow Routing with LangGraph",
          subheading: "Conditional branching and cyclic graph loops",
          content: [
            "Constructed cyclic graphs with state memory to handle multi-step tasks, such as 'Reconcile invoice #402 against vendor shipping logs and draft an approval notification.'",
            "Implemented fallback nodes that trigger clarifying questions when user instructions are ambiguous.",
          ],
          imagePlaceholder: {
            caption: "LangGraph state machine visualizing router, evaluator, tool caller, and human-in-the-loop nodes.",
            type: "workflow",
          },
        },
        {
          heading: "Full Observability with Langfuse",
          subheading: "Real-time trace, token cost, and latency optimization",
          content: [
            "Embedded Langfuse telemetry into every node execution, logging prompt versions, token consumption, and step latencies.",
            "Identified latency bottlenecks and optimized prompt templates, slashing overall agent runtimes by 35%.",
          ],
          imagePlaceholder: {
            caption: "Langfuse dashboard monitoring agent execution loops, latency percentiles, and cost attribution.",
            type: "dashboard",
          },
        },
      ],
      impact: [
        { metric: "40%", label: "Operational Productivity Boost", description: "Measured across routine administrative inquiries." },
        { metric: "100%", label: "Traceability & Auditability", description: "Every tool invocation logged with inputs and security metadata." },
        { metric: "35%", label: "Latency Optimization", description: "Streamlined node executions and caching layers." },
      ],
      learnings: [
        "Stateful cyclic graphs drastically outshine flat linear chains for real enterprise workflows.",
        "Pre-condition validation at tool calling boundaries prevents costly LLM hallucination cascades.",
      ],
    },
    {
      slug: "hr-recruitment",
      title: "AI-Powered HR Recruitment System",
      subtitle: "Machine learning screening application with semantic resume matching and hybrid retrieval.",
      category: "Semantic Search & RAG",
      company: "HR Tech",
      year: "2025",
      timeline: "6 weeks",
      role: "Full-Stack AI Engineer",
      team: ["AI Engineer", "Product Designer"],
      status: "Shipped",
      coverImage: "/projects/hr-recruitment.jpg",
      featured: true,
      color: "#064e3b",
      accentColor: "#10b981",
      summary:
        "Developed a machine learning-driven screening application to match candidate resumes with job specifications using semantic search, hybrid retrieval, and custom text processing pipelines.",
      background: {
        title: "Eliminating Keyword Blindspots in Talent Sourcing",
        description: [
          "Traditional applicant tracking systems rely on naive keyword matching, missing exceptional candidates who describe skills with synonymous or project-based terminology.",
          "This platform uses dense vector embeddings combined with lexical BM25 filtering to evaluate applicant profiles semantically against exact job requirements.",
        ],
      },
      sections: [
        {
          heading: "Hybrid Semantic & Lexical Retrieval Pipeline",
          subheading: "Dense vector search meets structured SQL filters",
          content: [
            "Extracted and chunked resumes using custom text parsers, preserving section contexts (Experience, Projects, Education).",
            "Generated high-dimensional embeddings and indexed them in MongoDB with compound indexing for instant candidate filtering.",
          ],
          imagePlaceholder: {
            caption: "Candidate screening dashboard displaying similarity scores and skill-fit heatmaps.",
            type: "dashboard",
          },
        },
      ],
      impact: [
        { metric: "75%", label: "Screening Time Reduction", description: "Recruiters review qualified applicants in minutes." },
        { metric: "92%", label: "Match Relevance Accuracy", description: "Validated against expert recruiter benchmark sets." },
      ],
      learnings: [
        "Hybrid retrieval (dense semantic + sparse keyword) consistently outperforms pure vector search for resumes.",
      ],
    },
    {
      slug: "intelligent-scraper",
      title: "AI-Powered Intelligent Web Scraping Platform",
      subtitle: "Dynamic web scraper crawling project listings across 1,000+ target websites with automated error-recovery.",
      category: "Data Pipelines & Automation",
      company: "Data Ingestion Tech",
      year: "2025",
      timeline: "5 weeks",
      role: "Backend & AI Engineer",
      team: ["Sole Engineer"],
      status: "Active Ingestion",
      coverImage: "/projects/intelligent-scraper.svg",
      featured: false,
      color: "#451a03",
      accentColor: "#f59e0b",
      summary:
        "Developed an AI-driven web scraper using Playwright and FastAPI to dynamically crawl, parse, and ingest project listings and bidding opportunities across 1,000+ target websites with self-correcting selector logic.",
      background: {
        title: "Tackling Fragile Selectors Across 1,000+ Dynamic Layouts",
        description: [
          "Scraping dynamic enterprise listings across hundreds of government and private bidding portals is notoriously fragile due to frequent DOM mutations and anti-bot measures.",
          "I architected an automated error-analysis pipeline that monitors selector failures, inspects DOM deltas with LLM reasoning, and dynamically repairs parsing paths.",
        ],
      },
      sections: [
        {
          heading: "Self-Healing Parsing Architecture",
          subheading: "Automated error analysis and heuristic fallback",
          content: [
            "Built headless Playwright crawler workers orchestrated via FastAPI endpoints and asynchronous task queues.",
            "When selector failure rates spike, the pipeline captures page snapshots, identifies the shifted elements, and updates the extraction schema automatically.",
          ],
          imagePlaceholder: {
            caption: "Crawling health monitor showing success rates across 1,000+ target domains.",
            type: "dashboard",
          },
        },
      ],
      impact: [
        { metric: "1,000+", label: "Target Websites Crawled", description: "Continuous automated ingestion pipeline." },
        { metric: "99.2%", label: "Extraction Uptime", description: "Maintained through autonomous selector self-healing." },
      ],
    },
    {
      slug: "voice-agent",
      title: "Voice Agent Platform",
      subtitle: "Dynamic voice-assistant platform with guardrails and RAG-based domain knowledge.",
      category: "Conversational Voice AI",
      company: "AI Agent Platform",
      year: "2025",
      timeline: "6 weeks",
      role: "AI Engineer",
      team: ["AI Engineer", "Frontend Developer"],
      status: "Live Demo",
      coverImage: "/projects/voice-agent.svg",
      featured: false,
      color: "#311042",
      accentColor: "#a855f7",
      summary:
        "Built a dynamic voice-agent platform using Uplift AI, enabling users to create and configure personalized voice assistants through natural, two-way conversations.",
      background: {
        title: "Configuring AI Agents Naturally Through Conversation",
        description: [
          "Rather than filling complex configuration forms, users converse with an architect voice agent that interviews them to extract the assistant's persona, knowledge base, and behavioral boundaries.",
        ],
      },
      sections: [
        {
          heading: "Zero-Latency Audio Streaming & Guardrails",
          subheading: "Natural two-way spoken interaction",
          content: [
            "Integrated Uplift AI and FastAPI with WebSocket audio streaming, achieving under 500ms conversational turn-taking latency.",
            "Implemented strict guardrails preventing off-topic drift and enforcing domain policies.",
          ],
          imagePlaceholder: {
            caption: "Voice configuration studio with real-time waveform visualization.",
            type: "workflow",
          },
        },
      ],
      impact: [
        { metric: "<500ms", label: "Turn-Taking Latency", description: "Feels like a natural human telephone conversation." },
        { metric: "100%", label: "Zero-Code Configuration", description: "Build agents by speaking naturally." },
      ],
    },
    {
      slug: "ecommerce-rag",
      title: "AI-Powered E-Commerce RAG & LLMOps Platform",
      subtitle: "Agentic RAG featuring intelligent query routing, self-correction, and Phoenix AI observability.",
      category: "Agentic RAG & LLMOps",
      company: "E-Commerce Tech",
      year: "2025",
      timeline: "6 weeks",
      role: "AI Engineer",
      team: ["Lead AI Engineer"],
      status: "Production Pipeline",
      coverImage: "/projects/ecommerce-rag.svg",
      featured: false,
      color: "#1e293b",
      accentColor: "#ec4899",
      summary:
        "Architected and deployed an end-to-end Agentic RAG system featuring intelligent query routing, self-correction loops, and recursive retrieval using Python and Weaviate, boosting precision by 8% and recall by 14%.",
      background: {
        title: "Multi-Turn Product Queries with High Faithfulness",
        description: [
          "E-commerce product catalogs demand high retrieval precision: customers ask nuanced questions comparing specs, dimensions, and compatibility across hundreds of items.",
          "We engineered recursive retrieval loops coupled with automated Phoenix AI observability to continuously trace agent reasoning faithfulness.",
        ],
      },
      sections: [
        {
          heading: "Self-Correction & Recursive Retrieval Loops",
          subheading: "Weaviate vector search and query reformulation",
          content: [
            "Queries are routed through an evaluator node that checks context relevance before generation, re-writing search keywords if initial documents fall below confidence thresholds.",
            "Deployed automated evaluation pipelines utilizing Phoenix AI Observability and OpenTelemetry to monitor retrieval hallucination rates.",
          ],
          imagePlaceholder: {
            caption: "Phoenix observability tracing query reasoning steps and faithfulness scores.",
            type: "dashboard",
          },
        },
      ],
      impact: [
        { metric: "+8%", label: "Precision Increase", description: "Self-correction loops refine context." },
        { metric: "+14%", label: "Recall Boost", description: "Recursive multi-vector retrieval across catalogs." },
      ],
    },
  ],
};
