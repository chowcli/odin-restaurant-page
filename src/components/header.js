function createLiElement(ul) {
  const liTextContent = ["Home", "Menu", "Contact"];
  for (let i = 0; i < 3; i++) {
    const element = document.createElement("li");
    element.classList.add("link");
    element.setAttribute("id", `site-${liTextContent[i].toLowerCase()}`);

    const a = document.createElement("a");
    a.textContent = liTextContent[i];

    element.appendChild(a);
    ul.appendChild(element);
  }
}

function headerDOM() {
  const header = document.createElement("header");
  header.classList.add("header");

  const navBar = document.createElement("nav");
  navBar.setAttribute("id", "site-navBar");

  const shopName = document.createElement("span");
  shopName.setAttribute("id", "site-name");
  shopName.textContent = "Wing Wanderer";

  const ul = document.createElement("ul");
  createLiElement(ul);

  navBar.appendChild(shopName);
  navBar.appendChild(ul);
  header.appendChild(navBar);

  return header;
}

function appendHeader(content) {
  const header = headerDOM();

  content.appendChild(header);
}

export default appendHeader;
