/*************/
/* FIBONACCI EM C */

#include <stdio.h>

// Função para verificar se um número pertence à sequência de Fibonacci
int pertenceFibonacci(int numero) {
    int a = 0, b = 1, proximo;
    
    // Se o número informado for 0 ou 1, ele pertence à sequência
    if (numero == 0 || numero == 1) {
        return 1;
    }
    
    // Gerar a sequência de Fibonacci até ultrapassar o número informado
    while (b < numero) {
        proximo = a + b;
        a = b;
        b = proximo;
    }
    
    // Se o número informado for igual a 'b', ele pertence à sequência
    return (b == numero);
}

int main() {
    int numero;
    
    // Solicita ao usuário um número
    printf("Digite um número para verificar se pertence à sequência de Fibonacci: ");
    scanf("%d", &numero);
    
    // Verifica se o número pertence à sequência de Fibonacci
    if (pertenceFibonacci(numero)) {
        printf("O número %d pertence à sequência de Fibonacci.\n", numero);
    } else {
        printf("O número %d NÃO pertence à sequência de Fibonacci.\n", numero);
    }
    
    return 0;
}

