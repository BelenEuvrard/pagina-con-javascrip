
alert('Bienvenido');
let nombre = prompt('Ingrese su nombre');
localStorage.setItem('Nombre', nombre);
let apellido = prompt('Ingrese su apellido');
localStorage.setItem('Apellido', apellido);
//alert(`Hola ${nombre + ' ' + apellido} usted fue registrado exitosamente,¡empecemos a gestionar su economia familiar!`);
//let ingresos = parseFloat (prompt('Registre su ingreso Familiar mensual'));
//localStorage.setItem('IngresoFamiliar', ingresos);


// DESAFIO CLASE 7 Y 8
let saludo = document.getElementById("saludo");
let parrafo = document.createElement("p");
parrafo.innerHTML = `Hola ${nombre + ' ' + apellido} usted fue registrado exitosamente,¡empecemos a gestionar su economia familiar!`;
saludo.appendChild(parrafo);




/*

class Ingreso {
    constructor(ingresoFamiliar){

    this.ingresoFamiliar = ingresoFamiliar;

   }
}

class Servicio {
    constructor(servicioApagar,importeServicio){
        this.servicioApagar = servicioApagar;
        this.importeServicio = importeServicio;

    }
}

class EventosDelUsuario {

    agregarIngreso(ingreso){
        const litsingreso = document.getElementById("ingresoServicio");
        const elementIngreso =document.createElement("div");
        elementIngreso.innerHTML = 
        `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Ingreso Familiar</strong>: ${ingreso} -
                
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
    `;
             litsingreso.appendChild(elementIngreso);

    }

    agregarServicio(){

    }

    resetearFormulario(){

    }

    eliminarIngreso(){

    }

    eliminarServicio(){

    }
    mensajeServicio(){

    }

}

 
//DOM Eventos
document.getElementById("form-servicios" )
        .addEventListener("submit", function(e) { 
            const ingresoFamiliar = document.getElementById("ingresoFamiliar").value;
            const servicioApagar = document.getElementById("inputGroupSelect04").value;
            const importeServicio = document.getElementById("importeServicio").value; 

            console.log(ingresoFamiliar,servicioApagar,importeServicio)

            const ingreso = new Ingreso(ingresoFamiliar);
            const servicio = new Servicio(servicioApagar,importeServicio);
            console.log(servicio,ingreso)

            const evento = new EventosDelUsuario();
            evento.agregarIngreso(ingreso)

            e.preventDefault();
        
        
        }) ;   
     
      
      

      
  

function resta (num1,num2){
    
    return  num1 - num2;
        
    }
   

if (ingresos >= 1 ){

    let swap = true
    while(swap) {
        let agua = parseFloat ( prompt('Registre su gasto de agua'));
                   let resultado1 = resta(ingresos,agua);   
        let luz = parseFloat ( prompt('Registre su gasto de luz'));
                  let resultado2 = resta(resultado1,luz); 
        let gas = parseFloat ( prompt('Registre su gasto de gas'));
                  let resultadoFinal= resta(resultado2,gas); 
       
        alert(`le quedan ${resultadoFinal} para gastar`)
      
      swap = false;
    }
        
} else {alert('ingrese nuevamente sus datos')}


const servicios = [];

const servicio1 = new Servicio("agua",1500);
const servicio2 = new Servicio("luz",4600);
const servicio3 = new Servicio("gas",2500);
servicios.push(servicio1);
servicios.push(servicio2);
servicios.push(servicio3);

console.log(servicios)

console.log(servicio1)
console.log(servicio2)
console.log(servicio3)

localStorage.setItem('serviciosIngresados',JSON.stringify(servicios));


*/














































