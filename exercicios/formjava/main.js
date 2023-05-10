const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')

console.log(num1.value);
console.log(num2.value);

addEventListener('submit', function(e){

<<<<<<< HEAD
=======
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);

>>>>>>> 79c8b9a6152863c100d2d56cb0ca7e84e7352dd7
    if(num1 > num2){
        alert("Primeiro é maior");
    }else if(num2 > num1){
<<<<<<< HEAD
        return alert("Segundo é maior");
    }else{
        return alert("São iguais")
=======
        alert("Segundo é maior");
>>>>>>> 79c8b9a6152863c100d2d56cb0ca7e84e7352dd7
    }
})