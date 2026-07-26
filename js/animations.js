document.addEventListener("DOMContentLoaded", () => {
  const observeTargets = () => {
    const targets = document.querySelectorAll(".card, .project-card, .publication-card, .timeline-item, .skill-card, .stat-card");
    targets.forEach((item) => item.classList.add("fade-up"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    targets.forEach((target) => observer.observe(target));
  };

  const animateStats = () => {
    const counters = document.querySelectorAll(".stat-number");
    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      let value = 0;
      const step = Math.max(1, Math.floor(target / 60));
      const timer = setInterval(() => {
        value += step;
        if (value >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = value;
        }
      }, 20);
    });
  };

  window.addEventListener("load", () => {
    observeTargets();
    animateStats();
  });
});
