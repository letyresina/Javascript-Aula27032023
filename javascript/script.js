// Alert simples 

alert("Hello World!");

// Alert de confirmação 

let msg = confirm("Você é um aluno(a)?");

// Alert passando valores em campos

let nome = prompt("Digite seu nome:");

document.write("Seu nome é: ", nome, "<br>");

let valor = prompt("Digite um número qualquer:");
let valor2 = prompt("Digite outro número qualquer:")

if (valor > valor2){
    document.write(valor, " é maior que ", valor2, "<br>");
}
else if(valor < valor2){
    document.write(valor, " é menor que ", valor2, "<br>");
}
else{
    document.write("O " +valor+ " é igual a " +valor2)
}
s
let idade = prompt("Informe sua idade (apenas com números):");

if(idade <= 12){
    document.write("Criança");
}
else if(idade <= 17){
    document.write("Adolescente");
}
else if(idade <= 29){
    document.write("Jovem");
}
else{
    document.write("Adulto");
}