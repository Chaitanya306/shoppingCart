
const cartContainer=document.getElementById('cart-container')
const checkList=document.getElementById('check-list')
//let cartItems=[]
let total=0

/*
const user=JSON.parse(localStorage.getItem('user'))
if(user==null){
    alert('please signin to access profile')  
    window.location.href='../login/index.html'
     
}
*/

function addingEachitem(element){
    //console.log('in adding to cart')
    cartContainer.innerHTML += `<div class="item">
              <img src=${element.image} alt="Item" />
              <h5 class='title'>${element.title.length<25?element.title:element.title.substr(0,25)}</h5>
              <p>price ${element.price} &#36;</p>
              
              <button  onclick="removeCart(${element.id})">Remove from Cart</button>
            </div>`
    
    checkList.innerHTML+=`<li><span>${element.title.substr(0,10)}</span> <span>${element.price}</span></li>`
    total+=element.price
    
    
}

//cartContainer.innerHTML +='';

function addingToCart(){
    let cartItems=JSON.parse(localStorage.getItem('cartItems'))
    if(cartItems==null) cartItems=[]
    cartContainer.innerHTML =''
    checkList.innerHTML=''
    checkList.innerHTML+=`<li>Check List</li>`
    total=0
    cartItems.forEach(e=>{
        //console.log('in for each')
        addingEachitem(e)
    })
    checkList.innerHTML+=`<li><span>cart value:</span>  <span>${total}</span></li>`
    checkList.innerHTML+=`<li><button onclick="checkOut()">Checkout</button></li>`
}

addingToCart()
//console.log('below are cart items')
//console.log(cartItems)

function removeCart(idx){
    let cartItems=JSON.parse(localStorage.getItem('cartItems'))
    cartItems=cartItems.filter(e=>e.id!=idx)
    
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
    
    addingToCart()
}

function checkOut(){
    localStorage.removeItem('cartItems')
    localStorage.removeItem('user')
    window.location.href='../index.html'
}
