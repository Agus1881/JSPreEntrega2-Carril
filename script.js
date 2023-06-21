let productos = [
    {id: 1, nombre: "Guitarra electrica", categoria: "instrumentos", precio: 9000},
    {id: 2, nombre: "Guitarra acustica", categoria: "instrumentos", precio: 7000},
    {id: 3, nombre: "Bajo electrico", categoria: "instrumentos", precio: 8000},
    {id: 4, nombre: "Bajo acustico", categoria: "instrumentos", precio: 7500},
    {id: 5, nombre: "Batería", categoria: "instrumentos", precio: 10000},
    {id: 6, nombre: "Pedal de distorsión", categoria: "accesorios", precio: 4000},
    {id: 7, nombre: "Paquete de púas", categoria: "accesorios", precio: 500},
    {id: 8, nombre: "Palillos", categoria: "accesorios",  precio: 1200},
]

let carrito = [] 

// listado de productos

function verProductos(Array){
    let lista = "ID - Nombre - Precio \n"
   Array.forEach(element => {
    lista = lista + element.id + " - " + element.nombre + " - $" + element.precio + "\n"
   })
   return lista
}

// filtrado de productos

let productosFiltrados

function filtrar(){
    let filtro = prompt("Filtrar por instrumentos o accesorios?")
    if(filtro === "instrumentos"){
        productosFiltrados = productos.filter(producto => producto.categoria === "instrumentos")
        alert(verProductos(productosFiltrados))
    }
    else if(filtro === "accesorios"){
        productosFiltrados = productos.filter(producto => producto.categoria === "accesorios")
        alert(verProductos(productosFiltrados))
    }
    else{
        alert("categoria incorrecta")
    }
}

// Agregar producto al carrito

function añadirCarrito(){
    let idproducto = Number(prompt("seleccione ID del producto para añadirlo al carrito"))
    let productoElegido = productos.find(producto => producto.id === idproducto)
    if(productoElegido){
        carrito.push(productoElegido)
        alert(productoElegido.nombre + " " + "Agregado al carrito")
    }
    else{
        alert("el producto seleccionado no existe")
    }
}

// ver el carrito

function verCarrito(){
    alert(verProductos(carrito))
}

// sumar total y finalizar compra

function realizarCompra(){
    let total = carrito.reduce((acumulador, carrito) => acumulador + carrito.precio, 0)
    alert("Precio total a pagar:" + " " + "$" + total + " " + "Gracias por su compra.")
}

let menuInicio


do{
    menuInicio = Number(prompt("Bienvenido a la tienda Metal Zone\n1 - Ver lista de productos\n2 - Filtrar por categoría\n3 - Agregar al carrito\n4 - Ver carrito\n5 - Finalizar compra\n0 - Salir"))

    if(menuInicio === 1){
    alert(verProductos(productos))
    }
    else if(menuInicio === 2){
        filtrar(productosFiltrados)
    }
    else if(menuInicio === 3){
        añadirCarrito()
    }
    else if(menuInicio === 4){
        verCarrito()
    }
    else if(menuInicio === 5){
        realizarCompra()
        break
    }
    else if(menuInicio === 0){
        break
    }
    else{
        alert("opcion incorrecta")
    }
}while (menuInicio !== 0)

