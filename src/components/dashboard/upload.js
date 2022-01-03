import { Input } from '@mui/material';
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Form,FormGroup } from 'reactstrap';

const Upload = (props) => {
  return (
    <div>
      <Card>
       
        <CardBody style={{textAlign:"center"}}>
          <CardTitle >Upload Excel Sheet (POPUP)	</CardTitle>
          <Form>
          <FormGroup >  
          
          <Input style={{marginTop:"20px"}} type="file" name="file"  />
          
        </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Upload;