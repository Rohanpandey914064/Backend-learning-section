const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());

//Routes
app.get('/api/users',(req,res)=>{
    res.json(users);
});

app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    return res.json(user);
});

app.post('/api/users',(req,res)=>{
    const user = req.body;
    console.log(user);
    fs.appendFile(
        'MOCK_DATA.json',
        JSON.stringify(user) + '\n',
        (err) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error writing to file'
                });
            }

            res.json({
                message: 'User added successfully'
            });
        }
    );
});

app.patch('/api/users/:id',(req,res)=>{
    //Edit the user with id
    const id = Number(req.params.id);
    const update = users.find((user)=>user.id === id);
    update.first_name = req.body.name;
    fs.writeFile(
        'MOCK_DATA.json',
        JSON.stringify(users, null, 2),
        (err) => {
            if (err) {
                return res.status(500).send('Error saving file');
            }
            res.json(update);
        }
    );
    return res.json(update);
});

app.delete('/api/users/:id',(req,res)=>{
    //delete the user with id
    const id = Number(req.params.id);
    users.splice(id - 1, 1);
    fs.writeFile(
        'users.json',
        JSON.stringify(users, null, 2),
        (err) => {
            res.json({ message: 'User deleted' });
        }
    );
    return res.json(users);
});


// app
//     .route("/api/users/:id")
//     .get('/api/users/:id',(req,res)=>{
//         const id = Number(req.params.id);
//         const user = users.find((user)=>user.id === id);
//         return res.json(user);
//     }).patch('/api/users/:id',(req,res)=>{
//         //Edit the user with id
//         return res.json({status:"pending"});
//     }).delete('/api/users/:id',(req,res)=>{
//         //delete the user with id
//         return res.json({status:"pending"});
//     });

//     same route ko ek place par la diye so that if i change the route name I don't need to change every rount name one by one 

app.listen(PORT,()=>console.log(`server sun on port ${PORT}`));