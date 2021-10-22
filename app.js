var input = document.querySelector("#input-data");
var tossOptions = document.querySelector("#toss-options");
var checkButton = document.querySelector("#check");
var result = document.querySelector("#result");


checkButton.addEventListener('click', () => {
    var num = Math.random();
    var binary = Math.round(num);
    // console.log(tossOptions.value);
    // console.log(binary);
    if (Number(tossOptions.value) === 0 || Number(tossOptions.value) === 1) {
        console.log(tossOptions.value);
        if (Number(binary) === Number(tossOptions.value)) {
            result.innerText = "Congratulations! You won";
            result.style.color = "Green" ;
        }
        else {
            result.innerText = "Sorry! You lose";
            result.style.color = "blue";
        }
    }
    else{
        result.innerText = "Please Select the options !";
        result.style.color = "red";
        }
})