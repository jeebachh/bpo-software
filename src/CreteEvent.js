import React, { Component } from "react";
import { Modal, Button, Header, Icon } from "semantic-ui-react";
export default class CreteEvent extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen}>
          <Modal.Header>Create Event</Modal.Header>
          <Modal.Content>
            <Modal.Description>Hi Everyone</Modal.Description>
          </Modal.Content>

          <Modal.Actions>
            <Button primary onClick={this.props.onClose}>
              Close <Icon name="right chevron" />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
