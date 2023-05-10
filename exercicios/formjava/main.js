const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')

console.log(num1.value);
console.log(num2.value);

addEventListener('submit', function(e){

    if(num1 > num2){
        return alert("Primeiro é maior");
    }else if(num2 > num1){
        return alert("Segundo é maior");
    }else{
        return alert("São iguais")
    }
})