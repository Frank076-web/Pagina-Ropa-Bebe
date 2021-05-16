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
];
const $header = document.getElementById("header");
const $main = document.createElement("main");
$main.classList.add("contenedor", "productosgrid");
const $fragmentProductos = document.createDocumentFragment();

$imagenesProductos.forEach((el) => {
  const $productoZapatillitas = document.createElement("div");

  const $parrafo = document.createElement("p");
  $parrafo.classList.add("productos__descripcion");
  $parrafo.textContent = el.productosDescripcion;

  const $cajaImagen = document.createElement("div");
  $cajaImagen.classList.add("productos__imagen");
  const $imagen = document.createElement("img");
  $imagen.src = el.img;
  $cajaImagen.appendChild($imagen);

  const $precio = document.createElement("p");
  $precio.classList.add("productos__precio");
  const $spanPrecio = document.createElement("span");
  $spanPrecio.classList.add("productos__precio-precio");
  $spanPrecio.textContent = el.precio;
  $precio.appendChild($spanPrecio);

  $productoZapatillitas.appendChild($parrafo);
  $productoZapatillitas.appendChild($cajaImagen);
  $productoZapatillitas.appendChild($precio);

  $fragmentProductos.appendChild($productoZapatillitas);
});

$main.appendChild($fragmentProductos);
$header.insertAdjacentElement("afterend", $main);
