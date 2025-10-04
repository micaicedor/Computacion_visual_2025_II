using UnityEngine;

public class MovimientoObjeto : MonoBehaviour
{
    public float tiempoCambio = 2f;       // Cada cuántos segundos cambiar posición
    public float rangoMovimiento = 2f;    // Qué tanto se mueve en X o Y
    private float proximoCambio;

    public float velocidadRotacion = 90f; // grados por segundo
    public float factorEscala = 0.5f;     // amplitud de oscilación
    public float escalaBase = 1f;         // tamaño base

    void Start()
    {
        proximoCambio = Time.time + tiempoCambio;
    }

    void Update()
    {
        // --- Traslación aleatoria usando Translate ---
        if (Time.time >= proximoCambio)
        {
            float desplazamientoX = Random.Range(-rangoMovimiento, rangoMovimiento);
            float desplazamientoY = Random.Range(-rangoMovimiento, rangoMovimiento);

            if (Random.value > 0.5f)
                transform.Translate(new Vector3(desplazamientoX, 0, 0));
            else
                transform.Translate(new Vector3(0, desplazamientoY, 0));

            proximoCambio = Time.time + tiempoCambio;
        }

        // --- Rotación constante usando Rotate ---
        transform.Rotate(Vector3.up * velocidadRotacion * Time.deltaTime);

        // --- Escalado oscilante usando localScale ---
        float escala = escalaBase + Mathf.Sin(Time.time) * factorEscala;
        transform.localScale = new Vector3(escala, escala, escala);
    }
}

