import appendHeader from "./header";
import appendFooter from "./footer";
import appendMain_Home from "./pages/home";

const content = document.getElementById("content");
appendHeader(content);
appendMain_Home(content);
appendFooter(content);
