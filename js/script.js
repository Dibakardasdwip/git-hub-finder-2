let searchBtn = document.querySelector("#searchBtn");
let user = document.querySelector("#searchUser");
let ui = new UI();

searchBtn.addEventListener("click", (e) => {
  let user_text = user.value;
  fetch(`https://api.github.com/users/${user_text}`)
    .then((result) => result.json())
    .then((data) => {
      if (data.message == "Not Found") {
        //show Alert
        ui.showAlert(data.message, "alert alert-danger");
        ui.clearProfile();
      } else {
        //show Porfile
        ui.showProfile(data);
      }
    });
});
