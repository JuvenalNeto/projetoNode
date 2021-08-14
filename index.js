const express = require('express');
const app = express();

let data = new Date();

let mensagemDoDia = require('./msgdia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});0
});

app.listen(8080, ()=> {
    console.log('Servidor node iniciado em:  ' + data);
});