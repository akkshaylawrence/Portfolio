function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
function saveContact() {
    var firstname = document.getElementById('first_name').value;
    var lastname = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;
    var submit = document.getElementById('submit');
    userId = guid();
    database.ref('Feedback/' + userId).set({
        Firstname: firstname,
        Lastname: lastname,
        Email: email,
        Country: country
    });
    submit.classList.add("disabled");
    submit.innerHTML = "Submitted";
    Materialize.toast('I will get back to you soon!', 4000);
}