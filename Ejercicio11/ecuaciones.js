document.getElementById("boton").onclick=calculoEcuaciones;

function calculoEcuaciones(){
    var opcion = parseInt(prompt("Ingresa el numero de la opcion (1) o (2): "));
    switch(opcion){
        case 1:
            var ax = parseFloat(prompt("Ingresa e valor de a: "));
            var bx = parseFloat(prompt("Ingresa el valor de b"))
            var resultado = -(bx/ax);
            alert("Resultado de la operacion:  x = 0 ," + resultado);
            window.location.reload();
            break;
        case 2:
            var axx = parseFloat(prompt("Ingresa el valor de a en la forma ax: "));
            var by = parseFloat(prompt("Ingresa el valor de b en la forma by: "));
            var c = parseFloat(prompt("Ingresa el valor de c: "));
            var dx = parseFloat(prompt("Ingresa el valor de d en la forma dx: "));
            var ey = parseFloat(prompt("Ingresa el valor de e en la forma ey: "));
            var f = parseFloat(prompt("Ingresa el valor de f: "));

            var x = ((c * ey)-(by * f))/((axx * ey)- (by * dx));
            var y = ((axx * f)-(dx * c))/((axx * ey)- (by * dx));

            

            alert(axx +"x"+ " + "+ by +"y"+ " = " + c + "\n" + dx +"x"+ " + "+ ey + "y"+" = "
             + f + "\n" + "El resultado es: \n X =  " + x + " \n Y = " + y);
            window.location.reload();



            
            break;
        default:
            alert("Numero incorrecto");
            window.location.reload();

    }


}