document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  await loadProjects();

  const sections = [...document.querySelectorAll("main section")];
  const links = [...document.querySelectorAll(".nav-links a")];
  const header = document.querySelector(".site-header");

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
    let currentId = "hero";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) currentId = section.id;
    });
    links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`));
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuBtn = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".nav-links");
  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("open");
  });

  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name").toString().trim();
    const email = formData.get("email").toString().trim();
    const message = formData.get("message").toString().trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please complete all fields.";
      return;
    }

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:fatma.ahsan.research@protonmail.com?subject=Research Inquiry from ${encodeURIComponent(name)}&body=${body}`;
    formStatus.textContent = "Opening your email client to send the message.";
    formStatus.style.color = "var(--color-success)";
    form.reset();
  });

  const emailText = document.getElementById("contact-email").textContent;
  document.getElementById("copy-email").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailText);
      formStatus.textContent = "Email copied to clipboard.";
      formStatus.style.color = "var(--color-success)";
    } catch {
      formStatus.textContent = "Clipboard access unavailable. Please copy manually.";
    }
  });

  const modal = document.getElementById("abstract-modal");
  const modalBody = document.getElementById("modal-body");
  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".abstract-btn");
    if (btn) {
      const publication = window.publicationData?.[Number(btn.dataset.index)];
      if (!publication) return;
      modalBody.textContent = publication.abstract;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    }
    if (event.target.id === "close-modal" || event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
});
