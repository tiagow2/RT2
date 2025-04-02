import * as readline from 'readline';
import Mensagens from './mensagens';
import Multiplicacao from './multiplicacao';
import Soma from './soma';
import Subtracao from './subtracao';
import Radiciacao from './radiciacao';
import Potenciacao from './potenciacao';
import Bhaskara from './bhaskara';

let mensagens = new Mensagens();
let calculo;

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function iniciar() {
    leitor.question(`Qual operação deseja realizar?\n`, (operacao) => {
        if (operacao.toLowerCase() === 'bhaskara') {
            leitor.question(`Informe os coeficientes a, b e c: `, (valor) => {
                let [a, b, c] = valor.split(' ').map(Number);
                let [x1, x2] = Bhaskara.calcular(a, b, c);
                console.log(`Raízes da equação: x1 = ${x1}, x2 = ${x2}`);
                iniciar();
            });
        } else if (operacao.toLowerCase() === 'sair') {
            console.log(`Até a próxima!`);
            leitor.close();
        } else {
            leitor.question(`Informe dois números: `, (valor) => {
                let [numero1, numero2] = valor.split(' ').map(Number);

                switch (operacao.toLowerCase()) {
                    case 'somar':
                        calculo = new Soma();
                        break;
                    case 'subtrair':
                        calculo = new Subtracao();
                        break;
                    case 'multiplicar':
                        calculo = new Multiplicacao();
                        break;
                    case 'potenciacao':
                        calculo = new Potenciacao();
                        break;
                    case 'radiciacao':
                        calculo = new Radiciacao();
                        break;
                    default:
                        console.log(`Operação inválida!`);
                        return iniciar();
                }

                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
                iniciar();
            });
        }
    });
}

mensagens.boasVindas();
mensagens.listarOpcoes();
iniciar();
