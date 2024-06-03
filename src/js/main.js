const numeros = [1, 2, 3, 4, 5];


//[M2S04] Ex 1 - Soma de Elementos
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(`A soma dos números é: ${soma}`);


//[M2S04] Ex 2 - Filtragem de Elementos
const pares = numeros.filter(numero => numero % 2 === 0);
console.log("Números pares:", pares);


//[M2S04] Ex 3 - Mapeamento de Elementos
const quadrados = numeros.map(numero => numero ** 2);   
console.log("Quadrados dos números:", quadrados);


//[M2S04] Ex 4 - Criando classe Produto
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    //[M2S04] Ex 5 - Criando método Vender
    Vender = (quantidadeVendida) => {
        if (quantidadeVendida <= this.quantidade) {
            this.quantidade -= quantidadeVendida;
            console.log(`Venda realizada com sucesso! Quantidade restante: ${this.quantidade}`);
            return;
        }

        console.log("Estoque insuficiente");
    }

    //[M2S04] Ex 6 - Criando método Repor
    Repor = (quantidadeReposta) => {
        this.quantidade += quantidadeReposta;
        console.log(`Estoque atualizado! Quantidade total: ${this.quantidade}`);
    }

    //[M2S04] Ex 7 - Criando método MostrarEstoque
    MostrarEstoque = () => console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`);
    

    //[M2S04] Ex 8 - Criando método AtualizarPreco
    AtualizarPreco = (novoPreco) => {
        this.preco = novoPreco;
        console.log(`Preço atualizado para: $${this.preco}`);
    }
}
