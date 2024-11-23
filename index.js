const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.json());

let users = [];


function validateUser(user){
  if(!user.name || typeof user.name ! === "string"){
    return "Name is required and should be a string"
  }
  if(!user.email || typeof user.email !== "string"){
    return "Email is required and should be a string"
  }

}

app.post('/api/users', (req, res) => {
  let error = validateUser(req.body);
  if (error) return res.status(400).send(error);

  let user = {
    id: users.length + 1,
    ...req.body,
  };
  users.push(user);
  res.status(201).json(user);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
