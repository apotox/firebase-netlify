const {admin} = require('./firebase')

const VerifyToken =async (idToken)=>{

    try {

        let decodedToken = await admin.auth().verifyIdToken(idToken)
        return decodedToken

    }catch(err){
        console.log("invalid token ",err.message)
        return null
    }
}

module.exports = {
    VerifyToken
}