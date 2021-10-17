function addCommas(input) {
    splitAtDecimalPoint = input.split('.');
    let wholeNumbers = splitAtDecimalPoint[0].replace("-", "");
    let decimals = splitAtDecimalPoint.length >= 2 ? splitAtDecimalPoint[1] : null;
    let count = 0;
    let newNum = "";
    
    for (let i = wholeNumbers.length - 1; i > -1; i--) {
        if (count === 2) {
            count = 0;
            newNum += `${wholeNumbers[i]},`;
        } else {
            newNum += wholeNumbers[i];
            count++;
        };
    };
    
    newNum = Array.from(newNum).reverse().join("");
    newNum = input.indexOf("-") !== -1 ? `-${newNum}` : newNum;
    return decimals !== null ? `${newNum}.${decimals}` : newNum;
};

module.exports = addCommas;