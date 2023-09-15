import { dish_images, dishInfo } from "../page_data/menu-data.js";

function createItemsDOM(itemContainer) {
  for (let i = 0; i < 10; i++) {
    const item = document.createElement("div");
    item.classList.add("item");

    // create image element
    const image = new Image();
    image.src = dish_images[i];

    // create item info container
    const dish_info = document.createElement("div");
    dish_info.classList.add("item");

    // div to enclose the upper part container name and price
    const name_priceContainer = document.createElement("div");
    name_priceContainer.classList.add("upper");

    const name = document.createElement("h4");
    name.setAttribute("id", "dish-name");
    name.textContent = dishInfo.name[i];

    const price = document.createElement("span");
    price.setAttribute("id", "dish-price");
    price.textContent = dishInfo.price[i];

    name_priceContainer.appendChild(name);
    name_priceContainer.appendChild(price);
    /////////////

    const description = document.createElement("p");
    description.setAttribute("id", "dish-description");
    description.textContent = dishInfo.description[i];

    // append all info into dish_info
    dish_info.appendChild(name_priceContainer);
    dish_info.appendChild(description);

    item.appendChild(image);
    item.appendChild(dish_info);

    itemContainer.appendChild(item);
  }
}

function itemsContainerDOM() {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("menu-items");

  createItemsDOM(itemContainer);

  return itemContainer;
}

function menuDOM() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuTitle = document.createElement("h1");
  menuTitle.setAttribute("id", "menu-title");
  menuTitle.textContent = "The Wing Feast Delight";

  const itemContainer = itemsContainerDOM();

  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(itemContainer);

  return menuContainer;
}

export default menuDOM;
