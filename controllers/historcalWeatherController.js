const fetch = require('node-fetch');
const History = require('../models/history_structure');
const User = require('../models/user_structure');
var now = new Date();
var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var timestamp = startOfDay / 1000;

let url = "http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=53.34399&lon=-6.26719&dt="+timestamp+"&appid=6479fa080a30d358d9e38b388fc8c697";
let settings = { method: "Get" };
let JSON
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        JSON=json
    });




exports.getHistory = async (req, res) => {

    User.find({ },async function (err, his) {
        if (err) {
            console.log('error', 'Weather Data Creation failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (his == null) {
            console.log('info','Empty Dataset for weather dataset');

            return res.json({
                success:false,
                message: "Empty Dataset for weather dataset"
            })
        } 
        else {
            console.log('info','Showing all the weather history');
            return res.json({
                success:true,
                message: "Showing all the weather history",
                data:his
            })
        }
    });

  };

  exports.enterHistory = async (req, res) => {

    History.findOne({ 'data.current.dt': timestamp },async function (err, his) {
        if (err) {
            console.log('error', 'Weather Data Creation failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (his == null) {


            var x={date:startOfDay,data:JSON}
            History.create(x,function(err,data){
                if (err){
                         console.log('error','User Create failed',user); 
                         res.json({success: false, message: 'User Creation failed failed'});
                         return;
                       }
                console.log('info','Data For timestamp '+timestamp+' Created');
                res.json({'success':true,'message':'Data For timestamp '+timestamp+' Created','data':JSON});
                return;
            });
            
        } 
        else {
            console.log('info','Timestamp '+timestamp+' is already Created');
            return res.json({
                success:false,
                message: "Already available for the timestamp: "+his.data.current.dt
            })
        }
    });

  };