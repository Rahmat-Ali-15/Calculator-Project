const darkModeBtn = document.querySelector(".dark_mode");
const body = document.body;
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

// When the page loads, read from localStorage and apply
window.addEventListener("load", () => {
  const savedMode = localStorage.getItem("theme"); // "dark" or "light"
  if (savedMode === "dark") {
    enableDarkMode();
  } else {
    enableLightMode();
  }
});

darkModeBtn.addEventListener("click", () => {
  // Check current state directly from body
  if (body.classList.contains("dark")) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add("dark");
  sun.style.display = "none";
  moon.style.display = "block";
  darkModeBtn.classList.add("darkModeJs");
  localStorage.setItem("theme", "dark");
}

function enableLightMode() {
  body.classList.remove("dark");
  sun.style.display = "block";
  moon.style.display = "none";
  darkModeBtn.classList.remove("darkModeJs");
  localStorage.setItem("theme", "light");
}



// get all buttons
const input = document.querySelector("#input");
const allItems = document.querySelectorAll(".items");

allItems.forEach(item => {
  item.addEventListener("click", () => {
    const value = item.innerText.trim(); // get the button text
    
    if (value === "C") {
      // clear button
      input.value = "";
    } 
    else if (value === "=") {
      // evaluate the expression
      try {
        input.value = eval(input.value);
      } catch {
        input.value = "Error";
      }
    } 
    else {
      // append value
      input.value += value;
    }
  });
});
