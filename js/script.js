//--------------------BURGER--------------------

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const headerBtn = document.querySelector(".header__button")
if (burger) {
  burger.addEventListener("click", function () {
    //document.body.classList.toggle("_lock");
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");
    headerBtn.classList.toggle("_active")
  });
}

//--------------------PRICE-SWITCH--------------------

const switchBtn = document.querySelectorAll(".get-features__switch-btn");
const switchAfter = document.querySelector(".get-features__switch-anim-span")
const price = document.querySelector(".get-features__col-price-span_2");
const switchBtn2 = document.querySelector(".get-features__switch-btn_2");
const switchBtn1 = document.querySelector(".get-features__switch-btn_1");
for (let btn of switchBtn) {
  //function switchBtnClassAdd() {
  //btn.classList.add("active")
  //}
  btn.addEventListener("click", function () {
    for (let btn of switchBtn) {
      //btn.classList.remove("active")
      btn.classList.remove("white-color")
    }
    btn.classList.add("white-color")
    //setTimeout(switchBtnClassAdd, 300)
  })
}
switchBtn2.addEventListener("click", function () {
  price.textContent = "$79"
  switchAfter.classList.add("activeTo2")
  switchAfter.classList.remove("activeTo1")
})
switchBtn1.addEventListener("click", function () {
  price.textContent = "$99"
  switchAfter.classList.add("activeTo1")
  switchAfter.classList.remove("activeTo2")
})
//--------------------ACCORDION--------------------

const accordionBtns = document.querySelectorAll(".accorion-item__button");
const accordionItems = document.querySelectorAll(".accordion-item")
const accordionItemTitles = document.querySelectorAll(".accordion-item__title")
const accordionTexts = document.querySelectorAll(".accordion-item__text")
for (const item of accordionItems) {
  item.addEventListener("click", function () {
    if (!item.classList.contains("active")) {
      for (const btn of accordionBtns) {
        btn.classList.remove("active")
      }
      for (const item of accordionItems) {
        item.classList.remove("active")
      }
      for (const itemTitle of accordionItemTitles) {
        itemTitle.classList.remove("active")
      }
      for (const text of accordionTexts) {
        text.classList.remove("active")
      }
      item.classList.add("active")
      item.childNodes[3].classList.add("active")
      item.childNodes[1].childNodes[1].classList.add("active")
      item.childNodes[1].childNodes[3].classList.add("active")
    } else {
      item.classList.remove("active")
      item.childNodes[3].classList.remove("active")
      item.childNodes[1].childNodes[1].classList.remove("active")
      item.childNodes[1].childNodes[3].classList.remove("active")
    }
  })
}
var date = new Date()
console.log(date.getMinutes)