fetch("https://api.github.com/users/tomhughes87")
  .then((response) => response.json())
  .then((data) => console.log(data));
