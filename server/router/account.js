var fs = require('fs');
const path = require('path');

module.exports = function(req, res){

    let userobj = {
        "username": req.body.username,
        "birthdate": req.body.userbirthdate,
        "useremail": req.body.useremail,
        "userage": req.body.userage,
        "uservalid": req.body.uservalid
    }

    let uArray = [];

    fs.readFile(__dirname+'/data/extendedUsers.json', 'utf-8', function(err, data){

        if (err) throw err;
        uArray = JSON.parse(data);
        uArray.push(userobj);

        uArrayjson = JSON.stringify(uArray);
        fs.writeFile(__dirname+'/data/extendedUsers.json', uArrayjson, 'utf-8', function(err){
            if (err) throw err;
            res.send(uArray);
        })
    })
}