let mongoose = require("mongoose");
let User = require("./models/user_structure");
let user_data = require("./users.json");
var mongoUrl= process.env.MONGODB_URI || "mongodb://localhost:27017/CityManagement";

async function loadData() {
  await User.deleteMany({});

  user_data.users.forEach(async data => {
    let doc = new User(data);
    await doc.save();
    console.log(`saved User name: ${data.UserName} as a ${data.Permission}`);
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
