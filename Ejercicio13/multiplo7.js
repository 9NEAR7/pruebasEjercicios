document.getElementById("boton").onclick=multiplosiete;

function multiplosiete(){
    for (i = 1; i < 16; i++){
        var resultado = 7 * i;
        
        
        var resultado2 = resultado;
        var suma = resultado + resultado2;
        var multi = resultado2 * resultado;

        alert("multiplo: " + resultado+ " Suma: " + suma +"Multiplicacion:" +  multi);
        
    }

}