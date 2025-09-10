

// 1. Product list

let containerData = {
  container: [
    {
      id: 1,
      title: "Bridal Jewellery",
      description: "Bridal Collection made for your special day.",
      image: "../images/collecton1.png",
      price: 3000,
      price1: 4500,
      pricediscount: 20,
    },
    {
      id: 2,
      title: "Casual Jewellery",
      description: "Perfect for everyday style.",
      image: "../images/collecton2.png",
      price: 5000,
      price1: 10000,
      pricediscount: 20,
    },
    {
      id: 3,
      title: "Casual Jewellery",
      description: "Perfect for everyday style.",
      image: "../images/collecton3.png",
      price: 2000,
      price1: 3000,
      pricediscount: 24,
    },
    {
      id: 4,
      title: "Daily Wear Jewellery",
      description: "Daily Wear Jewellery for a classy everyday look..",
      image: "../images/collecton4.png",
      price: 900,
      price1: 1200,
      pricediscount: 24,
    },
    {
      id: 5,
      title: "Daily Wear Jewellery",
      description: "Daily Wear Jewellery for a classy everyday look..",
      image: "../images/collecton5.png",
      price: 900,
      price1: 1200,
      pricediscount: 24,
    },
    {
      id: 6,
      title: "Daily Wear Jewellery",
      description: "Daily Wear Jewellery for a classy everyday look..",
      image: "../images/collecton6.png",
      price: 900,
      price1: 1200,
      pricediscount: 24,
    },
    {
      id: 7,
      title: "Daily Wear Jewellery",
      
      image: "../images/collecton7.png",
      price: 900,
      price1: 1200,
      pricediscount: 24,
    },
    {
      id: 8,
      title: "Daily Wear Jewellery",
      description: "Daily Wear Jewellery for a classy everyday look..",
      image: "../images/collecton8.png",
      price: 900,
      price1: 1200,
      pricediscount: 24,
    },
    {
      id: 9,
      title: "Daily Wear Jewellery",
      description: "Daily Wear Jewellery for a classy everyday look..",
      image: "../images/collecton9.png",
      price: 900,
      price1: 1200,
      pricediscount: 24,
    },
  ],
};

let data = containerData.container; // your products array
// 2. Load Cart
onLoad(data);

function onLoad(data) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartLeft = document.querySelector(".cart-left");


   // Only those products which are in cart
    let cartData = data.filter((item) => cart.includes(item.id));
  
  // Update cart count
  if (cart.length !== 0)
  document.querySelector(".bag-count").textContent = cart.length;


  // Make HTML
  let items = ``;
  cartData.forEach((item) => {
    items += `
      <div class="cart-lefts">
          <i class="fa-solid fa-circle-xmark" data-id="${item.id}"></i>
          <img src="${item.image}" alt="" />
          <div class="cart-detalis">
            <h2>${item.title}</h2>
            <div class="price">₹${item.price}
              
              <span class="price-small">₹${item.price1}</span>
            </div>

            <div class="price-discount">${item.pricediscount}%off</div>
          </div>
        </div> 
    `;
  });

  // Show items in cart-left box
  cartLeft.innerHTML = items;

  // Add to cart functionality
  const buttons = document.querySelectorAll(".fa-circle-xmark");

   // Remove item when 'x' clicked
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = Number(btn.getAttribute("data-id"));

      cart = cart.filter((i) => id != i); // Remove from cart
      localStorage.setItem("cart", JSON.stringify(cart)); // Save new cart
          
     
    onLoad(data);  // Reload cart
     
     
    });
  });
}
