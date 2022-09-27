// ITERATION 1

//const { product } = require("puppeteer");




function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span")
  let quantity = product.querySelector(".quantity input")

  let subtotalPrice = price.innerText * quantity.value

  let subtotalDOM = product.querySelector(".subtotal span")
  
  subtotalDOM.innerText = subtotalPrice

  return subtotalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  
  let bothProducts = document.querySelectorAll(".product")
  let sumProducts = 0
  bothProducts.forEach((eachElement)=>{
    
    sumProducts = sumProducts + updateSubtotal(eachElement)
    })

    
// ITERATION 3

/* tengo que acceder al DOM del total,"#total-value span" y modificarlo 
con un innerText que sume los dos subtotales. 

El problema es que no soy capaz de sumar los dos subtotales correctamente*/


let totalValue = document.querySelector("#total-value span")

let sumSubtotal = 







/*let totalDOM = document.querySelector(".subtotal span")

let sumItems = 0
totalDOM.forEach((eachElement)=> {
  sumItems = sumItems + updateSubtotal(eachElement)
})


totalDOM.innerText = updateSubtotal()*/





    /*let totalItems = product.querySelector(".subtotal span")
    let sumTotalItelms = sumTotalItelms + calculateAll(totalItems) 
    let totalDom = product.querySelector(".total value span")
    
    totalDom.innerText = sumTotalItelms

    return sumTotalItelms*/
    
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
