const eventos = [
  { id: 1, titulo: "Charla de Tecnología", fecha: "2025-10-01", inscrito: "" },
  { id: 2, titulo: "Taller de Pintura", fecha: "2025-10-03", inscrito: "" },
  { id: 3, titulo: "Clase de Yoga", fecha: "2025-10-05", inscrito: "" },
];

const tabla = document.getElementById("tablaEventos");

function cargarEventos() {
  tabla.innerHTML = "";
  eventos.forEach((evento, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${evento.titulo}</td>
      <td>${evento.fecha}</td>
      <td id="inscrito-${index}">${evento.inscrito || "-"}</td>
      <td>
        <button onclick="apuntarse(${index})" ${evento.inscrito ? "disabled" : ""}>
          Apuntarse
        </button>
      </td>
    `;

    tabla.appendChild(fila);
  });
}

function apuntarse(index) {
  const nombre = document.getElementById("nombreUsuario").value.trim();
  if (!nombre) {
    alert("Por favor, escribe tu nombre para apuntarte.");
    return;
  }

  if (eventos[index].inscrito) {
    alert("Este evento ya tiene un inscrito.");
    return;
  }

  eventos[index].inscrito = nombre;
  cargarEventos();
}

cargarEventos();
