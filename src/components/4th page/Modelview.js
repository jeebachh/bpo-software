import React, { Component } from "react";
import { Modal, Form, Button, Input, Icon } from "semantic-ui-react";
class Modalview extends Component {
  render() {
    return (
      <Modal>
        <Modal.Header trigger={<Button>Hiasdfghjkl;'</Button>}>
          Create Event
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Last name"
                placeholder="Last name"
              />
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Proceed <Icon name="right chevron" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default Modalview;
