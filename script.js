var ingredientes_opcion1 = ['Leche Entera', 'Jarabe', 'Hielo', 'Salsa de Chocolate', 'Chips de Chocolate', 'Polvo de Cacao',];

var ingredientes_opcion2 = ['Leche Entera', 'Jarabe', 'Hielo', 'Salsa de Chocolate', 'Cobertura de Caramelo', 'Crema Batida',];

var ingredientes_opcion3 = ['Leche', 'Jarabe', 'Hielo', 'Salsa de Frutilla', 'Trozos de Frutilla', 'Crema Batida',];

var ingredientes_opcion4 = ['Leche', 'Jarabe', 'Hielo', 'Salsa Verde', 'Coberturas Especiales', 'Hojas de Te Verde',];

function cargar(opcion){
    var nombre = document.getElementById("nombre");
    var descripcion = document.getElementById("descripcion");
    var fotoPrincipal = document.getElementById("fotoPrincipal");
    var circulo = document.getElementById("circulo");
    var ingredientes = document.getElementById("ingredientes")

    if(opcion==1){
        nombre.innerHTML = "Frappe de Chocolate"
        descripcion.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi ullam magni tempora nulla, fugit velit error ipsa dignissimos odio ab iure nesciunt beatae quidem autem."
        fotoPrincipal.src = "img/f1.png"
        circulo.style.backgroundColor = "#9b4f0f"; 
        ingredientes.innerHTML = "" ;
        
        for(x=0; x < ingredientes_opcion1.length; x++){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion1[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }

    if(opcion==2){
        nombre.innerHTML = "Frappe de Vainilla"
        descripcion.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi ullam magni tempora nulla, fugit velit error ipsa dignissimos odio ab iure nesciunt beatae quidem autem."
        fotoPrincipal.src = "img/f2.png"
        circulo.style.backgroundColor = "#f1c072"; 
        ingredientes.innerHTML = "" ;
        
        for(x=0; x < ingredientes_opcion2.length; x++){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion2[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==3){
        nombre.innerHTML = "Frappe de Frutilla"
        descripcion.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi ullam magni tempora nulla, fugit velit error ipsa dignissimos odio ab iure nesciunt beatae quidem autem."
        fotoPrincipal.src = "img/f3.png"
        circulo.style.backgroundColor = "#d46475"; 
        ingredientes.innerHTML = "" ;
        
        for(x=0; x < ingredientes_opcion3.length; x++){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion3[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==4){
        nombre.innerHTML = "Frappe de Te Verde"
        descripcion.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi ullam magni tempora nulla, fugit velit error ipsa dignissimos odio ab iure nesciunt beatae quidem autem."
        fotoPrincipal.src = "img/f4.png"
        circulo.style.backgroundColor = "#398969"; 
        ingredientes.innerHTML = "" ;
        
        for(x=0; x < ingredientes_opcion4.length; x++){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion4[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
}