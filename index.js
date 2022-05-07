fetch("https://api.github.com/users/tomhughes87")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
  });
