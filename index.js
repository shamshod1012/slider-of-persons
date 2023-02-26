document.addEventListener("DOMContentLoaded", () => {
  let item = localStorage.getItem("item") ? localStorage.getItem("item") : 0;
  currentItem = item;
  showPersonsBackend();
});
showPersonsBackend();

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
showPersonsBackend();
async function showPersonsBackend() {
  let peoples = await fetch("https://api.github.com/users");
  let result = await peoples.json();
  let currentPerson = await result[currentItem];
  // console.log(currentPerson);
  img.src = currentPerson.avatar_url;
  author.innerText = currentPerson.login;
  job.innerText = currentPerson.node_id;
  info.innerText = currentPerson.url;
}
nextBtn.addEventListener("click", async () => {
  let result = await getUrlFetch();
  currentItem++;
  if (result.length - 1 < currentItem) {
    currentItem = 0;
  }
  console.log(currentItem);
  save(currentItem);

  showPersonsBackend();
});
prevBtn.addEventListener("click", async () => {
  let result = await getUrlFetch();
  // console.log(result);
  currentItem--;
  // console.log(result);
  if (currentItem < 0) {
    currentItem = result.length - 1;
    console.log(currentItem);
  }
  save(currentItem);
  showPersonsBackend();
});
randombtn.addEventListener("click", async () => {
  let result = await getUrlFetch();

  currentItem = Math.floor(Math.random() * result.length);
  save(currentItem);
  showPersonsBackend();
});
async function getUrlFetch() {
  let peoples = await fetch("https://api.github.com/users");
  let result = await peoples.json();
  console.log(currentItem);
  return await result;
}

function save(item) {
  localStorage.setItem("item", JSON.stringify(item));
}
