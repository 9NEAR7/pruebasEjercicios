document.getElementById("boton").onclick=tablavalor;

function tablavalor(){
    var valorA = parseFloat(document.getElementById("valora").value);
    var valorB = parseFloat(document.getElementById("valorb").value);
    var valorC = parseFloat(document.getElementById("valorc").value);
    var valorV = parseFloat(document.getElementById("valorv").value);
    

    for (i = valorV; i >= -valorV; i--){
        var y = ((valorA * Math.pow(i,2)) + (valorB * i) + valorC);
        alert("Tabla de valores para y = " + valorA + "x² + "+ valorB +"x + " + valorC + "\n" +
        "X = " + i + " Y = " + y);
        
    }

    


    window.location.reload();

    
}
