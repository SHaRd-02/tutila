// Estructura de datos para las recetas

const recipes = {
    "Mega Burger": {
      image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg", // Imagen específica para Mega Burger
      steps: [
        {
          action: "cortar",
          description: "Corta el pan de hamburguesa por la mitad.",
          image: "https://d2t88cihvgacbj.cloudfront.net/manage/wp-content/uploads/2020/05/Sourdough-Hamburger-Buns-3.jpg?x29814"
        },
        {
          action: "untar",
          description: "Unta mayonesa en la base del pan.",
          image: "https://www.seriouseats.com/thmb/AGCa7Jvg2iytUFUjvzpHVGif8cU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240625-CaesarMayo-AmandaSuarez-hero-045d48ad4d634082b003f13776b3b375.jpg"
        },
        {
          action: "cocinar",
          description: "Cocina la carne de la hamburguesa en una sartén.",
          image: "https://cdn.apartmenttherapy.info/image/upload/v1558424360/k/archive/f7b6035d6bb48b3ddc98edaaf69efea9f5bf88a3.jpg"
        }
      ]
    },
    
    // Agrega más recetas según sea necesario

    "Bagel pollo": {
        image: "https://dairyfarmersofcanada.ca/sites/default/files/image_file_browser/conso_recipe/2021/CHEESY%20FRIED%20CHICKEN%20BAGEL%20SANDWICH.jpg",
        steps: [
            {
                action: "cortar",
                description : "Corta el pan de bagel por la mitad.",
                image: "https://www.tastingtable.com/img/gallery/butterfly-cut-your-next-bagel-for-optimal-sharing/l-intro-1690919994.jpg",

            },

            {
                action: "untar",
                description: "Unta mayonesa en la base del pan.",
                image: "https://www.seriouseats.com/thmb/AGCa7Jvg2iytUFUjvzpHVGif8cU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240625-CaesarMayo-AmandaSuarez-hero-045d48ad4d634082b003f13776b3b375.jpg"
            },

            {
                action: "prender",
                description: "Prender la parilla a maxima potencia",
                image: "https://i.ytimg.com/vi/Q9jfFuhtjAE/maxresdefault.jpg"
            },

            {
                action: "cocinar",
                description: "Cocinar el pollo con chipotle arriba",
                image: "https://www.allrecipes.com/thmb/20oHyMihsHIjkJ9PS5PWDP0db60=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16160-juicy-grilled-chicken-breasts-ddmfs-5566-04-3x4-270ab4d4e6a543de85ba54f6dc247147.jpg"
            }
        ]
    },

    "Ciabatta pollo": {
        image: "img/ciabattaPolloPesto.jpeg",
        steps: [
            {
                action: "cortar",
                description: "Cortar el pan de ciatta por la mitad",
                image: "https://d2t88cihvgacbj.cloudfront.net/manage/wp-content/uploads/2020/05/Sourdough-Hamburger-Buns-3.jpg?x29814",

            },

            {
                action: "prender",
                description: "Prender la parrila a maxima temperatura",
                image: "https://i.ytimg.com/vi/Q9jfFuhtjAE/maxresdefault.jpg",
            }, 

            {
                action: "untar",
                description: "Unta mayonesa en la base y la tapa del pan.",
                image: "https://www.seriouseats.com/thmb/AGCa7Jvg2iytUFUjvzpHVGif8cU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240625-CaesarMayo-AmandaSuarez-hero-045d48ad4d634082b003f13776b3b375.jpg"
            },

            {
                action: "calentar-parrilla",
                description: "calentar el pan y el pollo en la parilla",
                image: "https://www.allrecipes.com/thmb/20oHyMihsHIjkJ9PS5PWDP0db60=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16160-juicy-grilled-chicken-breasts-ddmfs-5566-04-3x4-270ab4d4e6a543de85ba54f6dc247147.jpg"
            },

            
        ]
    }
  };
  
  // Función para generar el menú
  function generateMenu() {
    const menu = document.getElementById("main-menu");
  
    Object.keys(recipes).forEach(recipeName => {
      const recipe = recipes[recipeName];
      
      const div = document.createElement("div");
      div.classList.add("menu-item");
  
      const img = document.createElement("img");
      img.classList.add("menu-item-img");
      img.src = recipe.image; // Usa la imagen específica de la receta
      img.alt = recipeName;
  
      const h2 = document.createElement("h2");
      h2.textContent = recipeName;
  
      div.appendChild(img);
      div.appendChild(h2);
  
      // Agrega la acción de abrir el modal
      div.onclick = () => openModal(recipeName);
  
      menu.appendChild(div);
    });
  };
  
  // Función para generar los modales
  function generateModals() {
    const modalsContainer = document.getElementById("modals-container");
  
    Object.keys(recipes).forEach(recipeName => {
      const recipe = recipes[recipeName];
      const dialog = document.createElement("dialog");
      dialog.id = `${recipeName}-modal`;
  
      const closeBtn = document.createElement("button");
      closeBtn.classList.add("close");
      closeBtn.textContent = "Cerrar";
      closeBtn.onclick = () => dialog.close();
  
      const stepsContainer = document.createElement("div");
      stepsContainer.classList.add("steps-container");
  
      recipe.steps.forEach((step, index) => {
        const stepDiv = document.createElement("div");
        stepDiv.classList.add("step", step.action);
  
        const stepNumber = document.createElement("div");
        stepNumber.classList.add("step-number");
        stepNumber.textContent = index + 1;
  
        const stepImg = document.createElement("img");
        stepImg.src = step.image;
        stepImg.classList.add('step-img');
        stepImg.alt = `Paso ${index + 1}`;
  
        const stepDescription = document.createElement("div");
        stepDescription.classList.add("step-description");
        stepDescription.textContent = step.description;
  
        stepDiv.appendChild(stepNumber);
        stepDiv.appendChild(stepImg);
        stepDiv.appendChild(stepDescription);
  
        stepsContainer.appendChild(stepDiv);
      });
  
      dialog.appendChild(stepsContainer);
      dialog.appendChild(closeBtn);
      modalsContainer.appendChild(dialog);
    });
  }
  
  // Función para abrir el modal correspondiente
  function openModal(recipeName) {
    const dialog = document.getElementById(`${recipeName}-modal`);
    dialog.showModal();
  }
  
  // Llamamos a las funciones de generación del menú y los modales
  window.onload = () => {
    generateMenu();
    generateModals();
  };