// =====================
// 🎧 INSTRUMENTO (PIANO REAL)
// =====================
const piano = new Tone.Sampler({
  urls: {
    A1: "A1.mp3",
    C2: "C2.mp3",
    "D#2": "Ds2.mp3",
    "F#2": "Fs2.mp3",
    A2: "A2.mp3",
  },
  release: 1,
  baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

// =====================
// 🎼 MAPEO TECLAS → NOTAS
// =====================
const keyMap = {
  a: "C4",   // Do
  w: "C#4",  // Do#
  s: "D4",   // Re
  e: "D#4",  // Re#
  d: "E4",   // Mi
  f: "F4",   // Fa
  t: "F#4"   // Fa#
};

// =====================
// 🎹 ELEMENTOS DOM
// =====================
const keys = document.querySelectorAll('.key');
const cards = document.querySelectorAll('.skill-card');

// =====================
// 🔊 FUNCIÓN PRINCIPAL
// =====================
async function playKey(keyElement) {
  const note = keyMap[keyElement.dataset.key];
  const target = keyElement.dataset.target;

  // ⚠️ Necesario para que el navegador permita audio
  await Tone.start();

  // 🎧 Reproducir nota real
  if (note) {
    piano.triggerAttackRelease(note, "2n");
  }

  // 🎹 Animación tecla
  keys.forEach(k => k.classList.remove('active'));
  keyElement.classList.add('active');

  // 🧩 Cambiar sección
  if (target) {
    cards.forEach(c => c.classList.remove('active'));
    const activeCard = document.getElementById(target);
    if (activeCard) activeCard.classList.add('active');
  }
}

// =====================
// 🖱️ CLICK
// =====================
keys.forEach(key => {
  key.addEventListener('click', () => playKey(key));
});

// =====================
// ⌨️ TECLADO
// =====================
document.addEventListener('keydown', (e) => {
  const keyElement = document.querySelector(`[data-key="${e.key.toLowerCase()}"]`);
  if (keyElement) playKey(keyElement);
});

// =====================
// 🚀 INICIO (evita vacío)
// =====================
window.addEventListener("DOMContentLoaded", () => {
  const firstKey = document.querySelector('.key.white');
  if (firstKey) firstKey.click();
});