const {response} = require('express');
const express = require('express');
const app = express();
const porta = 3000;

const mulheres = require('./mulheres.json')

app.use(express.json());

//[GET] http://localhost:3000/mulheres
app.get('/mulheres', function(require, response){
  response.json(mulheres);
})

app.get('mulheres/:id', (require, response) => {
    const {id} = require.params;
    const mulher = mulheres.find(mulher => mulher.id == id);
    response.json(mulher);
})

app.listen(porta, function(){
  console.log("Servidor rodando")
})