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

const openNewPostModal = () => {
  let modal = document.getElementById("new_post_modal");
  let close_button = document.getElementsByClassName("close")[1];
  let cancel_button = document.getElementById("cancel_post");
  let view_posts = document.getElementById("view_posts");
  let desc = document.getElementById("desc").value;
  let location = document.getElementById("location").value;
  let price = document.getElementById("price").value;
  let post_item = document.getElementById("post_item");
  let selected_item = post_item.options[post_item.selectedIndex].text;
  let new_image = document.getElementById("my_image").files[0].name;
  if (
    location == "" ||
    desc == "" ||
    price == "" ||
    selected_item == "Select..." ||
    new_image == ""
  ) {
    // console.log(desc,price,selected_item,location);
    return;
  }
  modal.style.display = "block";
  close_button.onclick = () => {
    modal.style.display = "none";
  };
  cancel_button.onclick = () => {
    modal.style.display = "none";
  };
  view_posts.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

const changeName = () => {
  let new_image = document.getElementById("my_image").files[0].name;
  let upload_button = document.getElementById("upBtn");
  upload_button.innerHTML = new_image;
};

const openEditModal = () => {
  let modal = document.getElementById("edit_modal");
  let close_button = document.getElementsByClassName("close")[2];
  let cancel_button = document.getElementById("cancel_edit");
  let save_button = document.getElementById("save_edit");
  modal.style.display = "block";
  close_button.onclick = () => {
    modal.style.display = "none";
  };
  cancel_button.onclick = () => {
    modal.style.display = "none";
  };
  save_button.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

const openDeleteModal = () => {
  let modal = document.getElementById("delete_modal");
  let close_button = document.getElementById("close_delete");
  let cancel_button = document.getElementById("cancel_delete");
  let delete_button = document.getElementById("do_delete");
  modal.style.display = "block";
  close_button.onclick = () => {
    modal.style.display = "none";
  };
  cancel_button.onclick = () => {
    modal.style.display = "none";
  };
  delete_button.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

const markAsSold = id => {
  let btns = document.getElementsByClassName("mark-button");
  for (let btn of btns) {
    if (btn.id.substring(4) == id && btn.innerHTML == "Mark as sold") {
      btn.style.background = "#099200";
      btn.innerHTML = "Sold!";
      break;
    } else if (btn.id.substring(4) == id && btn.innerHTML == "Sold!") {
      btn.style.background = "#022024";
      btn.innerHTML = "Mark as sold";
      break;
    }
  }
};
