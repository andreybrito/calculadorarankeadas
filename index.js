

function descobrirNivel(vitorias, derrotas){  
let totalPartidas = vitorias + derrotas
let saldoVitorias = (vitorias / totalPartidas)* 100 

    if(saldoVitorias <= 10){
            nivel = "Ferro";}
        
    else if (saldoVitorias >=11 && saldoVitorias <=20){
            nivel = "Bronze"}
    
    else if (saldoVitorias >=21 && saldoVitorias <=50){
            nivel = "Prata"}
    
    else if (saldoVitorias >51 && saldoVitorias <=80){
            nivel = "Ouro"}
        
    else if (saldoVitorias >81 && saldoVitorias <=90){
            nivel = "Diamante"}
        
    else if (saldoVitorias >91 && saldoVitorias <100){
            nivel = "Lendário"}
    
    else if (saldoVitorias = 100){
            nivel = "Imortal"}

return nivel    
}

let vitorias = 64;   
let derrotas = 15;

let nivelDoPersonagem = descobrirNivel(vitorias, derrotas)
console.log("O herói tem o saldo de " + vitorias + " vitórias e está no nível " + nivelDoPersonagem)
