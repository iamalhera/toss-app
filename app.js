var input = document.querySelector("#input-data");
var tossOptions = document.querySelector("#toss-options");
var checkButton = document.querySelector("#check");
var result = document.querySelector("#result");


checkButton.addEventListener('click',()=>{
    var num = Math.random();
    var binary = Math.round(num) ;
    // console.log(tossOptions.value);
    // console.log(binary);
    if(Number(binary) === Number(tossOptions.value)){
        result.innerText = "Congratulations! You won";
    }
    else{
        result.innerText = "Sorry! You lose";
    }
})