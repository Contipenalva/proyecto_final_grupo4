const    productos = [
  {
    id: 1,
    title: "San Isidro, Buenos Aires.",
    price: 990,
    category: "San Isidro, Buenos Aires",
    description: "San Isidro se caracteriza por el compromiso social, el deporte, la historia, la vida al aire libre, la fe.",
    image: "assets/images/san-isidro.webp",
   
  },
  {
    id: 2,
    title: "Tafí del Valle, Tucumán",
    price: 37,
    category: "Tafí del Valle, Tucumán",
    description: "Encontrará muchísimas opciones a la hora de programar su visita: caminar o cabalgar entre sus cerros, practicar kayak, etc.",
    image: "assets/images/tafi-del-valle.webp",
  },
  {
    id: 3,
    title: "San Carlos de Bariloche",
    price: 23,
    category: "San Carlos de Bariloche, Río Negro",
    description: "Está ubicada hacia el lado occidental de la provincia de Río Negro. Es una de las ciudades argentinas más poblada de los Andes Patagónicos.",
    image: "assets/images/bariloche.webp",
  },
  {
    id: 4,
    title: "Villa Carlos Paz, Córdoba",
    price: 25,
    category: "Villa Carlos Paz, Córdoba",
    description: "La ciudad ocupa una superficie de 2680 hectáreas. Su altitud es de unos 666 metros sobre el nivel del mar.",
    image: "assets/images/villa-carlos-paz.webp",
  },
  // Agrega más destinos turísticos si es necesario
];
  
  

localStorage.setItem("products", JSON.stringify(productos));

