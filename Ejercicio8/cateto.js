document.getElementById("boton").onclick=calculoCateto;

function calculoCateto(){
    var hipotenusa = parseFloat(document.getElementById("hipotenusa").value);
    var cateto = parseFloat(document.getElementById("cateto").value);
    
    if(hipotenusa > 0 && hipotenusa > cateto){
        
        catetopu=((hipotenusa*hipotenusa)-(cateto*cateto));
        alert("El valor del cateto faltante es "+Math.sqrt(catetopu).toFixed(4));

        window.location.reload();

    }
    else{
        alert("Error: Datos incorrectos \n La hipotenusa es menor que el cateto");
        window.location.reload();
    }

    



}