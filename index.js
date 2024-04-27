const allButtons = document.querySelectorAll("[data-btn]"); //<--Selecting all buttons with data-btn
const submitBtn = document.getElementById("submit-button");
let numberChoice = 0;

function clearSelected(){ // <--Clearing other buttons with the selected class
    allButtons.forEach((button)=>{
        button.classList.remove("selected"); // <--Manipulating the element class
    })
}

allButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        clearSelected();
        button.classList.add("selected"); // <--Adding the class to the element
        numberChoice = button.textContent;
    })
})

submitBtn.addEventListener("click", ()=>{
    if(numberChoice === 0){
        document.getElementById("error-choosing").style.display = "block";
    }
    else{
        document.getElementById("container").style.display = "none";
        document.getElementById("thank-you").style.display = "block";
        document.getElementById("star-result").textContent = `You selected ${numberChoice} out of 5`
    }
})