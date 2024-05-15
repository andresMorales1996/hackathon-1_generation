let contador = 0;

function añadirACarrito(){
    alert("Producto añadido al carrito.");

    contador++;

    const contadorCarrito = document.getElementById('contador-carrito');
    contadorCarrito.innerText = contador;
    
}