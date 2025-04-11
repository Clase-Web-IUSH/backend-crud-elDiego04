const express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = require('./database');
const carRoutes = require('./routes/carRoutes')
const clientRoutes = require('./routes/clientRoutes')
const serviceRoutes = require('./routes/serviceRoutes')

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/cars', carRoutes)
app.use('/clients', clientRoutes)
app.use('/services', serviceRoutes)

sequelize.sync()
    .then(()=>{
        console.log("Modelos sincronizados")
    })
    .catch(err => {
        console.error("Error al sincronizar datos", err)
    })

app.get('/',(req, res)=>{
    res.send('Hola desde la API')
})


app.listen(port,()=>{
    console.log("Servidor funcionando")
})