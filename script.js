const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const form = document.querySelector("#contactForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Luminary AI inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nWhat I would like to automate:\n${message}`
    );

    window.location.href = `mailto:nathanhusted11@gmail.com?subject=${subject}&body=${body}`;
  });
}
