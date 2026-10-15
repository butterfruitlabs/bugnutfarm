(function () {
  "use strict";
  const config = window.BUGNUT_CONFIG || {};
  const email = (config.contactEmail || "").trim();
  const contactLink = document.getElementById("contact-link");
  const contactPending = document.getElementById("contact-pending");

  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    contactLink.textContent = email;
    contactLink.href = `mailto:${email}?subject=${encodeURIComponent("Bugnut Farm Ciderhouse inquiry")}`;
    contactLink.hidden = false;
    contactPending.hidden = true;
  }
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Visual placeholders remain as original decorative engravings until real photos are supplied.
  document.querySelectorAll("[data-photo]").forEach((slot) => {
    const key = slot.getAttribute("data-photo");
    const source = (config.photos || {})[key];
    if (!source || typeof source !== "string") return;
    const photo = document.createElement("img");
    photo.src = source;
    photo.alt = ({
      orchard: "Aerial view of the Bugnut Farm orchard in Montgomery, New York",
      rosalie: "Rosalie estate-grown cider",
      lucie: "Lucie estate-grown cider",
      apples: "Cider apple growing in the orchard at Bugnut Farm",
      barn: "Converted dairy barn and silo at Bugnut Farm Ciderhouse"
    })[key] || "Bugnut Farm Ciderhouse";
    photo.className = "actual-photo";
    if (key === "apples") photo.style.objectPosition = "62% 72%";
    photo.decoding = "async";
    photo.loading = "eager";
    photo.addEventListener("load", () => slot.classList.add("has-photo"), { once: true });
    photo.addEventListener("error", () => photo.remove(), { once: true });
    slot.appendChild(photo);
  });
})();
