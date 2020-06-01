const restify = require('restify')
const server = restify.createServer()

const sequelize = require('./database/Conexao.js')

const consumidor = require('./models/Consumidor.js')
const mocroempreendedor = require('./models/Microempreendedor.js')
const produtor = require('./models/Produtor.js')
const entregador = require('./models/Entregador.js')

const {Op} = require('sequelize')


//EndPoint 1 - s
server.post('/safeway/consumidor/',async (req, res,next) => {
    server.use(restify.plugins.bodyParser())
    let insereCarro = await consumidor.create({//ID: AUTOINCREMENT
       
        login: req.body.login,
        senha:req.body.senha,
        logradouro: req.body.login,
        cpf:  req.body.cpf

    })
    let findCarro = await consumidor.findByPk(insereCarro.id);
    res.json(findCarro);

});

//EndPoint 1 - s
server.post('/safeway/microempreendedor/',async (req, res,next) => {
    server.use(restify.plugins.bodyParser())
    let insereCarro = await Microempreendedor.create({//ID: AUTOINCREMENT
        login: req.body.login,
        senha:req.body.senha,
        logradouro: req.body.login,
        cnpj: req.body.cnpj
    })
    let findCarro = await Microempreendedor.findByPk(insereCarro.id);
    res.json(findCarro);

});

//EndPoint 1 - s
server.post('/safeway/produtor/',async (req, res,next) => {
    server.use(restify.plugins.bodyParser())
    let insereCarro = await produtor.create({//ID: AUTOINCREMENT
        login: req.body.login,
        senha:req.body.senha
    })
    let findCarro = await produtor.findByPk(insereCarro.id);
    res.json(findCarro);

});

//EndPoint 1 - s
server.post('/safeway/entregador/',async (req, res,next) => {
    server.use(restify.plugins.bodyParser())
    let insereCarro = await entregador.create({//ID: AUTOINCREMENT
        login: req.body.login,
        senha:req.body.senha
    })
    let findCarro = await entregador.findByPk(insereCarro.id);
    res.json(findCarro);

});



server.listen(3000, () => {
    console.log("Servidor em pé")
});


