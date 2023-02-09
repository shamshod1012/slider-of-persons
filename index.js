let people = [
  {
    id: 1,
    fname: "messi",
    job: "football star",
    imgUrl:
      "https://i2-prod.football.london/incoming/article26180163.ece/ALTERNATES/s615/0_GettyImages-1246795309.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis  totam quaerat possimus voluptatem facere reiciendis dolorum ea quo temporibus voluptates?",
  },
  {
    id: 2,
    fname: "ronaldo",
    job: "football star",
    imgUrl:
      "https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis  totam quaerat possimus voluptatem facere reiciendis dolorum ea quo temporibus voluptates?",
  },
  {
    id: 3,
    fname: "elon musk",
    job: "bussinisman",
    imgUrl:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/3BA7/production/_128317251_gettyimages-1239416791.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis  totam quaerat possimus voluptatem facere reiciendis dolorum ea quo temporibus voluptates?",
  },
  {
    id: 4,
    fname: "bill gates",
    job: "bussinisman",
    imgUrl:
      "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis  totam quaerat possimus voluptatem facere reiciendis dolorum ea quo temporibus voluptates?",
  },
  {
    id: 5,
    fname: "dueyn jonson",
    job: "actor",
    imgUrl:
      "https://i.guim.co.uk/img/media/62d058b69729ab0485c74f0130242d848d82526e/0_64_3500_2100/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=62730e2d3138feb1cc8c8779037e853b",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis  totam quaerat possimus voluptatem facere reiciendis dolorum ea quo temporibus voluptates?",
  },
  {
    id: 5,
    fname: "kristian beyl",
    job: "legend actor",
    imgUrl:
      "https://media1.popsugar-assets.com/files/thumbor/4MhqbKv7JvHJiqt3APsMGPN7yAE/753x0:3751x2998/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2023/01/06/417/n/48559432/c4c05e3963b7e33516a561.67062571_/i/christian-bale-kids.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis  totam quaerat possimus voluptatem facere reiciendis dolorum ea quo temporibus voluptates?",
  },
];

let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");
/* buttons */
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let randombtn = document.querySelector(".random-btn");
/* buttons */
let currentItem = 0;

/* ma`lumotlarni avtomatik o`zgartirish */

function showAuto() {
  currentItem++;
  if (people.length - 1 < currentItem) {
    currentItem = 0;
  }
  showperson();
}

let time = setInterval(showAuto, 3000);
/* ma`lumotlarni avtomatik o`zgartirish */
function showperson() {
  let person = people[currentItem];

  img.src = person.imgUrl;
  author.innerText = person.fname;
  job.innerText = person.job;
  info.innerText = person.description;
}

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (people.length - 1 < currentItem) {
    currentItem = 0;
  }
  showperson();
});
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = people.length - 1;
  }
  showperson();
});
randombtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * people.length);
  showperson();
});
