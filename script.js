const contactForm = document.querySelector("#contact-form");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const projectType = formData.get("projectType").trim();
  const message = formData.get("message").trim();
  const subject = encodeURIComponent(`${projectType} inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nProject type: ${projectType}\nFrom: ${name}\nEmail: ${email}`);

  window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
});