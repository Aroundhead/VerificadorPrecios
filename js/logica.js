function buscarProducto(codigo) {
    const producto = productos.find(p => p[0] === codigo);
    const respuesta = document.getElementById('respuesta');

    if (producto) {
        respuesta.innerHTML = `
            <h2>${idioma === 'es' ? 'Producto' : 'Product'}: ${producto[1]}</h2>
            <h3>${idioma === 'es' ? 'Precio' : 'Price'}: ${producto[2]}</h3>
            <img src="./img/${producto[3]}" style="width:50%;height:auto;">
        `;
    } else {
        respuesta.innerHTML = `<h2>${idioma === 'es' ? 'Producto no encontrado' : 'Product not found'}</h2>`;
    }

    setTimeout(() => {
        resetVista();
    }, 3000); 
}

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