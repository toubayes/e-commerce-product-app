let cart =document.querySelector(".cart");
let display =document.querySelector(".add");
let added=document.querySelector(".my-product");
let bars =document.querySelector(".fa-bars");
let left =document.querySelector(".fa-chevron-left");
let right =document.querySelector(".fa-chevron-right");
let addtocart =document.querySelector(".added");
let plus =document.querySelector(".plus");
let numitem=document.querySelector(".number span")
let moins =document.querySelector(".moin");
let big = document.getElementById('mainImage');
let images = document.querySelectorAll('.others img');
console.log("its work");

let list=document.querySelector("nav ul");
//  display art 
let isCartVisible = false;

display.addEventListener("click", () => {
  if (isCartVisible) {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
  }

  isCartVisible = !isCartVisible;
}); 


//  increment et decrement numbre item
let num = 0;
numitem.innerHTML = 0;

plus.addEventListener("click", () => {
  num += 1;
  numitem.innerHTML = num;
});

moins.addEventListener("click", () => {
  num -= 1;
  num = Math.max(num, 0);
  numitem.innerHTML = num;
});
// add to cart 
addtocart.addEventListener("click", ()=>{
  // Check if the container has a child <p> element
  const existingParagraph = added.querySelector('p');

  if (existingParagraph && existingParagraph.innerHTML.trim() !== '') {
    // Remove the existing <p> element
    existingParagraph.remove();
  }
    let newProduct = document.createElement('div');
    newProduct.classList.add('product');
    newProduct.innerHTML =`
    <img src="../images/image-product-1-thumbnail.jpg" alt=""/>
    <div class=desscrption">
    <p>Fall Limited Edition Sneakers </p>
    <span class="price">$150.00 * ${num}</span>
    </div>
    <i class="fa-solid fa-trash"></i>`
  
  // Create the Checkout button
  let checkoutButton = document.createElement('button');
  checkoutButton.textContent = 'Checkout';
    // Append the new product to the container
    added.appendChild(newProduct);
    added.appendChild(checkoutButton)
    

})
// image selected
images.forEach((img) => {
    img.addEventListener('click', () => {
      // Remove "selected" class from all images
      images.forEach((otherImg) => {
        otherImg.classList.remove('selected');
      });
      
      // Add "selected" class to the clicked image
      img.classList.add('selected');
      big.src = img.src;

      console.log("img" +img.src)
    });
  });


//  move the slider show 
let arrayofimgs = [
           "images/image-product-1.jpg", 
           "images/image-product-2.jpg",
           "images/image-product-3.jpg",
            "images/image-product-4.jpg"];
let counter = 0;

left.addEventListener("click", () => {

  playSlider();
});
right.addEventListener("click", () => {
  playSlider();
  
});
 function playSlider() {
    if (counter < arrayofimgs.length - 1) {
        counter++;
    }
    else {
        counter = 0;
    }
    big.src = arrayofimgs[counter];
}

//  display the list 
bars.addEventListener("click", () => {
  list.classList.toggle("show");

});