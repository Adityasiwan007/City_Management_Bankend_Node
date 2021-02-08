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

 open the brower and check the local host: http://localhost:8001/index.html 
 
 To check the sever is live or not: http://localhost:8001/checkLive

## For login 

 use this Api: http://localhost:8001/login 

Along with JSON 

 {
 
    "Name":"Aditya",
    
    "Password":"adi"
    
 } 
 
## For weatherdata to display in fronend: 

 use this Api: http://localhost:8001/weatherdata 

## For prediction of rainfall and temp: 

 use this Api: http://localhost:8001/predictdata 



