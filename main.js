
//mars coust 
const marsCost = 5000;
const moonCost = 3000;
function handleQuantity(planet, operators) {
    
    //take quantity input dynamically
    const quantityInput = document.getElementById(planet + "-quantity").value;
    //convert to number 
    let quantity = parseInt(quantityInput);
    //increment
    if (operators == 'plus') {

        quantity++;
    }
    else {
        //error handling 
        if (quantity < 1) {
            return;
        }
        quantity--;
    }

    //update input value
    document.getElementById(planet + "-quantity").value = quantity;
    calculateJourney(planet);


}

let marsTotal = 0;
let moonTotal = 0;

function calculateJourney(planet) {
    // console.log(planet)
    const quantityInput = document.getElementById(planet + "-quantity").value;

    let quantity = parseInt(quantityInput);

    if (planet === 'mars') {
        marsTotal = quantity * marsCost;
        updateUI(planet, marsTotal)
    }
    else {
        moonTotal = quantity * moonCost
        updateUI(planet, moonTotal)
    }
    updateTotal(marsTotal,moonTotal)
}

function updateUI(planet, total) {
    const planetTotal = document.getElementById(planet + '-total');
    planetTotal.innerText = total;

}


function updateTotal(marsTotal,moonTotal) {
 
    let total=marsTotal+moonTotal
    document.getElementById('total').innerText = total;
}