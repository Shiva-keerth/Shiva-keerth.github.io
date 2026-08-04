# 🚀 Ganti Shiva Keerth — Generative AI Engineering Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Deployed](https://img.shields.io/badge/Deployed-GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)
![Focus](https://img.shields.io/badge/Focus-Generative_AI_%26_Agentic_Systems-8A2BE2?style=for-the-badge)

> The source code for my interactive **AI Engineering Portfolio Website** — a fully custom, framework-free frontend built to showcase enterprise Agentic AI projects, RAG architectures, and LLM pipelines.

🔗 **Live:** [shiva-keerth.github.io](https://shiva-keerth.github.io)

---

## 🎨 Design System & UI Architecture

Built entirely from scratch using **vanilla HTML5, CSS3, and JavaScript** — no React, no Tailwind, no heavy frameworks. Every pixel is intentional.

### Visual Language
*   **Dark Glassmorphism Theme:** Deep space gradient backgrounds (`#0a1128` → `#162244`) with frosted glass card effects using `backdrop-filter: blur()`
*   **Neon Accent Palette:** Neon cyan (`#00ffb4`) for highlights and electric blue (`#018bff`) for interactive elements — inspired by cyberpunk/AI aesthetics
*   **Premium Typography:** Google Fonts `Inter` — weights 300 (body), 600 (labels), 800 (headings)

### Dynamic Elements
*   **Neural Network Canvas Animation:** Custom JavaScript particle system on `<canvas>` rendering an animated knowledge graph that responds to cursor position in real time
*   **Scroll-triggered Reveal Animations:** `IntersectionObserver` API used to trigger fade-in and slide-up transitions on project cards as they enter the viewport
*   **Hover Microinteractions:** Card lift, glow border animations, and button scale transforms on all interactive elements
*   **Responsive Grid:** CSS Grid + Flexbox ensuring pixel-perfect layout across desktop (1440px), tablet (768px), and mobile (375px) breakpoints

---

## 🧠 Featured Projects Showcase

| Project | Stack | Description | Live |
| :--- | :--- | :--- | :--- |
| **OmniMind AI** | Neo4j, LangChain, Groq Whisper, Llama-3.3-70B | Enterprise Knowledge Graph + Graph-RAG system converting meeting audio into structured, queryable intelligence | [HuggingFace](https://huggingface.co/spaces/farracer/OmniMind-AI-Enterprise) |
| **Dual-Domain Agentic RAG** | LangGraph, ChromaDB, Tavily, Docker, AWS EC2 | Multi-agent autonomous RAG router handling Healthcare & Finance domain queries with LangGraph ReAct agents | GitHub |
| **SkillMatch AI** | FastAPI, Supabase, TF-IDF, Groq Llama-3 | HR-Tech pipeline using 6-signal cosine similarity scoring to match candidates to job descriptions with 3-tier RBAC | GitHub |
| **Agentic Email Assistant** | APScheduler, IMAP, Groq, Pydantic | Autonomous email triage and drafting pipeline with human-in-the-loop review and structured JSON retry logic | GitHub |
| **LLMOps Dashboard** | Streamlit, SQLite, Plotly | Real-time observability dashboard tracking LLM latency, token usage, verdict distribution, and evaluation funnels | GitHub |

---

## 🛠️ Technical Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Structure** | HTML5 (Semantic) | SEO-optimized page layout with ARIA accessibility attributes |
| **Styling** | CSS3 (Custom Variables) | Design tokens, glassmorphism effects, responsive grid |
| **Interactivity** | Vanilla JavaScript (ES6+) | Canvas animation, scroll triggers, form handling |
| **Fonts** | Google Fonts (Inter) | Premium typography, loaded async for performance |
| **Deployment** | GitHub Pages | Auto-deployed on `main` branch push, custom domain support |

---

## 📁 Repository Structure

```
Shiva-keerth.github.io/
├── index.html              # Main entry point (semantic HTML5, all sections)
├── style.css               # Complete design system (variables, components, responsive)
├── script.js               # Canvas animation, scroll events, interactivity
├── frame_000.jpg           # Portfolio screenshots / demo frames
├── frame_001.jpg
│   ...
├── frame_012.jpg
└── portfolio sample.mp4    # Video walkthrough of the portfolio
```

---

## ⚡ Performance & Best Practices

*   **Zero framework overhead** — pure HTML/CSS/JS for sub-100ms first contentful paint
*   **Semantic HTML5** — `<section>`, `<article>`, `<nav>`, `<main>` for screen reader accessibility
*   **Async font loading** — prevents render-blocking on Google Fonts
*   **CSS Custom Properties** — single source of truth for all colors, spacing, and animation timings
*   **IntersectionObserver** — lazy-triggers animations only when elements are in viewport (no scroll jank)

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shiva-keerth/Shiva-keerth.github.io.git
   cd Shiva-keerth.github.io
   ```

2. **Open directly or use a local server:**
   ```bash
   # Option 1 — Python live server
   python -m http.server 8000

   # Option 2 — VS Code Live Server extension (recommended)
   # Right-click index.html → "Open with Live Server"
   ```

3. Navigate to `http://localhost:8000`

---

## 🤝 Connect With Me
*   **GitHub:** [Shiva-keerth](https://github.com/Shiva-keerth)
*   **LinkedIn:** [Shiva Keerth G](https://www.linkedin.com/in/shiva-keerth-9574b92a6/)
*   **Focus:** Generative AI, RAG Systems, Agentic AI, and Machine Learning.
