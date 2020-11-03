import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routes from './src/routes/crmRoutes'

const app = express();
const PORT = 3000;

routes(app);

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb', {
    /*useMongoClient: true*/
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get(
    '/', (req, res) => {
        res.send(`Server running on port ${PORT}`)
    }
)

app.listen(PORT, () => 
    console.log(`votre serveur est sur le port ${PORT}`)    
)