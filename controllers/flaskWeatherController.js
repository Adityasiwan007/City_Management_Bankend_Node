const fetch = require('node-fetch');
const History = require('../models/wData_structure');
var now = new Date();
var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()-19);
var endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1);
var timestamp = startOfDay / 1000;
const schedule = require ('node-schedule');
const request = require('request');

let JSON1
const options = {
    method: 'GET',
    url: 'https://visual-crossing-weather.p.rapidapi.com/history',
    qs: {
      startDateTime: startOfDay.toISOString().slice(0,19),
      aggregateHours: '24',
      location: "53.34399,-6.26719",
      endDateTime: endOfDay.toISOString().slice(0,19),
      unitGroup: 'us',
      dayStartTime: '8:00:00',
      contentType: 'json',
      dayEndTime: '17:00:00',
      shortColumnNames: '0'
    },
    headers: {
      'x-rapidapi-key': '6b3c33edeamsh25ce68ad615ef37p11bf25jsn321d58b130e6',
      'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
      useQueryString: true
    }
  };
  
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
      //JSON1=body;
      JSON1=JSON.parse(body)
  });



let url = "http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=53.34399&lon=-6.26719&dt="+timestamp+"&appid=6479fa080a30d358d9e38b388fc8c697";
let settings = { method: "Get" };
let JSON2
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        JSON2=json
    });





    

schedule.scheduleJob('0 0 * * *', () => { 
    History.findOne({ 'data.current.dt': timestamp },async function (err, his) {
        if (err) {
            console.log('error', 'Weather Data Creation failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (his == null) {
            var x={date:startOfDay,data:JSON2}
            History.create(x,function(err,data){
                if (err){
                         console.log('error','User Create failed',user); 
                         res.json({success: false, message: 'User Creation failed failed'});
                         return;
                       }
                console.log('info','Data For timestamp '+timestamp+' Created');
                res.json({'success':true,'message':'Data For timestamp '+timestamp+' Created','data':JSON2});
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
})

exports.getHistory = async (req, res) => {

    History.find({ },async function (err, his) {
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
            his.sort(function(a, b){
                return a.datetime - b.datetime;
            });
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


            var x={date:startOfDay,data:JSON2}
            History.create(x,function(err,data){
                if (err){
                         console.log('error','User Create failed',user); 
                         res.json({success: false, message: 'User Creation failed failed'});
                         return;
                       }
                console.log('info','Data For timestamp '+timestamp+' Created');
                res.json({'success':true,'message':'Data For timestamp '+timestamp+' Created','data':JSON2});
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