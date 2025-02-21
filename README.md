# Validador de Cartão de Crédito

Este repositório contém um código em JavaScript para validar números de cartões de crédito e identificar a bandeira do cartão.

## 📌 Funcionalidades

- **Validação do número do cartão:** Utiliza o algoritmo de Luhn para verificar se o número do cartão é válido.
- **Identificação da bandeira:** Determina a bandeira do cartão com base no prefixo e no comprimento do número.
- **Suporte para múltiplas bandeiras:** Inclui Visa, MasterCard, American Express, Diners Club, Discover, JCB e UnionPay.

## 🚀 Como Usar

### Exemplo de Uso

```javascript
console.log(validateCreditCard("4111111111111111")); // { valid: true, flag: "Visa" }
console.log(validateCreditCard("5500000000000004")); // { valid: true, flag: "MasterCard" }
console.log(validateCreditCard("378282246310005")); // { valid: true, flag: "American Express" }
```

### Estrutura do Retorno

A função `validateCreditCard(cardNumber)` retorna um objeto com as seguintes propriedades:

```javascript
{
  valid: true | false, // Indica se o número do cartão é válido
  flag: "Visa" | "MasterCard" | "American Express" | "Diners Club" | "Discover" | "JCB" | "UnionPay" | "Unknown" // Bandeira do cartão
}
```

## 🛠 Tecnologias Utilizadas

- JavaScript puro

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo! 🎉

