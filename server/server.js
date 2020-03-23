const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });



const config = require('./config/config.js');
const port = 4000;


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cookieSession({ secret: "hello" }));
app.use(cors());



app.listen(port, () => {
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {

        var kittySchema = new mongoose.Schema({
            name: String
        });

        kittySchema.methods.speak = function () {
            var greeting = this.name
                ? "Meow name is " + this.name
                : "I don't have a name";
            console.log(greeting);
        }

        var Kitten = mongoose.model('Kitten', kittySchema);

        var silence = new Kitten({ name: 'Silence' });
        console.log(silence.name); // 'Silence'

        var fluffy = new Kitten({ name: 'fluffy' });
        fluffy.speak(); // "Meow name is fluffy"

        fluffy.save(function (err, fluffy) {
            if (err) return console.error(err);
            fluffy.speak();
        });
        Kitten.find(function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens);
        })







    });



    console.log(`server running on ${port}`);
});

