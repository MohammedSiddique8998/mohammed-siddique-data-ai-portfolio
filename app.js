const root = document.documentElement;
const loader = document.querySelector("#loader");
const cursor = document.querySelector("#cursor");
const nav = document.querySelector("#nav");
const menuToggle = document.querySelector("#menuToggle");
const themeToggle = document.querySelector("#themeToggle");
const refreshMotion = document.querySelector("#refreshMotion");
const sceneCanvas = document.querySelector("#scene-canvas");
const dataCanvas = document.querySelector("#data-canvas");
const skillCanvas = document.querySelector("#skillChart");
const policyModal = document.querySelector("#policyModal");
const policyTitle = document.querySelector("#policyTitle");
const policyBody = document.querySelector("#policyBody");
const motionPortal = document.querySelector("#motionPortal");

const themes = ["cyber", "consultant", "engineer"];
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme && themes.includes(savedTheme)) root.dataset.theme = savedTheme;

const projects = [
  {
    title: "Mental Health Risk Prediction",
    type: "Machine Learning",
    category: "ml",
    summary:
      "Classification workflow using survey data, Python preprocessing, EDA and model comparison to predict mental health risk.",
    body:
      "Built a structured machine learning workflow using Pandas, NumPy and Scikit-learn. The project focused on missing-value handling, outlier detection, feature scaling, exploratory analysis and comparing Logistic Regression, Random Forest and SVM models with accuracy metrics and confusion matrices.",
    problem:
      "Survey-style mental health data needed to be cleaned and prepared before it could support reliable risk classification.",
    approach:
      "Handled missing values and outliers, explored key patterns, prepared features and compared Logistic Regression, Random Forest and SVM models.",
    result:
      "Created a repeatable end-to-end ML workflow with confusion-matrix evaluation and model-family comparison.",
    impact:
      "Demonstrates practical health-style prediction, data cleaning and model evaluation skills for data science roles.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "EDA", "SVM", "Random Forest"],
    metrics: [
      ["3", "model families"],
      ["EDA", "pattern discovery"],
      ["CM", "confusion matrix evaluation"],
    ],
    bars: [88, 76, 82],
  },
  {
    title: "Brain Tumour Detection",
    type: "Deep Learning",
    category: "ml",
    summary:
      "Developing an MRI image-classification system using TensorFlow, Keras, CNN transfer learning and evaluation workflows.",
    body:
      "A current deep learning project exploring image preprocessing, augmentation, TensorFlow/Keras model training and transfer learning with CNN architectures such as VGG16 and ResNet50 for MRI scan classification.",
    problem:
      "MRI image classification requires consistent preprocessing and careful model evaluation before predictions can be trusted.",
    approach:
      "Exploring image preprocessing, augmentation and CNN transfer learning using TensorFlow/Keras with VGG16 and ResNet50-style architectures.",
    result:
      "Built the structure for a deep learning image-classification pipeline; model tuning and reporting are continuing.",
    impact:
      "Shows developing computer vision capability and a responsible approach to high-stakes healthcare-style AI tasks.",
    stack: ["TensorFlow", "Keras", "CNN", "VGG16", "ResNet50", "Image preprocessing"],
    metrics: [
      ["MRI", "image data"],
      ["CNN", "transfer learning"],
      ["DL", "model evaluation"],
    ],
    bars: [72, 84, 68],
  },
  {
    title: "AI Proposal Automation System",
    type: "AI Consulting",
    category: "ai",
    summary:
      "NLP-based proposal automation concept designed during Accenture micro-internship to reduce manual preparation time.",
    body:
      "Designed an AI solution concept that extracts project scope details, structures proposal inputs and uses rule-based scoring to improve consistency. The project used consulting frameworks including 5 Whys and SWOT to identify workflow inefficiencies and automation opportunities.",
    problem:
      "Proposal preparation can be slow, repetitive and inconsistent when scope details are gathered manually.",
    approach:
      "Mapped the workflow with 5 Whys and SWOT, then designed NLP extraction and rule-based scoring to structure proposal inputs.",
    result:
      "Defined an AI-assisted proposal automation concept with an estimated 40-60% turnaround-time reduction potential.",
    impact:
      "Connects AI consulting, business analysis and automation thinking in a recruiter-friendly project story.",
    stack: ["NLP", "AI consulting", "5 Whys", "SWOT", "Workflow automation", "Rule-based logic"],
    metrics: [
      ["40-60%", "turnaround reduction potential"],
      ["NLP", "scope extraction"],
      ["RCA", "workflow diagnosis"],
    ],
    bars: [92, 86, 80],
  },
  {
    title: "Legal Judgement Prediction Review",
    type: "Responsible AI",
    category: "ai",
    summary:
      "Academic research into SVMs, Random Forests, Neural Networks, feature engineering and fairness for legal prediction.",
    body:
      "Reviewed ML algorithms and data limitations in criminal law judgement prediction. The project focused on model performance, interpretability constraints, explainable AI, fairness-aware modelling and the risks of deploying AI in high-stakes legal contexts.",
    problem:
      "Legal prediction is high-stakes, so performance alone is not enough; fairness, explainability and data limitations matter.",
    approach:
      "Reviewed SVM, Random Forest and Neural Network approaches alongside feature engineering, XAI and fairness considerations.",
    result:
      "Produced a responsible-AI analysis of model risks, interpretability constraints and deployment limitations.",
    impact:
      "Positions the portfolio for AI consultant and data science roles where ethical judgement is important.",
    stack: ["SVM", "Random Forest", "Neural Networks", "XAI", "Fairness", "Feature engineering"],
    metrics: [
      ["XAI", "interpretability focus"],
      ["3", "ML algorithm groups"],
      ["AI", "high-stakes domain"],
    ],
    bars: [74, 78, 90],
  },
  {
    title: "Multi-Armed Bandit Simulation",
    type: "Reinforcement Learning",
    category: "ml",
    summary:
      "Exploration-exploitation simulation comparing epsilon-greedy and Upper Confidence Bound strategies.",
    body:
      "Implemented a reinforcement learning experiment based on the n-armed bandit problem. The simulation compared decision policies, analysed reward optimisation and documented sequential decision-making behaviour in a research-style format.",
    problem:
      "Sequential decision systems must balance exploration and exploitation when outcomes are uncertain.",
    approach:
      "Simulated epsilon-greedy and Upper Confidence Bound policies across repeated decision steps and compared reward behaviour.",
    result:
      "Documented policy differences and reward-optimisation behaviour in a research-style simulation.",
    impact:
      "Builds foundational reinforcement-learning knowledge relevant to optimisation and decision-intelligence work.",
    stack: ["Python", "Reinforcement Learning", "Epsilon-greedy", "UCB", "Simulation"],
    metrics: [
      ["2,000", "decision steps"],
      ["UCB", "policy comparison"],
      ["RL", "reward optimisation"],
    ],
    bars: [82, 79, 73],
  },
  {
    title: "Energy Demand Forecasting",
    type: "Time-Series Analytics",
    category: "analytics",
    summary:
      "Ongoing self project using public electricity/weather data, time-based features, moving averages and error metrics.",
    body:
      "Built an initial forecasting workflow using public electricity demand and/or weather data. The project explores missing-value handling, scaling, hour/day/seasonality features, moving averages, regression-based forecasting and MAE/RMSE evaluation.",
    problem:
      "Energy demand changes with time, seasonality and weather-like signals, making naive forecasting unreliable.",
    approach:
      "Engineered time-based features, moving averages and regression-style baselines with MAE/RMSE evaluation.",
    result:
      "Created an initial forecasting workflow; further model comparison and dashboard reporting are planned.",
    impact:
      "Shows applied analytics thinking for sustainability, operational planning and time-series business problems.",
    stack: ["Python", "Time series", "Matplotlib", "Seaborn", "MAE", "RMSE", "Forecasting"],
    metrics: [
      ["MAE", "error tracking"],
      ["RMSE", "model comparison"],
      ["Time", "feature engineering"],
    ],
    bars: [68, 75, 71],
  },
  {
    title: "Catalogue Data Validation Systems",
    type: "Data Systems",
    category: "systems",
    summary:
      "Professional work validating structured catalogue/configuration data across 150+ projects at Infurnia.",
    body:
      "Managed structured catalogue and configuration datasets, performed SKU mapping, product-parameter checks and rule-based validation. Collaborated with engineering and operations teams to improve automated output reliability and reduce recurring data inconsistencies.",
    problem:
      "Catalogue and configuration errors can create unreliable automated outputs and repeated operational rework.",
    approach:
      "Validated product parameters, mapped SKUs, applied rule checks and worked with engineering and operations teams.",
    result:
      "Supported 150+ configuration projects with stronger QA discipline and clearer documentation.",
    impact:
      "Translates professional catalogue work into data quality, validation and analytics-system reliability experience.",
    stack: ["Data validation", "SKU mapping", "Rule logic", "QA", "Documentation", "Stakeholders"],
    metrics: [
      ["150+", "configuration projects"],
      ["QA", "validation checks"],
      ["Ops", "workflow reliability"],
    ],
    bars: [91, 83, 86],
  },
  {
    title: "Backend Automation Workflow Configuration",
    type: "Automation Systems",
    category: "systems",
    summary:
      "Configured 200+ backend workflows at Homelane, applying RCA and data validation to improve reliability.",
    body:
      "Worked with configuration and pricing data pipelines supporting design-to-production systems. Conducted root cause analysis, validated large datasets and collaborated with design, engineering, operations and product teams to improve workflow reliability.",
    problem:
      "Manual or fragile backend workflow configuration can cause pricing, production and design-output issues.",
    approach:
      "Configured automation workflows, validated supporting datasets and used RCA to diagnose recurring issues.",
    result:
      "Configured 200+ workflows while supporting more reliable design-to-production system behaviour.",
    impact:
      "Shows direct experience with automation logic, system testing, data pipelines and stakeholder communication.",
    stack: ["Automation", "RCA", "Data pipelines", "Workflow optimisation", "System testing"],
    metrics: [
      ["200+", "automation workflows"],
      ["RCA", "issue diagnosis"],
      ["QA", "release support"],
    ],
    bars: [94, 80, 88],
  },
];

window.addEventListener("load", () => {
  setTimeout(() => loader?.classList.add("is-done"), 420);
});

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelectorAll("a[download]").forEach((link) => {
  link.addEventListener("click", async (event) => {
    event.preventDefault();
    const filename = link.getAttribute("download") || link.href.split("/").pop();
    try {
      const response = await fetch(link.href);
      if (!response.ok) throw new Error("CV file was not reachable");
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const temporaryLink = document.createElement("a");
      temporaryLink.href = objectUrl;
      temporaryLink.download = filename;
      document.body.append(temporaryLink);
      temporaryLink.click();
      temporaryLink.remove();
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1200);
    } catch {
      window.open(link.href, "_blank", "noopener,noreferrer");
    }
  });
});

refreshMotion?.addEventListener("click", replayMotion);
document.querySelector(".brand")?.addEventListener("click", (event) => {
  event.preventDefault();
  replayMotion();
});

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "r" && event.altKey) replayMotion();
});

function replayMotion() {
  refreshMotion?.classList.add("is-spinning");
  motionPortal?.classList.remove("is-active");
  void motionPortal?.offsetWidth;
  motionPortal?.classList.add("is-active");
  document.body.classList.add("is-replaying");
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    document.body.classList.remove("is-replaying");
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.remove("is-visible");
      setTimeout(() => el.classList.add("is-visible"), 40);
    });
    refreshMotion?.classList.remove("is-spinning");
  }, 760);
  setTimeout(() => motionPortal?.classList.remove("is-active"), 1200);
}

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  themeToggle?.setAttribute("title", `Theme: ${theme}. Click to switch.`);
  drawSkillChart();
}

themeToggle?.addEventListener("click", () => {
  const currentIndex = themes.indexOf(root.dataset.theme);
  const next = themes[(currentIndex + 1) % themes.length];
  setTheme(next);
});

setTheme(root.dataset.theme);

if (matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursor.style.opacity = "1";
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
  document.addEventListener("pointerover", (event) => {
    cursor.classList.toggle("is-hot", Boolean(event.target.closest("a, button, .project-card")));
  });
}

document.querySelectorAll(".magnetic").forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
  });
  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.done) return;
      entry.target.dataset.done = "true";
      animateCount(entry.target, Number(entry.target.dataset.count));
    });
  },
  { threshold: 0.8 }
);

document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

function animateCount(el, target) {
  const start = performance.now();
  const duration = 1300;
  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased).toString();
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const sections = [...document.querySelectorAll("main section[id]")];
window.addEventListener("scroll", () => {
  const y = window.scrollY + 140;
  const current = sections.findLast((section) => section.offsetTop <= y);
  document.querySelectorAll(".nav a").forEach((link) => {
    link.classList.toggle("is-active", current && link.getAttribute("href") === `#${current.id}`);
  });
});

function renderProjects(filter = "all") {
  const grid = document.querySelector("#projectGrid");
  grid.innerHTML = "";
  projects
    .filter((project) => filter === "all" || project.category === filter)
    .forEach((project, index) => {
      const card = document.createElement("article");
      card.className = "project-card reveal is-visible";
      card.style.transitionDelay = `${index * 35}ms`;
      card.innerHTML = `
        <p class="project-type">${project.type}</p>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <p class="project-impact"><strong>Impact:</strong> ${project.impact}</p>
        <div class="metric-bar" aria-hidden="true">
          ${project.bars.map((bar) => `<span><i style="--value:${bar}%"></i></span>`).join("")}
        </div>
        <div class="project-stack">
          ${project.stack.slice(0, 5).map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="card-actions">
          <button type="button" data-project="${projects.indexOf(project)}">Open case study</button>
          ${
            project.repoUrl
              ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer">GitHub</a>`
              : `<button type="button" class="is-disabled" disabled>GitHub coming soon</button>`
          }
        </div>
      `;
      grid.append(card);
    });
}

renderProjects();

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

const modal = document.querySelector("#projectModal");
const modalTitle = document.querySelector("#modalTitle");
const modalType = document.querySelector("#modalType");
const modalBody = document.querySelector("#modalBody");
const modalMetrics = document.querySelector("#modalMetrics");
const modalStack = document.querySelector("#modalStack");

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (!button) return;
  const project = projects[Number(button.dataset.project)];
  modal.dataset.projectIndex = button.dataset.project;
  modalTitle.textContent = project.title;
  modalType.textContent = project.type;
  modalBody.innerHTML = `
    <p>${escapeHtml(project.body)}</p>
    <div class="case-study-grid">
      ${[
        ["Problem", project.problem],
        ["Approach", project.approach],
        ["Result", project.result],
        ["Impact", project.impact],
      ]
        .map(
          ([label, value]) => `
            <section class="case-study-block">
              <h3>${escapeHtml(label)}</h3>
              <p>${escapeHtml(value)}</p>
            </section>
          `
        )
        .join("")}
    </div>
  `;
  modalMetrics.innerHTML = project.metrics
    .map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
  modalStack.innerHTML = project.stack.map((item) => `<span>${item}</span>`).join("");
  modal.hidden = false;
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.querySelectorAll("[data-close-modal]").forEach((item) => {
  item.addEventListener("click", () => {
    modal.hidden = true;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") modal.hidden = true;
  if (event.key === "Escape" && policyModal) policyModal.hidden = true;
});

document.querySelector("#emailProjectBrief")?.addEventListener("click", () => {
  const project = projects[Number(modal.dataset.projectIndex || 0)];
  const subject = encodeURIComponent(`Project discussion: ${project.title}`);
  const body = encodeURIComponent(
    `Hi Mohammed,\n\nI saw your project "${project.title}" on your portfolio.\n\nSummary: ${project.summary}\n\nTech stack: ${project.stack.join(", ")}\n\nI would like to discuss this project further.\n\nBest,\n`
  );
  window.location.href = `mailto:siddique.infra08091998@gmail.com?subject=${subject}&body=${body}`;
});

const contactForm = document.querySelector("#contactForm");
const contactFeedback = document.querySelector("#contactFeedback");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (contactForm) {
  contactForm.noValidate = true;
  contactForm.setAttribute("novalidate", "");
}

function setFeedback(element, message, type = "error") {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("is-error", type === "error");
  element.classList.toggle("is-ready", type === "ready");
}

function validateContactForm(form, feedbackElement) {
  const name = form.elements.name?.value.trim();
  const email = form.elements.email?.value.trim();
  const message = form.elements.message?.value.trim();

  if (!name || name.length < 2) {
    setFeedback(feedbackElement, "Please enter your name before sending.");
    form.elements.name?.focus();
    return false;
  }
  if (!emailPattern.test(email || "")) {
    setFeedback(feedbackElement, "Please enter a valid email address.");
    form.elements.email?.focus();
    return false;
  }
  if (!message || message.length < 10) {
    setFeedback(feedbackElement, "Please add a short message with at least 10 characters.");
    form.elements.message?.focus();
    return false;
  }
  setFeedback(feedbackElement, "Ready to send.", "ready");
  return true;
}

function submitFormFromKeyboard(form) {
  if (typeof form.requestSubmit === "function") {
    form.requestSubmit();
    return;
  }
  form.querySelector('button[type="submit"]')?.click();
}

contactForm?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const isMessageBox = event.target.matches("textarea");
  if (isMessageBox && event.shiftKey) return;
  event.preventDefault();
  submitFormFromKeyboard(contactForm);
});

contactForm?.addEventListener("submit", (event) => {
  if (!validateContactForm(event.currentTarget, contactFeedback)) {
    event.preventDefault();
  }
});

document.querySelector("#chatToggle")?.addEventListener("click", (event) => {
  const panel = document.querySelector("#chatConcierge");
  panel.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(panel.classList.contains("open")));
});

const chatForm = document.querySelector("#chatForm");
if (chatForm) {
  chatForm.noValidate = true;
  chatForm.setAttribute("novalidate", "");
}

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const feedback = document.querySelector("#chatFeedback");
  const role = form.get("role");
  const responseTime = form.get("responseTime");
  const email = String(form.get("email") || "").trim();
  const message = String(form.get("message") || "").trim();

  if (!role) {
    setFeedback(feedback, "Please choose the type of enquiry.");
    return;
  }
  if (!responseTime) {
    setFeedback(feedback, "Please choose the response timing.");
    return;
  }
  if (!emailPattern.test(email)) {
    setFeedback(feedback, "Please enter a valid email address.");
    return;
  }
  if (message.length < 10) {
    setFeedback(feedback, "Please add a short message with at least 10 characters.");
    return;
  }

  setFeedback(feedback, "Opening a prepared email draft.", "ready");
  const subject = encodeURIComponent(`Portfolio enquiry: ${role}`);
  const body = encodeURIComponent(
    `Hi Mohammed,\n\nI used your guided portfolio enquiry assistant.\n\nEnquiry type: ${role}\nResponse timing: ${responseTime}\nVisitor email: ${email}\n\nMessage:\n${message}\n\nPlease respond as soon as possible via the email provided above.\n\nSource: Mohammed Siddique portfolio\nPortfolio: https://mohammed-siddique-data-ai-portfolio.vercel.app`
  );
  window.location.href = `mailto:siddique.infra08091998@gmail.com?subject=${subject}&body=${body}`;
});

const policyCopy = {
  privacy: {
    title: "Privacy",
    body:
      "This portfolio only asks for contact details when a visitor chooses to send a message. The static site does not store personal data in a database. Contact forms open an email draft to Mohammed Siddique, and the deployment form action is prepared for email delivery to the listed Gmail address.",
  },
  terms: {
    title: "Terms",
    body:
      "This portfolio is provided to showcase Mohammed Siddique's professional background, projects, education, certifications and contact information for recruitment and professional networking purposes. Content may be updated as projects and experience develop.",
  },
  conditions: {
    title: "Conditions",
    body:
      "Project links, case studies and resume downloads are provided for career evaluation. Please do not reuse portfolio text, design assets or CV materials without permission. Recruiters and hiring teams may use the contact options for genuine opportunities.",
  },
};

document.querySelectorAll("[data-policy]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = policyCopy[button.dataset.policy];
    policyTitle.textContent = item.title;
    policyBody.textContent = item.body;
    policyModal.hidden = false;
  });
});

document.querySelectorAll("[data-close-policy]").forEach((item) => {
  item.addEventListener("click", () => {
    policyModal.hidden = true;
  });
});

function cssVar(name) {
  return getComputedStyle(root).getPropertyValue(name).trim();
}

function setupScene() {
  const gl = sceneCanvas.getContext("webgl", { antialias: true, alpha: true });
  if (!gl) return;
  const vertex = `
    attribute vec2 p;
    void main(){ gl_Position = vec4(p,0.0,1.0); }
  `;
  const fragment = `
    precision mediump float;
    uniform vec2 r;
    uniform float t;
    uniform vec3 ca;
    uniform vec3 cb;
    void main(){
      vec2 uv=(gl_FragCoord.xy*2.0-r)/min(r.x,r.y);
      float d=length(uv);
      float field=0.0;
      for(int i=0;i<5;i++){
        float fi=float(i);
        vec2 q=uv+vec2(sin(t*.22+fi)*.42, cos(t*.18+fi*1.7)*.28);
        field += .018/abs(length(q)-(.28+fi*.08+sin(t*.12+fi)*.025));
      }
      float grid=(step(.985, sin((uv.x+t*.02)*32.0))*0.018)+(step(.988, sin((uv.y-t*.015)*28.0))*0.014);
      vec3 color=mix(ca,cb,smoothstep(.1,1.25,d))*field + vec3(grid);
      color *= smoothstep(1.35,.08,d);
      gl_FragColor=vec4(color, min(.62, field));
    }
  `;
  const program = createProgram(gl, vertex, fragment);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(program, "p");
  const res = gl.getUniformLocation(program, "r");
  const time = gl.getUniformLocation(program, "t");
  const ca = gl.getUniformLocation(program, "ca");
  const cb = gl.getUniformLocation(program, "cb");
  function draw(now) {
    resizeCanvas(sceneCanvas);
    gl.viewport(0, 0, sceneCanvas.width, sceneCanvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(res, sceneCanvas.width, sceneCanvas.height);
    gl.uniform1f(time, now * 0.001);
    gl.uniform3fv(ca, hexToRgb(cssVar("--a")));
    gl.uniform3fv(cb, hexToRgb(cssVar("--b")));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

function createProgram(gl, vertexSource, fragmentSource) {
  function shader(type, source) {
    const s = gl.createShader(type);
    gl.shaderSource(s, source);
    gl.compileShader(s);
    return s;
  }
  const program = gl.createProgram();
  gl.attachShader(program, shader(gl.VERTEX_SHADER, vertexSource));
  gl.attachShader(program, shader(gl.FRAGMENT_SHADER, fragmentSource));
  gl.linkProgram(program);
  return program;
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean, 16);
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
}

function resizeCanvas(canvas) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const width = Math.floor(canvas.clientWidth * dpr);
  const height = Math.floor(canvas.clientHeight * dpr);
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
}

function setupDataCanvas() {
  const ctx = dataCanvas.getContext("2d");
  const points = Array.from({ length: 90 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.00045,
    vy: (Math.random() - 0.5) * 0.00045,
  }));
  function draw() {
    resizeCanvas(dataCanvas);
    ctx.clearRect(0, 0, dataCanvas.width, dataCanvas.height);
    const color = cssVar("--a");
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 0.7;
    points.forEach((point) => {
      point.x = (point.x + point.vx + 1) % 1;
      point.y = (point.y + point.vy + 1) % 1;
    });
    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      const ax = a.x * dataCanvas.width;
      const ay = a.y * dataCanvas.height;
      ctx.globalAlpha = 0.45;
      ctx.beginPath();
      ctx.arc(ax, ay, 1.4, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < points.length; j++) {
        const b = points[j];
        const bx = b.x * dataCanvas.width;
        const by = b.y * dataCanvas.height;
        const dist = Math.hypot(ax - bx, ay - by);
        if (dist < 130) {
          ctx.globalAlpha = (1 - dist / 130) * 0.18;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

function drawSkillChart() {
  if (!skillCanvas) return;
  const ctx = skillCanvas.getContext("2d");
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const size = 720;
  skillCanvas.width = size * dpr;
  skillCanvas.height = size * dpr;
  skillCanvas.dataset.chartSize = String(size);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);
  const center = size / 2;
  const skills = [
    ["Python", 88],
    ["SQL", 84],
    ["ML", 78],
    ["Power BI", 76],
    ["Automation", 90],
    ["Consulting", 82],
    ["Data QA", 92],
  ];
  const radius = 218;
  ctx.strokeStyle = colorWithAlpha(cssVar("--text"), 0.14);
  ctx.lineWidth = 1;
  for (let ring = 1; ring <= 4; ring++) {
    ctx.beginPath();
    ctx.arc(center, center, (radius / 4) * ring, 0, Math.PI * 2);
    ctx.stroke();
  }
  const points = skills.map(([, value], index) => {
    const angle = -Math.PI / 2 + (index / skills.length) * Math.PI * 2;
    const r = (value / 100) * radius;
    return [center + Math.cos(angle) * r, center + Math.sin(angle) * r, angle];
  });
  ctx.beginPath();
  points.forEach(([x, y], index) => (index ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
  const gradient = ctx.createLinearGradient(150, 150, 570, 570);
  gradient.addColorStop(0, colorWithAlpha(cssVar("--a"), 0.54));
  gradient.addColorStop(1, colorWithAlpha(cssVar("--c"), 0.26));
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = cssVar("--a");
  ctx.lineWidth = 2;
  ctx.stroke();
  const labelBounds = [];
  points.forEach(([x, y, angle], index) => {
    ctx.fillStyle = cssVar("--c");
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    const labelRadius = radius + 66;
    ctx.fillStyle = cssVar("--text");
    ctx.font = "700 15px Inter, sans-serif";
    ctx.textBaseline = "middle";
    const label = skills[index][0];
    const width = ctx.measureText(label).width;
    const padding = 24;
    const cos = Math.cos(angle);
    let align = cos > 0.2 ? "left" : cos < -0.2 ? "right" : "center";
    let labelX = center + cos * labelRadius;
    let labelY = center + Math.sin(angle) * labelRadius;
    labelY = Math.min(size - padding, Math.max(padding, labelY));
    if (align === "left") labelX = Math.min(size - width - padding, Math.max(padding, labelX));
    if (align === "right") labelX = Math.max(width + padding, Math.min(size - padding, labelX));
    if (align === "center") labelX = Math.min(size - width / 2 - padding, Math.max(width / 2 + padding, labelX));
    ctx.textAlign = align;
    ctx.fillText(label, labelX, labelY);
    const left = align === "right" ? labelX - width : align === "center" ? labelX - width / 2 : labelX;
    labelBounds.push({ label, left, right: left + width, top: labelY - 8, bottom: labelY + 8 });
  });
  skillCanvas.dataset.labelBounds = JSON.stringify(labelBounds);
  window.__skillChartLabelBounds = labelBounds;
}

function colorWithAlpha(color, alpha) {
  if (!color.startsWith("#")) return color;
  const [r, g, b] = hexToRgb(color).map((v) => Math.round(v * 255));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

setupScene();
setupDataCanvas();
drawSkillChart();
window.addEventListener("resize", drawSkillChart);
