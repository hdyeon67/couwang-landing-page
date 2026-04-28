const links = {
  googlePlay: "[GOOGLE_PLAY_URL]",
  appStore: "[APP_STORE_URL]",
  contact: "[CONTACT_URL]",
};

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

function closeMenu() {
  document.body.classList.remove("nav-open");
  navMenu?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", Boolean(isOpen));
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) {
      return;
    }

    event.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

document.querySelectorAll(".store-badge img").forEach((image) => {
  const showFallback = () => {
    image.closest(".store-badge")?.classList.add("is-missing");
  };

  image.addEventListener("error", showFallback);

  if (image.complete && image.naturalWidth === 0) {
    showFallback();
  }
});

document.querySelectorAll('a[href="[GOOGLE_PLAY_URL]"]').forEach((link) => {
  link.setAttribute("href", links.googlePlay);
});

document.querySelectorAll('a[href="[APP_STORE_URL]"]').forEach((link) => {
  link.setAttribute("href", links.appStore);
});

document.querySelectorAll('a[href="[CONTACT_URL]"]').forEach((link) => {
  link.setAttribute("href", links.contact);
});
