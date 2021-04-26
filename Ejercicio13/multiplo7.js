document.getElementById("boton").onclick=multiplosiete;

function multiplosiete(){
    var multiplos = [];
    var suma = 0;
    var multi = 1;

    for (i = 1; i < 16; i++){
        var resultado = 7 * i;
        multiplos.push(resultado);       
    }

    for (j=0;j<multiplos.length;j++){
        suma += multiplos[j];
    }

    for (k=0;k<multiplos.length;k++){
        multi *= multiplos[k];
    }

    alert("Primeros 15 múltiplos de 7: " + multiplos + "\n" +
    "Suma de los múltiplos: " + suma + "\n" + 
    "La multiplicación de estos números es: " + multi.toFixed(5) );

}