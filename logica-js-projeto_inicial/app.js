
let numeroSecreto = 42;

let chute;
let tentativas = 1;

//while = enquanto

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
//if = se

    if (numeroSecreto == chute) {
      alert(`Você venceu,você adivinhou o numero secreto ${numeroSecreto} com ${tentativas} tentativas `);
//else = se não ou do contrario 
      
    } else {
        alert('Você errou >:(');
    }

    if (numeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}`);
    } else {
        if (numeroSecreto <= 41) {
            alert(`O número secreto é menor que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }

}
