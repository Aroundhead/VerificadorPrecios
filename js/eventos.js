function configurarEventos() {
    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') {
            codigo += event.key;
        } else {
            buscarProducto(codigo);
            codigo = '';
        }
    });

    document.querySelector('#toggle-idioma input').addEventListener('change', function () {
        idioma = this.checked ? 'en' : 'es';
        localStorage.setItem('idioma', idioma);
        document.getElementById('titulo-CodigoBarras').textContent = idioma === 'es' ? 'Código de Barras' : 'Barcode';
        cargarProductosDesdeArchivo(idioma); // ✅ vuelve a cargar según idioma
        actualizarFechaHora();
        resetVista();
    });

    document.querySelector('#toggle-mode input').addEventListener('change', function () {
        document.body.classList.toggle('darkmode');
        localStorage.setItem('modo', document.body.classList.contains('darkmode') ? 'dark' : 'light');
    });
}
