// Get references to the select elements
const categorySelect = document.getElementById("Crop_types");
const crop_name_Select = document.getElementById("Crop_names");

// crop_names for each crop_type
const crop_names = {
  Kharif: [
    "Sugarcane",
    "Cotton",
    "Papaya",
    "Banana",
    "Coconut",
    "Apple",
    "Pomegranate",
    "Mango",
    "Watermelon",
    "Coffee",
    "Turmeric",
    "Okra",
  ],
  Rabi: [
    "Pineapple",
    "Tomato",
    "Spinach",
    "Peas",
    "Cauliflower",
    "Rubber",
    "Sunflower",
    "Beetroot",
    "Brinjal",
    "Strawberry",
    "Onion",
    "Capsicum",
    "Guava",
    "Litchi",
    "Jasmine",
    "Gerbera",
    "Carnation",
    "Cloves",
  ],
  Zaid: [
    "Watermelon",
    "Bitter Gourd",
    "Cotton",
    "Pumpkin",
    "Strawberry",
    "Cucumber",
    "Tomato",
  ],
  Others: ["Rose",
    "Anthurium",
    "Orchids",
    "Marigold",
    "Orchids",
    "Teakwood",
    "Dahlia",
    "Mint",
    "Cashew Nut",
    "Ridge Gourd",
    ],
};

// Function to update the brand options based on the selected category
function updateBrandOptions() {
  const selectedCategory = categorySelect.value;
  const brandOptions =crop_names[selectedCategory];

  // Clear existing options
  crop_name_Select.innerHTML = "";

  // Add new options
  brandOptions.forEach((brand) => {
    const option = document.createElement("option");
    option.text = brand;
    option.value = brand;
    crop_name_Select.appendChild(option);
  });
}

// Add an event listener to the category select element
categorySelect.addEventListener("change", updateBrandOptions);

// Initial call to populate the brand options based on the initial category selection
updateBrandOptions();
