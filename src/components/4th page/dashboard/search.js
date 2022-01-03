import React from 'react';
import  {Form,FormGroup,Input,Button} from "reactstrap";


const SearchBar = () => {


    return(
        <div style={{display: 'flex', justifyContent: 'right'}} className="float-right" >
        <form action="/" method="get">
        <label style={{marginRight:"0.5rem"}}>
            Search
        </label>
        <input style={{height:"100%" ,"width":"300px"}}
            type="text"
            id="header-search"
            placeholder=" "
            name="s" 
        />
        <button    style={{height:"100%","width":"70px",background:"#ffff00"}} type="submit">Details</button>
    </form>
    </div>
    );
    };

export default SearchBar;