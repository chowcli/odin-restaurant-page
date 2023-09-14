import appendHeader from "./header.js";
import appendFooter from "./footer.js";
import appendMain_Home from "./pages/home.js";

const content = document.getElementById("content");
appendHeader(content);
// appendMain_Home(content);
appendFooter(content);
