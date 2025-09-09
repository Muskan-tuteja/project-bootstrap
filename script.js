let containerData = {
  container: [
    {
      id: 1,
      title: "Bridal Jewellery",
      description: "Bridal Collection made for your special day.",
      image: "images/collecton1.png",
      price: 3000,
      price1: 1500,
      pricediscount: 20,
    },
    {
      id: 2,
      title: "Casual Jewellery",
      description: "Perfect for everyday style.",
      image: "images/collecton2.png",
      price: 10000,
      price1: 4500,
      pricediscount: 20,
    },
    {
      id: 3,
      title: "Casual Jewellery",
      description: "Perfect for everyday style.",
      image: "images/collecton2.png",
      price: 2000,
      price1: 1000,
      pricediscount: 24,
    },
  ],
};

let data = containerData.container;
onLoad(data);

function onLoad(data) {
  let container = document.querySelector("#row1");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length !== 0)
    document.querySelector(".bag-count").textContent = cart.length;
  console.log(cart.length)
  let items = ``;

  data.forEach((item) => {
    items += `
     <div class="col">
          <div class="card shadow-sm" data-aos="zoom-in-down">
            <img src="${item.image}" alt="" />
            <div class="card-body">
              <h5 class="card-title fw-bold">${item.title}</h5>
              <p class="card-text text-muted">
                ${item.description}.
              </p>
              <div class="price d-flex ">
               <p>₹${item.price}</p>
               <span class="price-small">₹${item.price1}</span>
               <span class="price-discount">${item.pricediscount}%</span>
              </div>
            <button class="button" data-id="${item.id}">Explore</button>


             
            </div>
          </div>
        </div>`;
  });
  container.innerHTML = items;

  let buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let but = Number(button.getAttribute("data-id"));

      if (!cart.includes(but)) {
        cart.push(but);
        document.querySelector(".bag-count").textContent = cart.length;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    });
  });
}
