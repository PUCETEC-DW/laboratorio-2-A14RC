let paises = [];

async function obtenerPaises() {
  const respuesta = await fetch("https://restcountries.com/v3.1/all");
  paises = await respuesta.json();
  mostrarPaises(paises);
}

// Función para mostrar países en el DOM
function mostrarPaises(paises) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultados anteriores

  paises.forEach((pais) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${pais.flags.svg}" alt="Bandera de ${pais.name.official}">
      <h3>${pais.name.official}</h3>
      <p><strong>Región:</strong> ${pais.region}</p>
      <p><strong>Población:</strong> ${pais.population.toLocaleString()}</p>
    `;

    resultado.appendChild(card);
  });
}

// Filtrar países según el texto ingresado
document.getElementById("buscar").addEventListener("input", function () {
  const texto = this.value.toLowerCase();
  const filtrados = paises.filter((pais) =>
    pais.name.official.toLowerCase().includes(texto)
  );
  mostrarPaises(filtrados);
});

obtenerPaises();
