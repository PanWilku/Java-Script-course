document.addEventListener('DOMContentLoaded', () => {
    const tempSwitch = document.getElementById('temp-switch');
    const symbolArrow = document.getElementById('flipping-arrow');
    const animationDuration = 2000;
    const tempNumber = document.getElementById('temp-number');
    const convertButton = document.getElementById('convert-button');
    const celsiusResult = document.getElementById('celsius-result');
    const fahrenheitResult = document.getElementById('fahrenheit-result');
    let temp;
    
    
    function updateArrow() {
        tempSwitch.disabled = true; // Disable the checkbox during animation

        if (tempSwitch.checked) {
            symbolArrow.classList.remove('fa-flip-horizontal-reverse');
            symbolArrow.classList.add('fa-flip-horizontal');
        } else {
            symbolArrow.classList.remove('fa-flip-horizontal');
            symbolArrow.classList.add('fa-flip-horizontal-reverse');
        }

        // Re-enable the checkbox after the animation duration
        setTimeout(() => {
            tempSwitch.disabled = false;
        }, animationDuration);
    }

    tempSwitch.addEventListener('change', updateArrow);


    function calculateTemp(tempNumber) {
        if (Number(tempNumber.value) > 1000000 || Number(tempNumber.value) < -1000000){
            alert("Enter a number less than 1000000 or more than -1000000!");
            return;
        }
        if (tempSwitch.checked) {
            console.log("To Celsius");
            temp = Number(tempNumber.value);
            temp = (temp - 32) * 5 / 9;
            console.log(temp);
            celsiusResult.textContent = `${Math.round(temp)}`
            fahrenheitResult.textContent = `${Number(tempNumber.value)}`
        } else {
            console.log("To Fahrenheit")
            temp = Number(tempNumber.value);
            temp = temp * 9 / 5 + 32;
            console.log(temp);
            celsiusResult.textContent = `${Number(tempNumber.value)}`
            fahrenheitResult.textContent = `${Math.round(temp)}`
        }
    }

    convertButton.addEventListener('click', () => {
        console.log('Convert button was clicked');
        calculateTemp(tempNumber);
    });
    
});