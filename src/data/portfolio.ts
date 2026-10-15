// ============================================
// EDIT YOUR PORTFOLIO DATA HERE
// ============================================

export const personalInfo = {
  name: "Anushka Ghei",
  roles: ["Software Engineer", "AI/ML Engineer", "Full-Stack Developer", "ML Researcher"],
  bio: "MS CSE student at the University at Buffalo specializing in AI/ML, graduating February 2027. I build full-stack products, LLM pipelines, and applied ML systems, currently as a Software Engineering Intern at Offerwell and a Senior Research Aide at Weiss Labs.",
  email: "anushkaghei@gmail.com",
  location: "Buffalo, NY",
  avatar: "https://avatars.githubusercontent.com/u/79694271?v=4",
  resumeUrl: "/Anushka_Ghei_Resume.pdf",
  social: {
    github: "https://github.com/Anushkaghei",
    linkedin: "https://www.linkedin.com/in/anushkaghei/",
    scholar: "https://scholar.google.com/citations?user=hvKoFwgAAAAJ&hl=en",
    twitter: "",
  },
};

export const stats = [
  { label: "Publications", value: "5" },
  { label: "Citations", value: "6" },
  { label: "GitHub Repos", value: "25+" },
  { label: "Industry Roles", value: "5" },
];

export const projects = [
  {
    name: "Detecting Hallucinations in LLMs",
    description: "A two-agent LLM system that detects and flags self-contradictions and factual errors. Step-back prompting plus retrieval over a FAISS index cut the hallucination rate by 25%.",
    languages: ["Python", "PyTorch", "RAG"],
    category: "AI/ML",
    github: "https://github.com/Anushkaghei/Hallucination-Detection-In-LLMs",
    demo: "",
    stars: 0,
  },
  {
    name: "Ad Pipeline Monitor",
    description: "Observability for ad-data ELT pipelines that catches silent failures: row-count drift via z-scores, null thresholds, freshness SLAs, and zero-row API calls, with Slack and email alerts.",
    languages: ["Python", "PostgreSQL", "dbt", "FastAPI"],
    category: "Data",
    github: "https://github.com/Anushkaghei/ad-pipeline-monitor",
    demo: "",
    stars: 0,
  },
  {
    name: "DealFlow Agent",
    description: "Local-first ingestion of real-estate deal emails and PDFs. A local LLM extracts structured fields, pgvector similarity links related threads, and the app drafts follow-ups for missing documents.",
    languages: ["Python", "LLMs", "PostgreSQL"],
    category: "AI/ML",
    github: "https://github.com/Anushkaghei/dealflow-agent",
    demo: "",
    stars: 0,
  },
  {
    name: "ReplAgent",
    description: "An AI coding assistant that runs the code it writes. Python and JavaScript execute in Docker sandboxes, and the output is fed back to a locally hosted model.",
    languages: ["React", "FastAPI", "Docker", "LLMs"],
    category: "Web App",
    github: "https://github.com/Anushkaghei/ReplAgent",
    demo: "",
    stars: 0,
  },
  {
    name: "Underwater Image Dehazing",
    description: "Enhancing Underwater Vision: GANs & Transformers for Dehazing and Object Detection. Published at ASIP 2024.",
    languages: ["Python", "PyTorch", "Computer Vision"],
    category: "AI/ML",
    github: "https://github.com/Anushkaghei/Underwater-Image-dehazing",
    demo: "",
    stars: 5,
  },
  {
    name: "Distributed File System",
    description: "A master-worker distributed file system with a replication factor of 3, built for high availability, fault tolerance, and data integrity across networked machines.",
    languages: ["Python", "Network Sockets", "Multi-threading"],
    category: "Systems",
    github: "https://github.com/Anushkaghei/Distributed-File-System",
    demo: "",
    stars: 1,
  },
  {
    name: "Course Management Portal",
    description: "A Flask and React portal. Jinja renders pages on the server, and a React component hydrates in place to filter courses by semester through a REST API.",
    languages: ["Flask", "React", "Python"],
    category: "Web App",
    github: "https://github.com/Anushkaghei/Course_Tracker",
    demo: "",
    stars: 0,
  },
];

export const publications = [
  {
    title: "Automated Notes and Question Generation",
    authors: "S Zanwar, S Srikanth, A Ghei, DR Krishnan, KS Srinivas",
    venue: "IEEE 4th International Conference on Software Engineering, 2024",
    citations: 2,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hvKoFwgAAAAJ&citation_for_view=hvKoFwgAAAAJ:u-x6o8ySG0sC",
  },
  {
    title: "Dynamic Crowd Management through Potential Field-Based Simulations",
    authors: "BM Suraj, T Jaiwanth, A Ghei, KS Srinivas",
    venue: "IEEE 8th International Conference on Smart Grid and Smart Cities (ICSGSC), 2024",
    citations: 1,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hvKoFwgAAAAJ&citation_for_view=hvKoFwgAAAAJ:UeHWp8X0CEIC",
  },
  {
    title: "Multi-faceted Question Complexity Estimation Targeting Topic Domain-Specificity",
    authors: "R Sujay, S Perumal, Y Nagraj, A Ghei, KS Srinivas",
    venue: "CS & IT Conference Proceedings 14 (15), 2024",
    citations: 1,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hvKoFwgAAAAJ&citation_for_view=hvKoFwgAAAAJ:u5HHmVD_uO8C",
  },
  {
    title: "Multimodal Sentiment Analysis for Interviews and Proctoring",
    authors: "N Rayasam, VVS Sridhar, NS Pushkar, O Mathur, A Ghei, DR Krishnan, et al.",
    venue: "IEEE 9th International Conference on Computational Intelligence, 2024",
    citations: 0,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hvKoFwgAAAAJ&citation_for_view=hvKoFwgAAAAJ:2osOgNQ5qMEC",
  },
  {
    title: "Systematic Analysis of Underwater Image Dehazing and Object Detection",
    authors: "A Ghei, DR Krishnan, G Santhosh, S Natarajan",
    venue: "6th Asia Symposium on Image Processing (ASIP), 2024",
    citations: 0,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hvKoFwgAAAAJ&citation_for_view=hvKoFwgAAAAJ:qjMakFHDy7sC",
  },
];

export const skills = {
  "AI/ML": [
    { name: "PyTorch" }, { name: "TensorFlow" }, { name: "scikit-learn" },
    { name: "HuggingFace" }, { name: "LangChain" }, { name: "OpenCV" },
    { name: "RAG" }, { name: "FAISS" }, { name: "Agentic Workflows" },
    { name: "Fine-Tuning" }, { name: "Prompt Engineering" }, { name: "SHAP" },
  ],
  "Languages": [
    { name: "Python" }, { name: "TypeScript" }, { name: "JavaScript" },
    { name: "SQL" }, { name: "Java" }, { name: "C" }, { name: "C++" },
    { name: "C#" }, { name: "Scala" }, { name: "HTML/CSS" },
  ],
  "Data & Analytics": [
    { name: "Pandas" }, { name: "NumPy" }, { name: "Apache Spark" },
    { name: "Hadoop" }, { name: "Power BI" }, { name: "Tableau" },
    { name: "ETL Pipelines" }, { name: "Statistical Modeling" }, { name: "Mixed-Effects Models" },
  ],
  "Cloud & DevOps": [
    { name: "AWS" }, { name: "Docker" }, { name: "Kubernetes" },
    { name: "RKE2" }, { name: "Git" }, { name: "CI/CD" },
    { name: "Linux" }, { name: "Trivy" },
  ],
  "Databases": [
    { name: "PostgreSQL" }, { name: "Drizzle ORM" }, { name: "MongoDB" },
    { name: "MySQL" }, { name: "pgvector" },
  ],
  "Web & Software": [
    { name: "React" }, { name: "Next.js" }, { name: "Node.js" },
    { name: "REST APIs" }, { name: "FastAPI" }, { name: "Flask" },
    { name: "Postman" }, { name: "Agile/Scrum" },
  ],
  "AI Tools & APIs": [
    { name: "Gemini API" }, { name: "OpenAI API" }, { name: "Anthropic API" },
    { name: "Claude Code" }, { name: "Cursor" }, { name: "GitHub Copilot" },
  ],
};

export const education = [
  {
    degree: "MS in Computer Science and Engineering",
    school: "University at Buffalo, SUNY",
    period: "Aug 2025 – Feb 2027 (expected)",
    description: "Specializing in Artificial Intelligence and Machine Learning. Coursework: Deep Learning, Machine Learning, Operating Systems, Data Intensive Computing, Data Models and Query Languages, Computer Vision.",
    gpa: "3.7/4.0",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "PES University, Bangalore",
    period: "Sep 2021 – May 2025",
    description: "Specialization in Machine Intelligence and Data Science. Active in research, with 5 papers published in 2024.",
    gpa: "8.33/10",
  },
];

export const experience = [
  {
    title: "Software Engineering Intern",
    company: "Offerwell",
    period: "Jun 2026 - Present",
    description: "Full-stack engineer on a real-estate transaction platform used by agents and brokerages.",
    highlights: [
      "Built core transaction features in Next.js, TypeScript, and PostgreSQL, including paginated Kanban boards and no-code intake forms that let brokerages customize workflows without engineering help.",
      "Built a Gemini LLM pipeline that extracts structured data from purchase contracts to prefill transactions, with per-field confidence and source citations. Fixed production failures on large forms by batching the response schema in parallel.",
      "Fixed multi-tenant access-control flaws that exposed other agents' deals and client PII, enforcing server-side authorization across six API surfaces, including mobile endpoints, webhooks, and cron jobs.",
      "Moved sales aggregation from in-memory JavaScript into SQL GROUP BY, removing a 5,000-row cap that under-reported large brokerages, and added idempotency keys so retried writes never create duplicates.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Gemini API"],
  },
  {
    title: "Senior Research Aide",
    company: "Weiss Labs, University at Buffalo",
    period: "Jan 2026 - Present",
    description: "Data and ML work for sleep and cognition research in the UB School of Nursing.",
    highlights: [
      "Built the analysis pipeline for an NIA-funded sleep and cognition trial, turning multi-stream Fitbit telemetry into 12-week participant trajectories.",
      "Engineered circadian and sleep-architecture biomarkers from raw actigraphy into a composite Alzheimer's-risk index using K-means clustering.",
      "Modeled sleep and cognition associations across 1,255 MIDUS participants with mixed-effects regression and Random Forest, interpreted with SHAP.",
    ],
    technologies: ["Python", "Time-Series", "Mixed-Effects Models", "Random Forest", "SHAP"],
  },
  {
    title: "Software Engineering Intern",
    company: "Siemens Healthineers",
    period: "Jan 2025 – Jul 2025",
    description: "",
    highlights: [
      "Designed and deployed a scalable Linux data pipeline on RKE2 and Kubernetes clusters backed by PostgreSQL, automating multi-format output generation with Trivy and CI/CD tooling on an Agile Scrum team.",
      "Automated metadata retrieval and enrichment against GitHub and GitLab package registry APIs, increasing coverage by 45% and accuracy by 40%.",
    ],
    technologies: ["Linux", "Kubernetes", "RKE2", "PostgreSQL", "Trivy"],
  },
  {
    title: "Software Development Intern",
    company: "Opkey",
    period: "Aug 2024 – Oct 2024",
    description: "",
    highlights: [
      "Fine-tuned LLMs as ReAct agents and built agentic workflows chaining model inference with dynamic tool execution, improving method-invoking accuracy by 40%.",
      "Built an automated API testing framework in Postman and cURL validating responses and token authentication for internal ML tools, wired into CI/CD.",
    ],
    technologies: ["Python", "LLMs", "Postman", "CI/CD"],
  },
  {
    title: "AI & Data Intern",
    company: "Deloitte",
    period: "Jun 2024 – Aug 2024",
    description: "",
    highlights: [
      "Automated a geospatial data pipeline that maps location data to persona segments for retailer classification.",
      "Built a product recommendation model benchmarking clustering algorithms for SKU placement, improving targeting accuracy by 65%.",
    ],
    technologies: ["Python", "ML", "Clustering", "Geospatial"],
  },
  {
    title: "Data & Analytics Intern",
    company: "PwC",
    period: "Jun 2023 – Jul 2023",
    description: "",
    highlights: [
      "Built Power BI dashboards and summary decks analyzing advertising KPIs across multiple campaigns.",
      "Benchmarked platform features, payment systems, and personalization across major Indian e-commerce platforms.",
    ],
    technologies: ["Power BI", "Data Analytics", "Research"],
  },
];

export const recentUpdates = [
  {
    date: "Jun 2026 - Now",
    title: "Shipping AI Document Intake at Offerwell",
    description: "Building a Gemini-powered pipeline that reads purchase contracts and prefills real-estate transactions, with per-field confidence and citations showing where each value came from in the source PDF.",
    tags: ["LLMs", "Full-Stack", "TypeScript"],
    emoji: "🏡",
  },
  {
    date: "Jan 2026 - Now",
    title: "Sleep & Cognition Research at Weiss Labs",
    description: "Turning Fitbit telemetry from an NIA-funded trial into 12-week participant trajectories, and modeling sleep and cognition across 1,255 MIDUS participants with mixed-effects regression, Random Forest, and SHAP.",
    tags: ["Clinical Research", "Data Engineering", "Python"],
    emoji: "🔬",
  },
  {
    date: "Feb 2026 - Now",
    title: "InterviewIQ: Multi-Turn AI Interview System",
    description: "Building a context-aware, retrieval-augmented dialogue system that conducts realistic technical interviews with adaptive question generation and automated candidate response evaluation across 10–20 conversational turns.",
    tags: ["LLMs", "RAG", "NLP", "Interview AI"],
    emoji: "🎯",
  },
  {
    date: "March 2026 - Now",
    title: "SecureAI Monitor: LLM Audit & Security Platform",
    description: "Designing a unified database architecture for tracking LLM API usage, cost attribution by team, and cross-domain correlation between cybersecurity incidents and active AI model integrations.",
    tags: ["Database Design", "Security", "Enterprise"],
    emoji: "🛡️",
  },
];
