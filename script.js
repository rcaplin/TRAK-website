document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS animation library
  AOS.init({
    duration: 800,
    easing: "ease",
    once: true,
  })

  // Initialize Feather Icons
  feather.replace()

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Header scroll effect
  const header = document.querySelector(".header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const closeMenu = document.querySelector(".close-menu")
  const mobileNav = document.querySelector(".mobile-nav")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  menuToggle.addEventListener("click", () => {
    mobileNav.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  closeMenu.addEventListener("click", () => {
    mobileNav.classList.remove("active")
    document.body.style.overflow = ""
  })

  // Close mobile menu when clicking a link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      document.body.style.overflow = ""
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Add scroll reveal animations
  const revealElements = document.querySelectorAll(".reveal")

  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight
      const elementTop = revealElements[i].getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add("active")
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll()
})
