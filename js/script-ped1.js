// Seleccionar elementos por su id
const parrafo = document.getElementById('p1');
const boton = document.getElementById('btn-cambio');
const boton1 = document.getElementById('btn-calculando');
const out3 = document.getElementById('out3');
const out4 = document.getElementById('out4');
const out5 = document.getElementById('out5');

// Agregar un evento al botón para manipular el texto
boton.addEventListener("click", () => {
    parrafo.innerHTML = "Procesando Pedido";
    for(let i = 0; i < 3; i++){
        span = document.createElement("span");
        span.innerHTML = " . ";
        span.style.color = "blue";
        span.style.fontSize = "30px";
        span.style.fontWeight = "bold";
        span.classList.add("dot");
        parrafo.appendChild(span);
    }
    
    parrafo.style.color = "blue";
    parrafo.style.fontSize = "30px";
    parrafo.style.fontWeight = "bold";
});

boton1.addEventListener("click", () => {
    const price = 75;
    
    // Obtener cantidad de hamburguesas
    let bichis = parseFloat(document.getElementById("cantHam").value);
    let pricebichis = 0;
    pricebichis = bichis * price;
    
    // Seleccionar elementos de complementos y bebidas
    const ranchi = document.getElementById('ran');
    const bbqi = document.getElementById('bbq');
    const bebida1 = document.getElementById('pep');
    const bebida2 = document.getElementById('coc');
    let bichiimg = "../img/hamburguesa.png";
    let pepsi_img = "../img/pepsi.png";
    let cocacola_img = "../img/coca.png";
    let ranch_img = "../img/ranch.webp";
    let bbq_img = "../img/bbq.webp";
    
    let contenerdor_img = document.getElementById('hamburguesas');
    let contenerdor_img2 = document.getElementById('drinkis');
    let contenerdor_img3 = document.getElementById('complementos');
    contenerdor_img.innerHTML = "";
    contenerdor_img2.innerHTML = "";
    contenerdor_img3.innerHTML = "";
    for (let i = 0; i < bichis; i++) {
        let img = document.createElement("img");
        img.src = bichiimg;
        img.style.position = "relative";
        img.style.top = "-150px";
        img.style.filter = "drop-shadow(0px 0px 10px #CAD392)";
        img.style.transform = "scale(0.5)";
        img.style.margin = "-240px";
        img.classList.add("fade");
        contenerdor_img.appendChild(img);
    }

    if(bebida1.checked){ 
        pricebichis = pricebichis + 20; 
        let img = document.createElement("img");
        img.src = pepsi_img;
        img.style.margin = "-500px";
        img.style.filter = "drop-shadow(0px 0px 40px rgb(68, 98, 233))";
        img.style.transform = "scale(0.2)";
        img.classList.add("fade");
        contenerdor_img2.appendChild(img);
    }
    if(bebida2.checked){ 
        pricebichis = pricebichis + 20; 
        let img = document.createElement("img");
        img.src = cocacola_img;
        img.style.position = "relative";
        img.style.margin = "-400px";
        img.style.right = "-200px";
        img.style.filter = "drop-shadow(0px 0px 30px rgb(233, 68, 68))";
        img.style.transform = "scale(0.3)";
        img.classList.add("fade");
        contenerdor_img2.appendChild(img);
    }

    // Calcular precio con complementos
    if(ranchi.checked){ pricebichis = pricebichis + 10; 
        let img = document.createElement("img");
        img.src = ranch_img;
        img.style.margin = "-270px";
        img.style.marginInline = "-600px";
        img.style.filter = "drop-shadow(0px 0px 30px rgb(250, 215, 215))";
        img.style.transform = "scale(0.3)";
        img.classList.add("fade");
        contenerdor_img3.appendChild(img);
    }
    if(bbqi.checked){ pricebichis = pricebichis + 10;
        let img = document.createElement("img");
        img.src = bbq_img;
        img.style.marginInline = "-20px";
        img.style.filter = "drop-shadow(0px 0px 30px rgb(68, 46, 16))";
        img.style.transform = "scale(0.7)";
        img.classList.add("fade");
        contenerdor_img3.appendChild(img);
     }
    
    // Mostrar el precio total
    out3.value = pricebichis;
    
    // Determinar tipo de pago y método de recolección
    if (pricebichis <= 500) {
        out4.value = "Efectivo";
        out5.value = "Recoger en Tienda";
    } else {
        out4.value = "Tarjeta";
        out5.value = "Pedido enviado";
    }
});