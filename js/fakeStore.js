const divCards = document.getElementById("cardsFakeStore");
const divImgPrincipal = document.getElementById("idImg");
const inputSearch = document.getElementById("idInputSearch");
let productos = JSON.parse(localStorage.getItem("products"));

// Comprueba si ya tienes productos en el localStorage, si no, guárdalos.
if (!productos) {
  productos = [
    {
      id: 1,
      title: "San Isidro, Buenos Aires",
      price: 990,
      category: "San Isidro, Buenos Aires",
      description: "San Isidro se caracteriza por el compromiso social, el deporte, la historia, la vida al aire libre, la fe.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-1003005941661583336/original/7d553d98-52d1-4072-ac1a-b37664a9abac.jpeg?im_w=1440",
    },
    {
      id: 2,
      title: "Tafí del Valle, Tucumán",
      price: 37,
      category: "Tafí del Valle, Tucumán",
      description: "Encontrará muchísimas opciones a la hora de programar su visita: caminar o cabalgar entre sus cerros, practicar kayak, etc.",
      image: "https://a0.muscache.com/im/pictures/e81046dc-55da-4d30-8cb3-773d9705982c.jpg?im_w=1440",
    },
    {
      id: 3,
      title: "San Carlos de Bariloche, Río Negro",
      price: 23,
      category: "San Carlos de Bariloche, Río Negro",
      description: "Está ubicada hacia el lado occidental de la provincia de Río Negro. Es una de las ciudades argentinas más poblada de los Andes Patagónicos.",
      image: "https://a0.muscache.com/im/pictures/edf3db5e-625c-406b-8b64-127089de77a5.jpg?im_w=1440",
    },
    {
      id: 4,
      title: "Villa Carlos Paz, Córdoba",
      price: 25,
      category: "Villa Carlos Paz, Córdoba",
      description: "La ciudad ocupa una superficie de 2680 hectáreas. Su altitud es de unos 666 metros sobre el nivel del mar.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-786919289623289923/original/aee3e62e-563f-4d03-bb00-c5c8bf77ee3c.jpeg?im_w=1200",
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
              style="object-fit: cover; height: 100px;"
             
          />
          <div class="card-body">
              <h3 class="card-title card-title-ellipse">${product.title}</h3>
              <p class="card-text card-p-ellipse">
              ${product.description}
              </p>
              <a href="../product.html?id=${product.id}" class="btn  btncard mt-auto botonGoClass " 
              >Ver Más</a
              >
          </div>
          </div>
    </div>
       `
  )
  .join("");