let mysql = require ('mysql');

let connection = mysql.createConnection({
    host: 	'mysql-45728-0.cloudclusters.net',
    user: 	'admin',
    password:   '3YgaC2ft',
    database:   'db_express_api',
    port:       '18750'
});

connection.connect(function(error){
   if(!error){
     console.log(error);
   }else{
     console.log('Connection Success');
  }
})

module.exports = connection;
