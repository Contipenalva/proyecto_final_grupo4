const divCards = document.getElementById("cardsFakeStore");
const divImgPrincipal = document.getElementById("idImg");
const inputSearch = document.getElementById("idInputSearch");
let productos = JSON.parse(localStorage.getItem("products"));

// Comprueba si ya tienes productos en el localStorage, si no, guárdalos.
if (!productos) {
  productos = [
    {
      id: 1,
      title: "Estadía 1",
      price: 990,
      category: "San Isidro, Buenos Aires",
      description: "San Isidro se caracteriza por el compromiso social, el deporte, la historia, la vida al aire libre, la fe.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDkx9VP6TIGiIv7g-5rjIypy3qeO8De85ORYqiUdINIeqmPY0shLP0McDyVpSF8thy50&usqp=CAU",
    },
    {
      id: 2,
      title: "Estadía 2",
      price: 37,
      category: "Tafí del Valle, Tucumán",
      description: "Encontrará muchísimas opciones a la hora de programar su visita: caminar o cabalgar entre sus cerros, practicar kayak, etc.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQ6zRtElMMwI4GR47HK-EhZbMxe37q87S0FLEZozdQSkBe-OMuMKz5gCDngrLkOOmKTY&usqp=CAU",
    },
    {
      id: 3,
      title: "Estadia 3",
      price: 23,
      category: "San Carlos de Bariloche, Río Negro",
      description: "Está ubicada hacia el lado occidental de la provincia de Río Negro. Es una de las ciudades argentinas más poblada de los Andes Patagónicos.",
      image: "https://static.tokkobroker.com/pictures/45651081786401216392697033895107653003437209107654971220572730198010128769680.jpg",
    },
    {
      id: 4,
      title: "Estadia 4",
      price: 25,
      category: "Villa Carlos Paz, Córdoba",
      description: "La ciudad ocupa una superficie de 2680 hectáreas. Su altitud es de unos 666 metros sobre el nivel del mar.",
      image: "https://a0.muscache.com/im/pictures/e2e192f5-9632-4288-8163-95b4b7c9fb5e.jpg",
    },
   
  ];
  // Guarda tus productos en el localStorage.
  localStorage.setItem("products", JSON.stringify(productos));
}

// Usa tus productos en lugar de los productos de la API.
divCards.innerHTML = productos
  .map(
    (product) =>
      `
       <div class="col-12 col-md-6 col-lg-3 my-3">
          <div class="card">
            <img
              src="${product.image}"
              class="card-img-top class-img"
              alt="..."
              style="object-fit: cover; height: 200px;" <!-- Ajusta la altura de la imagen como desees -->
            
            <div class="card-body d-flex flex-column">
              <h5 class="card-title card-title-ellipse">${product.title}</h5>
              <p class="card-text card-p-ellipse">${product.description}</p>
              <a href="../product.html?id=${product.id}" class="btn  btncard mt-auto botonGoClass">Ver Más</a>
            </div>
          </div>
        </div>
       `
  )
  .join("");
