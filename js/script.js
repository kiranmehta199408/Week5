document.addEventListener("DOMContentLoaded", () => {
  const themeButtons = document.querySelectorAll("[data-bs-theme-value]");

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let theme = button.getAttribute("data-bs-theme-value");
      document.body.classList.toggle("dark-theme", theme === "dark");
    });
  });

  const searchInput = document.querySelector(".form-control");

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      if (link.textContent.toLowerCase().includes(query)) {
        link.style.display = "block";
      } else {
        link.style.display = "none";
      }
    });
  });
});

const darkThemeStyle = document.createElement("style");
darkThemeStyle.innerHTML = `
  .dark-theme {
    background-color: #222;
    color: #f8f9fa;
  }
  
  .dark-theme header {
    background-color: #333;
    border-bottom: 2px solid #555;
  }
  
  .dark-theme .nav-link {
    color: #f8f9fa;
  }

  .dark-theme .nav-link:hover {
    background-color: #444;
  }

  .dark-theme .btn-group .btn {
    background-color: #555;
    color: #fff;
  }

  .dark-theme .form-control {
    background-color: #444;
    color: #fff;
    border: 1px solid #666;
  }
`;

document.head.appendChild(darkThemeStyle);
