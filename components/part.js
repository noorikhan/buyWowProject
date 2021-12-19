function componentData(){
   let arr=[];
   function object(img1,img2,img3,img4,title,Des,banImg,DesTitle,leftImg1,leftDes1,leftImg2,leftDes2,rightImg1,rightDes1,rightImg2,rightDes2){
       this.img1=img1;
       this.img2=img2;
       this.img3=img3;
       this.img4=img4;
       this.title=title;
       this.Des=Des;
       this.BanImg=banImg;
       this.DesTitle=DesTitle;
       this.leftImg1=leftImg1;
       this.leftDes1=leftDes1;
       this.leftImg2=leftImg2;
       this.leftDes2=leftDes2;
       this.rightImg1=rightImg1;
       this.rightDes1=rightDes1;
       this.rightImg2=rightImg2;
       this.rightDes2=rightDes2;
       arr.push(this);
   }

  new object("https://cdn.shopify.com/s/files/1/1375/4957/products/omega-3-capsules_1200x.jpg?v=1625757030","https://cdn.shopify.com/s/files/1/1375/4957/products/Omega3_720x.jpg?v=1631651546","https://cdn.shopify.com/s/files/1/1375/4957/products/omega-3-fish-oil-capsules-bottle-supports-in-healthy-heart-and-joint_720x.jpg?v=1625757076",
   "https://cdn.shopify.com/s/files/1/1375/4957/products/omega-fish-oil-capsules-bottle-nutritional-information_720x.jpg?v=1625757115","Omega 3 Capsules with Fish oil - 1000mg Triple Strength","Omega 3 fish oil capsules by WOW Life Science - A supplement for a healthy heart and body. Omega 3 fish oil capsules have Eicosapentaenoic acid (EPA) and Docosahexaenoic acid (DHA). Our Omega 3 capsules have the optimal 3:2 EPA: DHA ratio. It gives you 1000mg of a pure blend of Omega 3 - 550mg EPA, 350 mg DHA and 100 mg other Omega 3. Every capsule of Omega 3 packs 1000mg of purest EPA, DHA and other omega 3's which provide with optimal heart and joint friendly nutrition which regular day-to-day food may lack.","https://cdn.shopify.com/s/files/1/1375/4957/files/omega-3-1000mg-capsules-banner_970x300.jpg?v=1625757351","WHY OMEGA 3 FISH OIL CAPSULES ARE GOOD FOR HEART DISEASES AND JOINTS","https://cdn.shopify.com/s/files/1/1375/4957/files/omega-3-capsules-helps-cardiovascular_480x480.png?v=1625725231","Omega 3 capsules helps cardiovascular health, lower cholesterol & triglyceride levels","https://cdn.shopify.com/s/files/1/1375/4957/files/omega-3-capsules-helps-improve-bone_480x480.png?v=1625725461","It helps improve bone and joint health","https://cdn.shopify.com/s/files/1/1375/4957/files/omega-3-capsules-offers-lubrication_480x480.png?v=1625725382","Offers lubrication to joints and cellular structure","https://cdn.shopify.com/s/files/1/1375/4957/files/omega-3-fish-oil-capsules-support-nervous_system_480x480.png?v=1625725521","Omega 3 fish oil capsules helps support the nervous system and improve nerve health for healthy mind");

   

   return arr;

}

export default componentData;