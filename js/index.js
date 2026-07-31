var meals = [
  {
    name: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    rating: 4.7,
    reviewsCount: 312,
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Asian",
    image: "./images/thai-green-curry.webp",
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "26g",
      carbs: "22g",
      fat: "26g",
      fiber: "5g",
      sodium: "890mg",
    },
    chefTips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with eggs, cheese, and crispy pancetta",
    rating: 4.9,
    reviewsCount: 528,
    prepTime: "10 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Italian",
    image: "./images/spaghetti-carbonara.jpg",
    ingredients: [
      "400g spaghetti",
      "150g pancetta, diced",
      "4 large eggs",
      "100g parmesan cheese, grated",
      "2 cloves garlic, minced",
      "Black pepper, to taste",
      "Salt, to taste",
    ],
    instructions: [
      "Bring a large pot of salted water to boil and cook spaghetti until al dente.",
      "While pasta cooks, fry pancetta in a pan until crispy.",
      "Whisk eggs and parmesan together in a bowl.",
      "Drain pasta, reserving some pasta water, then mix pasta with pancetta.",
      "Remove from heat and quickly stir in the egg mixture, adding pasta water until creamy.",
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "28g",
      carbs: "62g",
      fat: "24g",
      fiber: "3g",
      sodium: "740mg",
    },
    chefTips: [
      "Remove pan from heat before adding eggs to avoid scrambling",
      "Use freshly grated parmesan for the best texture",
      "Save pasta water — it's key to a silky sauce",
      "Serve immediately while hot",
    ],
  },
  {
    name: "Chicken Fajitas",
    description:
      "Sizzling chicken strips with peppers and onions in warm tortillas",
    rating: 4.6,
    reviewsCount: 401,
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    category: "Mexican",
    image: "./images/chicken-fajitas.jpg",
    ingredients: [
      "500g chicken breast, sliced into strips",
      "2 bell peppers, sliced",
      "1 large onion, sliced",
      "2 tablespoons fajita seasoning",
      "2 tablespoons olive oil",
      "8 small flour tortillas",
      "1 lime, juiced",
    ],
    instructions: [
      "Toss chicken strips with fajita seasoning and lime juice.",
      "Heat oil in a large skillet over high heat.",
      "Cook chicken until browned and cooked through, about 6 minutes.",
      "Add peppers and onions, cook until slightly charred, about 5 minutes.",
      "Warm tortillas and serve chicken and vegetables inside.",
    ],
    nutrition: {
      calories: "410 kcal",
      protein: "32g",
      carbs: "38g",
      fat: "14g",
      fiber: "4g",
      sodium: "620mg",
    },
    chefTips: [
      "Slice chicken against the grain for tenderness",
      "Don't overcrowd the pan or the chicken will steam instead of sear",
      "Warm tortillas directly over a flame for extra flavor",
      "Add fresh cilantro and salsa for extra freshness",
    ],
  },
  {
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    rating: 4.7,
    reviewsCount: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Mediterranean",
    image: "./images/french-onion-soup.jpg",
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    instructions: [
      "Melt butter in a large pot over medium-low heat.",
      "Add onions and cook slowly, stirring occasionally, for 40 minutes until deeply caramelized.",
      "Add white wine and scrape up any browned bits.",
      "Add beef broth, bay leaves, and thyme, then simmer for 15 minutes.",
      "Ladle into bowls, top with baguette and cheese, then broil until bubbly and golden.",
    ],
    nutrition: {
      calories: "390 kcal",
      protein: "14g",
      carbs: "32g",
      fat: "20g",
      fiber: "3g",
      sodium: "980mg",
    },
    chefTips: [
      "Low and slow is key for properly caramelized onions",
      "Deglaze with wine to capture all the flavor from the pot",
      "Use a broiler-safe bowl for the cheese topping step",
      "Gruyère melts best, but any good melting cheese works",
    ],
  },
  {
    name: "Classic Beef Tacos",
    description:
      "Seasoned ground beef tacos topped with fresh lettuce and cheese",
    rating: 4.8,
    reviewsCount: 367,
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    category: "Mexican",
    image: "./images/beef-tacos.jpg",
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "2 tablespoons taco seasoning",
      "1 cup lettuce, shredded",
      "1 cup cheddar cheese, shredded",
      "1 tomato, diced",
      "1/2 cup sour cream",
    ],
    instructions: [
      "Brown the ground beef in a skillet over medium heat.",
      "Drain excess fat, then stir in taco seasoning with a splash of water.",
      "Simmer for 5 minutes until the sauce thickens.",
      "Warm the taco shells according to package instructions.",
      "Fill shells with beef and top with lettuce, cheese, tomato, and sour cream.",
    ],
    nutrition: {
      calories: "460 kcal",
      protein: "27g",
      carbs: "30g",
      fat: "25g",
      fiber: "3g",
      sodium: "710mg",
    },
    chefTips: [
      "Drain the fat well to avoid a greasy filling",
      "Warm taco shells just before serving so they stay crisp",
      "Add hot sauce or jalapeños for extra heat",
      "Double the seasoning mix and store extra for next time",
    ],
  },
];

function getRandomMeal() {
  var randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
}

function displayMeal(meal) {
  document.getElementById("meal-image").src = meal.image;
  document.getElementById("meal-name").textContent = meal.name;
  document.getElementById("meal-description").textContent = meal.description;
  document.getElementById("meal-rating").textContent = meal.rating;
  document.getElementById("meal-reviews").textContent =
    `(${meal.reviewsCount} reviews)`;
  document.getElementById("meal-prep-time").textContent = meal.prepTime;
  document.getElementById("meal-cook-time").textContent = meal.cookTime;
  document.getElementById("meal-servings").textContent = meal.servings;
  document.getElementById("meal-difficulty").textContent = meal.difficulty;
  document.getElementById("meal-category").textContent = meal.category;

  document.getElementById("meal-calories").textContent =
    meal.nutrition.calories;
  document.getElementById("meal-protein").textContent = meal.nutrition.protein;
  document.getElementById("meal-carbs").textContent = meal.nutrition.carbs;
  document.getElementById("meal-fat").textContent = meal.nutrition.fat;
  document.getElementById("meal-fiber").textContent = meal.nutrition.fiber;
  document.getElementById("meal-sodium").textContent = meal.nutrition.sodium;


  var ingredientsHTML = "";
for (var i = 0; i < meal.ingredients.length; i++) {
  ingredientsHTML += `<li class="ingredient-item d-flex align-items-center gap-3 mb-3">
                          <span class="ingredient-number">${i + 1}</span>
                          <span>${meal.ingredients[i]}</span>
                        </li>`;
}
document.getElementById("ingredients-panel").innerHTML = ingredientsHTML;

var instructionsHTML = "";
for (var i = 0; i < meal.instructions.length; i++) {
  instructionsHTML += `<li
                      class="instruction-item d-flex align-items-center mb-4 gap-3"
                    >
                      <span class="instruction-number rounded-4">${i + 1}</span>
                      <span
                        >${meal.instructions[i]}</span>
                    </li>`;
}
document.getElementById("instructions-panel").innerHTML = instructionsHTML;

var chefTipsHTML = "";
for (var i = 0; i < meal.chefTips.length; i++) {
  chefTipsHTML += `<li
                      class="chef-tip-item d-flex align-items-center gap-3 rounded-3 mb-4 py-3 px-3"
                    >
                      <span class="tip-check">
                        <i class="fa-solid fa-check fs-10p"></i>
                      </span>
                      <span
                        >${meal.chefTips[i]}</span>
                    </li>`;
}
document.getElementById("chef-tips-panel").innerHTML = chefTipsHTML;

}



displayMeal(getRandomMeal());

document.getElementById("new-recipe-btn").addEventListener("click", function() {
  displayMeal(getRandomMeal());
});