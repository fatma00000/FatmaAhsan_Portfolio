const renderButtons = (links) => links.map((link) => `<a class="btn btn-secondary" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join("");

async function loadProjects() {
  const [projectsRes, publicationsRes, expRes, eduRes] = await Promise.all([
    fetch("data/projects.json"),
    fetch("data/publications.json"),
    fetch("data/experience.json"),
    fetch("data/education.json")
  ]);

  const [projects, publications, experience, education] = await Promise.all([
    projectsRes.json(),
    publicationsRes.json(),
    expRes.json(),
    eduRes.json()
  ]);

  const projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = projects.map((project) => `
    <article class="project-card fade-up">
      <img class="project-thumbnail" src="${project.thumbnail}" alt="${project.title} project preview" loading="lazy" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="badge-row">${project.technologies.map((tech) => `<span class="badge">${tech}</span>`).join("")}</div>
      <h4>Key Contributions</h4>
      <ul>${project.contributions.map((item) => `<li>${item}</li>`).join("")}</ul>
      <h4>Challenges</h4>
      <p>${project.challenges}</p>
      <h4>Results</h4>
      <p>${project.results}</p>
      <div class="button-row">${renderButtons(project.links)}</div>
    </article>
  `).join("");

  const publicationsList = document.getElementById("publications-list");
  publicationsList.innerHTML = publications.map((pub, index) => `
    <article class="publication-card fade-up">
      <div class="timeline-meta">
        <h3>${pub.title}</h3>
        <span>${pub.year}</span>
      </div>
      <p><strong>Type:</strong> ${pub.type}</p>
      <p><strong>Research Area:</strong> ${pub.researchArea}</p>
      <p><strong>Keywords:</strong> ${pub.keywords.join(", ")}</p>
      <div class="badge-row">
        <img src="${pub.journalLogo}" alt="${pub.journal} logo" width="36" height="36" loading="lazy" />
        <img src="${pub.conferenceLogo}" alt="${pub.conference} logo" width="36" height="36" loading="lazy" />
      </div>
      <div class="button-row">
        <button class="btn btn-primary abstract-btn" data-index="${index}">Abstract</button>
        <a class="btn btn-secondary" href="${pub.citation}" target="_blank" rel="noopener noreferrer">Citation</a>
        <a class="btn btn-secondary" href="${pub.bibtex}" target="_blank" rel="noopener noreferrer">BibTeX</a>
        <a class="btn btn-secondary" href="${pub.doi}" target="_blank" rel="noopener noreferrer">DOI</a>
        <a class="btn btn-secondary" href="${pub.pdf}" target="_blank" rel="noopener noreferrer">PDF</a>
      </div>
    </article>
  `).join("");

  const timeline = document.getElementById("timeline-list");
  const merged = [
    ...education,
    ...experience
  ].sort((a, b) => Number(b.sortYear) - Number(a.sortYear));

  timeline.innerHTML = merged.map((item) => `
    <article class="timeline-item fade-up">
      <div class="timeline-meta">
        <h3>${item.title}</h3>
        <span>${item.period}</span>
      </div>
      <p><strong>${item.category}</strong> • ${item.organization}</p>
      <p>${item.summary}</p>
      ${item.highlights ? `<ul>${item.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>` : ""}
    </article>
  `).join("");

  window.publicationData = publications;
}

window.loadProjects = loadProjects;
