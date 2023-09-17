import address from "../../assets/icon/address.svg";
import contact from "../../assets/icon/contact.svg";
import hours from "../../assets/icon/hours.svg";

function locationDOM(storeInfo) {
  const icon = new Image();
  icon.classList.add("icon");
  icon.src = address;

  const p1 = document.createElement("p");
  p1.textContent = "123 Wing Street";

  const p2 = document.createElement("p");
  p2.textContent = "Cityville, CA 12345";

  const location = document.createElement("div");
  location.id = "location";

  location.appendChild(icon);
  location.appendChild(p1);
  location.appendChild(p2);

  storeInfo.appendChild(location);
}

function openHoursDOM(storeInfo) {
  const openHour = document.createElement("div");
  openHour.id = "open-hours";

  const icon = new Image();
  icon.classList.add("icon");
  icon.src = hours;
  openHour.appendChild(icon);

  const divInfo = {
    h5: ["Mon - Fri", "Saturday", "Sunday"],
    p: ["11:00 AM - 10:00 PM", "12:00 PM - 11:00 PM", "12:00 PM - 9:00 PM"],
  };

  for (let i = 0; i < 3; i++) {
    const h5 = document.createElement("h5");
    h5.id = "week-day";
    h5.textContent = divInfo.h5[i];

    const p = document.createElement("p");
    p.id = "hour";
    p.textContent = divInfo.p[i];

    const div = document.createElement("div");
    div.appendChild(h5);
    div.appendChild(p);

    openHour.appendChild(div);
  }

  storeInfo.appendChild(openHour);
}

function contactInfoDOM(storeInfo) {
  const icon = new Image();
  icon.classList.add("icon");
  icon.src = contact;

  const p1 = document.createElement("p");
  p1.id = "phone-num";
  p1.textContent = "(555) 123-4567";

  const p2 = document.createElement("p");
  p2.id = "email";
  p2.textContent = "info@wingwanderer.com";

  const div = document.createElement("div");
  div.id = "contact-info";

  div.appendChild(icon);
  div.appendChild(p1);
  div.appendChild(p2);

  storeInfo.appendChild(div);
}

function storeInfoDOM() {
  const storeInfo = document.createElement("div");
  storeInfo.classList.add("store-info");

  locationDOM(storeInfo);
  openHoursDOM(storeInfo);
  contactInfoDOM(storeInfo);

  return storeInfo;
}

function contactDOM() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactTitle = document.createElement("h1");
  contactTitle.id = "contact-title";
  contactTitle.textContent = "Contact Us";

  const storeInfo = storeInfoDOM();

  contactContainer.appendChild(contactTitle);
  contactContainer.appendChild(storeInfo);

  return contactContainer;
}

export default contactDOM;
