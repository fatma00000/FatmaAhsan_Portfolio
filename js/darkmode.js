document.addEventListener("DOMContentLoaded", () => {
  const key = "fatma-theme";
  const btn = document.getElementById("theme-toggle");
  const apply = (mode) => document.body.classList.toggle("dark", mode === "dark");

  apply(localStorage.getItem(key) || "light");

  btn.addEventListener("click", () => {
    const next = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem(key, next);
    apply(next);
  });
});
