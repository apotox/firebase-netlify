var admin = require("firebase-admin");
//const path = require("path");
var serviceAccount = 

if(admin.apps.length == 0){ //check if admin is not initialized

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 
    });
}



module.exports = {
    admin
}