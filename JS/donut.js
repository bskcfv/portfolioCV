const donutEl = document.getElementById("donut");

let A = 0, B = 0;

function renderDonut() {
  let b = [];
  let z = [];

  const width = 40;
  const height = 22;

  for (let k = 0; k < width * height; k++) {
    b[k] = " ";
    z[k] = 0;
  }

  for (let j = 0; j < 6.28; j += 0.07) {
    for (let i = 0; i < 6.28; i += 0.02) {

      const c = Math.sin(i);
      const d = Math.cos(j);
      const e = Math.sin(A);
      const f = Math.sin(j);
      const g = Math.cos(A);
      const h = d + 2;
      const D = 1 / (c * h * e + f * g + 5);
      const l = Math.cos(i);
      const m = Math.cos(B);
      const n = Math.sin(B);

      const t = c * h * g - f * e;

      const x = Math.floor(width / 2 + 30 * D * (l * h * m - t * n));
      const y = Math.floor(height / 2 + 15 * D * (l * h * n + t * m));

      const o = x + width * y;
      const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));

      if (y >= 0 && y < height && x >= 0 && x < width && D > z[o]) {
        z[o] = D;
        b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
      }
    }
  }

  let output = "";
  for (let i = 0; i < b.length; i++) {
    output += b[i];
    if (i % width === width - 1) output += "\n";
  }

  donutEl.textContent = output;

  A += 0.04;
  B += 0.02;
}

setInterval(renderDonut, 50);