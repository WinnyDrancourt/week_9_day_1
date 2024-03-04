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
function navCollapse() {
  document.getElementById("navbarHeader").classList.remove("collapse");
}
document.getElementById("navbarHeader").addEventListener("click", navCollapse);
