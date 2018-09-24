document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('initialize').addEventListener('click', submitForm)

    function submitForm() {
        event.preventDefault();
        var billAmount = document.getElementById('fuckinInput').value;
        var tipAmount = (billAmount * 0.2).toFixed(2);

        var muhBody = document.querySelector('body')
        var tipDisplay = muhBody.appendChild(document.createElement('h2'));
        tipDisplay.textContent = "The amount you should tip is " + "$" + tipAmount;
        console.log(tipAmount)
    }

});