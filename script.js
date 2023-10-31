fetch("https://reqres.in/api/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const firstNames = data.data.map((item) => item.first_name);
    const userList = document.querySelector(".user-list");
    firstNames.forEach((firstName) => {
      const newLI = document.createElement("li");
      newLI.innerHTML = `Name: ${firstName}`;
      userList.appendChild(newLI);
    });
  });   

document.addEventListener("DOMContentLoaded", function () {
  function getUserInput() {
    let userInput = document.getElementById("name").value.trim();
    if(!userInput){
        alert('please enter something valid!');
        location.reload();
    } else {
        console.log(userInput);
        return userInput;
    }

  }

  const button = document.getElementById("this-one");
  button.addEventListener("click", () => {
    const userInput = getUserInput();
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userInput,
      }),
    }).then((response) => {
      if (response.ok) {
        const userList = document.querySelector(".user-list");
        const newLI = document.createElement("li");
        newLI.innerHTML = `Name: ${userInput}`;
        userList.appendChild(newLI);
      } else {
        alert("error!");
      }
    });
  });
});
