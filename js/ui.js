function actualizarFechaHora() {
    const now = new Date();
    const fecha = now.toLocaleDateString(idioma === 'es' ? 'es-MX' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const hora = now.toLocaleTimeString(idioma === 'es' ? 'es-MX' : 'en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('fecha-hora').textContent = `${idioma === 'es' ? 'Fecha' : 'Date'} ${fecha} - ${idioma === 'es' ? 'Hora' : 'Time'} ${hora}`;
}

function resetVista() {
    const respuesta = document.getElementById('respuesta');
    respuesta.innerHTML = `
        <img src="./img/barcode.gif" alt="Barcode" id="barcode-img">
        <h2 id="titulo-CodigoBarras">${idioma === 'es' ? 'Código de Barras' : 'Barcode'}</h2>
    `;
}