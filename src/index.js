function validateCreditCard(cardNumber) {
    const sanitized = cardNumber.replace(/\D/g, "");
    if (!luhnCheck(sanitized)) return { valid: false, flag: null };

    const flag = getCardFlag(sanitized);
    return { valid: true, flag };
}

function luhnCheck(number) {
    let sum = 0;
    let alternate = false;
    for (let i = number.length - 1; i >= 0; i--) {
        let n = parseInt(number[i], 10);
        if (alternate) {
            n *= 2;
            if (n > 9) n -= 9;
        }
        sum += n;
        alternate = !alternate;
    }
    return sum % 10 === 0;
}

function getCardFlag(number) {
    const patterns = [
        { name: "Visa", regex: /^4[0-9]{12}(?:[0-9]{3})?(?:[0-9]{3})?$/ },
        { name: "MasterCard", regex: /^5[1-5][0-9]{14}$/ },
        { name: "American Express", regex: /^3[47][0-9]{13}$/ },
        { name: "Diners Club", regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
        { name: "Discover", regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
        { name: "JCB", regex: /^(?:2131|1800|35\d{3})\d{11}$/ },
        { name: "UnionPay", regex: /^(62[0-9]{14,17})$/ }
    ];
    
    for (const pattern of patterns) {
        if (pattern.regex.test(number)) return pattern.name;
    }
    return "Unknown";
}

// Examplo de uso:
console.log(validateCreditCard("4111111111111111")); // { valid: true, flag: "Visa" }
console.log(validateCreditCard("5500000000000004")); // { valid: true, flag: "MasterCard" }
console.log(validateCreditCard("378282246310005")); // { valid: true, flag: "American Express" }
console.log(validateCreditCard("6011111111111117")); // { valid: true, flag: "Discover" }
console.log(validateCreditCard("30569309025904")); // { valid: true, flag: "Diners Club" }
console.log(validateCreditCard("3530111333300000")); // { valid: true, flag: "JCB" }
console.log(validateCreditCard("6200000000000005")); // { valid: true, flag: "UnionPay" }