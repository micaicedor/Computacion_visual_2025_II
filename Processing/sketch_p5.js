function setup() {
  createCanvas(600, 600, WEBGL); // lienzo en 3D
}

function draw() {
  background(20);

  // Luz básica
  directionalLight(255, 255, 255, 0.5, 1, -1);

  // Traslación senoidal en X
  let tx = sin(frameCount * 0.02) * 150;

  // Escalado cíclico
  let s = 1 + 0.5 * sin(frameCount * 0.05);

  // Rotación constante
  let rot = millis() * 0.001;

  push(); // aislar transformaciones
  translate(tx, 0, 0); // movimiento ondulado
  rotateY(rot);
  rotateX(rot * 0.5);
  scale(s);

  normalMaterial(); // material colorido según luz
  box(100); // cubo
  pop();
}
