


const items=document.getElementById("items-container");

const search= document.getElementById('search')
const searchBtn= document.getElementById('searchBtn')

const allElement=document.getElementById("allElement");
const men=document.getElementById("men");
const women=document.getElementById("women");
const jewellery=document.getElementById("jewellery");
const electronics=document.getElementById("electronics");

const range=document.getElementsByName('prange')
const rating=document.getElementById('range')
let data=undefined

/*
const user=JSON.parse(localStorage.getItem('user'))
if(user==null){
    alert('please signin to access profile')  
    window.location.href='../login/index.html'
     
}
*/
function addCart(id){
  const item=data.filter(e=>e.id==id)[0]
  
  let cartItems=JSON.parse(localStorage.getItem('cartItems'))
  cartItems=cartItems==null?[]:cartItems
  cartItems.push(item)
  localStorage.setItem('cartItems',JSON.stringify(cartItems))
}



async function fetching(){
  allElement.classList.add("active");
  men.classList.remove("active");
  women.classList.remove("active");
  jewellery.classList.remove("active");
  electronics.classList.remove("active");
  const promise = await fetch("https://fakestoreapi.com/products");
  data = await promise.json();
  //console.log(data);
  items.innerHTML = "";
  
  data.forEach(element => {
    items.innerHTML += `<div class="item">
              <img src=${element.image} alt="Item" />
              <h4 class='title'>${element.title}</h4>
              <div class="info">
                <p>price ${element.price} &#36;</p>
                <p>rating ${element.rating.rate}</p>
                <p>count ${element.rating.count}</p>
              </div>
              <button  onclick="addCart(${element.id})">Add to Cart</button>
            </div>`
           // document.getElementById(`addBtn-${element.id}`).addEventListener('click',function(){addCart(element)})
  });
  
}

fetching()


function filterMens(){
  rating.value=0
  for (let i = 0; i < range.length; i++) {
    range[i].checked=false
  }

  allElement.classList.remove("active");
  men.classList.add("active");
  women.classList.remove("active");
  jewellery.classList.remove("active");
  electronics.classList.remove("active");

  items.innerHTML = "";
  data.forEach(element => {
    if (element.category.toLowerCase().includes('men') && !element.category.toLowerCase().includes('women')) {
      
      items.innerHTML += `<div class="item">
              <img src=${element.image} alt="Item" />
              <h4 class='title'>${element.title}</h4>
              <div class="info">
                <p>price ${element.price} &#36;</p>
                <p>rating ${element.rating.rate}</p>
                <p>count ${element.rating.count}</p>
              </div>
              <button onclick="addCart(${element.id})">Add to Cart</button>
            </div>`
    }
  })   
}

function filterWomen(){

  rating.value=0
  for (let i = 0; i < range.length; i++) {
    range[i].checked=false
  }


  allElement.classList.remove("active");
  men.classList.remove("active");
  women.classList.add("active");
  jewellery.classList.remove("active");
  electronics.classList.remove("active");
  
  items.innerHTML = "";
  
  data.forEach(element => {
    if (element.category.toLowerCase().includes('women')) {
      
      items.innerHTML += `<div class="item">
              <img src=${element.image} alt="Item" />
              <h4 class='title'>${element.title}</h4>
              <div class="info">
                <p>price ${element.price} &#36;</p>
                <p>rating ${element.rating.rate}</p>
                <p>count ${element.rating.count}</p>
              </div>
              <button onclick="addCart(${element.id})">Add to Cart</button>
            </div>`
    }
  })   
}


function filterJewellery(){

  rating.value=0
  for (let i = 0; i < range.length; i++) {
    range[i].checked=false
  }


  allElement.classList.remove("active");
  men.classList.remove("active");
  women.classList.remove("active");
  jewellery.classList.add("active");
  electronics.classList.remove("active");
  
  items.innerHTML = "";
  
  data.forEach(element => {
    if (element.category.toLowerCase().includes('jewelery')) {
      
      items.innerHTML += `<div class="item">
              <img src=${element.image} alt="Item" />
              <h4 class='title'>${element.title}</h4>
              <div class="info">
                <p>price ${element.price} &#36;</p>
                <p>rating ${element.rating.rate}</p>
                <p>count ${element.rating.count}</p>
              </div>
              <button onclick="addCart(${element.id})">Add to Cart</button>
            </div>`
    }
  })   
}

function filterElectronics(){

  rating.value=0
  for (let i = 0; i < range.length; i++) {
    range[i].checked=false
  }

  
  allElement.classList.remove("active");
  men.classList.remove("active");
  women.classList.remove("active");
  jewellery.classList.remove("active");
  electronics.classList.add("active");
  
  items.innerHTML = "";
  
  data.forEach(element => {
    if (element.category.toLowerCase().includes('electronics')) {
      
      items.innerHTML += `<div class="item">
              <img src=${element.image} alt="Item" />
              <h4 class='title'>${element.title}</h4>
              <div class="info">
                <p>price ${element.price} &#36;</p>
                <p>rating ${element.rating.rate}</p>
                <p>count ${element.rating.count}</p>
              </div>
              <button onclick="addCart(${element.id})">Add to Cart</button>
            </div>`
    }
  })   
}

function sideFilter(){
  
  let rangeValue=0
  let ratingValue=rating.value
  for (let i = 0; i < range.length; i++) {
    if (range[i].checked) {
      rangeValue=range[i].value;
      break
    }
  }
  
  items.innerHTML = "";
  
  data.forEach(element => {
    
    if (element.price <= rangeValue && element.rating.rate >= ratingValue) {
      
      items.innerHTML += `<div class="item">
              <img src=${element.image} alt="Item" />
              <h4 class='title'>${element.title}</h4>
              <div class="info">
                <p>price ${element.price} &#36;</p>
                <p>rating ${element.rating.rate}</p>
                <p>count ${element.rating.count}</p>
              </div>
              <button onclick="addCart(${element.id})">Add to Cart</button>
            </div>`
    }
  })  

  
}


function searchInput(){
  items.innerHTML = "";
  
  data.forEach(element => {
    const searchInput=search.value;
    if (element.title.toLowerCase().includes(searchInput)) {
      
      items.innerHTML += `<div class="item">
              <img src=${element.image} alt="Item" />
              <h4 class='title'>${element.title}</h4>
              <div class="info">
                <p>price ${element.price} &#36;</p>
                <p>rating ${element.rating.rate}</p>
                <p>count ${element.rating.count}</p>
              </div>
              <button onclick="addCart(${element.id})">Add to Cart</button>
            </div>`
    }
  })  

}



