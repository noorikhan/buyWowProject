import nav from "/components/navbar.js";
let hearder = document.querySelector("header");
hearder.innerHTML = nav();

let cart = document.getElementById("cart");

cart.addEventListener("click", openNav);
function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
  let item = JSON.parse(localStorage.getItem("productDescriptionpagecartitems"));

  let sum  = 0;
  for(let i=0;i<item.length;i++){
       sum = sum + item[i].price;
  }
  let totalPrice = sum;
  if(item.length == 0){
            document.getElementById("cartItems").innerHTML = `<div id="mpt"><p>Your cart is currently empty.</p><a href="index.html">Start Shopping &#8594</a></div>`;

            let totalprice = document.getElementById("totalPrice");
            totalprice.textContent = "₹0";
  }else{
       displayCartItems(item)
       function displayCartItems(item){
            let sum  = 0;
  for(let i=0;i<item.length;i++){
       sum = sum + item[i].price;
  }
  let totalPrice = sum;
 
       document.getElementById("cartItems").innerText = "";
       let totalprice = document.getElementById("totalPrice");
       totalprice.textContent = "₹0";

       item.map((e,i)=>{

       let totalprice = document.getElementById("totalPrice");
       totalprice.textContent = "₹"+totalPrice;

       let pdiv = document.createElement("div");
       pdiv.setAttribute("id","productinfoDivcart");
       pdiv.style.marginTop = "30px"

       let img = document.createElement("img");
       img.setAttribute("class","cartimg");
       img.setAttribute("src",e.imgFront);

       let title = document.createElement("div");
       title.innerText = e.title;

       let emptydiv = document.createElement("div");

       let price = document.createElement("div");
       price.setAttribute("class","cartproductprice")
       price.textContent = "₹"+e.price;

       

       let closebutton = document.createElement("button");
       closebutton.textContent="X";
       closebutton.style.height= "15px";
       closebutton.style.background = "white";
       closebutton.style.border = "none";
       closebutton.addEventListener("click",function(){deleteItem(e,i);});

       pdiv.append(img,title,emptydiv,price,closebutton);
       document.getElementById("cartItems").append(pdiv);
       document.getElementById("mySidenav").style.width = "450px";

       });
  }

       function deleteItem(e,i){
            localStorage.setItem("removeditem",JSON.stringify(e));
            localStorage.removeItem("removeditem");
            item.splice(i,1)
            console.log(e);
            localStorage.setItem("productDescriptionpagecartitems",JSON.stringify(item))
            displayCartItems(item);
       }

  }

}

let close = document.getElementById("close");
close.addEventListener("click", closeNav);

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let search = document.getElementById("search");

search.addEventListener("click", openSearch);

function openSearch() {
  document.getElementById("mySearchnav").style.height = "179px";
}

let remove = document.getElementById("remove");
remove.addEventListener("click", closeSearch);

function closeSearch() {
  document.getElementById("mySearchnav").style.height = "0";
}

import footerPart from "/components/footer.js";
let footer = document.querySelector("footer");
footer.innerHTML = footerPart();
