// Get the sections
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");

// Scroll to the corresponding section when the page loads
window.onload = () => {
  window.location.hash = "#section1";
};

// Scroll to the selected section when a link is clicked
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);

    if (targetId === "section1") {
      section1.scrollIntoView({ behavior: "smooth" });
    } else if (targetId === "section2") {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Get the scroll container element
const scrollContainer = document.querySelector(".scroll-container");

// Function to automate horizontal scrolling with infinite loop
function autoScroll() {
  const scrollStep = 2; // Adjust the scrolling speed

  function scroll() {
    scrollContainer.scrollLeft += scrollStep;

    // Check if we have reached the end
    if (
      scrollContainer.scrollLeft >=
      scrollContainer.scrollWidth - scrollContainer.clientWidth
    ) {
      // Add more content to the container
      const content = document.createElement("img");
      content.textContent = "New Content"; // You can customize this content
      scrollContainer.appendChild(content);

      // Reset the scroll position to the beginning
      scrollContainer.scrollLeft = 0;
    }
  }

  // Set up continuous scrolling
  setInterval(scroll, 10);
}

// Start the horizontal auto-scroll when the page loads
window.onload = () => {
  autoScroll();
};
