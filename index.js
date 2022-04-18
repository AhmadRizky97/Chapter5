const express = require('express');
const app = express();
let posts = require('./db/post.json');
const port = 3000;


app.use(express,json()); ///middleware


//get all
app.get('/posts', (req,res) => {
    res.status(200).json(posts)
})

//create
app.post('/posts', (req,res) => {
    let {title,body} = req.body

    let id = posts[posts.length - 1].id+1
    let post = {
        id,
        title,
        body
    }


    posts.push(post)

    res.status(201),json(post)
})

// get by id
app.get('/posts/detail/:id', (req,res) => {
    let {id} = req.params;
    let post = posts.find((e) => e.id == id);
    res.status(200).json(post);
})

///update
app.put('/posts/update/:id', (req,res) => {
    let {id} = req.params;
    let { title, body } = req.body;
    let post = posts.find((e) => e.id == id)
    post = {...post, title, body };
    posts = posts.map((e) => (e.id == id ? post : e ));
    res.status(200).json(post);
})


///delete
app.delete('/posts/delete/:id', (req,res) => {
    let {id} = req.params;
    posts = posts.filter((e) => e.id != id);
    res.status(200).json({msg : "Data berhasil di hapus"})
})



app.listen(port, () => {
    console.log(`server berjalan di ${port}`)
})