const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const App = require('./database/index');


const multer = require('multer')

mongoose.connect('mongodb://user:MernProject3@ds261296.mlab.com:61296/heroku_27wckknf', { useNewUrlParser: true });
const db = mongoose.connection;



// const indexRouter = require("./routes/index")
const config = require('./config/config.js');
const port = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser());
app.use(cookieSession({ secret: "hello" }));
app.use(cors());
app.use(express.static("public"));
// app.use('/', indexRouter)
// app.use(express.static(path.join(__dirname, “../storeapp/build”))); // Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, “../storeapp/build”))); // Serve static assets if in production

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + “../storeapp/build/index.html”));
    });
}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }

})
const upload = multer({ storage: storage }).single('file')

app.post('/upload', function (req, res) {

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
});
app.post('/saveapp', function (req, res) {
    console.log(req.body)
    // App.create(req.body)
    //     .then(function (data) {
    //     res.json(data)
    //     })
    var fluffy = new App({ name: req.body.name });
    // fluffy.speak(); // "Meow name is fluffy"
    fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
        res.json(fluffy)
    });
})
app.listen(port, () => {
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {


    });
    console.log(`server running on ${port}`);
});