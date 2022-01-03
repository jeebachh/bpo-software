import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Form,FormGroup,Input } from 'reactstrap';
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
        <Button color="danger" onClick={this.toggle}>Upload</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
          <ModalBody>
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

          </ModalBody>
          
        </Modal>
      </div>
    );
  }
}

export default ModalExample;