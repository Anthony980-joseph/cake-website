
function showSideBar(){
        const sideBar = document.querySelector('.sidebar')
        sideBar.style.display='flex'
    }

function removeSideBar(){
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display='none'
}
const navEl = document.querySelector('.navbar-scrolled')

window.addEventListener('scroll', () =>{
    if(window.scroll>= 56){
        navEl.classList.add('navbar-scrolled')
    }
})


const oderButton = document.querySelectorAll('.oder-btn')

oderButton.forEach((button) =>{
    button.addEventListener('click',() => {
        const modal = document.getElementById('oder-modal');
        modal.style.display ='block'
    });
});
//close modal
const closeButton = document.querySelector('.close')

closeButton.addEventListener('click',()=>{
    const modal = document.getElementById('oder-modal');
    modal.style.display ='none'
})


//get form elements
const form = document.getElementById('order-form');
const cakeNameInput = document.getElementById('cake-name')
const quantityInput = document.getElementById('quantity')
const cardNumberInput = document.getElementById('card-number')
const expMonthInput = document.getElementById('exp-month')
const expYearInput = document.getElementById('exp-year')
const cvcInput = document.getElementById('cvc')
const payBtn = document.getElementById('pay-btn')

//add event listener
payBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    //get inputs
    const cakeName=cakeNameInput.value;
    const quantity = quantityInput.value;
    const cardNumber= cardNumberInput.value;
    const expMonth= expMonthInput.value;
    const expYear=expYearInput.value;
    const cvc = cvcInput.value;

    if(!cakeName || !quantity || !cardNumber || !expMonth || !expYear || !cvc){
        alert('Please fill in all fields');
    }else{
        
        const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHtml =`<h2>Order Summary</h2>
    <p> Cake Name:${cakeName} </p>
    <p>Quantity: ${quantity}</p>
    <p>Total: $${calculateTotal(cakeName, quantity)} </p>`;

    function calculateTotal(cakeName, quantity){
        const cakePrice ={
            'Chocolate Cake': 20,
            'Vanilla Cake': 18,
            'Red Velvet Cake': 22
        };
        return cakePrice[cakeName]*quantity;
    }
    
    alert(`Your details was submitted successfully
You can exit the form through the x icon 
And you will recieve your order shortly `)
    }
    



    
}) 
    //display order summary
   


