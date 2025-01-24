// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

// Se corrige el método getElementsByName por getElementById para que traiga el div del HTML ya que en el documento está especificado como atributo 'id' y no 'name'
const li = document.getElementById("lista-de-productos");
const $i = document.querySelector('.input');

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div");
  d.classList.add("producto");

  var ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti);
  d.appendChild(imagen);

  li.appendChild(d);
}

// La función displayProductos no existe y no es utilizada ya que su propósito se cumple con el onClick definido para botonDeFilro
// displayProductos(productos)

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  // Ya no es necesario imprimir en consola
  //console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  // Si no hay productos relacionados a la búsqueda, se notifica la situación
  if(productosFiltrados.length === 0) {
    li.insertAdjacentHTML('afterbegin', '<h3>No existen productos relacionados a tu búsqueda</h3>');
    return;
  }

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");
  
    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
  
    li.appendChild(d);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}