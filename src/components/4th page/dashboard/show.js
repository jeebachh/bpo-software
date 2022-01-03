import React from 'react';
import  {Form,FormGroup,Input,Button} from "reactstrap";


const Show = () => {


    return(
       <div >


<form >
         <label >
            <span className="visually-hidden">Show</span>
        </label>
        <input style={{height:"100%"}}
            type="text"
            id="header-search"
            placeholder=" "
            name="s" 
        />
        
    </form>
       </div>
    );
    };

export default Show;