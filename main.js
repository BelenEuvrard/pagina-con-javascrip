
alert('Bienvenido');
let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
alert(`Hola ${nombre + ' ' + apellido} usted fue registrado exitosamente,¡empecemos a gestionar su economia familiar!`);
let ingresos = parseFloat (prompt('Registre su ingreso Familiar mensual'));

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

















































//pruebas
/*
class servicio {
    constructor(nombre,valor){
        this.nombre = nombre;
        this.valor =valor;

    }
}
let resultado = array.reduce( (a,b) => a+b , 0 )
const servicios = [];
const servicio1 = new servicio("agua",1500);
const servicio2 = new servicio("luz",4600);
const servicio3 = new servicio("gas",2500);
servicios.push(servicio1);
servicios.push(servicio2);
servicios.push(servicio3);

console.log(servicios)

console.log(servicio1)
console.log(servicio2)
console.log(servicio3)
*/