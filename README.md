# Prerequisite:
  npm, mongoDB

# Steps:

For installing node Setup go to the folders using terminal:
then type:
  
  npm init
  
  npm install 
  
For installing express Setup:
 
  npm install express
  
For loding all the data in the Database for 1 time user
  
  node data_loader.js
  
After that you can use this code.. and Start the server by typing: npm start or node test.js

 

# APIS: 

 Open the brower and check the local host: http://localhost:8001/index.html 
 
 To check the sever is live or not: http://localhost:8001/checkLive

## For login 

 Use this Api: http://localhost:8001/login 

 Along with JSON 

 {
 
    "Name":"Aditya",
    
    "Password":"adi"
    
 } 
 
## For weatherdata to display in fronend: 

 Use this Api: http://localhost:8001/weatherdata 

## For prediction of rainfall and temp: 

 Use this Api: http://localhost:8001/predictdata 

## For getting the hisotry of weather data: 

 Use this Api: http://localhost:8001/historicalweather 

## For uploading the weather history manually: 

 Use this Api: http://localhost:8001/uploadweather

# ------------------------------------------------------

### For Heroku: 

https://git.heroku.com/citymanagement.git

### For Git: 

https://github.com/Adityasiwan007/City_Management_Bankend_Node.git

### For conneting Remote MongoDB Compass: 

mongodb+srv://Aditya:<password>@cluster0.qqq3s.mongodb.net/test



http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=53.34399&lon=-6.26719&dt="+str(t)+"&appid=yourAPI