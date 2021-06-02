
import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Api= ()=>{

   async function LoadData(){
       let response=await axios.get("http://localhost:4000/people")
       console.log(response.data)
       tdata=response.data.map(x=> (
           <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.city}</td>
            </tr>
       ))
       setTdata(tdata)
    }

   async function storeData(){
       let data={id:id,name:name,city:city}
       try{
       let response = await axios.post("http://localhost:4000/people",data)
       LoadData();
       setId("")
       setName("")
       setCity("")
       }
       catch(e){
           alert("unable to store the data")
       }
   } 

    useEffect(LoadData,[])

    let [tdata,setTdata]=useState("")
    let [id,setId] =useState()
    let [name,setName]=useState()
    let [city,setCity]=useState()
 
    return(
     <div style={{overflow:"hidden"}}>
         <table>
            <tr>
                <td>Id</td>
                <td><input type="text" onChange={(e)=>setId(e.target.value)} 
                value={id}/></td>
            </tr>
            <tr>
                <td>Name</td>
                <td><input type="text" onChange={(e)=>setName(e.target.value)}
                value={name}/></td>
            </tr>
            <tr>
                <td>City</td>
                <td><input type="text" onChange={(e)=>setCity(e.target.value)}
                value={city}/></td>
            </tr>
            <tr>
                <td style={{textAlign:'center'}} colspan="2"><button className="btn btn-danger"
                onClick={storeData}>Store</button></td>
            </tr>
        </table>
    
         <table>
             <thead>
                 <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>City</th>
                </tr>
             </thead>
             <tbody>
                  {tdata}
             </tbody>
        </table>
         </div>  
    )
}

export default Api