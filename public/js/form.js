function saveContact() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var text = document.getElementById('textarea').value;
    var submit = document.getElementById('submit');
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var uid = user.uid;
            database.ref('Feedback/' + uid).set({
                Name: name,
                Email: email,
                Message: text
            });
            submit.classList.add("disabled");
            submit.innerHTML = "Submitted";
            Materialize.toast('I\'ll will get back to you soon!', 4000);
        }
    });
}