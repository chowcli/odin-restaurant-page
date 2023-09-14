import appendHeader from "./header.js";
import appendFooter from "./footer.js";
import appendMain_Home from "./pages/home.js";
import appendMain_Menu from "./pages/menu.js";

const content = document.getElementById("content");
appendHeader(content);
// appendMain_Home(content);
appendMain_Menu(content);
appendFooter(content);
