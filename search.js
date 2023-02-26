let container = document.querySelector(".wrapper");
let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let error = document.querySelector(".error");
let userContainer = document.querySelector(".user_container");
btn.addEventListener("click", getUrl);

function getUrl() {
  let url = input.value.trim();
  if (url) {
    getUser(url);
  } else {
    error.innerText = "Enter Username!";
    error.style.color = "red";
    setTimeout(() => {
      error.innerText = "";
    }, 2500);
  }
  input.value = "";
}
async function getUser(url) {
  let UserUrl = `https://api.github.com/users/${url}`;
  let user = await fetch(UserUrl);
  let result = await user.json();
  console.log(UserUrl, result);
  userContainer.innerHTML = "";
  userContainer.innerHTML += `      
          
          <div class="user">
                <div class="img_container">
                  <img
                    src="${result.avatar_url}"
                    alt=""
                    width="80px"
                  />
                </div>
                <div class="info_container">
                  <p class="username">${result.login}</p>
                  <a href="${result.html_url}"> <button class="visit">Visit</button></a>
                </div>
              </div>
              `;
}
