import React from "react";
import Nav from './nav';

function StudentDesc(){
    return (
        <>
            <Nav/>
            <form>
                <input type="text" placeholder="Name" />  
                <input type="number" placeholder="Age" /><br/>  
                <input type="text" placeholder="Course" />  
                <input type="text" placeholder="Batch" /> 
                <br/> 
                <button>Submit</button>
                <button className="cancel">Cancel</button> 
            </form>
        </>
    );
}

export default StudentDesc;