// eslint-disable-next-line no-unused-vars
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
