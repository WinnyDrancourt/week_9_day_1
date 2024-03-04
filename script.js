// Function 1 & 1b: Clique on footer + Compteur
function footerCompteurClick() {
  var footerCompteur = 0;
  function footerClick() {
    footerCompteur++;
    console.log("Clique n° : " + footerCompteur);
  }
  document.querySelector("footer").addEventListener("click", footerClick);
}
footerCompteurClick();

// Function 2 : Nav bar
function navBtn() {
  function navCollapse() {
    document.querySelector("#navbarHeader").classList.toggle("collapse");
  }
  document
    .querySelector(".navbar-toggler")
    .addEventListener("click", navCollapse);
}
navBtn();

// Function 3 : first edit on red.
function clickEditRed() {
  let btn = document.querySelectorAll("div.btn-group>.btn:nth-child(2)")[0];
  function editRed() {
    btn.style.color = "red";
  }
  btn.addEventListener("click", editRed);
}
clickEditRed();

// function 4 : edit toggle green
function clickToggleGreen() {
  let btn = document.querySelectorAll("div.btn-group>.btn:nth-child(2)")[1];
  function editGreen() {
    if (btn.style.color === "green") {
      btn.style.cssText = "";
    } else {
      btn.style.color = "green";
    }
  }
  btn.addEventListener("click", editGreen);
}
console.log(document.querySelectorAll("div.btn-group>.btn:nth-child(2)")[1]);
clickToggleGreen();

// function 5 : Remove link Bootstrap
