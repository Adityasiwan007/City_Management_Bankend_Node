let mongoose = require("mongoose");
let User = require("./models/user_structure");
let user_data = require("./users.json");
let Weath = require("./models/wData_structure");
let Weath_data = require("./weatherData.json");
let Event = require("./models/event_structure");
let Event_data = require("./eventData.json");
var mongoUrl= process.env.MONGODB_URI || "mongodb://localhost:27017/CityManagement";

async function loadData() {
  await User.deleteMany({});
  await Weath.deleteMany({});
  await Event.deleteMany({});

  user_data.users.forEach(async data => {
    let doc = new User(data);
    await doc.save();
    console.log(`saved User name: ${data.UserName} as a ${data.Permission}`);
  });

  Weath_data.wData.forEach(async data => {
    let doc1 = new Weath(data);
    await doc1.save();
    console.log(`saved weather for date : ${data.datetimeStr} `);
  });

  Event_data.eventData.forEach(async data => {
    let doc2 = new Event(data);
    await doc2.save();
    console.log(`saved Event Id: ${data}`);
  });
}

mongoose.connect(
  mongoUrl,
  { useNewUrlParser:true },
  function(err) {
    if (err) {
      console.log("info", "Couldnt connect to MongoDB:", err);
    } else {
      console.log("info", "Connected to MongoDB");
      loadData();
    }
  }
);
