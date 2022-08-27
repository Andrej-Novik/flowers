// burger

const openBurgerBtn = document.querySelector(".header__burger")
const closeBurgerBtn = document.querySelector(".aside__close img")
const asideMenu = document.querySelector(".aside")
const asideMenuShadow = document.querySelector(".aside__shadow")
const asideBtn = document.querySelector(".aside__button")
const asideLinks = document.querySelectorAll(".aside__link")

const openBurger = () => {
  asideMenu.classList.add("open")
  document.body.classList.add("lock")
}
const closeBurger = () => {
  asideMenu.classList.remove("open")
  document.body.classList.remove("lock")
}

openBurgerBtn.addEventListener("click", openBurger)

closeBurgerBtn.addEventListener("click", closeBurger)
asideMenuShadow.addEventListener("click", closeBurger)
asideBtn.addEventListener("click", closeBurger)
asideLinks.forEach(link => link.addEventListener("click", closeBurger))