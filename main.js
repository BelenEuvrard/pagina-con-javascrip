
function myFunction(total, value) {
  return total + value;
}






 
//DOM Eventos

document.getElementById("form-registro")
        .addEventListener("submit", function(e) { 
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            localStorage.setItem('Nombre', nombre);
            const apellido = document.getElementById("apellido").value;
            localStorage.setItem('Apellido', apellido);
            const email = document.getElementById("email").value; 
            localStorage.setItem('Email', email);


            let saludo = document.getElementById("saludo");
            let parrafo = document.createElement("p");
            parrafo.innerHTML = 
            ` <p class="d-flex justify-content-center text-info"><strong> Hola ${nombre + ' ' + apellido} usted fue registrado exitosamente,
            ¡empecemos a gestionar su economia familiar!</strong></p>`;
            saludo.appendChild(parrafo);

            resetForm()

          }) ;


          

     




document.getElementById("form-servicios" )
        .addEventListener("submit", function(e) { 
            e.preventDefault();

            const ingresoFamiliar = document.getElementById("ingresoFamiliar").value;
            const servicioApagar = document.getElementById("inputGroupSelect04").value;
            const importeServicio = document.getElementById("importeServicio").value; 

            let saldo = parseFloat(ingresoFamiliar) - parseFloat(importeServicio);
          

            const nuevoServicio = new Servicio(importeServicio);
            const serviciosTotales = [];
            serviciosTotales.push(nuevoServicio);
            let suma = serviciosTotales.reduce(myFunction);
            //let saldo = parseFloat(ingresoFamiliar) - parseFloat(suma);
            localStorage.setItem('importeDeServiciosIngresados',JSON.stringify(serviciosTotales));
           
         

         
           

           
         

        

          UI(ingresoFamiliar);
          newServicio(servicioApagar,importeServicio); 
          resultado(saldo);
          resetForm();
          

    
        
        }) ;   
     
       




