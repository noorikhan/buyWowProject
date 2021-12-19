function itemdetails(arr){  
     showData(arr);
     function showData(arr){
          let container=document.getElementById("nutritionContainer");
          container.innerText = "";
          var i = 0;
          arr.map((item)=>{
               let img1 =  item.imgFront;
               let img2 = item.imgBack;
               let title = item.title;
               let price = item.price;
               let items= document.createElement("div");
               items.innerHTML =  

                                   `<style>
                                   .product-container${i}{
                                        margin-left:5%; 
                                        margin-right:10px;
                                        width: 320px;
                                        height: 280px;
                                        font-size: 20px;
                                        text-align:center;
                                        border-radius: 3%;
                                        font-family: "Neutra Text TF",sans-serif;
                                        font-weight: 600;
                                        border: 2px solid rgb(255, 255, 255);
                                        line-height:38px ;
                                        background: url(${img1});
                                        cursor: pointer;
                                        background-position: center;
                                   }

                                   .product-container${i}:hover{
                                        background: url(${img2});
                                   }

                                   .product-container${i}:hover  .product-container-image-buttons>span{
                                   visibility: visible;
                                   }

                                   #productDescriptionPageid${i}:hover{
                                        cursor: pointer;

                                   }
                                   #product-container-image${i}{
                                        height:230px;

                                   }

                                   </style>


                                   <div class="product-container${i}" >
                                   <div id="product-container-image${i}"></div>
                                   
                                        <div class="product-container-image-buttons">
                                        <span class="bg_slider" id="QuickShopitem${i}"><span   >QUICK SHOP</span><span class="fa fa-eye" style="margin-left: 8px; font-size: 20px;width: 25px;margin-top:8px;"></span></span>
                                        <span class="bg_slider" id="cartid${i}"><span >ADD TO CART</span><span class="fa fa-shopping-cart" style="margin-left: 10px; font-size: 20px;width: 25px;margin-top:8px;"></span></span>
                                        </div>
                                        </div>
                                   
                                   
                                   <div class="product-container-desc" >
                                             <span id="productDescriptionPageid${i}">${title}</span><br>
                                             <span class="fa fa-star " style="color: orange;"></span>
                                             <span class="fa fa-star " style="color: orange;"></span>
                                             <span class="fa fa-star " style="color: orange;"></span>
                                             <span class="fa fa-star " style="color: orange;"></span>
                                             <span class="fa fa-star " style="color: orange;"></span>
                                             <span class="product-container-desc-reviews">${Math.floor((Math.random()*200)+40)} reviews</span><br>
                                             <span class="product-container-desc-price">₹${price}</span>
                                   </div>`;
               container.append(items);
               document.getElementById(`cartid${i}`).addEventListener("click", function() {addToCart(item);});
               document.getElementById(`QuickShopitem${i}`).addEventListener("click", function() {QuickShop(item);});
               document.getElementById(`productDescriptionPageid${i}`).addEventListener("click", function() {productDescriptionPage(item);});
               document.getElementById(`product-container-image${i}`).addEventListener("click", function() {productDescriptionPage(item);});
               i++;
});
     }

    function productDescriptionPage(item){
          localStorage.setItem("productDescriptionpageitem",JSON.stringify(item));
          let productDescriptionpageitem = JSON.parse(localStorage.getItem("productDescriptionpageitem"))
          console.log(productDescriptionpageitem);
          window.location.href = "productDetails.html";
     }

    function addToCart(items){
          let productDescriptionpcartitems = JSON.parse(localStorage.getItem("productDescriptionpagecartitems")) || [];
          productDescriptionpcartitems.push(items);
          let arrprice = productDescriptionpcartitems;
          let sum  = 0;
          for(let i=0;i<arrprice.length;i++){
               sum = sum + arrprice[i].price;
          }
          let totalPrice = sum;
          console.log(sum);
          localStorage.setItem("productDescriptionpagecartitems",JSON.stringify(productDescriptionpcartitems));
          let item = JSON.parse(localStorage.getItem("productDescriptionpagecartitems"));
          document.getElementById("cartItems").innerText = "";

          
          displayCartItems(item)
               function displayCartItems(item){

                    let sum = 0;
                    for(let i=0;i<item.length;i++){
                         sum = sum + item[i].price;
                    }
                    let totalPrice = sum;
                    let totalprice = document.getElementById("totalPrice");
               totalprice.textContent = "₹0";


               document.getElementById("cartItems").innerText = "";

               item.map((e,i)=>{

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

               let totalprice = document.getElementById("totalPrice");
               totalprice.textContent = "₹"+totalPrice;

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
export default itemdetails;