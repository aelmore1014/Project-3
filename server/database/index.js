const mongoose = require('mongoose');


var appSchema = new mongoose.Schema({
    name: String
});

appSchema.methods.speak = function () {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

var App = mongoose.model('App', appSchema);

// var silence = new App({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

// var fluffy = new App({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"

// fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.speak();
// });
// App.find(function (err, Apps) {
//     if (err) return console.error(err);
//     console.log(Apps);
// })

module.exports = App;