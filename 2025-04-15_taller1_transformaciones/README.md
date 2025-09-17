## 🐍 1. Python (Matplotlib - 2D)

**Objetivo:** Simular transformaciones (traslación, rotación y escalado) sobre una figura geométrica simple en 2D usando Python.  

**Pasos realizados:**
1. Se creó un script en Python con `matplotlib`.
2. Se dibujó un cuadrado inicial.
3. Se aplicó:
   - **Traslación**: desplazamiento en el eje X e Y.
   - **Rotación**: usando matrices de rotación.
   - **Escalado**: variación de tamaño cíclica con `sin(time)`.
4. Se generó una animación con `FuncAnimation`.

**Captura:**  
![Python ejemplo](python/captura_python.png)

**Código relevante:**  
```python
plt.plot(x, y)   # dibuja figura
plt.translate()  # traslación
plt.rotate()     # rotación
plt.scale()      # escalado dinámico
🎮 2. Unity (C# - 3D)
Objetivo: Crear un objeto 3D (cubo o esfera) y aplicarle transformaciones en tiempo real.

Pasos realizados:

Se creó un proyecto vacío en 3D.

Se añadió un Cubo a la escena.

Se programó un script en C# que aplica:

transform.Translate() → traslación aleatoria en X o Y cada cierto tiempo.

transform.Rotate() → rotación continua usando Time.deltaTime.

transform.localScale → escalado dinámico con Mathf.Sin(Time.time).

Script C#:

csharp
código
transform.Translate(Vector3.right * velocidad * Time.deltaTime);
transform.Rotate(Vector3.up, 50 * Time.deltaTime);
transform.localScale = Vector3.one * (1 + Mathf.Sin(Time.time));
## 🎮 2. Unity (C# - 3D)

**Captura:**  
![Unity - Movimiento y rotación](unity/captura_unity.png)

🌐 3. Three.js con React Three Fiber
Objetivo: Crear un cubo animado en un proyecto web moderno.

Pasos realizados:

Se creó un proyecto con Vite + React.

Se instaló @react-three/fiber y @react-three/drei.

Se agregó un cubo con:

Traslación senoidal en X.

Rotación sobre su eje.

Escalado dinámico con Math.sin(clock.elapsedTime).

Se incluyó OrbitControls para navegar la escena con el mouse.


Código relevante:

jsx
código
useFrame(({ clock }) => {
  meshRef.current.position.x = Math.sin(clock.elapsedTime);
  meshRef.current.rotation.y += 0.02;
  meshRef.current.scale.setScalar(1 + 0.3 * Math.sin(clock.elapsedTime));
});
**Captura :**  
![Three.js - Animación en React Three Fiber](threejs/captura_threejs.png)
🎨 4. Processing (p5.js - 2D/3D)
Objetivo: Explorar transformaciones gráficas en tiempo real con translate(), rotate() y scale().

Pasos realizados:

Se creó un sketch en p5.js.

Se dibujó una figura geométrica (box o rect).

Se aplicaron transformaciones en el tiempo:

translate() → movimiento ondulado.

rotateY() y rotateX() → rotación continua.

scale() → variación cíclica usando sin().

Se encapsularon transformaciones con pushMatrix() y popMatrix().


Código relevante:

javascript
Copiar código
translate(sin(frameCount*0.02)*100, 0, 0);
rotateY(frameCount * 0.01);
scale(1 + 0.3 * sin(frameCount * 0.05));
**Captura:**  
![Processing - Cubo rotando](processing/captura_processing.png)
