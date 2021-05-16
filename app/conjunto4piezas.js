const $imagenesProductos = [
  {
    img: "../Imagenes/Imagenes-de-conjuntos/conjunto-de-algodon-de-4-piezas/conjunto4piezas1.webp",
    productosDescripcion: "Color: Fucsia",
    precio: "Precio: $900",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/conjunto-de-algodon-de-4-piezas/conjunto4piezas2.webp",
    productosDescripcion: "Color: Rosa",
    precio: "Precio: $900",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/conjunto-de-algodon-de-4-piezas/conjunto4piezas3.webp",
    productosDescripcion: "Color: Gris",
    precio: "Precio: $900",
  },
  {
    img: "../Imagenes/Imagenes-de-conjuntos/conjunto-de-algodon-de-4-piezas/conjunto4piezas4.webp",
    productosDescripcion: "Color: Celeste",
    precio: "Precio: $900",
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
