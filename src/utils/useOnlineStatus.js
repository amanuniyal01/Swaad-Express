import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const[status,setstatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setstatus(false)
        })
    })
      useEffect(()=>{
        window.addEventListener("online",()=>{
            setstatus(true)
        })
    })


    return status
}
export default useOnlineStatus;