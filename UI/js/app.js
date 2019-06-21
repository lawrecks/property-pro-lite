/* eslint-disable no-unused-vars */
const showNavItems = () => {
  let sub_nav = document.getElementById("sub_nav");
  let my_icon = document.getElementById("my_icon");
  if (sub_nav.className === "nav-sub" && my_icon.className === "icon") {
    sub_nav.className += " responsive";
    my_icon.className += " responsive";
  } else {
    sub_nav.className = "nav-sub";
    my_icon.className = "icon";
  }
};

const hideSideBar = () => {
  let mainDiv = document.getElementById("main-div");
  let navBar = document.getElementById("navbar");
  let sideBar = document.getElementById("side-b");
  if (
    mainDiv.style.marginLeft !== "0px" &&
    navBar.style.left !== "0px" &&
    sideBar.style.width !== "0px"
  ) {
    mainDiv.style.marginLeft = "0";
    navBar.style.left = "0";
    sideBar.style.width = "0";
  } else {
    mainDiv.style.marginLeft = "17%";
    navBar.style.left = "17%";
    sideBar.style.width = "17%";
  }
};

const hideSideBarMobile = () => {
  let myIcon = document.getElementById("my_icon1");
  let sideBar = document.getElementById("side-b");
  if (sideBar.style.width != "") {
    sideBar.style.width = "";
    myIcon.style.left = "";
  } else {
    sideBar.style.width = "48%";
    myIcon.style.left = "50%";
  }
};

const openLogOutModal = () => {
  let modal = document.getElementById("logout_modal");
  let close_button = document.getElementsByClassName("close")[0];
  let cancel_button = document.getElementById("cancel_logout");
  let logout = document.getElementById("do_logout");
  modal.style.display = "block";
  close_button.onclick = () => {
    modal.style.display = "none";
  };
  cancel_button.onclick = () => {
    modal.style.display = "none";
  };
  logout.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
