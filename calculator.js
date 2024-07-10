document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let displayValue = '';
    //selecting all elements that required.----------------------------

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            //for every button if-else condition.

            if (buttonText === 'AC') {
                displayValue = '';
                display.placeholder = '0';
            } else if (buttonText === 'DE') {
                displayValue = displayValue.slice(0, -1);
                if (displayValue === '') {
                    display.placeholder = '0';
                }
            } else if (buttonText === '=') {
                try {
                    displayValue = eval(displayValue).toString();
                } catch {
                    displayValue = 'Error';
                }
            } else if (buttonText === '%') {
                displayValue = (parseFloat(displayValue) / 100).toString();
            } else {
                displayValue += buttonText;
            }

            if (displayValue !== 'Error') {
                display.placeholder = displayValue;
            }
        });
    });
});


