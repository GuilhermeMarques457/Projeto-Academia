"use strict";
////////////////////////
// Carrousel section //
////////////////////////

// carrosel elements
const btnLeftEl = document.querySelector(".btn-left");
const btnRightEl = document.querySelector(".btn-right");
const boxSlideEl = document.querySelector(".box-slide");
const boxSlideImgEl = document.querySelector(".box-slide-img");

// Carrosel funtionality
btnLeftEl.addEventListener("click", function () {
  ////// Content transtion //////
  if (boxSlideEl.classList.contains("translate-right-middle")) {
    boxSlideEl.classList.add("translate-right-start");
    boxSlideEl.classList.remove("translate-right-middle");
  } else if (boxSlideEl.classList.contains("translate-right-end")) {
    boxSlideEl.classList.add("translate-right-middle");
    boxSlideEl.classList.remove("translate-right-end");
  }

  ////// Image transtion //////

  if (boxSlideImgEl.classList.contains("translate-down-middle")) {
    boxSlideImgEl.classList.add("translate-down-start");
    boxSlideImgEl.classList.remove("translate-down-middle");
  } else if (boxSlideImgEl.classList.contains("translate-down-end")) {
    boxSlideImgEl.classList.add("translate-down-middle");
    boxSlideImgEl.classList.remove("translate-down-end");
  }
});

btnRightEl.addEventListener("click", function () {
  ////// Content transtion //////
  if (
    !boxSlideEl.classList.contains("translate-right-middle") &&
    !boxSlideEl.classList.contains("translate-right-end")
  ) {
    boxSlideEl.classList.add("translate-right-middle");
  } else if (
    boxSlideEl.classList.contains("translate-right-middle") &&
    !boxSlideEl.classList.contains("translate-right-end")
  ) {
    boxSlideEl.classList.remove("translate-right-middle");
    boxSlideEl.classList.add("translate-right-end");
  }

  ////// Image transtion //////

  if (
    !boxSlideImgEl.classList.contains("translate-down-middle") &&
    !boxSlideImgEl.classList.contains("translate-down-end")
  ) {
    boxSlideImgEl.classList.add("translate-down-middle");
  } else if (boxSlideImgEl.classList.contains("translate-down-middle")) {
    boxSlideImgEl.classList.add("translate-down-end");
    boxSlideImgEl.classList.remove("translate-down-middle");
  }
});

////////////////////////
// Pricing section //
////////////////////////

// pricing elements
const highlightedEl = document.querySelector(".highlighted");
const pricingStarterEl = document.querySelector(".pricing-item.left");
const pricingProEl = document.querySelector(".pricing-item.right");
const btnPricingLeftEl = document.querySelector(".btn-pricing-transition-left");
const btnPricingRightEl = document.querySelector(
  ".btn-pricing-transition-right"
);

// functions to translate them

const highlightPremium = function () {
  pricingStarterEl.classList.remove("highlighted");
  pricingStarterEl.classList.add("left");
  pricingStarterEl.classList.remove("right");

  pricingProEl.classList.remove("left");
  pricingProEl.classList.add("right");
  pricingProEl.classList.remove("highlighted");

  highlightedEl.classList.remove("right");
  highlightedEl.classList.add("highlighted");
  highlightedEl.classList.remove("left");
};

const highlightPro = function () {
  highlightedEl.classList.remove("highlighted");
  highlightedEl.classList.add("left");
  highlightedEl.classList.remove("right");

  pricingProEl.classList.remove("right");
  pricingProEl.classList.add("highlighted");
  pricingProEl.classList.remove("left");

  pricingStarterEl.classList.remove("left");
  pricingStarterEl.classList.add("right");
  pricingStarterEl.classList.remove("highlighted");
};

const highlightStarter = function () {
  pricingProEl.classList.remove("highlighted");
  pricingProEl.classList.add("left");
  pricingProEl.classList.remove("right");

  highlightedEl.classList.remove("left");
  highlightedEl.classList.add("right");
  highlightedEl.classList.remove("highlighted");

  pricingStarterEl.classList.remove("right");
  pricingStarterEl.classList.add("highlighted");
  pricingStarterEl.classList.remove("left");
};

btnPricingRightEl.addEventListener("click", function () {
  if (highlightedEl.classList.contains("highlighted")) {
    highlightPro();
  } else if (pricingProEl.classList.contains("highlighted")) {
    highlightStarter();
  } else if (pricingStarterEl.classList.contains("highlighted")) {
    highlightPremium();
  }
});

btnPricingLeftEl.addEventListener("click", function () {
  if (highlightedEl.classList.contains("highlighted")) {
    highlightStarter();
  } else if (pricingProEl.classList.contains("highlighted")) {
    highlightPremium();
  } else if (pricingStarterEl.classList.contains("highlighted")) {
    highlightPro();
  }
});

////////////////////////
// Tabs section //
////////////////////////

// tabs elements

const legsEl = document.querySelector(".legs");
const bicepsEl = document.querySelector(".biceps");
const tricepsEl = document.querySelector(".triceps");
const backEl = document.querySelector(".back");
const deltoidEl = document.querySelector(".deltoid");
const chestEl = document.querySelector(".chest");

const bicepsBoxEl = document.querySelector(".biceps-box");
const chestBoxEl = document.querySelector(".chest-box");
const tricepsBoxEl = document.querySelector(".triceps-box");
const backBoxEl = document.querySelector(".back-box");
const deltoidBoxEl = document.querySelector(".deltoid-box");
const legsBoxEl = document.querySelector(".legs-box");

// tab menu funcions
const removeMuscle = function () {
  legsEl.classList.remove("selected");
  bicepsEl.classList.remove("selected");
  tricepsEl.classList.remove("selected");
  deltoidEl.classList.remove("selected");
  chestEl.classList.remove("selected");
  backEl.classList.remove("selected");
};

const removeShowed = function () {
  bicepsBoxEl.classList.remove("element-showed");
  chestBoxEl.classList.remove("element-showed");
  tricepsBoxEl.classList.remove("element-showed");
  backBoxEl.classList.remove("element-showed");
  deltoidBoxEl.classList.remove("element-showed");
  legsBoxEl.classList.remove("element-showed");
};

bicepsEl.addEventListener("click", function () {
  removeMuscle();
  bicepsEl.classList.add("selected");
  removeShowed();
  bicepsBoxEl.classList.add("element-showed");
});

legsEl.addEventListener("click", function () {
  removeMuscle();
  legsEl.classList.add("selected");
  removeShowed();
  legsBoxEl.classList.add("element-showed");
});

backEl.addEventListener("click", function () {
  removeMuscle();
  backEl.classList.add("selected");
  removeShowed();
  backBoxEl.classList.add("element-showed");
});

tricepsEl.addEventListener("click", function () {
  removeMuscle();
  tricepsEl.classList.add("selected");
  removeShowed();
  tricepsBoxEl.classList.add("element-showed");
});

chestEl.addEventListener("click", function () {
  removeMuscle();
  chestEl.classList.add("selected");
  removeShowed();
  chestBoxEl.classList.add("element-showed");
});

deltoidEl.addEventListener("click", function () {
  removeMuscle();
  deltoidEl.classList.add("selected");
  removeShowed();
  deltoidBoxEl.classList.add("element-showed");
});

////////////////////////
// Call to action section //
////////////////////////

const timerEl = document.querySelector(".timer");
const ctaImgEl = document.querySelector(".cta-imgs-box");
const ctaImgRightEl = document.querySelector(".cta-img-right");
const ctaImgLeftEl = document.querySelector(".cta-img-left");

let sec = 5;

const timer = function () {
  let imgCount = 1;
  let timer = setInterval(function () {
    console.log(sec);

    if (sec % 2 == 0 && sec != 0) {
      imgCount++;
      ctaImgEl.classList.remove("translate-cta-img-box");
      ctaImgLeftEl.setAttribute("src", `./imgs/Cta/image${imgCount}.jpg`);
    } else if (sec % 2 === 1) {
      console.log("par");
      imgCount++;
      ctaImgEl.classList.add("translate-cta-img-box");
      ctaImgRightEl.setAttribute("src", `./imgs/Cta/image${imgCount}.jpg`);
    } else if (sec === 0) {
      sec = 6;
      imgCount = 1;
      ctaImgEl.classList.remove("translate-cta-img-box");
      ctaImgLeftEl.setAttribute("src", `./imgs/Cta/image${imgCount}.jpg`);
    }
    sec--;
  }, 5000);
};

timer();
// console.log(6 % 2);
