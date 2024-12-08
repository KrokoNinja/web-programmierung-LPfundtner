document.addEventListener("DOMContentLoaded", () => {
  //get elements
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleImg = document.querySelector("#theme-toggle img");

  // Set default theme
  if(!document.cookie.includes("theme")) {
    document.cookie = "theme=dark";
  }

  // Set theme based on cookie
  if(document.cookie.includes("theme=light")) {
    document.body.classList.add("light-mode");
    themeToggleImg.src = "/assets/moon.svg";
  }

  // Toggle theme and update cookie
  themeToggle.addEventListener("click", () => {
    if(document.body.classList.contains("light-mode")) {
      document.body.classList.remove("light-mode");
      themeToggleImg.src = "/assets/sun.svg";
      document.cookie = "theme=dark";
    } else {
      document.body.classList.add("light-mode");
      themeToggleImg.src = "/assets/moon.svg";
      document.cookie = "theme=light";
    }
  });
});
