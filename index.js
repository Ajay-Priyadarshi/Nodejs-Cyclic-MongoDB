require('dotenv').config();
const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/books')

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);

const connectDB = async()=>{
    try {
        const con = mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`listerning on : ${PORT}`)
    })
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/add-note', async(req,res)=>{
    try {
        await Book.insertMany([
            {
                title: "Sons of Anarchy",
                body: "hehehehehhehheheheheh"
            },
            {
                title: "Game Of Thrones",
                body: "hehehehehhehheheheheh"
            }
        ])
    } catch (error) {
        console.log(error)
    }
})

app.get('/book', async(req, res) =>{
    const book = await Book.find();
    if (book) {
        res.json(book);
    } else {
        res.send("Someting went wrong");
    }
})

// https://cute-blue-kitten-cuff.cyclic.app