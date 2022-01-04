import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        
        <FormGroup>
          
          <Input style={{width:"500px",height:"200px"}} type="textarea" name="text" placeholder='enter feedback' id="exampleText" />
        </FormGroup>
        
      </Form>
    );
  }
}