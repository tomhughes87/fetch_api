### STEP ONE

**set up github new repo + follow instruction**

---

### STEP TWO

**create html/js files**

remember to link the files!

AND

defer the .js

---

### STEP THREE

create placeholder for the api data to get put into, not strictly needed to be done this way

---

### STEP FOUR

**add this to the .js file**
fetch("https://api.github.com/users/tomhughes87")
.then((response) => response.json())
.then((data) => console.log(data));

**alter it to add multiple actions**
fetch("https://api.github.com/users/tomhughes87")
.then((response) => response.json())
.then(function (data) {
console.log(data);
});

---

### STEP FIVE

make var in the js to call the html elements you want to update with the API

---

### STEP SIX

add updates to the final .then function to change the var created in step five
