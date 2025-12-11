document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filterValue === "all" || category === filterValue) {
          item.style.display = "block";
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.transition = "opacity 0.5s ease";
            item.style.opacity = "1";
          }, 10);
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
