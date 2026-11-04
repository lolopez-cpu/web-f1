// ========================================================
// FUNCIÓN 1: Mostrar un mensaje emergente de bienvenida
// Se usa en: index.html
// ========================================================
function darBienvenida() {
    alert("¡Bienvenido al portal del Gran Premio de Mónaco F1 2026!");
}

// ========================================================
// FUNCIÓN 2: Mostrar la fecha y hora actual
// Se usa en: circuito.html
// ========================================================
function mostrarFechaActual() {
    var fecha = new Date();
    var mensaje = "Fecha actual: " + fecha.toLocaleDateString() + " - Hora: " + fecha.toLocaleTimeString();
    document.getElementById("texto-fecha").innerText = mensaje;
}

// ========================================================
// FUNCIÓN 3: Ocultar o mostrar la tabla de pilotos
// Se usa en: pilotos.html
// ========================================================
function cambiarVisibilidadTabla() {
    var tabla = document.getElementById("tabla-pilotos");
    if (tabla.style.display === "none") {
        tabla.style.display = "table";
    } else {
        tabla.style.display = "none";
    }
}