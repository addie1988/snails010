function opencity(eve, titlename) {
  eve.stopPropagation();

  var i, tablink, tabcontent;
  var modal = document.getElementsByClassName("innerPage");
  for (i = 0; i < modal.length; i++) {
    modal[i].style.display = "none";
  }

  document.getElementById(titlename).style.display = "block";

  tablink = document.getElementsByClassName("_menuContentLiA");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" _menuActive", "");
  }
  eve.currentTarget.className += " _menuActive";
}

// _menu > 消除內容
window.addEventListener("click", function (e) {
  removeContent = document.getElementsByClassName("innerPage");
  for (i = 0; i < removeContent.length; i++) {
    removeContent[i].style.display = "none";
  }
});

// --------------------------------------------------------------

// nexLevelContent
function nexLevelContent(e, titleContent) {
  e.stopPropagation();

  var i, title, titleContent;
  var innerPage = document.getElementsByClassName("innerPageLiNexLevelUl");
  for (i = 0; i < innerPage.length; i++) {
    innerPage[i].style.display = "none";
  }

  document.getElementById(titleContent).style.display = "block";

  title = document.getElementsByClassName("innerPageLiNexLevelA");
  for (i = 0; i < title.length; i++) {
    title[i].className = title[i].className.replace(
      " nexLevelContentActive",
      ""
    );
  }
  e.currentTarget.className += " nexLevelContentActive";
}

// nexLevelContent > 消除內容
window.addEventListener("click", function (e) {
  removenexLevel = document.getElementsByClassName("innerPageLiNexLevelUl");
  for (i = 0; i < removenexLevel.length; i++) {
    removenexLevel[i].style.display = "none";
  }
});

// --------------------------------------------------------------

// 手機
function menuZoomButton() {
  var buttom = document.getElementById("menuZoomContentButtonContentId");
  var icon = document.getElementById("menuZoomContentButtonId");
 
  if (icon.className != "menuZoomContentButton") {
    icon.className = "menuZoomContentButton";
  } else {
    icon.className = "menuZoomContentButtonClosure";
  }

  if (buttom.style.display == "block") {
    buttom.style.display = "none";
  } else {
    buttom.style.display = "block";
  }
}

// --------------------------------------------------------------

// topContent > top
topContent = function () {
  var topScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var topBlock = document.getElementById("topContent");
  if (topScroll >= 300) {
    topBlock.style.display = "block";
  } else {
    topBlock.style.display = "nonne";
  }
};

// --------------------------------------------------------------

// 滾動 > window內 > onscroll > function
window.onscroll = function () {
  topContent();
};
