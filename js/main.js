function init() {
    idioma = localStorage.getItem('idioma') || 'es';

    cargarProductosDesdeArchivo(idioma); // ✅ Cargar archivo según idioma

    if (idioma === 'en') {
        document.getElementById('titulo-CodigoBarras').textContent = 'Barcode';
    }

    if (localStorage.getItem('modo') === 'dark') {
        document.body.classList.add('darkmode');
        document.querySelector('#toggle-mode input').checked = true;
    }

    document.querySelector('#toggle-idioma input').checked = idioma === 'en';

    actualizarFechaHora();
    setInterval(actualizarFechaHora, 1000);

    configurarEventos();
}


window.onload = init;
