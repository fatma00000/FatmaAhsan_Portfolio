document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "trustworthy AI systems",
    "scalable machine learning pipelines",
    "explainable deep learning solutions",
    "impact-driven research collaborations"
  ];

  const target = document.getElementById("typing-text");
  if (!target) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const phrase = phrases[phraseIndex];
    charIndex += deleting ? -1 : 1;
    target.textContent = phrase.slice(0, charIndex);

    if (!deleting && charIndex === phrase.length) {
      deleting = true;
      return setTimeout(tick, 1200);
    }

    if (deleting && charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(tick, deleting ? 35 : 60);
  };

  tick();
});
