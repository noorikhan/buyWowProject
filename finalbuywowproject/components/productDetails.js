function productDetails(img1,img2,img3,img4,title,Des,BanImg,DesTitle,leftImg1,leftDes1,leftImg2,leftDes2,rightImg1,rightDes1,rightImg2,rightDes2){
    return `<div id="content-wrapper">

    <div class="column1">
        <div id="img-container">
            <div id="lens"></div>
            <img id=featured src=${img1}>
        </div>

        <div id="slide-wrapper" >
            <img id="slideLeft" class="arrow" src="images/arrow-left.png">

            <div id="slider">
                <img class="thumbnail active" src=${img1}>
                <img class="thumbnail" src=${img2}>
                <img class="thumbnail" src=${img3}>
                <img class="thumbnail" src=${img4}>
            </div>

            <img id="slideRight" class="arrow" src="images/arrow-right.png">
        </div>
    </div>

    <div class="column2">
        <h1>${title}</h1>
        <div style="margin-top:1.15rem;">
            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
            <span style="color: gray;">568 reviews  </span>

        </div>
        <p>${Des}</p>
        <ul class="ul-list">
            <li>Apple cider vinegar is an anti-viral, anti-fungal, anti-septic & anti-glycemic.</li>
            <li>It is rich in natural and healthy vitamins, minerals, antioxidants and enzymes.</li>
            <li>It has numerous uses as a health, wellness and beauty aid.</li>
            <li>Organic apple cider vinegar is a general tonic that helps boost overall health.</li>
            <li>It is made from the real juice of the finest of himalayan apples (not concentrate).</li>
        </ul>

        <p style="color: black;font-size:40px;font-weight: bold;">&#8377;499.00</p>
        <p style="font-size: 14px;">Inclusive of all taxes</p>
        <p style="color:gray; margin-bottom: 10px;">variats</p>
        <span class="content-ml1">700ml</span>
        <span class="content-ml2">400ml</span>
        <div class="btn-container">
            <input value=1 type="number">
            <button id="btn">ADD TO CART</button>
        </div>
    </div>
</div>
<hr style="width: 90%;margin: auto;">
<div class="section2">
    <div style="text-align: center; margin-bottom: 20px;">
        <span style="font-size: 1.25rem;padding: 10px;border-bottom: 1px solid black;">Description</span>
        <span style="font-size: 1.25rem;padding: 10px;">Review</span>
    </div>
    <div>
        <img src=${BanImg} alt="img">
        <div class="banner">
            <p>${Des}
            <br>
            <br>
           Apple cider vinegar by WOW Life Science is the restorative powerhouse 'Mother of Vinegar' that makes the best buy for your good health. It has been in use for thousands of years as a general tonic and folk remedy to help with healthier weight loss, lower blood sugar, better digestion, more energy, improved joint health plus better skin, hair & oral hygiene, and much more. Apple cider vinegar is a general tonic that helps boost over-all health.
             <br>   
             <br>
            You Can Buy Our Apple Cider Vinegar At Best Price From : Amazon, Flipkart, Nykaa, Purplle</p>
        </div>
    </div>
  </div>
  <hr style="width: 90%;margin: auto;">
        <div class="section3">
              <h2 style="text-align: center; padding: 10px;">${DesTitle}</h2>
              <div class="product-container">
                  <div class="left-container">
                      <div class="left-upper">
                          <img src=${leftImg1} alt="img">
                          <p>${leftDes1}</p>
                      </div>
                      <hr>
                      <div class="left-lower">
                          <img src=${leftImg2} alt="img">
                          <p>${leftDes2}</p>
                      </div>
                  </div>
                  <div class="middle-container">
                      <img src=${img1} alt="img">
                  </div>
                  <div class="right-container">
                      <div class="right-upper">
                          <img src=${rightImg1} alt="img">
                          <p>${rightDes1}</p>
                      </div>
                      <hr>
                      <div class="right-lower">
                          <img src=${rightImg2} alt="img">
                          <p>${rightDes2}</p>
                      </div>
                  </div>
              </div>
        </div>
        <hr style="width: 90%;margin: auto;">
        <div class="section4">
            <h1 style="text-align: center; padding: 10px;">Related product</h1>
            <div class="section4-container">
                <div id="related-prod">
                    <div class="prod-img">
                        <img id="btn-img"  src="https://cdn.shopify.com/s/files/1/1375/4957/products/onion-hair-oil-bottle_360x.jpg?v=1629864426" alt="img">
                        <div class="prod-icon">
                            <span>QuickShop<i class="fas fa-eye"></i></span>
                            <span>ADD TO CART<i class="fas fa-shopping-cart"></i></span>
                        </div>
                    </div>
                    <div class="related-content">
                        <p style="text-align: center; font-size: 1.05rem;">Onion Hair oil with Black Seed Oil Extracts helps control hair Fail.</p>
                        <div style="margin-top:1.15rem;">
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color: gray;">1568 reviews  </span>
        
                        </div>
                        <p style="color:gray;font-size:20px;font-weight: bold;"> on sale from&#8377;399.00</p>
                    </div>
                </div>
                <div id="related-prod">
                    <div class="prod-img">
                        <img id="btn-img"  src="https://cdn.shopify.com/s/files/1/1375/4957/products/ACV-FW-150-1_360x.jpg?v=1639421612" alt="img">
                        <div class="prod-icon">
                            <span>QuickShop<i class="fas fa-eye"></i></span>
                            <span>ADD TO CART<i class="fas fa-shopping-cart"></i></span>
                        </div>
                    </div>
                    <div class="related-content">
                        <p style="text-align: center; font-size: 1.05rem;">Apple Cider Vinegar Foaming Face Wash with Built-In Foaming Face Brush for Deep Cleansing</p>
                        <div style="margin-top:1.15rem;">
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color: gray;">568 reviews  </span>
        
                        </div>
                        <p style="color:gray;font-size:20px;font-weight: bold;"> on sale from&#8377;399.00</p>
                    </div>
                </div>
                <div id="related-prod">
                    <div class="prod-img">
                        <img id="btn-img"  src="https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-shampoo-1_06d43e8d-ba10-4a36-864a-c7718561972c_360x.jpg?v=1639421745" alt="img">
                        <div class="prod-icon">
                            <span>QuickShop<i class="fas fa-eye"></i></span>
                            <span>ADD TO CART<i class="fas fa-shopping-cart"></i></span>
                        </div>
                    </div>
                    <div class="related-content">
                        <p style="text-align: center; font-size: 1.05rem;">Onion Shampoo for Hair Growth and Hair Fall Control</p>
                        <div style="margin-top:1.15rem;">
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color: gray;">668 reviews  </span>
        
                        </div>
                        <p style="color:gray;font-size:20px;font-weight: bold;"> on sale from&#8377;374.00</p>
                    </div>
                </div>
                <div id="related-prod">
                    <div class="prod-img">
                        <img id="btn-img"  src="https://cdn.shopify.com/s/files/1/1375/4957/products/VitC-FW-150-1_360x.jpg?v=1639421821" alt="img">
                        <div class="prod-icon">
                            <span>QuickShop<i class="fas fa-eye"></i></span>
                            <span>ADD TO CART<i class="fas fa-shopping-cart"></i></span>
                        </div>
                    </div>
                    <div class="related-content">
                        <p style="text-align: center; font-size: 1.05rem;">Vitamin C Face Wash with Built-In Foaming Face Brush for Skin Brightening - 150 ml</p>
                        <div style="margin-top:1.15rem;">
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color:#F6A300;font-size: 20px;">&#9733;</span>
                            <span style="color: gray;">368 reviews  </span>
        
                        </div>
                        <p style="color:gray;font-size:20px;font-weight: bold;"> on sale from&#8377;399.00</p>
                    </div>
                </div>
            </div>
            <div style="text-align: center;margin-top: 30px;">
                    <span style="font-size: 20px;"><i class="fas fa-circle"></i></span>
                    <span style="font-size: 20px;"><i class="far fa-circle"></i></span>
                    <span style="font-size: 20px;"><i class="far fa-circle"></i></span>
            </div>
            
        </div>`
}

export default productDetails;