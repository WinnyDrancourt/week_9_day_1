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
clickToggleGreen();

// function 5 : Remove link Bootstrap
function clickRemoveLink() {
  function removeLink() {
    let link = document.querySelector("head>link");
    link.disabled = !link.disabled;
  }
  document.querySelector("div.navbar").addEventListener("dblclick", removeLink);
}
clickRemoveLink();

// function 6 : Zoom and dezoom
function hoverZoom() {
  let cards = document.querySelectorAll(".col-md-4");
  cards.forEach((cards) => {
    let viewButtons = cards.querySelector(".btn-success");
    let text = cards.querySelector(".card-text");

    let img = cards.querySelector(".card-img-top");
    function handleMouseover() {
      text.classList.toggle("d-none");
      img.classList.toggle("w-25");
    }
    viewButtons.addEventListener("mouseover", handleMouseover);
  });
}
hoverZoom();

// function 7 : boogie woogie
function clickLastToFirst() {
  let container = document.querySelector("div.album>div.container>div.row");

  function lastToFirst() {
    let last = container.lastElementChild;
    container.removeChild(last);
    container.insertBefore(last, container.firstElementChild);
  }
  document
    .querySelector("a.btn-secondary")
    .addEventListener("click", lastToFirst);
}
clickLastToFirst();

// function 8 : boogie woogie inversé
function clickFirstToLast() {
  document.querySelector("a.btn-primary").href = "#";
  let container = document.querySelector("div.album>div.container>div.row");

  function firstToLast() {
    let first = container.firstElementChild;
    container.removeChild(first);
    container.appendChild(first);
  }
  document
    .querySelector("a.btn-primary")
    .addEventListener("click", firstToLast);
}
clickFirstToLast();
