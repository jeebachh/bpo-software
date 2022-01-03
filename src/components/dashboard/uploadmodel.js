import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Form,FormGroup,Input } from 'reactstrap';

const ModalExample =()=> {
  return(
    <div>
      
      <Popup  contentStyle={{ width: "500px" ,height:"180px"}} trigger={<button> Upload </button>} 
       position="left">
        <div><Card >
       
        <CardBody style={{textAlign:"center"}}>
          <CardTitle >Upload Excel Sheet (POPUP)	</CardTitle>
          <Form>
          <FormGroup >  
          
          <Input style={{marginTop:"20px" }} type="file" name="file"  />
          
        </FormGroup>
          </Form>
          <div style={{alignContent:"center"}}>

            <Button type='submit'>
              submit
            </Button>
          </div>
        </CardBody>
      </Card></div>
        
      </Popup>
    </div>
    )

}

export default ModalExample;
