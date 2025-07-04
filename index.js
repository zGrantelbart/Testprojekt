const display = document.querySelector('.display');
const historyDisplay = document.querySelector('.history-display');
const buttons = document.querySelectorAll('.button');

let currentInput = '0';          
let firstOperand = null;         
let operator = null;             
let waitForSecondOperand = false; 
let lastResult = null;           
let lastOperator = null;         
let lastOperand = null;          


function updateDisplay() {
    display.value = currentInput.replace('.', ',');
}

function updateHistoryDisplay(text) {
    if (historyDisplay) {
        historyDisplay.textContent = text;
    }
}

function inputDigit(digit) {
    if (waitForSecondOperand) {
        currentInput = digit;
        waitForSecondOperand = false;
    } else {
        currentInput = currentInput === '0' && digit !== ',' ? digit : currentInput + digit;
    }
    updateDisplay();
}

function inputDecimal(dot) {
    if (!currentInput.includes(dot)) {
        currentInput += dot;
    }
    updateDisplay();
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentInput.replace(',', '.'));
    if (operator && waitForSecondOperand) {
        operator = nextOperator;
        lastOperator = nextOperator;
        return;
    }
    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation(operator, firstOperand, inputValue);
        currentInput = result.toString();
        firstOperand = result;
    }

    lastOperator = nextOperator;
    operator = nextOperator;
    waitForSecondOperand = true;

    updateHistoryDisplay(`${firstOperand.toString().replace('.', ',')} ${operator}`);
    updateDisplay();
}

function performCalculation(op, num1, num2) {
    let result;
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return 'Fehler: Div durch 0';
            }
            result = num1 / num2;
            break;
        case '%':
            result = (num1 / 100) * num2;
            break;
        default:
            return num2;
    }
    return parseFloat(result.toFixed(10));
}

function handleEquals() {
    if (firstOperand === null || operator === null) {
        return;
    }

    let secondOperand;
    if (waitForSecondOperand) {
        secondOperand = firstOperand;
    } else {
        secondOperand = parseFloat(currentInput.replace(',', '.'));
    }

    lastOperand = secondOperand;
    lastOperator = operator; 

    const result = performCalculation(operator, firstOperand, secondOperand);
    currentInput = result.toString();
    firstOperand = result; 
    operator = null; 
    waitForSecondOperand = true; 

    updateHistoryDisplay(`${firstOperand.toString().replace('.', ',')} ${lastOperator} ${lastOperand.toString().replace('.', ',')} =`);
    updateDisplay();
}

function handleFunction(funcValue) {
    let memory = 0;
    switch (funcValue) {
        case 'MC':
            window.open('https://i.programmerhumor.io/2025/03/8f21e93be90ac51858707e7895c39fd8.jpeg', '_blank'); // Rick Astley - Never Gonna Give You Up
            break;
        case 'MR':
            window.open('https://i.programmerhumor.io/2025/07/09d9e11323a8f8cea2fe3811b6f0cbe2c88dea2594443f5a3a60ccb2292eb17e.jpeg', '_blank'); // Surprised Pikachu GIF
            break;
        case 'M+':
            window.open('https://i.programmerhumor.io/2025/07/3ee808957428a761073e8abb624a6ef1ad377f3e1e6be5a28e67e2b4b4702dbc.jpeg', '_blank'); // Dancing Cat
            break;
        case 'M-':
            window.open('https://i.programmerhumor.io/2023/11/programmerhumor-io-programming-memes-6857797e3f28646.jpg', '_blank'); // Nyan Cat
            break;
        case 'MS':
            window.open('https://i.programmerhumor.io/2023/11/programmerhumor-io-programming-memes-4f8d2d4cc668505.png', '_blank'); // Distracted Boyfriend
            break;
        case 'M˅':
            window.open('https://i.programmerhumor.io/2025/05/1360af01e5d4e5ee6fc2d6526c0382c83f9bb9d385cb9c2a2488370a39824cc1.gif', '_blank'); // Coffin Dance / Astronomia
            break;
        case 'AC':
            currentInput = '0';
            firstOperand = null;
            operator = null;
            waitForSecondOperand = false;
            lastResult = null;
            lastOperator = null;
            lastOperand = null;
            updateHistoryDisplay(''); 
            break;
        case 'C': 
            currentInput = '0';
            firstOperand = null;
            operator = null;
            waitForSecondOperand = false;
            lastResult = null;
            lastOperator = null;
            lastOperand = null;
            updateHistoryDisplay('');
            break;
        case 'CE': 
            currentInput = '0';
            break;
        case 'backspace': 
            currentInput = currentInput.slice(0, -1);
            if (currentInput === '') { 
                currentInput = '0';
            }
            break;
        case '+/-': 
            currentInput = (parseFloat(currentInput.replace(',', '.')) * -1).toString().replace('.', ',');
            break;
        case '1/x': 
            let val_1x = parseFloat(currentInput.replace(',', '.'));
            if (val_1x === 0) {
                currentInput = 'Fehler';
            } else {
                currentInput = (1 / val_1x).toString().replace('.', ',');
            }
            firstOperand = null; 
            operator = null;
            waitForSecondOperand = true;
            updateHistoryDisplay(`1/(${val_1x.toString().replace('.', ',')})`);
            break;
        case 'x^2': 
            let val_x2 = parseFloat(currentInput.replace(',', '.'));
            currentInput = (val_x2 * val_x2).toString().replace('.', ',');
            firstOperand = null;
            operator = null;
            waitForSecondOperand = true;
            updateHistoryDisplay(`sqr(${val_x2.toString().replace('.', ',')})`);
            break;
        case 'sqrt': 
            let val_sqrt = parseFloat(currentInput.replace(',', '.'));
            if (val_sqrt < 0) {
                currentInput = 'Fehler'; 
            } else {
                currentInput = Math.sqrt(val_sqrt).toString().replace('.', ',');
            }
            firstOperand = null;
            operator = null;
            waitForSecondOperand = true;
            updateHistoryDisplay(`√(${val_sqrt.toString().replace('.', ',')})`);
            break;
        case '%':
            if (firstOperand !== null && operator !== null) {
                const inputValue = parseFloat(currentInput.replace(',', '.'));
                currentInput = ((firstOperand * (inputValue / 100))).toString().replace('.', ',');
            } else {
                currentInput = (parseFloat(currentInput.replace(',', '.')) / 100).toString().replace('.', ',');
            }
            break;
        case '☰': // Das Menü-Icon im HTML hat den Text ☰, also nutzen wir das als data-value
            window.open('https://i.pinimg.com/originals/38/82/1d/38821d2946fa8e0439aaed83336eb20f.jpg', '_blank'); // "The Internet is a Series of Tubes"
            break;
        case '⟳': // Das History-Icon hat den Text ⟳
            window.open('https://i.programmerhumor.io/2023/02/programmerhumor-io-programming-memes-1bba7660f5b757c.jpg', '_blank'); // This is Fine Dog
            break;
        default:
            // Für alle anderen Fälle, die du nicht speziell behandelt hast
            console.log('Unbehandelte Funktion/Meme-Trigger:', funcValue);
            break;
    
    };
    updateDisplay();
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        if (button.classList.contains('number')) {
            if (value === ',') {
                inputDecimal(',');
            } else {
                inputDigit(value);
            }
        } else if (button.classList.contains('operator')) {
            handleOperator(value);
        } else if (button.classList.contains('equals')) {
            handleEquals();
        } else if (button.classList.contains('function') || button.classList.contains('memory')) {
            handleFunction(value);
        }
    });
});

updateDisplay();