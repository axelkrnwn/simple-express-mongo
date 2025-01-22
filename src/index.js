const express = require('express')
const http = require('http')
const mongoose = require('mongoose')

const app = express();
const server = http.createServer(app);
const port = 6969;
mongoose.connect(
    "mongodb://mongo:27017/usersDB", 
 );

app.get('/', (req, res) => {
    const studentSchema = new mongoose.Schema({
        roll_no: Number,
        name: String,
        year: Number,
        subjects: [String]
    });
    
    const Student = mongoose.model('Student', studentSchema);
    const stud = new Student({
        roll_no: 1001,
        name: 'Madison Hyde',
        year: 3,
        subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
    });
    stud
        .save()
        .then(
            () => res.status(200).json("this is welcome page"), 
            (err) => res.status(400).json(err)
        );
    
});


server.listen(port, () => {
    console.log(`listening at port : ${port}`)
});
