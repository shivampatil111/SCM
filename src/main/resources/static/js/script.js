console.log("Script loaded");
// change page theme start
let currentTheme = getTheme();
document.addEventListener('DOMContentLoaded',() =>{
    changeTheme(currentTheme);
})


function changeTheme(initialTheme) {
    // Set the initial theme
    changePageTheme(initialTheme, null);

    // Change theme button
    const changeThemeButton = document.querySelector("#theme_change_button");

    changeThemeButton.addEventListener("click", () => {
        const oldTheme = currentTheme;
        console.log("Change theme button clicked");

        // Toggle theme
        currentTheme = currentTheme === "dark" ? "light" : "dark";

        // Apply the new theme
        changePageTheme(currentTheme, oldTheme);
    });
}

// Set theme to localStorage
function setTheme(theme) {
    localStorage.setItem("theme", theme);
}

// Get theme from localStorage
function getTheme() {
    let theme = localStorage.getItem("theme");
    return theme ? theme : "light";
}

// Change the current page theme
function changePageTheme(newTheme, oldTheme) {
    // Update localStorage
    setTheme(newTheme);

    // Update the webpage theme
    const htmlElement = document.querySelector("html");
    if (oldTheme) htmlElement.classList.remove(oldTheme); // Remove old theme if present
    htmlElement.classList.add(newTheme); // Add the new theme

    // Update the button text
    const button = document.querySelector("#theme_change_button");
    button.querySelector("span").textContent = newTheme === "light" ? "Dark" : "Light";
}

// change page theme end
