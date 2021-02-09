const User = require('../models/user_structure');
var encString="2s7fjv-0sj-s3jspemdpfjgksjddjs391@3dfsqpmxhd&%s5wa8et93mgf-shsu";
var jwt    = require('jsonwebtoken'); 

exports.Login = async (req, res) => {
    const {
        Name, Password,
    } = req.body;
    // let pro = `Retrun Name: `+Name+' ID: '+ID;
    // res.send(pro);
    User.findOne({ 'UserName': Name },async function (err, customer) {
        if (err) {
            console.log('error', 'User Creation failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (customer == null) {
            return res.json({success:false,message:'No User found. Check with login',code:404}) 
        } 
        else {
            if(customer.Password==Password)
            {
                var token = jwt.sign({"_doc":{"userName":customer.UserName,
                                      "password":customer.Password,
                                      "UserID":customer.UserID}}, encString, {
                                      expiresIn: "200 days" // expires in 48 hours
                                      });
                return res.json({
                    success:true,
                    message: "Login Successfull.. Welcome",
                    Token:token,
                    object:customer
                })
            }
            return res.json({
                success:false,
                message: "You have entered wrong password",
                code:404
            })
        }
    });
  };

  