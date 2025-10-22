document.getElementById("downloadCV").addEventListener("click", () => {
  // Ruta del archivo (ajústala según tu estructura)
  const fileUrl = "/assets/Cristian_Valderrama_CV.pdf";

  // Crea un enlace temporal para forzar la descarga
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = "Cristian_Valderrama_CV.pdf"; // Nombre del archivo descargado
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

    // efecto de tipeo
    const text = "Backend Developer | Database Enthusiast";
    let i = 0;
    function typeEffect() {
      if (i < text.length) {
        document.querySelector(".typing").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
      }
    }
    document.querySelector(".typing").textContent = "";
    window.onload = typeEffect;
