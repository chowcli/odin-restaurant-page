function footerDom() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const p = document.createElement("p");
  p.classList.add("copyright");
  p.textContent = `© ${new Date().getFullYear()} Wing Wanderer`;

  footer.appendChild(p);

  return footer;
}

function appendFooter(content) {
  const footer = footerDom();

  content.appendChild(footer);
}

export default appendFooter;
