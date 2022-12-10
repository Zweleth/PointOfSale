let checkout = JSON.parse(localStorage.getItem("cart"));

if (checkout.length > 0) {
    populateCheckout();
}
else{
    showCartEmpty()
}

displayTotal();

function showCartEmpty() {
    let checkInfo = document.querySelector(".cart");
    checkInfo.innerHTML += `
    <div class="cartEmpty">
        <i class="fa-solid fa-circle-exclamation"></i>
        <h2>The cart is empty</h2>
    </div>
    `
}


function populateCheckout() {

    let checkImg = document.querySelector(".chkimg");
    let checkInfo = document.querySelector(".cart");
    Object.keys(checkout).forEach((i) => {
      if (checkout.length) {
        checkImg.innerHTML += `
           <div class="chkItemImg"><img src="${checkout[i].image_link}"></div>       
              `;
        checkInfo.innerHTML += `
            <div class="chkItemInfo">
                <h3>${checkout[i].name}</h3>
                <h6>${checkout[i].description}</h6>
                <h3>R ${checkout[i].price}</h3>
                <div class="qtyBox">
                    <div class="qtyButton">
                        <button class="qtyMin" id="${[i]}"><i class="fa-solid fa-minus"></i></button><div class="qtyVal">${checkout[i].qty}</div><button class="qtyPlus" id="${[i]}"><i class="fa-solid fa-plus"></i></button>
                    </div> 
                <div>
            </div>
        `
      }
    });
    checkInfo.innerHTML += `<div class="dispTotal">Total R 0</div>` 
  }



let btnAddQty = document.querySelectorAll('.qtyPlus')
let btnMinQty = document.querySelectorAll('.qtyMin')
btnAddQty.forEach(btn => {
    let i = (btn.id);
    let x = checkout[i].qty
    btn.addEventListener('click', () => {
        addQty(x, i)
    })
})

function addQty(qty, id) {
    qty += 1
    checkout[id].qty=qty;
    localStorage.setItem('cart', JSON.stringify(checkout));
    document.location.reload();
    displayTotal();
}

btnMinQty.forEach(btn => {
    let i = (btn.id);
    let x = checkout[i].qty
    btn.addEventListener('click', () => {
        minQty(x, i)
    })
})

function minQty(qty, id) {
    if (qty > 1) {
    qty -= 1
    checkout[id].qty=qty;
    
    document.location.reload();
    }
    else  {
        checkout.splice(id,1);
    }
    localStorage.setItem('cart', JSON.stringify(checkout));
    document.location.reload();
    displayTotal();
    
}

function displayTotal() {
    let total = 0;
    checkout.forEach(chk => {
        total += chk.price * chk.qty;
         
    })
    document.querySelector('.dispTotal').innerHTML = `Total R ${total.toFixed(2)}`;
    
}



// function calculateTotal() {
//     let total = 0;
//     checkout.forEach((chk) => {
//         total += (checkout[chk].price*checkout[chk].qty)
//         document.querySelector('.despTotal').innerHTML = total;
//         alert(total)
//         i++;
//     })
// }




