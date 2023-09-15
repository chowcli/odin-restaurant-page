import {
  introSection as introData,
  aboutSection as aboutData,
} from "../page_data/home-data.js";

function introDOM(main) {
  const introSection = document.createElement("div");
  introSection.classList.add("intro-section");

  const introTitle = document.createElement("h1");
  introTitle.setAttribute("id", "intro-title");
  introTitle.textContent = introData.title;

  const introContent = document.createElement("p");
  introContent.setAttribute("id", "intro-content");
  introContent.textContent = introData.content;

  introSection.appendChild(introTitle);
  introSection.appendChild(introContent);

  main.appendChild(introSection);
}

function aboutDOM(main) {
  const aboutSection = document.createElement("div");
  aboutSection.classList.add("about-section");

  const aboutTitle = document.createElement("h1");
  aboutTitle.setAttribute("id", "about-title");
  aboutTitle.textContent = aboutData.title;

  const aboutContent = document.createElement("div");
  aboutContent.setAttribute("id", "about-content");

  for (let i = 0; i < 5; i++) {
    const element = document.createElement("p");
    element.textContent = aboutData.content[i];

    aboutContent.appendChild(element);
  }

  aboutSection.appendChild(aboutTitle);
  aboutSection.appendChild(aboutContent);

  main.appendChild(aboutSection);
}

function homeDOM(main) {
  introDOM(main);
  aboutDOM(main);

  return main;
}

export default homeDOM;
