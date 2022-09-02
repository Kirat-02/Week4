var fs = require('fs');

console.log('postlogin reached');


module.exports = function(req, res){
    var u = req.body.username;
    var p = req.body.pwd;
    c = u + p;
    
  
    fs.readFile(__dirname+ '/data/users.json', 'utf-8', function(err, data){
        if (err) throw err;

        let userArray = JSON.parse(data);
    
        let i = userArray.findIndex(user =>
            ((user.username == u) && (user.pwd == p)));

            if(i == -1){
                res.send({"ok": false})
            } else {
                res.send({"ok": true, "user": userArray[i]})
            }
        
    })
       
   
}