let data = containerData.container;
onLoad(data);

function onLoad(data) {
  let container = document.querySelector(".container");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let items = ``;
  data.forEach((item) => {
    items += `
`;
  });
  container.innerHTML = items;

  
}
