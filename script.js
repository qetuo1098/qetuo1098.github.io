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