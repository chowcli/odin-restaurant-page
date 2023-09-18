function footerDom() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const p = document.createElement("p");
  p.classList.add("copyright");

  const a = document.createElement("a");
  a.href = "https://github.com/chowcli/odin-restaurant-page.git";
  a.textContent = `© ${new Date().getFullYear()} Wing Wanderer`;
  p.appendChild(a);

  footer.appendChild(p);

  return footer;
}

function appendFooter(content) {
  const footer = footerDom();

  content.appendChild(footer);
}

export default appendFooter;
