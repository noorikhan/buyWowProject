function nav() {
  return ` <div id="nav">
  <div id="topDiv">
    <div id="toprightDiv">
    <a href="home.html">
      <div id="logoDiv">
        <img width="140px" style="border-bottom: 5px solid #CEA185; padding-bottom: 2%;" src="images/WOW_logo-01.png" />
        <img width="140px" style="padding-bottom: 2%;"src="images/WOW_logo-02.png" />
        <img width="140px" style="padding-bottom: 2%;" src="images/WOW_logo-03.png" />
      </div>
    </a>
    </div>
    <div id="topLeaftDiv">
      <div id="singRegLink">
        <a href = "login.html">Sign In</a>
        /
        <a href = "register.html">Register</a>
      </div>
      <div id="headerIcons">
        <img id ="search" width="30px" src="images/search-icon.png" />
        <img
          style="margin-left: 15%"
          width="40px"
          id = "cart"
          src="images/shoping-bag-icon.png"
        />
      </div>
    </div>
  </div>

  <div id="catList">
    <div id="catDiv">
      <div class="dropdown">
        <a href="productitem.html"> <button class="dropbtn buttons">Nutrition & Health</button></a>
        <div class="dropdownContent">
          <a href="productitem.html">Omega Fatty Acids</a>
          <a href="productitem.html">Multivitamins</a>
          <a href="productitem.html">Weight Management</a>
          <a href="productitem.html">Immunity Care</a>
          <a href="productitem.html">Detox</a>
          <a href="productitem.html">Gut Health</a>
          <a href="productitem.html">Protiens</a>
          <a href="productitem.html">Antioxidants</a>
          <a href="productitem.html">Men's Health</a>
          <a href="productitem.html">Vitamins</a>
          <a href="productitem.html">Skin & Hair Nutrition</a>
          <a href="productitem.html">Specialty Supplements</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn buttons">Skin</button>
        <div class="dropdownContent">
        <a href="#">Face Wash</a>
        <a href="#">Face Scrub</a>
        <a href="#">Face Serum</a>
        <a href="#">Face Cream</a>
        <a href="#">Face Mask</a>
        <a href="#">Moisturizer</a>
        <a href="#">Sunscreen</a>
        <a href="#">Toner</a>
        <a href="#">Make Up Remover</a>
      </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn buttons">Bath & Body</button>
        <div class="dropdownContent">
        <a href="#">Hand Cream</a>
        <a href="#">Hand Wash</a>
        <a href="#">Body Wash</a>
        <a href="#">Body Scrub</a>
        <a href="#">Body Lotion</a>
        <a href="#">Body Butter</a>
        <a href="#">Massage Oil</a>
        <a href="#">Bathing Bar</a>
      </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn buttons">Hair</button>
        <div class="dropdownContent">
        <a href="#">Shampoo</a>
        <a href="#">Conditioner</a>
        <a href="#">Hair Combo Kit</a>
        <a href="#">Hair Oil</a>
        <a href="#">Hair Mask</a>
        <a href="#">Hair Serum</a>
        <a href="#">Scalp Brush</a>
        <a href="#">Hair Spray / Revitalizer</a>
      </div>
      </div>
     
      <div class="dropdown">
        <button class="dropbtn buttons">Mother & Child</button>
        <div class="dropdownContent">
        <a href="#">Massage Oil</a>
        <a href="#">Stretch Care</a>
        <a href="#">3 in 1 Kids</a>
        <a href="#">Kids Body Lotion</a>
        <a href="#">Kids Sunscreen</a>
        <a href="#">Kids Face Wash</a>
      </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn buttons">Collections</button>
        <div class="dropdownContent">
        <a href="#">Activated Charcoal</a>
        <a href="#">Aloe Vera</a>
        <a href="#">Rice water</a>
        <a href="#">Amazon Rainforest</a>
        <a href="#">Apple Cider Vinegar</a>
        <a href="#">Argan Oil</a>
        <a href="#">Coconut</a>
        <a href="#">Men's Care</a>
        <a href="#">Red Onion Black Seed Oil</a>
        <a href="#">Himalayan Rose</a>
        <a href="#">Super Hero</a>
        <a href="#">Ubtan</a>
        <a href="#">Vitamin C</a>
        <a href="#">Green Tea & Tea Tree</a>
      </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn buttons">Deals</button>
        <div class="dropdownContent"></div>
      </div>
      <div class="dropdown">
        <button class="dropbtn buttons">Wellness</button>
        <div class="dropdownContent">
        <a href="#">Hair Vanish</a>
        <a href="#">Essential Oil</a>
        <a href="#">Women Hygiene</a>
      </div>
      </div>
    </div>
  </div>
</div>


<div id="mySidenav" class="sidenav">
  <div id="sideHeader">
      <img width="30px" src="images/cart-icon.png">
      <h1 style="margin-top: 5px; color: #746661;">SHOPPING CART</h1>
      <img style="margin-top: 5px;" width="40px" height="40px" src="images/remove-icon.png" id="close" />
  </div>
  <div id="cartItems">
      <p style = "color: #9F9F9F;">No product is in the cart.</p>
  </div>
  <div id="checkout">
  <hr>
  <div id="total">
  <div><h1>Total:</h1></div><div><h1 id="totalPrice">0.00</h1></div></div>
  <div><p style = "color: #B2B2B2;">Taxes and shipping calculated at checkout</p></div>
  <div id="cDiv">
  <a href="checkout/checkoutpage.html"><button id = "cbtn">CHECK OUT</button></a>
  <a href = "home.html">Update Cart</a></div>
  </div>
</div>

<div id="mySearchnav" class="searchnav">
  <div>
      <div id="searchHeader">
          <P style="margin-top: 15px; color: #746661;">WHAT ARE YOU LOOKING FOR?</P>
          <img style="margin-top: 5px;" width="40px" height="40px" src="images/remove-icon.png" id="remove" />
      </div>
      <div id="searchProd">
          <input type= "text" placeholder = "Search Products...">
          <div style = "border-bottom:1px solid">
              <img style="margin-top: 15px;" width = "30px" src="images/search-icon.png">
          </div>
      </div>
  </div>
</div>`;
}

export default nav;
