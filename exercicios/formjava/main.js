addEventListener('submit', function(e){

    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);

    if(num1 > num2){
        alert("Primeiro é maior");
    }else if(num2 > num1){
        alert("Segundo é maior");
    }
})