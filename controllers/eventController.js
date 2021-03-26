const fetch = require('node-fetch');
const eventid = require('../models/event_structure');
var now = new Date();
var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()-19);
var endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1);
var timestamp = startOfDay / 1000;
const schedule = require ('node-schedule');
const request = require('request');


exports.getData = async (req, res) => {

    eventid.findOne({ },async function (err, data) {
        if (err) {
            console.log('error', 'Weather Data Creation failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (data == null) {
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
                message: "Showing all the event ID",
                data:data.ids
            })
        }
    });

  };




  exports.enterData = async (req, res) => {
      
    let newId=req.query.id
    eventid.findOne({ },async function (err, data) {
        let ids=data.ids
        if (err) {
            console.log('error', 'Weather Data Creation failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (ids.includes(newId)) {
            console.log('info','Already available');

            return res.json({
                success:false,
                message: "This Id is already available in Db "+newId
            })
            
        } 
        else {
            data.ids.push(parseInt(newId))
            await data.save()
            console.log('info','New Id '+newId+' is Created');
            return res.json({
                success:true,
                message: "New Id "+newId+" is Created",
                data: data.ids
            })
        }
    });

  };

  exports.deleteData = async (req, res) => {
      
    let newId=req.query.id
    eventid.findOne({ },async function (err, data) {
        let ids=data.ids
        if (err) {
            console.log('error', 'Weather Data Creation failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (ids.includes(newId)) {
            data.ids =  data.ids.filter(id=>id != newId)
            await data.save()
            console.log('info','New Id '+newId+' is removed now');
            return res.json({
                success:true,
                message: "New Id "+newId+" is removed now",
                data: data.ids
            })
            
        } 
        else {
            

            return res.json({
                success:false,
                message: "The Id "+newId+" is already not available in the db"
            })
        }
    });

  };