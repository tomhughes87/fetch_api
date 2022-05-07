const userName = document.getElementById("user name");
const userURL = document.getElementById("user url");
const userRepos = document.getElementById("user repos");

fetch("https://api.github.com/users/tomhughes87")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    userName.textContent = "user name from the APi: " + data.name;
    userURL.textContent = "user url from the APi:" + data.html_url;
    userRepos.textContent = "user repos from the APi:" + data.public_repos;
  });
