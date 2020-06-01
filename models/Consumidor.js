const  Sequelize  = require("sequelize")

const conexao = require('../database/Conexao.js')

conexao.authenticate().then(function(){
    console.log('ok')
}).catch(function(erro){
    console.log('not ok'+erro)
})


const carro = conexao.define('safeway',
{//ID: AUTOINCREMENT
    login: Sequelize.STRING,
    senha:Sequelize.STRING,
    logradouro: Sequelize.STRING,
    cpf:Sequelize.STRING,
    data_cadastro: Sequelize.DATE

},
{
    timestamp:false,
    tableName:'consumidor'
})
