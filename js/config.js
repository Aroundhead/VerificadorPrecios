let productos = [];
let idioma = 'es';
let codigo = '';

function cargarProductosDesdeArchivo(idiomaSeleccionado) {
    const archivo = idiomaSeleccionado === 'es' ? './data/productos_es.txt' : './data/productos_en.txt';

    fetch(archivo)
        .then(res => res.text())
        .then(texto => {
            productos = texto
                .trim()
                .split('\n')
                .map(linea => linea.split('|'));
        });
}