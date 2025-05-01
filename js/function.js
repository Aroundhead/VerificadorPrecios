let productos = productosEs; 
let idioma = 'es';
let codigo = '';

function init() {
    idioma = localStorage.getItem('idioma') || 'es';
    if (idioma === 'en') {
        productos = productosEn;
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

function configurarEventos() {
    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') {
            codigo += event.key;
        } else {
            buscarProducto(codigo);
            codigo = '';
        }
    });

    // Toggle idioma
    document.querySelector('#toggle-idioma input').addEventListener('change', function () {
        idioma = this.checked ? 'en' : 'es';
        productos = idioma === 'es' ? productosEs : productosEn;
        localStorage.setItem('idioma', idioma);
        document.getElementById('titulo-CodigoBarras').textContent = idioma === 'es' ? 'Código de Barras' : 'Barcode';
        actualizarFechaHora();
        resetVista(); // 
    });

    // Toggle modo oscuro
    document.querySelector('#toggle-mode input').addEventListener('change', function () {
        document.body.classList.toggle('darkmode');
        localStorage.setItem('modo', document.body.classList.contains('darkmode') ? 'dark' : 'light');
    });
}

function actualizarFechaHora() {
    const now = new Date();
    const fecha = now.toLocaleDateString(idioma === 'es' ? 'es-MX' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const hora = now.toLocaleTimeString(idioma === 'es' ? 'es-MX' : 'en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('fecha-hora').textContent = `${idioma === 'es' ? 'Fecha' : 'Date'} ${fecha} - ${idioma === 'es' ? 'Hora' : 'Time'} ${hora}`;
}

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

function resetVista() {
    const respuesta = document.getElementById('respuesta');
    respuesta.innerHTML = `
        <img src="./img/barcode.gif" alt="Barcode" id="barcode-img">
        <h2 id="titulo-CodigoBarras">${idioma === 'es' ? 'Código de Barras' : 'Barcode'}</h2>
    `;
}

window.onload = init;
