function calculartiempo(){
/*variable*/ let tiempo = new Date(); 
let hora = tiempo.getHours();
let minutos = tiempo.getMinutes();
let segundos = tiempo.getSeconds();


/*establecemos y reasignamos valores a las variables hora, minuto y segundo*/

hora = hora < 10 ? "0" + hora : hora;
minutos = minutos < 10 ? "0" + minutos : minutos;
segundos = segundos < 10 ? "0" + segundos : segundos; /*si los segundos es inferior a 10 por favor poner un 0 al lado izquierdo*/

let pantallaReloj = hora + ":" + minutos + ":" + segundos; /*se sepra con puntos para que se vean cercano a un reloj digital*/
let relojDigital = document.querySelector(".reloj");
relojDigital.innerHTML = pantallaReloj; /*informacion sea enviada a la pantalla del reloj*/

}

setInterval(calculartiempo, 100); /*llamamos la funcion calcular tiempo metodo setInterval se actualice cada 1mil milisegundos 1segundo*/ 









/*date representan en javascript captura la hora que tenga localmente el sistema*/
/*3 metodos de javascript para obtener por separado la hora getHours, los minutos getMinutes y los segundos getSeconds*/
/*propiedad innerhtml puedo establecer la sintaxis de html para poder insertar el reloj*/ 