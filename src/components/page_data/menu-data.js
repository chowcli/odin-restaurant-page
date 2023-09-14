// create an array store all relative path files of image which start with pic
const dish_images = require
  .context("../../assets/images", false, /^\.\/pic.*$/)
  .keys();

const dishInfo = {
  name: [
    "Classic Chicken Wings",
    "Chicken Tenders",
    "Buffalo Chicken Dip",
    "Fried Chicken Platter",
    "Grilled Chicken Breast",
    "Chicken Sandwich",
    "Chicken Parmesan",
    "BBQ Chicken Pizza",
    "Chicken and Waffles",
    "Chicken Stir-Fry",
  ],

  price: [
    "$8.99",
    "$7",
    "$9.7",
    "$14.29",
    "$12.79",
    "$9",
    "$15",
    "$14",
    "$11.99",
    "$10.67",
  ],

  description: [
    "Crispy chicken wings served with your choice of sauce",
    "Tender chicken strips with a side of dipping sauces",
    "Creamy buffalo chicken dip served with tortilla chips",
    "Crispy fried chicken served with mashed potatoes and coleslaw",
    "Juicy grilled chicken breast with your choice of marinade",
    "A delicious chicken sandwich with lettuce, tomato, and mayo",
    "Breaded chicken cutlet topped with marinara sauce and melted cheese, served with spaghetti",
    "BBQ sauce, grilled chicken, red onions, and mozzarella cheese (12-inch)",
    "Crispy fried chicken served with fluffy waffles and maple syrup",
    "Chicken and mixed vegetables stir-fried in a savory sauce, served over rice",
  ],
};

export { dish_images, dishInfo };
