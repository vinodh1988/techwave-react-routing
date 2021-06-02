
import React from 'react';

class About extends React.Component
{
    render(){
       return(
           <h1>About Component</h1>
        )
       }

       componentWillUnmount(){
           console.log("About destroyed")
       }
}

export default About