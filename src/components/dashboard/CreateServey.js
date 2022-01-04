import { height } from '@mui/system';
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Form,FormGroup,Label,Input } from 'reactstrap';

const Create = (props) => {
  return (
    <div>
      <Card>
    
        <CardBody>
          <CardTitle style={{fontSize:"30px"}}>Create Sevey</CardTitle>
          <Form style={{ display:"flex" ,justifyContent:"center"}}>
        <FormGroup style={{alignContent:"center"}}>
          <Label for="exampleEmail" > Servey Title </Label>
          <Input style={{height:"80px","width":"400px"}} 
          type="text" name="email" id="exampleEmail"
           placeholder=" enter servey title" />
        </FormGroup>
        
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",marginTop:"0.8rem"
        }}
      >
      <Button style={{backgroundColor:"#4CAF50", color:"white","width":"100px", 
        height:"30px"}}>Button</Button>
        </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Create