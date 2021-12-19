function nav() {
  return ` <div id="nav">
  <div id="topDiv">
    <div id="toprightDiv">
      <div id="logoDiv">
        <img width="140px" style="border-bottom: 5px solid #CEA185; padding-bottom: 2%;" src="images/WOW_logo-01.png" />
        <img width="140px" style="padding-bottom: 2%;"src="images/WOW_logo-02.png" />
        <img width="140px" style="padding-bottom: 2%;" src="images/WOW_logo-03.png" />
      </div>
    </div>
    <div id="topLeaftDiv">
      <div id="btns">
        <button class="buttons btn">Sign In</button>
        /
        <button class="buttons btn">Register</button>
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
        <button class="dropbtn buttons">Nutrition & Health</button>
        <div class="dropdownContent">
          <a href="#">Omega Fatty Acids</a>
          <a href="#">Multivitamins</a>
          <a href="#">Weight Management</a>
          <a href="#">Immunity Care</a>
          <a href="#">Detox</a>
          <a href="#">Gut Health</a>
          <a href="#">Protiens</a>
          <a href="#">Antioxidants</a>
          <a href="#">Men's Health</a>
          <a href="#">Vitamins</a>
          <a href="#">Skin & Hair Nutrition</a>
          <a href="#">Specialty Supplements</a>
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
      <h1 style="margin-top: 5px; color: #746661;">SHOPING CART</h1>
      <img style="margin-top: 5px;" width="40px" height="40px" src="images/remove-icon.png" id="close" />
  </div>
  <div id="mpt">
      <p>Your cart is currently empty.</p>
      <a href="index.html">Start Shopping &#8594</a>
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
