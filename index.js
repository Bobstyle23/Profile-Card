const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
  title.innerHTML = "MukhammadBobur Pakhriev";
  excerpt.innerHTML = "Software Engineer";
  profile_img.innerHTML =
    '<img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/70315747_900250923673037_1709080857035145216_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=19026a&_nc_ohc=dfCCuqUtzSkAX_TiJVC&tn=swSf7GaN9BgXy13B&_nc_ht=scontent-ssn1-1.xx&oh=18cec7e90c2b84d6acdd2fddf620bc05&oe=6128BD3E" alt="" />';
  name.innerHTML = "Bob";
  date.innerHTML = "Nov 19, 1996";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
