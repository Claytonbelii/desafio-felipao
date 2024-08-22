// Variáveis para armazenar o nome e a quantidade de experiência do herói
let nome = "Naruto";
let xp = 500; // Exemplo de XP, pode ser alterado conforme necessário

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para determinar o nível do herói
if (xp >= 10001) {
    nivel = "Radiante";
} else if (xp >= 9001) {
    nivel = "Imortal";
} else if (xp >= 8001) {
    nivel = "Ascendente";
} else if (xp >= 7001) {
    nivel = "Platina";
} else if (xp >= 5001) {
    nivel = "Ouro";
} else if (xp >= 2001) {
    nivel = "Prata";
} else if (xp >= 1001) {
    nivel = "Bronze";
} else {
    nivel = "Ferro";
}

// Saída com o nome e nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
