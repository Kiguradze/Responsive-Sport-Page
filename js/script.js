const headerLogo = document.querySelector(".header-logo");

headerLogo.addEventListener("click", () => {
  headerLogo.classList.toggle("active");
});

const menu = document.querySelector(".menu");

headerLogo.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-container");
const searchInput = document.querySelector(".search");
const body = document.querySelector("body");

searchIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  if (searchForm.classList.contains("search-active")) {
    if (searchInput.value !== "") {
      searchForm.submit();
    } else {
      searchForm.classList.remove("search-active");
      searchInput.value = "";
    }
  } else {
    searchForm.classList.add("search-active");
  }
});

body.addEventListener("click", (e) => {
  if (e.target !== searchForm && e.target !== searchInput) {
    if (searchForm.classList.contains("search-active")) {
      searchForm.classList.remove("search-active");
      searchInput.value = "";
    }
  }
});
