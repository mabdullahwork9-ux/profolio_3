/* Project data */
const projects = {
  tetris: {
    title: "Tetris DevSecOps Pipeline",
    tags: ["DevSecOps", "AWS", "EKS", "GitOps"],
    github: "https://github.com/mabdullahwork9-ux/tetris-devsecops",
    what: "A complete DevSecOps implementation that provisions infrastructure on AWS, builds and secures a containerized application, and continuously deploys it to Amazon EKS using GitOps principles.",
    why: "To demonstrate how security can be automated and enforced at every stage of the delivery pipeline — from infrastructure provisioning through runtime — without slowing development velocity.",
    objective: "Deliver a production-ready, security-gated CI/CD + GitOps workflow for a containerized workload on Kubernetes, with zero configuration drift.",
    tools: ["Terraform", "AWS (VPC, EKS)", "Jenkins", "Docker", "SonarQube", "Trivy", "OWASP Dependency-Check", "ArgoCD", "Kubernetes"],
    did: [
      "Provisioned a full AWS environment (VPC, subnets, EKS cluster) using Terraform as Infrastructure as Code.",
      "Built a Jenkins-based DevSecOps pipeline that automates build, test, and multi-layer security scanning.",
      "Integrated Shift-Left security gates: SonarQube (SAST), Trivy (container & filesystem scanning), and OWASP Dependency-Check for vulnerable libraries.",
      "Configured ArgoCD to continuously reconcile the desired state from a Git manifest repository to the EKS cluster (GitOps / zero-drift).",
      "Managed the full application lifecycle with Docker and rolling updates via automated GitOps workflows."
    ],
    skills: ["Infrastructure as Code", "CI/CD security gates", "Container security", "GitOps & continuous delivery", "Kubernetes operations"],
    outcome: "A fully automated, auditable pipeline that blocks insecure code and images before they reach the cluster and keeps the live environment synchronized with Git.",
    relevance: "Mirrors real enterprise requirements for secure software delivery on cloud-native platforms and demonstrates practical application of Shift-Left and GitOps practices.",
    evidence: "Repository available on GitHub: mabdullahwork9-ux/tetris-devsecops"
  },
  cicd: {
    title: "Secure CI/CD Pipeline on AWS",
    tags: ["CI/CD", "GitHub Actions", "Docker", "AWS"],
    github: "https://github.com/mabdullahwork9-ux/ci-cd-pipeline",
    what: "An end-to-end CI/CD pipeline using GitHub Actions that builds, tests, containerizes, and deploys a multi-tier application to AWS EC2 with security scanning and controlled release gates.",
    why: "To implement Continuous Delivery with strong security controls and human approval for production, while keeping the entire process automated and reproducible.",
    objective: "Automate the full path from commit to production-ready deployment on EC2 while preventing secrets leakage and enforcing quality and security checks.",
    tools: ["GitHub Actions", "Docker", "Gitleaks", "AWS EC2", "Custom Dockerfiles"],
    did: [
      "Implemented a complete GitHub Actions workflow for build, test, and deployment of a containerized multi-tier application.",
      "Containerized frontend and backend with custom Dockerfiles to guarantee consistent environments.",
      "Integrated Gitleaks for automated credential and secret scanning on every push.",
      "Added automated code linting and environment-specific triggers for Continuous Deployment.",
      "Designed Continuous Delivery with manual approval gates so production deployments require administrator verification."
    ],
    skills: ["GitHub Actions pipelines", "Containerization", "Secret scanning", "Release management", "AWS deployment"],
    outcome: "A reliable, security-aware pipeline that reduces manual error and enforces both automated checks and controlled human oversight for production releases.",
    relevance: "Shows practical implementation of modern CI/CD security patterns used by teams that need both speed and governance.",
    evidence: "Repository available on GitHub: mabdullahwork9-ux/ci-cd-pipeline"
  },
  jerney: {
    title: "Jerney — Secure Three-Tier Blog Platform",
    tags: ["Production", "GitOps", "EKS", "Zero-Trust"],
    github: "https://github.com/mabdullahwork9-ux/jerney_devsecops.git",
    what: "A production-grade three-tier blog platform built from the ground up with end-to-end security: private networking, hardened containers, multi-stage CI security scanning, GitOps delivery, and runtime network policies.",
    why: "To apply real-world secure-by-design principles across infrastructure, pipeline, and runtime for a realistic multi-tier application.",
    objective: "Deliver a secure, continuously deployed application on EKS with defense-in-depth from IaC through runtime.",
    tools: ["Terraform", "AWS VPC & EKS (Auto Mode)", "Docker (multi-stage, non-root)", "Hadolint", "GitHub Actions", "ESLint", "npm audit", "Trivy", "Checkov", "Argo CD", "Kubernetes NetworkPolicies"],
    did: [
      "Provisioned a secure private VPC and managed EKS clusters using Terraform.",
      "Implemented multi-stage Docker builds with non-root users, read-only filesystems, and Hadolint linting.",
      "Built a 10-stage GitHub Actions pipeline covering linting, dependency auditing, container vulnerability scanning, and IaC security scanning (Checkov).",
      "Configured Argo CD for continuous delivery driven by the DevOps repository branch.",
      "Enforced zero-trust communication with Kubernetes NetworkPolicies and secret encryption at rest in EKS."
    ],
    skills: ["Secure IaC", "Container hardening", "Multi-stage security pipelines", "GitOps", "Kubernetes network security"],
    outcome: "A production-ready platform that demonstrates layered security controls and automated continuous delivery with minimal operational drift.",
    relevance: "Directly transferable to enterprise environments that require private networking, hardened images, and policy-driven deployments.",
    evidence: "Repository available on GitHub: mabdullahwork9-ux/jerney_devsecops"
  },
  vuln: {
    title: "Cybersecurity Vulnerability Management",
    tags: ["Vulnerability Management", "Azure", "OpenVAS"],
    github: null,
    what: "A hands-on vulnerability management lab on Azure: secure network setup, a deliberately vulnerable Windows 10 target, OpenVAS scanning (authenticated and unauthenticated), analysis, remediation, and re-validation.",
    why: "To gain practical experience with the full vulnerability management lifecycle and understand the difference between unauthenticated and credentialed scanning.",
    objective: "Identify, prioritize, remediate, and verify vulnerabilities in a controlled but realistic environment.",
    tools: ["Azure", "OpenVAS", "Windows 10 (vulnerable configuration)", "Network segmentation"],
    did: [
      "Set up a secure Azure network and deployed an OpenVAS Vulnerability Management Scanner VM.",
      "Built a vulnerable Windows 10 VM with outdated software and disabled security controls.",
      "Performed both unauthenticated and credentialed vulnerability scans.",
      "Analyzed results and documented the meaningful differences between scan types.",
      "Remediated identified issues and confirmed successful remediation with follow-up scans."
    ],
    skills: ["Vulnerability scanning", "Scan analysis & prioritization", "Remediation verification", "Azure networking basics"],
    outcome: "Clear demonstration of how credentialed scanning surfaces deeper issues and how systematic remediation closes the loop.",
    relevance: "Core skill for any security operations or vulnerability management role; reinforces the importance of continuous assessment.",
    evidence: "Project documentation and scan artifacts (placeholder — replace with actual report or screenshots when available)"
  },
  siem: {
    title: "SIEM Dashboard — Azure Sentinel",
    tags: ["SIEM", "Azure Sentinel", "Threat Visualization"],
    github: null,
    what: "A custom SIEM visualization pipeline that extracts geolocation metadata from Windows Event Viewer, ingests it into Log Analytics, and displays global RDP brute-force attack origins on a world map inside Azure Sentinel.",
    why: "To turn raw security events into actionable geographic intelligence and gain hands-on experience building custom SIEM content.",
    objective: "Enrich Windows security logs with geolocation and create an operational dashboard that shows attack origin and intensity.",
    tools: ["PowerShell", "Windows Event Viewer", "Azure Log Analytics Workspace", "Azure Sentinel (Microsoft Sentinel)", "Custom fields & workbooks"],
    did: [
      "Wrote a custom PowerShell script to extract metadata from Windows Event Viewer and enrich it with geolocation data via a third-party API.",
      "Configured a Log Analytics Workspace to ingest the custom geo-enriched logs (latitude, longitude, state/province, country).",
      "Defined Custom Fields in Log Analytics to support mapping of the geographic data.",
      "Built an Azure Sentinel workbook that visualizes global RDP brute-force attack data on a world map, sized by magnitude of attacks."
    ],
    skills: ["SIEM content development", "Log enrichment", "Azure Sentinel workbooks", "PowerShell automation", "Threat visualization"],
    outcome: "An operational dashboard that gives immediate visual context to attack campaigns targeting RDP.",
    relevance: "Illustrates practical SIEM engineering skills used in SOC environments for detection and situational awareness.",
    evidence: "Workbook and script artifacts (placeholder — add screenshots or export links when available)"
  },
  malware: {
    title: "Static Malware Analysis — RedLine",
    tags: ["Malware Analysis", "Static Analysis", "Threat Intel"],
    github: null,
    what: "A detailed static analysis report of the RedLine password-stealing Trojan, covering its capabilities across Windows, macOS, and Linux targets.",
    why: "To practice structured malware analysis methodology and document a real-world information-stealing threat.",
    objective: "Characterize the malware’s behavior, targets, and indicators through static techniques and produce actionable findings.",
    tools: ["Static analysis techniques", "Malware sample (RedLine)", "Threat intelligence sources"],
    did: [
      "Identified and analyzed a RedLine sample known for stealing credentials, credit card data, and cryptocurrency wallets.",
      "Documented targeting of Windows, macOS, and Linux systems.",
      "Produced a structured report covering functionality, indicators, and defensive recommendations."
    ],
    skills: ["Static malware analysis", "Threat characterization", "Technical report writing", "Indicator extraction"],
    outcome: "A clear analysis report that can support detection engineering and user awareness efforts.",
    relevance: "Foundational skill for malware analysis, threat intel, and incident response roles.",
    evidence: "Analysis report (placeholder — attach PDF or detailed write-up when available)"
  },
  netflix: {
    title: "Netflix Clone with DevSecOps Practices",
    tags: ["DevSecOps", "Jenkins", "Monitoring", "EKS"],
    github: null,
    what: "A comprehensive DevSecOps pipeline on AWS that automates the secure deployment of a Netflix clone application, including code quality and container scanning, observability, and GitOps continuous delivery.",
    why: "To combine application delivery, security scanning, and production-grade monitoring in a single realistic project.",
    objective: "Demonstrate an end-to-end secure delivery platform with automated quality/security gates and operational visibility.",
    tools: ["Jenkins", "SonarQube", "Trivy", "Docker", "AWS", "Prometheus", "Grafana", "ArgoCD", "Helm", "EKS"],
    did: [
      "Designed and implemented a Jenkins-based DevSecOps pipeline for the Netflix clone application.",
      "Integrated SonarQube for static code quality/security analysis and Trivy for container vulnerability assessments.",
      "Configured Prometheus and Grafana to monitor CPU/RAM utilization of EC2 instances and Jenkins jobs, with SMTP email alerting.",
      "Orchestrated deployment on Amazon EKS using ArgoCD for GitOps continuous delivery and Helm charts for application and monitoring infrastructure."
    ],
    skills: ["Jenkins pipeline design", "SAST & container scanning", "Observability (Prometheus/Grafana)", "GitOps with ArgoCD & Helm", "EKS operations"],
    outcome: "A monitored, security-scanned, continuously delivered application platform on Kubernetes.",
    relevance: "Shows how DevSecOps, observability, and GitOps come together in a practical cloud-native setup.",
    evidence: "Project artifacts and pipeline configuration (placeholder — link repository or screenshots when available)"
  }
};

/* DOM elements */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

/* Navbar scroll effect */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* Mobile nav toggle */
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* Close mobile nav on link click */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/* Project modal */
function openModal(projectId) {
  const p = projects[projectId];
  if (!p) return;

  const tagsHtml = p.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
  const toolsHtml = p.tools.map(t => `<span>${t}</span>`).join('');
  const didHtml = p.did.map(item => `<li>${item}</li>`).join('');
  const skillsHtml = p.skills.map(s => `<li>${s}</li>`).join('');

  const githubHtml = p.github
    ? `<a class="modal-github" href="${p.github}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>`
    : '';

  modalBody.innerHTML = `
    <div class="modal-tag-row">${tagsHtml}</div>
    <h2 id="modalTitle">${p.title}</h2>
    ${githubHtml}
    <div class="modal-section">
      <h4>What was the project?</h4>
      <p>${p.what}</p>
    </div>
    <div class="modal-section">
      <h4>Why was it built?</h4>
      <p>${p.why}</p>
    </div>
    <div class="modal-section">
      <h4>Objective</h4>
      <p>${p.objective}</p>
    </div>
    <div class="modal-section">
      <h4>Tools & Technologies</h4>
      <div class="modal-tech-list">${toolsHtml}</div>
    </div>
    <div class="modal-section">
      <h4>What I actually did</h4>
      <ul>${didHtml}</ul>
    </div>
    <div class="modal-section">
      <h4>Skills developed</h4>
      <ul>${skillsHtml}</ul>
    </div>
    <div class="modal-section">
      <h4>Outcome</h4>
      <p>${p.outcome}</p>
    </div>
    <div class="modal-section">
      <h4>Real-world relevance</h4>
      <p>${p.relevance}</p>
    </div>
    <div class="modal-section">
      <h4>Evidence</h4>
      <div class="modal-evidence"><strong>Evidence:</strong> ${p.evidence}</div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* Open modal from project cards */
document.querySelectorAll('.project-link, .project-card').forEach(el => {
  el.addEventListener('click', (e) => {
    // Prefer the button's data-project; fall back to card
    const card = e.currentTarget.closest('[data-project]') || e.currentTarget;
    const id = card.getAttribute('data-project');
    if (id) {
      e.preventDefault();
      openModal(id);
    }
  });
});

/* Close modal */
modal.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    closeModal();
  }
});

/* Prevent card click from double-firing when clicking the button */
document.querySelectorAll('.project-link').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const id = btn.getAttribute('data-project');
    if (id) openModal(id);
  });
});
