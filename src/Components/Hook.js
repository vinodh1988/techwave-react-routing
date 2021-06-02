import React, {useState,useEffect} from 'react'


const Hook=()=>{
    /*
    function modifyData(){
        if(name==="New Name")
          setName("India")
        else
        setName("New Name");
    }*/
    useEffect(
       ()=>{console.log(name+ " is printed")},[]

    )

    useEffect(
        ()=>console.log("Updated " ,name)
    )

    let [name,setName]= useState("India")
 
    return(
        <h1>
            State:: {name}
            <button onClick={()=>name==="India"?setName("china"):setName("India")}>Change</button>
        </h1>
    )
}

export default Hook

//<button onClick={modifyData}>change</button>