// Función para abrir el visor de PDF
function openPDF(pdfPath) {
    document.getElementById("pdfFrame").src = pdfPath;
    document.getElementById("pdfViewer").style.display = "flex";
}

// Función para cerrar el visor de PDF
function closePDF() {
    document.getElementById("pdfViewer").style.display = "none";
    document.getElementById("pdfFrame").src = "";
}