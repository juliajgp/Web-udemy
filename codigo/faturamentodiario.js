/*************/
/* faturamento diario em javascript */

const fs = require('fs');

// Função para ler um arquivo JSON
function lerArquivoJson(caminho) {
    const dados = fs.readFileSync(caminho, 'utf-8');
    return JSON.parse(dados);
}

// Função para calcular os valores solicitados
function analisarFaturamento(faturamento) {
    const diasUteis = faturamento.filter(valor => valor > 0);
    
    if (diasUteis.length === 0) {
        console.log("Nenhum dia com faturamento registrado.");
        return;
    }
    
    const menorFaturamento = Math.min(...diasUteis);
    const maiorFaturamento = Math.max(...diasUteis);
    const mediaMensal = diasUteis.reduce((acc, val) => acc + val, 0) / diasUteis.length;
    const diasAcimaDaMedia = diasUteis.filter(valor => valor > mediaMensal).length;
    
    console.log(`Menor faturamento: ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento: ${maiorFaturamento.toFixed(2)}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

// Leitura do arquivo e execução da análise
const dados = lerArquivoJson('faturamento.json');
analisarFaturamento(dados.faturamento);

