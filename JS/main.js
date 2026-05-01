document.getElementById("downloadCV").addEventListener("click", () => {
  // Ruta del archivo (ajústala según tu estructura)
  const fileUrl = "assets/Currículum Vitae CV Valderrama Cabezas Cristian Felipe.pdf";

  // Crea un enlace temporal para forzar la descarga
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = "Currículum Vitae CV Valderrama Cabezas Cristian Felipe.pdf"; // Nombre del archivo descargado
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

    // efecto de tipeo
    const text = "Backend Developer specialized in APIs & Databases";
    let i = 0;

    function typeEffect() {
      if (i < text.length) {
        document.querySelector(".typing").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
      }
    }

    document.querySelector(".typing").textContent = "";
    window.onload = typeEffect;

    // ===== TIMELINE ANIMATION =====

const items = document.querySelectorAll(".timeline-item");
const timeline = document.querySelector(".timeline");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      timeline.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

items.forEach(item => observer.observe(item));

const lines = document.querySelectorAll(".terminal p, .terminal .output");

lines.forEach((el, index) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(10px)";

  setTimeout(() => {
    el.style.transition = "all 0.4s ease";
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  }, index * 150);
});

document.querySelectorAll(".badge-card").forEach(card => {
  const text = card.querySelector("p").textContent;
  card.title = `Achievement unlocked: ${text}`;
});

document.querySelectorAll(".badge-card").forEach((card, i) => {
  card.style.animationDelay = `${i * 0.2}s`;
});

function openModal(imgSrc) {
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("cert-img");

  modalImg.src = imgSrc;

  // Detectar si es badge
  if (imgSrc.includes("badge")) {
    modalImg.classList.add("badge-view");
  } else {
    modalImg.classList.remove("badge-view");
  }

  modal.style.display = "block";

  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

function closeModal() {
  const modal = document.getElementById("cert-modal");

  modal.classList.remove("show");

  // esperar animación antes de ocultar
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// cerrar al hacer click fuera
window.onclick = function(event) {
  const modal = document.getElementById("cert-modal");
  if (event.target === modal) {
    closeModal();
  }
}