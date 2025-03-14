const initApp  = () => {
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
  }

  hambugerBtn.addEventListener('click', toggleMenu)
  mobile.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
