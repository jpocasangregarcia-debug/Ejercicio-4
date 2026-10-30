let contador = 0;

let botonSumar= document.getElementById("sumar")
let botonReiniciar = document.getElementById("reiniciar")
let resultado = document.getElementById("Contador")

botonSumar.addEventListener("click", function(){
    Contador++;
    resultado.textContent = Contador;
});

botonReiniciar.addEventListener("click", function(){
    Contador = 0;
    resultado.textContent = Contador;
})