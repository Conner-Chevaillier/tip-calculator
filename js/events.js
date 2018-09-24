document.addEventListener("DOMContentLoaded", function (event) {
    import {
        createTipHu
    } from "./app"
    document.getElementbyId('initialize').addeventListener('click', createTipHu)
});