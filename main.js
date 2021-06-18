
alert('Bienvenido');
let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
alert(`Hola ${nombre} usted fue registrado exitosamente,¡empecemos a gestionar su economia familiar!`);
let ingresos = Number (prompt('Registre su ingreso Familiar mensual'));


function resta (num1,num2,num3,num4){
    
return  num1 - num2 - num3 - num4;
    
}

if (ingresos >= 1 ){
    let agua = Number ( prompt('Registre su gasto de agua'));
    let luz = Number ( prompt('Registre su gasto de luz'));
    let gas = Number ( prompt('Registre su gasto de gas'));
  
    let resultado = resta(ingresos,agua,luz,gas);
    alert(`le quedan ${resultado} para gastar`)
}

// desafio de arrays y objetos

class servicio {
    constructor(nombre,valor){
        this.nombre = nombre;
        this.valor =valor;

    }
}

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


