document.getElementById("boton").onclick=menuareas;

function areatri(){
    var base = parseFloat(prompt("Ingresa la base del triángulo: "));
    var altura = parseFloat(prompt("Ingrese el valor de la altura: "));

    var calculoarea = (base * altura)/2

    alert("Base: " + base + "\n" +
        "Altura: "+ altura + "\n" +
        "El área es: " + calculoarea);

        window.location.reload();


}

function arearec(){
    var base = parseFloat(prompt("Ingresa la base del rectángulo: "));
    var altura = parseFloat(prompt("Ingrese el valor de la altura: "));

    calculoarea = base * altura;

    alert("Base: " + base + "\n" +
    "Altura: "+ altura + "\n" +
    "El área es: " + calculoarea);

    window.location.reload();


}

function areacirculo(){
    var radio = parseFloat(prompt("Ingresa el radio del círculo:  "));

    var areacir = Math.PI * Math.pow(radio,2);

    alert("Radio del círculo: " + radio + "\n" +
            "Área: " + areacir.toFixed(4));

     window.location.reload();

    

}

function menuareas(){
    var opcion = parseInt(prompt("Ingresa el numero de la opción a elegir (1), (2) ó (3) "));

    switch (opcion){
        case 1:
            areatri();
            break;
        case 2:
            arearec();
            break;
        case 3:
            areacirculo();
            break;
        
        default:
            alert("Error: Opción invalida, intente de nuevo con otra opción ");
            window.location.reload();

    }
}

