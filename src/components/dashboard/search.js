import React from 'react';
import  {Form,FormGroup,Input,Button} from "reactstrap";


const SearchBar = () => {


    return(
        <div style={{display: 'flex', justifyContent: 'right'}} className="float-right" >
        <form action="/" method="get">
        
        <input style={{height:"100%" ,"width":"300px"}}
            type="text"
            id="header-search"
            placeholder=" "
            name="s" 
        />
        <button  style={{height:"100%"}} type="submit">Search</button>
    </form>
    </div>
    );
    };

export default SearchBar;