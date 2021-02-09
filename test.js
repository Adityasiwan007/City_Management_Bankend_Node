const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('express').Router();
const app = express();
const port = process.env.PORT || 8001;
app.use(express.json());

var mongoUrl= process.env.MONGODB_URI || "mongodb://localhost:27017/CityManagement";

const userController=require('./controllers/userControllers')
const dataController=require('./controllers/weatherDataControllers')
const predictionController=require('./controllers/predictionController')


app.get('/checkLive',async (req,res,next)=>{
    let pro_time = "Yes, You are Live in heroku. Welcome to the City Management BackEnd Testing:)";
    res.send(pro_time);
});

app.route('/login').post(userController.Login);
app.route('/weatherdata').get(dataController.getData);
app.route('/predictdata').get(predictionController.getPrediction);

app.use('/', express.static(__dirname + '/'));
app.listen(port);

mongoose.connect(mongoUrl, { useNewUrlParser:true }, function(err) {
    if (err) {
        console.log('info', 'Couldnt connect to MongoDB:', err);
    } else {
        console.log('info', 'Connected to MongoDB');
    }
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error(`Error while connecting to DB: ${error.message}`);
});
db.once('open', () => {
  console.log('CityManagement DB connected successfully!');
});

