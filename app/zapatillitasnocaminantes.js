const $imagenesProductos = [
  {
    img: "../Imagenes/Imagenes-de-conjuntos/zapatillitas-no-caminantes/zapatillitas1.webp",
    productosDescripcion: "Color: Rosa Bebe",
    precio: "Precio: $600",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/zapatillitas-no-caminantes/zapatillitas2.webp",
    productosDescripcion: "Color: Camufladas",
    precio: "Precio: $600",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/zapatillitas-no-caminantes/zapatillitas3.webp",
    productosDescripcion: "Color: Azul marino",
    precio: "Precio: $600",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/zapatillitas-no-caminantes/zapatillitas4.webp",
    productosDescripcion: "Color: Blanco con cerezas",
    precio: "Precio: $600",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/zapatillitas-no-caminantes/zapatillitas5.webp",
    productosDescripcion: "Color: Camufladas azules",
    precio: "Precio: $600",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/zapatillitas-no-caminantes/zapatillitas6.webp",
    productosDescripcion: "Color: Azules con flamencos",
    precio: "Precio: $600",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/zapatillitas-no-caminantes/zapatillitas7.webp",
    productosDescripcion: "Color: Negras",
    precio: "Precio: $600",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/zapatillitas-no-caminantes/zapatillitas8.webp",
    productosDescripcion: "Color: Blancas",
    precio: "Precio: $600",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/zapatillitas-no-caminantes/zapatillitas9.webp",
    productosDescripcion: "Color: Rojas",
    precio: "Precio: $600",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/zapatillitas-no-caminantes/zapatillitas10.webp",
    productosDescripcion: "Color: Rosas",
    precio: "Precio: $600",
  },
];
const $header = document.getElementById("header");
const $main = document.createElement("main");
$main.classList.add("contenedor", "productosgrid");
const $fragmentProductos = document.createDocumentFragment();

$imagenesProductos.forEach((el) => {
  // creo el div que contiene a los elementos del producto
  const $productoZapatillitas = document.createElement("div");
  // primer parrafo
  const $parrafo = document.createElement("p");
  $parrafo.classList.add("productos__descripcion");
  $parrafo.textContent = el.productosDescripcion;
  // contenedor de imagen e imagen
  const $cajaImagen = document.createElement("div");
  $cajaImagen.classList.add("productos__imagen");
  const $imagen = document.createElement("img");
  $imagen.src = el.img;
  $cajaImagen.appendChild($imagen);
  // parrafo con el precio
  const $precio = document.createElement("p");
  $precio.classList.add("productos__precio");
  const $spanPrecio = document.createElement("span");
  $spanPrecio.classList.add("productos__precio-precio");
  $spanPrecio.textContent = el.precio;
  $precio.appendChild($spanPrecio);
  // inserto al contenedor de todos los elementos del producto todos sus elementos
  $productoZapatillitas.appendChild($parrafo);
  $productoZapatillitas.appendChild($cajaImagen);
  $productoZapatillitas.appendChild($precio);
  // Inserto cada producto en el fragmento
  $fragmentProductos.appendChild($productoZapatillitas);
});
// inserto en HTML despues del header
$main.appendChild($fragmentProductos);
$header.insertAdjacentElement("afterend", $main);
