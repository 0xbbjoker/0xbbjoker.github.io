const printButtons = document.querySelectorAll("[data-print]");
const copyButtons = document.querySelectorAll("[data-copy]");

for (const button of printButtons) {
  button.addEventListener("click", () => window.print());
}

for (const button of copyButtons) {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      const label = button.textContent;
      button.textContent = "Copied";
      button.setAttribute("aria-live", "polite");
      window.setTimeout(() => {
        button.textContent = label;
        button.removeAttribute("aria-live");
      }, 1400);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  });
}

