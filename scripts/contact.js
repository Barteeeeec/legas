document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      showMessage("Proszę wypełnić wszystkie pola!", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage("Proszę podać prawidłowy adres email!", "error");
      return;
    }

    setTimeout(() => {
      showMessage(
        "Wiadomość została wysłana pomyślnie! Odpowiemy wkrótce.",
        "success"
      );
      contactForm.reset();
    }, 1000);
  });

  function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = "form-message " + type;
    formMessage.classList.remove("hidden");

    setTimeout(() => {
      formMessage.classList.add("hidden");
    }, 5000);
  }
});
