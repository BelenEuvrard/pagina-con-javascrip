
alert('Bienvenido');
let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
alert(`Hola ${nombre} usted fue registrado exitosamente,¡empecemos a gestionar su economia familiar!`);
let ingresos = Number (prompt('Registre su ingreso Familiar mensual'));


function resta (num1,num2,num3){
    
return  num1 - num2 - num3;
    
}

if (ingresos >= 1 ){
    let servicios = Number ( prompt('Registre sus gastos por servicios-luz-agua-gas'));
    let alimentos = Number (prompt('Registre sus gastos por Alimentos'));
    let resultado = resta(ingresos,servicios,alimentos);
    alert(`le quedan ${resultado} para gastar`)
}

