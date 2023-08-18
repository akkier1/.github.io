const form = document.getElementById("calculator-form");
const resultElement = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const num1 = parseFloat(form.num1.value);
    const num2 = parseFloat(form.num2.value);

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    
    // ディバイドバイゼロの場合の処理を追加
    const quotient = num2 !== 0 ? num1 / num2 : "Infinity";

    const resultHTML = `
        ${num1} + ${num2} = ${sum}<br>
        ${num1} - ${num2} = ${difference}<br>
        ${num1} × ${num2} = ${product}<br>
        ${num1} ÷ ${num2} = ${quotient}
    `;

    resultElement.innerHTML = resultHTML;
});
