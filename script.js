function setAudience(audience) {
  document.body.dataset.audience = audience;

  document.querySelectorAll(".audience-btn").forEach((btn) => {
    btn.classList.toggle(
      "active",
      btn.dataset.audience === audience
    );
  });
}

document.querySelectorAll(".audience-btn").forEach((button) => {
  button.addEventListener("click", () => {
    setAudience(button.dataset.audience);
  });
});

document.querySelectorAll(".bibtex-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const container = button.closest(".publication").querySelector(".bibtex-container");

    const isVisible = getComputedStyle(container).display !== "none";

    container.style.display = isVisible ? "none" : "block";
    button.classList.toggle("active", !isVisible);
  });
});

document.querySelectorAll(".copy-bibtex").forEach((button) => {
  button.addEventListener("click", async () => {
    const container = button.closest(".bibtex-container");
    const bibtex = container.querySelector(".bibtex").innerText.trim();

    try {
      await navigator.clipboard.writeText(bibtex);

      button.textContent = "Copied!";
      button.classList.add("copied");

      setTimeout(() => {
        button.textContent = "Copy bibtex";
        button.classList.remove("copied");
      }, 1500);
    } catch (err) {
      console.error("Failed to copy BibTeX:", err);

      button.textContent = "Copy failed";

      setTimeout(() => {
        button.textContent = "Copy bibtex";
      }, 1500);
    }
  });
});