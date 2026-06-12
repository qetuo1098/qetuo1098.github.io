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
    const container = button.closest(".pub-info").querySelector(".bibtex-container");

    const isVisible = getComputedStyle(container).display !== "none";

    container.style.display = isVisible ? "none" : "block";
    button.classList.toggle("active", !isVisible);
  });
});