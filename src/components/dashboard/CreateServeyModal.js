import React from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Form,FormGroup,Label,Input } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger"  style={{height:"40px","width":"160px"}} onClick={this.toggle}>Servey Create</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
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
      <Button style={{backgroundColor:"green", color:"white","width":"100px", 
        height:"30px"}}>Button</Button>
        </div>
        </CardBody>
      </Card>
    </div>
            </ModalBody> 
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;