#include <stdio.h>

int notacCient(long long int x) {
    int contador = 0;

    while (x >= 10) {
        x /= 10;
        contador++;
    }

    return contador;
}

char charCorresp(long long int* x, int n) {
    int i, aux, num;
    long long int multip = 1;

    aux = *x;

    for(i = 0; i < n; i++) {
        multip *= 10;
    }

    aux /= multip;
    num = aux;

    *x -= num * multip;


    if(num == 0) {
        return '0';
    }
    else if(num == 1) {
        return '1';
    }
    else if(num == 2) {
        return '2';
    }
    else if(num == 3) {
        return '3';
    }
    else if(num == 4) {
        return '4';
    }
    else if(num == 5) {
        return '5';
    }
    else if(num == 6) {
        return '6';
    }
    else if(num == 7) {
        return '7';
    }
    else if(num == 8) {
        return '8';
    }
    else if(num == 9) {
        return '9';
    }

    return 'a';
}

int main() {
    int n, i, j, grandeza, strink = 19;
    long long int numero;
    char resp[999999] = "Seus numeros sao : ";

    printf("Qtd de numeros a inserir: ");
    scanf("%d", &n);

    for(i = 0; i < n; i++) {
        printf("Digite um numero: ");
        scanf("%lld", &numero);

        grandeza = notacCient(numero);

        for(j = grandeza; j >= 0; j--) {
            resp[strink] = charCorresp(&numero, j);
            strink++;
        }
        if(i != n - 1) {
            resp[strink] = ',';
            strink++;
            resp[strink] = ' ';
            strink++;
        }
        else {
            resp[strink] = '.';
            strink++;
            resp[strink] = '\0';
            strink++;
        }
    }


    for(i = 0; resp[i] != '\0'; i++) {
        printf("%c", resp[i]);
    }

    printf("\n");


    return 0;
}
