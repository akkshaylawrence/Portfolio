(function ($) {
    var config = {
    apiKey: "AIzaSyBQGQT7dyTmxxoEUp8YCDe28aIvFh2HogI",
    authDomain: "portfolio-3e0a7.firebaseapp.com",
    databaseURL: "https://portfolio-3e0a7.firebaseio.com",
    projectId: "portfolio-3e0a7"
    };
    firebase.initializeApp(config);
})(jQuery);
firebase.auth().signInAnonymously();
var database = firebase.database();