document.getElementById("clipboard").addEventListener("click", () => {
    const contenido = document.getElementById("contenido").textContent;
    
    navigator.clipboard.writeText(contenido)
        .then(() => alert("Texto copiado al portapapeles:\n" + contenido))
        .catch(err => console.error("Error al copiar: ", err));
    });

document.getElementById("clipboard2").addEventListener("click", () => {
    const contenido = document.getElementById("contenido2").textContent;
    
    navigator.clipboard.writeText(contenido)
        .then(() => alert("Texto copiado al portapapeles:\n" + contenido))
        .catch(err => console.error("Error al copiar: ", err));
    });