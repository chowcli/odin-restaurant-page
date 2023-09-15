import appendHeader from "./header.js";
import appendFooter from "./footer.js";
import homeDOM from "./pages/home.js";
import menuDOM from "./pages/menu.js";

function switchMainContent(mainElement, content) {
  const navBar = document.getElementById("site-navBar");

  navBar.addEventListener("click", event => {
    const { target } = event;

    if (target.matches("#site-name") || target.matches("#site-home")) {
      if (mainElement.classList.contains("home")) return;

      if (mainElement.classList.contains("menu")) {
        mainElement.classList.replace("menu", "home");
      }
      if (mainElement.classList.contains("contact")) {
        mainElement.classList.replace("contact", "home");
      }

      mainElement.innerHTML = "";
      homeDOM(mainElement);
      return;
    }

    if (target.matches("#site-menu")) {
      if (mainElement.classList.contains("menu")) return;

      if (mainElement.classList.contains("home")) {
        mainElement.classList.replace("home", "menu");
      }
      if (mainElement.classList.contains("contact")) {
        mainElement.classList.replace("contact", "menu");
      }

      mainElement.innerHTML = "";
      mainElement.appendChild(menuDOM());
      return;
    }

    if (target.matches("#site-contact")) {
      if (mainElement.classList.contains("contact")) return;

      if (mainElement.classList.contains("home")) {
        mainElement.classList.replace("home", "contact");
      }
      if (mainElement.classList.contains("menu")) {
        mainElement.classList.replace("menu", "contact");
      }

      mainElement.innerHTML = contactDOM();
      return;
    }
  });
}

function initializeWebsite() {
  const content = document.getElementById("content");
  const mainElement = document.createElement("main");
  mainElement.classList.add("main", "home"); // use homeDOM as default

  // initialize website with header main and footer content
  appendHeader(content);
  content.appendChild(homeDOM(mainElement));
  appendFooter(content);

  switchMainContent(mainElement, content);
}

export default initializeWebsite;
