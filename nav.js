const navSlide = () => {
  let clicked = false;
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-links");
  const chapter = document.querySelector(".chapter-menu");
  const chapterLink = chapter.children[1]; // Select the chapter link outside event listeners
  const viewMoreBtn = document.querySelector(".view-more-btn");
  const dropdown = document.querySelector(".dropdown");
  const navLinks = document.querySelectorAll("ul.main-links > li");

  const resetChapterMenuAndDropdown = () => {
    chapterLink.classList.remove("active");
    dropdown.classList.remove("changePos");
  };

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");
    clicked = !clicked; // Toggle the clicked state
    burger.classList.toggle("toggle");
    // Reset chapter menu and dropdown to their initial state
    chapterLink.classList.remove("active");
    dropdown.classList.remove("changePos");
    resetChapterMenuAndDropdown();
    // animate
    console.log(navLinks);
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 1s ease forwards ${index / 6}s`;
      }
    });
  });

  chapter.addEventListener("mouseenter", () => {
    if (!clicked) {
      // Only add 'active' class if burger is not clicked
      chapterLink.classList.add("active");
    }
  });

  chapter.addEventListener("mouseleave", () => {
    if (!clicked) {
      // Only remove 'active' class if burger is not clicked
      chapterLink.classList.remove("active");
    }
  });

  viewMoreBtn.addEventListener("click", () => {
    chapterLink.classList.toggle("active");
    dropdown.classList.toggle("changePos");
  });

  // Hover effect
  chapter.addEventListener("mouseenter", () => {
    if (!clicked) {
      // Only add 'active' class if burger is not clicked
      chapterLink.classList.add("active");
      console.log("mouseenter");
    }
  });

  chapter.addEventListener("mouseleave", () => {
    if (!clicked) {
      // Only remove 'active' class if burger is not clicked
      chapterLink.classList.remove("active");
      console.log("mouseleave");
    }
  });

  // Function to toggle classlist of view more button based on screen size
  const handleResize = () => {
    if (window.innerWidth > 768) {
      viewMoreBtn.classList.remove("active");
      resetChapterMenuAndDropdown();
    } else if (window.innerWidth <= 768 && clicked) {
      viewMoreBtn.classList.add("active");
    }
  };

  // Add resize event listener
  window.addEventListener("resize", handleResize);

  // Initial call to handle the current screen size
  handleResize();
};

navSlide();
