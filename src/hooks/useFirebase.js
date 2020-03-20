import { useState, useEffect } from "react"
import {app} from '../firebase'

const useFirebase=()=>{

    const [firebaseUser,setFirebaseUser] = useState({
        user:null,
        connected:false
    })

    useEffect(()=>{

        app.auth().onAuthStateChanged(user=>{
            setFirebaseUser({
                user,
                connected: user!=null
            })
        })

    },[])

    return firebaseUser
}

export default useFirebase